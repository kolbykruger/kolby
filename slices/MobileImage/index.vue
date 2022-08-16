<template>
    <section class="mobile" :class="layout">
        <div class="container">
            <div class="mobile-grid" :class="{ 'mobile-grid-full': slice.items.length > 3 }" data-cursor="invisible">
                <client-only>
                    <Flickity ref="flickity" class="mobile-slider" :options="flickityOptions" @init="onInit">
                        <div
                            class="mobile-item"
                            :class="{ 'mobile-item-sm': size }"
                            :style="{ '--count': slice.items.length }"
                            :data-count="slice.items.length"
                            v-for="(item, i) in slice.items"
                            :key="`slice-item-${i}`"
                            data-anim
                        >
                            <Picture
                                :field="item.Image"
                                :sizes="{
                                    'phone-small': '228px',
                                    phone: '296px',
                                    'phone-large': '391px',
                                    tablet: '431px',
                                    'laptop-small': '389px',
                                    laptop: '457px',
                                    'laptop-large': '502px',
                                    'desktop-small': '597px',
                                    desktop: '225px',
                                    'desktop-large': '343px',
                                }"
                            />
                        </div>
                    </Flickity>
                    <Swiper
                        :count="slice.items.length"
                        :progress="progress"
                        :index="initialIndex()"
                        :constrain="true"
                        v-if="isMobile"
                    />
                </client-only>
            </div>
        </div>
    </section>
</template>

<script>
import Swiper from '@/components/Swiper/Swiper'

export default {
    name: 'MobileImage',
    components: {
        Swiper,
    },
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {
                    windowSize: 0,
                }
            },
        },
    },
    data() {
        return {
            isMobile: false,
            progress: 0,
        }
    },
    computed: {
        flickityOptions() {
            return {
                cellSelector: '.mobile-item',
                cellAlign: 'center',
                contain: true,
                imagesLoaded: true,
                adaptiveHeight: false,
                setGallerySize: true,
                prevNextButtons: false,
                freeScroll: false,
                selectedAttraction: 0.01,
                friction: 0.2,
                groupCells: this.groupCells(),
                initialIndex: this.initialIndex(),
                pageDots: false,
            }
        },
        size() {
            const count = this.slice.items.length
            return count > 3 ? true : false
        },
        layout() {
            const layout = this.slice.primary.Layout
            return layout ? `mobile-layout-${layout.toLowerCase()}` : null
        },
    },
    methods: {
        groupCells() {
            return this.isMobile ? 1 : this.slice.items.length
        },
        initialIndex() {
            return Math.round(this.slice.items.length / 2 - 1)
        },
        onInit(evt) {
            evt.on('scroll', progress => {
                this.progress = progress
            })
        },
    },
    mounted() {
        this.isMobile = screen.width <= 768 ? true : false

        window.addEventListener('resize', () => {
            this.isMobile = screen.width <= 768 ? true : false
        })
    },
}
</script>

<style lang="scss">
.mobile {
    overflow: hidden;

    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    .flickity {
        &-viewport {
            width: 100%;
            height: 100%;
            // min-height: 80vh;
            overflow: visible;

            @include mq('tablet') {
                // min-height: 100vh;
            }
        }

        &-slider {
            width: 100%;
        }
    }

    &-grid {
        max-width: 1600px;
        margin: 0 auto;

        &-full {
            max-width: 100%;
        }
    }

    &-item {
        background-color: #fff;
        border: 0.7em solid #fff;
        border-radius: 2.3em;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
        overflow: hidden;
        width: 80%;
        margin: 0 2.5vw;
        user-select: none;
        opacity: 0.6;
        transform: scale(0.8);
        transition: all 0.62s ease;

        &.is-selected {
            transform: scale(1);
            opacity: 1;
        }

        @include mq('tablet') {
            width: 50%;
        }

        @include mq('desktop-small') {
            width: calc(100% / #{var(--count)} - 3vw);
            margin: 0 1.5vw;
            border: 0.2em solid #fff;

            &[data-count='5'] {
                width: calc(100% / #{var(--count)} - 1.5vw);
                margin: 0 0.75vw;
            }
        }

        @include mq('desktop') {
            border: 0.7em solid #fff;
            border-radius: 3.3em;
        }

        img {
            border: 1px solid #fafafa;
            border-radius: 2.3em;
            padding: 0.5em;

            @include mq('desktop-small') {
                padding: 0.25em;
            }
            @include mq('desktop') {
                padding: 0.5em;
                border-radius: 3.3em;
            }
        }
    }

    &-layout {
        .container {
            padding-top: 18vh;
        }

        &-pyramid {
            .mobile-item {
                @include mq('tablet') {
                    &:nth-of-type(even) {
                        margin-top: -8vh;
                    }
                }
            }
        }

        &-waterfall {
            .container {
                padding-top: 18vh;
                padding-bottom: 18vh;
            }

            .mobile-item {
                @include mq('tablet') {
                    &:nth-child(1) {
                        margin-top: -8vh;
                    }
                    &:nth-child(2) {
                        margin-top: -4vh;
                    }
                    &:nth-child(4) {
                        margin-top: 4vh;
                    }
                    &:nth-child(5) {
                        margin-top: 8vh;
                    }
                }
            }
        }
    }
}
</style>
