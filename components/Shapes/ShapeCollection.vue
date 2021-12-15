<template>
    <div class="shapes">
        <div class="shape-collection" :style="collection">
            <ShapeCollectionItem v-for="(shape, index) in shapes" :key="index" :shape="shape" :index="index" />
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import ShapeCollectionItem from '~/components/Shapes/ShapeCollectionItem.vue'

export default {
    name: 'ShapeCollection',
    components: {
        ShapeCollectionItem,
    },
    props: {
        collection: {
            type: Object,
            default: () => {
                return {
                    top: '-100px',
                    left: '320px',
                    width: '177px',
                    height: '201px',
                }
            },
        },
        shapes: {
            type: Array,
            default: () => {
                return [
                    {
                        geometry: 'square',
                        style: {
                            top: '36px',
                            left: '49px',
                            width: '26px',
                            height: '26px',
                            transform: 'rotate(-8deg)',
                            background: '#fff',
                            border: '1px solid #fff',
                        },
                        animation: {
                            duration: 4000,
                            delay: 1250,
                            keyframes: [
                                { transform: 'translate(12px, 24px) rotate(0)' },
                                { transform: 'translate(0,0)' },
                            ],
                        },
                    },
                ]
            },
        },
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set('.shape-collection-geometry', {
            scale: 0,
        })

        ScrollTrigger.batch('.shape-collection-geometry', {
            start: 'top 80%',
            onEnter: batch => {
                gsap.to(batch, {
                    scale: 1,
                    delay: 0.5,
                    stagger: 0.05,
                    duration: 2,
                    ease: 'elastic.out(1, 0.3)',
                })
            },
        })
    },
}
</script>

<style lang="scss">
.shapes {
    position: relative;
}
.shape-collection {
    position: absolute;
}
</style>
