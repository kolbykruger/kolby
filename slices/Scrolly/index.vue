<template>
    <section class="scrolly">
        <div class="container">
            <div class="section-heading">
                <prismic-rich-text v-if="slice.primary.title" :field="slice.primary.title" class="title" />
                <prismic-rich-text v-if="slice.primary.title" :field="slice.primary.description" />
            </div>

            <div class="scrolly-container" :style="{ '--count': slice.items.length }">
                <div class="scrolly-items" :style="{ '--count': slice.items.length }">
                    <div class="scrolly-images">
                        <div class="scrolly-images-image" v-for="(item, index) in slice.items" :key="index">
                            <!-- <prismic-image :field="item.Image" /> -->
                            <Picture :field="item.Image" :noise="true" />
                        </div>
                    </div>

                    <div class="scrolly-content">
                        <div class="scrolly-content-item" v-for="(item, index) in slice.items" :key="index">
                            <div class="scrolly-content-image">
                                <Picture :field="item.Image" />
                            </div>
                            <prismic-rich-text class="scrolly-content-text" :field="item.Content" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { InertiaPlugin } from 'gsap/dist/InertiaPlugin'

export default {
    name: 'Scrolly',
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
            isMobile: true,
            items: undefined,
            images: undefined,
        }
    },
    methods: {
        scrollyInit() {
            this.items = document.querySelector('.scrolly-images')
            this.images = this.isMobile
                ? gsap.utils.toArray('.scrolly-content-item')
                : gsap.utils.toArray('.scrolly-images .scrolly-images-image')
            this.isMobile ? this.mobileAnimations() : this.desktopAnimations()
        },
        mobileAnimations() {
            this.images.forEach(item => {
                const fig = item.querySelector('figure')
                let proxy = { skew: 0 }
                let clamp = gsap.utils.clamp(-5, 5)
                ScrollTrigger.create({
                    onUpdate: self => {
                        let skew = clamp(self.getVelocity() / -300)
                        if (Math.abs(skew) > Math.abs(proxy.skew)) {
                            proxy.skew = skew
                            gsap.to(proxy, {
                                inertia: {
                                    x: 50,
                                    y: 50,
                                },
                                skew: 0,
                                duration: 1.5,
                                ease: 'power3.out',
                                overwrite: true,
                                onUpdate: () => {
                                    gsap.to(fig, {
                                        skewY: proxy.skew + 'deg',
                                        duration: 0.05,
                                        ease: 'power3.out',
                                    })
                                },
                            })
                        }
                    },
                })
            })
        },
        desktopAnimations() {
            gsap.to(this.items, {
                scrollTrigger: {
                    pin: this.items,
                    end: () => '+=' + this.images.length * window.innerHeight,
                    pinSpacing: true,
                },
            })

            this.images.forEach((item, i) => {
                const fig = item.querySelector('figure')
                // const img = item.querySelector('img')
                let proxy = { skew: 0 }
                let clamp = gsap.utils.clamp(-3, 3)
                // let skewSetter = gsap.quickSetter(fig, 'skewY', 'deg')
                // const img = item.querySelector('img')
                gsap.set(item, {
                    y: 0,
                    alpha: 0,
                })
                gsap.set(fig, {
                    force3D: true,
                })
                gsap.to(item, 0.66, {
                    scrollTrigger: {
                        trigger: item,
                        scrub: true,
                        toggleActions: 'play play play play',
                        start: () => '+=' + window.innerHeight * i + ' center',
                        end: () => '+=' + window.innerHeight,
                        onEnter: direction => {
                            this.onImageEnter({ item, fig, direction })
                        },
                        onEnterBack: direction => {
                            this.onImageEnter({ item, fig, direction })
                        },
                        onLeave: direction => {
                            this.onImageLeave({ item, fig, direction })
                        },
                        onLeaveBack: direction => {
                            this.onImageLeave({ item, fig, direction })
                        },
                        onUpdate: self => {
                            let skew = clamp(self.getVelocity() / -300)

                            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                                proxy.skew = skew
                                gsap.to(proxy, {
                                    inertia: {
                                        x: 50,
                                        y: 50,
                                    },
                                    skew: 0,
                                    duration: 1.5,
                                    ease: 'power3.out',
                                    overwrite: true,
                                    onUpdate: () => {
                                        // skewSetter(proxy.skew)
                                        gsap.to(fig, {
                                            skewY: proxy.skew + 'deg',
                                            duration: 0.05,
                                            ease: 'power3.out',
                                        })
                                    },
                                })
                            }
                        },
                    },
                })
            })
        },
        onImageEnter(props) {
            // gsap.to(props.item, {
            //     // alpha: 1,
            //     ease: 'power3.ease',
            //     duration: 0.35,
            // })
            gsap.set(props.item, {
                yPercent: props.direction == 1 ? -100 : 100,
                alpha: 1,
            })
            gsap.to(props.item, {
                yPercent: 0,
                alpha: 1,
            })
        },
        onImageLeave(props) {
            // gsap.to(props.item, {
            //     // alpha: 0,
            //     ease: 'none',
            //     duration: 0.2,
            // })
            gsap.to(props.item, {
                yPercent: props.direction == 1 ? 100 : -100,
                alpha: 0,
            })
        },
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(InertiaPlugin)

        this.isMobile = window.matchMedia('(max-width: 1024px)').matches

        this.scrollyInit()
    },
}
</script>

<style lang="scss">
.scrolly {
    .container {
        padding: 0;
    }

    &-container {
        @include mq('laptop-small') {
            max-height: calc(var(--count) * 100vh + 50vh);
            overflow: hidden;
        }
    }

    &-items {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    &-images {
        display: none;

        @include mq('laptop-small') {
            display: flex;
            flex-direction: row;
            height: 100vh;
            width: 100%;
            max-width: 50%;
            justify-content: space-between;
            align-items: flex-start;

            &-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                // padding: 5vh 5vw;
                // opacity: 0;
                // transform: scale(0.8);
            }

            img {
                width: 100%;
                height: auto;
                // transform: scale(1.1);
            }
        }
    }

    &-content {
        position: relative;

        @include mq('laptop-small') {
            height: 100vh;
            width: 50%;

            &-image {
                display: none;
            }

            &-item {
                width: 100%;
                max-width: 42em;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                margin: 0 auto;
                margin-bottom: 0;

                div {
                    transform: translateY(50%);
                }
            }

            &-text {
                padding: 0 !important;
            }
        }

        &-item {
            margin-bottom: 6vh;
        }

        &-text {
            @include content-spacing;
        }
    }
}
</style>
