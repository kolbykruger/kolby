<template>
    <section class="foreward">
        <div class="container">
            <div class="foreward-image" ref="forewardImage">
                <!-- <prismic-image :field="document.data.Cover" /> -->
                <Picture :field="document.data.Cover" />
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

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
    computed: {
        initialLoad() {
            return this.$store.state.loading.initial
        },
    },
    mounted() {
        gsap.registerPlugin(CustomEase)
        gsap.registerPlugin(ScrollTrigger)
        const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        const image = this.$refs.forewardImage
        const i = image.querySelector('img')
        const timeline = gsap.timeline()
        const loadType = gsap.set(image, {
            scale: 1.5,
            yPercent: 100,
        })

        this.$router.onReady(() => {
            this.$nextTick(() => {
                setTimeout(
                    () => {
                        timeline
                            .to(image, {
                                yPercent: 8,
                                duration: 1.2,
                                ease: 'expo.out',
                            })
                            .to(image, 0.75, {
                                scale: 1,
                                delay: -0.3,
                                ease: ease,
                            })
                            .to(i, {
                                scrollTrigger: {
                                    trigger: image,
                                    start: 'top bottom',
                                    scrub: true,
                                },
                                yPercent: 18,
                            })
                    },
                    this.initialLoad ? 2000 : 1200
                ) // page animation transition length
            })
        })
    },
}
</script>

<style lang="scss">
.foreward {
    position: relative;
    // margin-bottom: 20vh;
    aspect-ratio: 1.77778 / 1;

    &-image {
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
