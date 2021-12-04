<template>
    <section class="scrolly">
        <div class="container">
            <div class="section-heading">
                <prismic-rich-text v-if="slice.primary.title" :field="slice.primary.title" class="title" />
                <prismic-rich-text v-if="slice.primary.title" :field="slice.primary.description" />
            </div>

            <div class="scrolly-container">
                <div class="scrolly-items" :style="{ '--count': slice.items.length }">
                    <div class="scrolly-images">
                        <div class="scrolly-images-image" v-for="(item, index) in slice.items" :key="index">
                            <prismic-image :field="item.Image" />
                        </div>
                    </div>

                    <div class="scrolly-content">
                        <div class="scrolly-content-item" v-for="(item, index) in slice.items" :key="index">
                            <prismic-rich-text :field="item.Content" />
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
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

        const items = document.querySelector('.scrolly-images')
        const images = gsap.utils.toArray('.scrolly-images .scrolly-images-image')

        gsap.to(items, {
            scrollTrigger: {
                pin: items,
                end: () => '+=' + images.length * window.innerHeight,
                pinSpacing: true,
            },
        })

        images.forEach((item, i) => {
            gsap.to(item, 1, {
                scrollTrigger: {
                    trigger: item,
                    toggleActions: 'play reverse play reverse',
                    start: () => '+=' + window.innerHeight * i + ' center',
                    end: () => '+=' + window.innerHeight,
                },
                opacity: 1,
                ease: 'power3.inOut',
            })
        })
    },
}
</script>

<style lang="scss">
.scrolly {
    .container {
    }

    &-container {
        max-height: calc(var(--count) * 100vh + 50vh);
        overflow: hidden;
    }

    &-items {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    &-images {
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
            padding: 5vh 5vw;
            opacity: 0;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    &-content {
        position: relative;
        height: 100vh;
        width: 50%;

        &-item {
            width: 100%;
            max-width: 42em;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin: 0 auto;

            div {
                transform: translateY(50%);
            }
        }
    }
}
</style>
