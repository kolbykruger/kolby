<template>
    <section class="convoke">
        <div class="container">
            <div class="convoke-item">
                <prismic-rich-text :field="slice.primary.title" class="convoke-item-title" />
                <Decor />
                <prismic-rich-text :field="slice.primary.description" class="convoke-item-description" />
                <button
                    :href="`mailto:${contact}`"
                    data-cursor="xl"
                    data-magnetic
                    data-stick
                    class="convoke-item-spoiler"
                    @click="copyEmail"
                    @mouseenter="revealEmail"
                >
                    <span class="convoke-item-spoiler-passive">Say hello</span>
                    <span class="convoke-item-spoiler-active">{{ contact }}</span>
                </button>
                <ShapeCollection
                    :collection="{
                        top: '0',
                        left: '50%',
                        width: '177px',
                        height: '201px',
                        transform: 'translate(-50%, -65%)',
                    }"
                    :fit="false"
                    :shapes="shapes"
                />
            </div>
        </div>
        <canvas ref="canvas"></canvas>
    </section>
</template>

<script>
const confetti = require('canvas-confetti')
import ShapeCollection from '~/components/Shapes/ShapeCollection.vue'
import { ConvokeShapes } from '~/mixins/shapes/ConvokeShapes.js'

export default {
    name: 'Convoke',
    components: {
        ShapeCollection,
    },
    mixins: [ConvokeShapes],
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    data() {
        return {
            contact: null,
        }
    },
    computed: {
        email() {
            return this.$store.state.contact.email
        },
    },
    methods: {
        revealEmail() {
            this.contact = this.email
        },
        copyEmail(e) {
            const el = document.createElement('textarea')
            el.value = this.email
            el.setAttribute('readonly', '')
            el.classList.add('visually-hidden')
            e.target.appendChild(el)
            el.select()
            document.execCommand('copy')
            e.target.removeChild(el)
            this.contact = 'Copied!'
            this.celebrate()
            setTimeout(() => {
                this.contact = this.email
            }, 3000)
        },
        celebrate() {
            const canvas = this.$refs.canvas
            const c = confetti.create(canvas, {
                resize: true,
            })
            c({
                particleCount: 100,
                spread: 160,
            })
        },
    },
    mounted() {
        if (window.matchMedia('(pointer: coarse)').matches) {
            this.contact = this.email
        }
    },
}
</script>

<style lang="scss">
.convoke {
    position: relative;
    text-align: center;
    margin-top: 18vh;
    margin-bottom: 18vh;

    .container {
        @include mq('tablet') {
            max-width: 80vw;
            margin: 0 auto;
        }
    }

    &-item {
        position: relative;
        padding: 6vh 6vw;
        border: 1px solid c('base-4');
        border-radius: 0.375em;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: c('base-4');
            opacity: 0.1;
            z-index: -1;
            pointer-events: none;
        }

        &-title {
            h1,
            h2,
            h3 {
                margin-top: 0.75em;
                font-family: $font-1;
            }
        }

        &-description {
            margin-top: 2em;
        }

        &-spoiler {
            position: relative;
            display: grid;
            place-content: center;
            text-align: center;
            width: 100%;
            min-height: 4em;
            max-width: 8em;
            margin: 1.5em auto 0;

            &::before {
                content: '';
                display: block;
                padding-top: 100%;
            }

            &-active,
            &-passive {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: grid;
                place-content: center;
                transition: 260ms ease;
            }

            &-active {
                opacity: 0;
                transform: translateY(10%);
                color: c('primary-base');
            }

            &-passive {
                @include fs-lg;
                color: c('base-0');
            }

            &:hover,
            &:focus {
                .convoke-item-spoiler {
                    &-passive {
                        opacity: 0;
                        transform: translateY(-10%);
                    }

                    &-active {
                        opacity: 1;
                        transform: translateY(0%);
                    }
                }
            }
        }
    }

    canvas {
        width: 100%;
        height: 100vh;
        z-index: -1;
    }
}
</style>
