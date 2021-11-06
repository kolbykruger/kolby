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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1321"
                            height="625"
                            viewBox="0 0 1321 625"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_701:9)">
                                <path
                                    class="swip-thick"
                                    d="M-16 519.92C46.5 454.067 151.5 331.569 287.5 350.067C490.479 377.675 583 606.069 526 606.069C478.5 606.069 344.883 296.772 469 200.567C678 38.569 835 534.068 763.5 564.567C724.084 581.38 665.5 268.068 810 97.567C944.927 -61.6383 1254.33 63.0867 1347 107.42"
                                    stroke-width="30"
                                />
                                <path
                                    class="swip-thin"
                                    d="M-42 519.92C20.5 454.067 125.5 331.569 261.5 350.067C464.479 377.675 557 606.069 500 606.069C452.5 606.069 318.883 296.772 443 200.567C652 38.569 809 534.068 737.5 564.567C698.084 581.38 639.5 268.068 784 97.567C918.927 -61.6383 1228.33 63.0867 1321 107.42"
                                    stroke="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_701:9">
                                    <rect width="1321" height="625" fill="white" />
                                </clipPath>
                            </defs>
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
