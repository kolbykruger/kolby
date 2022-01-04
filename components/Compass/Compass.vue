<template>
    <div data-stick data-cursor="xxl" class="compass">
        <canvas ref="canvas"></canvas>
        <button @click="copyEmail" @mouseenter="revealEmail">
            <div class="compass-spinner">
                <CompassVector />
            </div>
            <div data-magnetic data-stick class="compass-spoiler">
                <span class="compass-spoiler-passive">Say hello</span>
                <span class="compass-spoiler-active">{{ contact }}</span>
            </div>
        </button>
    </div>
</template>

<script>
const confetti = require('canvas-confetti')
import CompassVector from '@/assets/svg/compass/compass.svg?inline'

export default {
    name: 'Compass',
    components: {
        CompassVector,
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
        // Show email on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) {
            this.contact = this.email
        }
    },
}
</script>

<style lang="scss">
.compass {
    position: relative;
    width: 100%;
    margin: 0 auto;
    clip-path: circle(50% at 50% 50%);
    overflow: hidden;
    display: none;

    @include mq('tablet') {
        display: block;
        max-width: 20vw;
        transform: translateY(25%);
        margin-left: auto;
        margin-right: 0;
    }

    button {
        display: block;
        text-decoration: none;
        color: inherit;
        width: 100%;
        height: 100%;

        &:hover,
        &:focus {
            .compass {
                &-spinner {
                    // animation-play-state: paused;
                }
                &-spoiler {
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

    &-spinner {
        transform-origin: center center;
        will-change: transform;
        animation: compass-spinner 12s linear infinite;

        svg {
            path {
                &:not(.st0) {
                    fill: c('base-0');
                }
                &.st0 {
                    fill: none;
                    stroke: c('base-0');
                    stroke-width: 3;
                    stroke-miterlimit: 10;
                }
            }
        }

        @keyframes compass-spinner {
            to {
                transform: rotate(360deg);
            }
        }
    }

    &-spoiler {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        place-content: center;
        font-size: 1.5vw;
        text-align: center;

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
            font-size: 3vw;
            color: c('base-0');
        }
    }

    canvas {
        width: 100%;
        height: 100vh;
        z-index: -1;
    }
}
</style>
