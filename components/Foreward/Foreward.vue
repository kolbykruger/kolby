<template>
    <section class="foreward">
        <div class="container">
            <div class="foreward-text">
                <h2 ref="forewardText">
                    <span>Kolby</span>
                    <span>Kruger</span>
                </h2>
            </div>
        </div>
        <div class="foreward-image" ref="forewardImage">
            <Picture :field="document.data.Cover" :noise="true" />
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'

import NameTitle from '@/components/Pageheading/NameTitle.vue'

export default {
    name: 'Foreward',
    props: {
        document: {
            type: Object,
            default: () => ({
                data: {
                    Cover: {
                        dimensions: {
                            width: 1916,
                            height: 1161,
                        },
                        alt: 'placeholder image',
                        url: 'https://images.unsplash.com/photo-1638911022787-1e1edc253c70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80',
                    },
                },
            }),
        },
    },
    components: {
        NameTitle,
    },
    computed: {
        initialLoad() {
            return this.$store.state.loading.initial
        },
    },
    mounted() {
        gsap.registerPlugin(SplitText)
        gsap.registerPlugin(CustomEase)
        gsap.registerPlugin(ScrollTrigger)
        const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        const image = this.$refs.forewardImage
        const imageElem = image.querySelector('figure')
        const text = this.$refs.forewardText
        const timeline = gsap.timeline()

        const splitText = new SplitText(text, {
            type: 'lines,words,chars',
            charsClass: 'foreward-text-char',
            wordsClass: 'foreward-text-word',
            linesClass: 'foreward-text-line',
        })

        timeline
            .set(image, {
                yPercent: 100,
            })
            .set(splitText.chars, {
                yPercent: 150,
                rotateX: 110,
                d: 1300,
            })

        this.$router.onReady(() => {
            this.$nextTick(() => {
                setTimeout(
                    () => {
                        timeline
                            .to(image, {
                                yPercent: 0,
                                duration: 1.2,
                                ease: 'expo.out',
                            })
                            .to(image, {
                                clipPath: 'polygon(42% 0, 90% 0, 90% 100%, 42% 100%)',
                                duration: 0.95,
                                delay: -0.2,
                                ease: 'expo.out',
                            })
                            .staggerTo(
                                splitText.chars,
                                0.75,
                                {
                                    yPercent: 0,
                                    rotateX: 0,
                                    d: 0,
                                    ease: ease,
                                    delay: -0.65,
                                },
                                0.02
                            )
                        // .to(imageElem, {
                        //     scrollTrigger: {
                        //         trigger: image,
                        //         start: 'top bottom',
                        //         scrub: true,
                        //     },
                        //     y: `${image.getBoundingClientRect().height}px`,
                        // })
                    },
                    this.initialLoad ? 2000 : 1200
                    // page animation transition length
                )
            })
        })
    },
}
</script>

<style lang="scss">
.foreward {
    position: relative;
    transform: none;
    // aspect-ratio: 1.77778 / 1;

    @include mq('tablet') {
        transform: translateY(calc(var(--offset) * -1));
    }

    .container {
        position: absolute;
        z-index: 2;

        @include mq('tablet') {
            min-height: 100vh;
        }
    }

    &-text {
        display: flex;
        align-items: center;

        @include mq('tablet') {
            min-height: 100vh;
        }

        h2 {
            @include fs-max;
            text-transform: uppercase;
        }
        span {
            display: block;
        }

        &-line {
            overflow: hidden;
        }

        &-word {
            perspective: 1000px;
            transform-style: preserve-3d;
        }
    }

    &-image {
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

        @include mq('tablet') {
            min-height: 100vh;
        }

        // Go to this one
        //clip-path: polygon(38% 0, 91% 0, 91% 100%, 38% 100%);

        figure {
            width: 100vw;

            @include mq('tablet') {
                height: 100vh;
            }
        }

        picture {
            @include mq('laptop-large') {
                position: relative;

                &::before {
                    @include image-noise;
                }
            }
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            opacity: 0.9;
        }
    }
}
</style>
