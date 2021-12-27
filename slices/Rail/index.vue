<template>
    <section class="rail" :class="[background, variation]" data-anim>
        <div class="container" v-if="slice.primary.Title">
            <prismic-rich-text class="rail-title" :field="slice.primary.Title" />
            <prismic-rich-text class="rail-summary" :field="slice.primary.Summary" v-if="slice.primary.Summary" />
        </div>
        <div class="rail-container" data-cursor="invisible">
            <!-- <button
                data-stick
                data-magnetic
                v-if="selectedIndex > 0"
                class="flickity-button flickity-button-previous"
                @click="prev"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="195" height="97" viewBox="0 0 195 97" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M40.8687 55.2002C55.2989 64.8648 66.1062 79.0382 66.947 94.9975C67.0052 96.1006 66.1044 97 64.9998 97L55.9998 97C54.8952 97 54.0079 96.1024 53.9186 95.0015C52.2359 74.249 24.7278 56.2587 1.9975 55.245C0.894035 55.1958 -0.000206236 54.3045 -0.00020614 53.2L-0.000206122 53L-0.000205335 44L-0.000205318 43.8C-0.000205221 42.6954 0.894036 41.8042 1.99752 41.7552C24.7309 40.7464 52.2433 22.8377 53.9193 1.99858C54.0078 0.897567 54.8952 -8.18407e-06 55.9998 -8.08751e-06L64.9998 -7.3007e-06C66.1044 -7.20414e-06 67.0052 0.899422 66.947 2.00246C66.1062 17.962 55.2986 32.1355 40.8681 41.8002L193 41.8002C194.105 41.8002 195 42.6956 195 43.8002L195 53.2002C195 54.3048 194.105 55.2002 193 55.2002L40.8687 55.2002Z"
                        fill="#0B0E11"
                    />
                </svg>
                <span class="visually-hidden">Navigate to previous slide</span>
            </button> -->
            <client-only>
                <Flickity ref="flickity" class="rail-slider" :options="flickityOptions" @init="onInit">
                    <div
                        class="rail-item"
                        v-for="(item, i) in slice.items"
                        :key="`slice-item-${i}`"
                        :style="{ '--aspect-ratio': aspectRatio(item.Image), '--width': imageWidth(item.Image) }"
                    >
                        <div v-if="slice.variation == 'railWithImages'">
                            {{ item.Image.dimensions }}
                            <prismic-image class="rail-item-image" data-exclusion :field="item.Image" />
                        </div>
                        <div v-if="slice.variation == 'railWithDateCompany'">
                            <p class="rail-item-date" v-if="item.Date">
                                {{ i == 0 ? '~ ' : '' }}{{ formatDate(item.Date) || '2021' }}
                            </p>
                            <prismic-rich-text class="rail-item-title" :field="item.Title" />
                            <div class="rail-item-title">
                                <h4>
                                    —
                                    <prismic-link :field="item.Link">{{ item.Company || 'Company' }}</prismic-link>
                                </h4>
                            </div>
                            <prismic-rich-text class="rail-item-summary" :field="item.Summary" />
                        </div>
                        <div v-else>
                            <p class="rail-item-eyebrow" v-if="item.Eyebrow">— {{ item.Eyebrow || 'Eyebrow' }}</p>
                            <prismic-rich-text class="rail-item-title" :field="item.Title" v-if="item.Title" />
                            <prismic-rich-text class="rail-item-summary" :field="item.Summary" v-if="item.Summary" />
                        </div>
                    </div>
                    <div class="rail-item" aria-hidden="true">
                        <span></span>
                    </div>
                </Flickity>
            </client-only>
            <button
                data-cursor="lg"
                data-stick
                data-magnetic
                class="flickity-button flickity-button-next"
                @click="next"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="195" height="97" viewBox="0 0 195 97" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M154.131 41.7998C139.701 32.1351 128.894 17.9618 128.053 2.00247C127.995 0.899431 128.896 0 130 0H139C140.105 0 140.992 0.897571 141.081 1.99853C142.764 22.751 170.272 40.7413 193.003 41.755C194.106 41.8042 195 42.6954 195 43.8V44V53V53.2C195 54.3046 194.106 55.1958 193.002 55.2448C170.269 56.2536 142.757 74.1622 141.081 95.0014C140.992 96.1024 140.105 97 139 97H130C128.896 97 127.995 96.1006 128.053 94.9975C128.894 79.038 139.701 64.8645 154.132 55.1998H2C0.89543 55.1998 0 54.3044 0 53.1998V43.7998C0 42.6952 0.895431 41.7998 2 41.7998H154.131Z"
                        fill="#0B0E11"
                    />
                </svg>
                <span class="visually-hidden">Navigate to next slide</span>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Rail',
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
            flickityOptions: {
                cellSelector: '.rail-item',
                cellAlign: 'left',
                contain: true,
                freeScroll: true,
                imagesLoaded: true,
                adaptiveHeight: false,
                prevNextButtons: false,
                pageDots: false,
                selectedAttraction: 0.01,
                friction: 0.2,
            },
            selectedIndex: 0,
        }
    },
    computed: {
        background() {
            return 'rail-' + this.slice.primary.Background ? this.slice.primary.Background : 'default'
        },
        variation() {
            return 'rail-' + this.slice.variation.toLowerCase()
        },
    },
    methods: {
        formatDate(d) {
            const date = new Date(d)
            const options = {
                year: 'numeric',
            }
            return date.toLocaleDateString('en-us', options)
        },
        next() {
            this.$refs.flickity.next()
        },
        prev() {
            this.$refs.flickity.previous()
        },
        onInit(evt) {
            this.selectedIndex = evt.selectedIndex
            evt.on('change', event => {
                this.selectedIndex = event
            })
        },
        aspectRatio(image) {
            return image ? image.dimensions.width / image.dimensions.height : null
        },
        imageWidth(image) {
            return image ? image.dimensions.width / 4 : null
        },
    },
    mounted() {
        this.flickityOptions.freeScroll = screen.width <= 1200 ? false : true
        this.flickityOptions.pageDots = screen.width <= 1200 ? true : false

        window.addEventListener('reize', () => {
            this.flickityOptions.freeScroll = screen.width <= 1200 ? false : true
            this.flickityOptions.pageDots = screen.width <= 1200 ? true : false
        })
    },
}
</script>

<style lang="scss">
.rail {
    &-dark {
        background: c('base-0');
        color: c('background');
    }

    .timeline + & {
        .container {
            padding-top: 0;
        }
    }

    .container {
        padding-top: 10vh;
        padding-bottom: 15vh;
    }

    &-container {
        position: relative;
        padding-bottom: 10vh;
    }

    .flickity {
        &-viewport {
            &.is-pointer-down {
                .rail-item {
                    transform: scale(0.9);
                    transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                }
            }
        }

        &-slider {
            position: relative;
            margin: 0 auto;

            @include mq('laptop') {
                margin-left: 150px;
            }
            @include mq('laptop-large') {
                margin-left: 180px;
            }
            @include mq('desktop-small') {
                margin-left: 220px;
            }
            @include mq('desktop') {
                margin-left: 270px;
            }
        }

        &-button {
            display: none;
            position: absolute;
            top: calc(50% - 5vh);
            left: 3vw;
            transform: translateY(-50%);
            --size: 96px;
            width: var(--size);
            height: var(--size);
            background: none;

            @include mq('laptop') {
                display: block;
            }

            svg {
                width: 100%;
                height: 100%;

                path {
                    fill: c('base-5');
                }
            }

            &-previous {
            }

            &-next {
                left: auto;
                right: 3vw;
            }

            &:hover,
            &:focus {
                outline: none;
                box-shadow: none;
            }
        }
    }

    &-item {
        width: 100%;
        padding: 2em;
        transition: opacity 0.4s ease, transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
        user-select: none;

        @include mq('laptop') {
            min-width: 980px;
            width: min-content;
            min-height: 600px;
            margin-right: 10vw;
            opacity: 0.5;
        }

        &.is-selected {
            opacity: 1;
        }

        &:last-of-type {
            margin-right: calc(10vw + 270px * 2);
        }

        &-image {
            height: 100%;
            //min-height: 600px;
            max-height: 600px;
            width: 100%;
            object-fit: contain;
        }

        &-eyebrow,
        &-date,
        &-title {
            font-family: 'Ogg', serif;
            font-weight: 600;
        }

        &-date,
        &-eyebrow {
            &,
            &:last-of-type {
                margin-bottom: 1.5em;
            }
        }

        &-title {
            h2,
            h3,
            h4 {
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &-date,
        &-eyebrow,
        &-summary {
            &,
            & > * {
                //color: darken(#fff, 30%);
            }
        }

        &-summary {
            margin-top: 3em;
        }
    }

    &-railwithimages {
        .rail {
            &-item {
                min-width: unset;
                min-height: unset;
                margin-right: 0;
                aspect-ratio: var(--aspect-ratio);
                width: var(--width);
            }
        }
    }
}
</style>
