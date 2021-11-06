<template>
    <main class="page about" id="content">
        <div class="page-contents">
            <section class="about-intro">
                <div class="container">
                    <div
                        class="about-intro-image"
                        :style="{
                            'aspect-ratio':
                                document.data.Cover.dimensions.width / document.data.Cover.dimensions.height,
                        }"
                    >
                        <prismic-image :field="document.data.Cover" />
                    </div>
                    <div class="swip">
                        <svg fill="none" viewBox="0 0 1488 631" xmlns="http://www.w3.org/2000/svg">
                            <path
                                class="swip-thick"
                                d="m-12 523.46c62.5-65.853 167.5-188.35 303.5-169.85 202.98 27.608 295.5 256 238.5 256-47.5 0-181.12-309.3-57-405.5 209-162 366 333.5 294.5 364-39.416 16.813-122.3-320.51 46.5-467 200-173.57 601.33-38.4 694 5.933"
                                stroke-width="30"
                            />
                            <path
                                class="swip-thin"
                                d="m-32 543.46c62.5-65.853 167.5-188.35 303.5-169.85 202.98 27.608 295.5 256 238.5 256-47.5 0-181.12-309.3-57-405.5 209-162 366 333.5 294.5 364-39.416 16.813-122.3-320.51 46.5-467 200-173.57 601.33-38.4 694 5.933"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            <slice-zone type="about" uid="about" />

            <canvas class="about-canvas" aria-hidden="true" ref="canvas"></canvas>
        </div>
    </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import { Animations } from '~/mixins/animations/Animations.js'

export default {
    components: {
        //Pageheading
        SliceZone,
    },
    mixins: [Animations],
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getSingle('about')

        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
}
</script>

<style lang="scss">
.about {
    &-intro {
        position: relative;
        padding-top: 0;
        padding-bottom: 0;

        &-title {
            position: absolute;
            top: 10vh;
            left: 0;
            right: 0;
            text-align: center;
            //font-size: calc(140px + (280 - 140) * ((100vw - 300px) / (1920 - 300)));
            font-size: clamp(8.75rem, -0.875rem + 15vw, 17.5rem);
            line-height: 1;
            font-kerning: none;
            user-select: none;
            z-index: 2;

            span {
                display: block;
            }
        }
        &-image {
            position: relative;
            margin: 0 auto;
            margin-top: 14vh;
            background: lighten(#0b0e11, 80%);
            overflow: hidden;

            // &::before {
            //     content: '';
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     width: 100%;
            //     height: 50%;
            //     background: linear-gradient(to top, rgba(244, 241, 238, 0), rgba(244, 241, 238, 0.75));
            //     //clip-path: circle(25.8% at 50% 50%);
            // }

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
    }

    &-bio {
        .container {
            max-width: 68em;
            margin: 0 auto;
            padding: 10vh 1em 20vh;
        }

        p {
            font-size: clamp(1.75rem, -0.875rem + 15vw, 3.25rem);
            line-height: 1.45;

            span {
                text-decoration: underline;
            }
        }
    }

    &-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        user-select: none;
        z-index: 1;
    }

    .swip {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        svg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            //mix-blend-mode: soft-light;
            transform: scale(1.25) translate(-9%, 6%);
        }

        &-thick {
            stroke: c('secondary-base');

            html[theme='dark'] & {
                stroke: c('tertiary-base');
            }
        }
        &-thin {
            stroke: c('base-0');
        }
    }
}
</style>
