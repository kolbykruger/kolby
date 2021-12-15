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
                                    'phone-small': 'px',
                                    phone: 'px',
                                    'phone-large': 'px',
                                    tablet: 'px',
                                    'laptop-small': 'px',
                                    laptop: 'px',
                                    'laptop-large': 'px',
                                    'desktop-small': 'px',
                                    desktop: 'px',
                                    'desktop-large': 'px',
                                }"
                            />
                        </div>
                    </Flickity>
                </client-only>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MobileImage',
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
            isMobile: null,
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
                freeScroll: true,
                selectedAttraction: 0.01,
                friction: 0.2,
                groupCells: this.groupCells(),
                initialIndex: this.initialIndex(),
                pageDots: this.pageDots(),
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
        pageDots() {
            return this.isMobile ? true : false
        },
        initialIndex() {
            return Math.round(this.slice.items.length / 2 - 1)
        },
        onInit(evt) {
            console.log(evt)
            evt.on('ready', event => {
                console.log(event)
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

        &-page-dots {
            .dot {
                width: 6vw;
                height: 0.2em;
                margin: 0 1.5vw;
                background: c('base-4');
                border-radius: 1em;
                opacity: 1;
                transition: 0.3s ease;

                &.is-selected {
                    background: c('base-0');
                }
            }
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
        border-radius: 3.3em;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
        overflow: hidden;
        width: 85%;
        margin: 0 5vw;
        user-select: none;

        @include mq('tablet') {
            width: calc(100% / #{var(--count)} - 3vw);
            margin: 0 1.5vw;

            &[data-count='5'] {
                width: calc(100% / #{var(--count)} - 1.5vw);
                margin: 0 0.75vw;
            }
        }

        img {
            border: 1px solid #fafafa;
            border-radius: 3.3em;
            padding: 0.5em;
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
                        transform: translateY(-8vh);
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
                        transform: translateY(-8vh);
                    }
                    &:nth-child(2) {
                        transform: translateY(-4vh);
                    }
                    &:nth-child(4) {
                        transform: translateY(4vh);
                    }
                    &:nth-child(5) {
                        transform: translateY(8vh);
                    }
                }
            }
        }
    }
}
</style>
