<template>
    <section class="panels" v-if="slice" ref="panels">
        <div class="leafs" :data-count="slice.items.length">
                <Item
                    v-for="(panel, index) in slice.items"
                    :key="index"
                    :item="panel"
                    :index="index"
                    :width="width"
                    :count="slice.items.length"
                    :selected="selected"
                    v-on:update="updateSelected"
                />
                </div>
            </div>
    </section>
</template>

<script>
import Item from './item.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'

export default {
    name: 'Panels',
    components: {
        Item
    },
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
            selected: 0,
        }
    },
    computed: {
        width() {
            return 100 - 100 / this.slice.items.length
        },
    },
    methods: {
        updateSelected(index) {
            this.selected = index
        }
    },
    mounted() {
        gsap.registerPlugin(CustomEase)
        gsap.registerPlugin(ScrollTrigger)
        const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        const panels = this.$refs.panels

        gsap.set(panels.querySelectorAll('.leaf .container'), {
            alpha: 0,
            yPercent: -50
        })

        ScrollTrigger.batch(panels, {
            start: 'top 90%',
            onEnter: batch => {
                batch.forEach((section, i) => {
                    gsap.to(section.querySelectorAll('.leaf .container'), {
                        yPercent: 0,
                        alpha: 1,
                        ease: ease,
                        delay: i * 0.2,
                        stagger: 0.04
                    })
                })
            }
        })
    }
}
</script>

<style lang="scss">
.panels {
    min-height: 100vh;
    margin-top: 12vh;
    margin-bottom: 12vh;

    .leafs {
        display: flex;
        border-top: 1px solid c('base-4');
        border-bottom: 1px solid c('base-4');

        @include mq('tablet', 'max-width') {
            flex-direction: column;
        }

        &[data-count="2"] {
            .leaf {
                width: 67%;
            }
        }

        &[data-count="3"] {
            .leaf {
                width: 60%;
            }
        }

        &[data-count="4"] {
            .leaf {
                width: 57%;
            }
        }

        &[data-count="5"] {
            .leaf {
                width: 55.55%;
            }
        }

        &[data-count="6"] {
            .leaf {
                width: 54.55%;
            }
        }
    }
}
</style>
