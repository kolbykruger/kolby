<template>
    <section class="foreward">
        <div class="container">
            <div
                class="foreward-intro-image"
                :style="{
                    'aspect-ratio': document.data.Cover.dimensions.width / document.data.Cover.dimensions.height,
                }"
            >
                <prismic-image :field="document.data.Cover" />
            </div>
            <div class="swip">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1488"
                    height="631"
                    viewBox="0 0 1488 631"
                    fill="none"
                >
                    <path
                        class="swip-thick"
                        d="M-12 523.455C50.5 457.602 155.5 335.104 291.5 353.602C494.479 381.21 587 609.603 530 609.603C482.5 609.603 348.883 300.307 473 204.102C682 42.1038 839 537.603 767.5 568.101C728.084 584.914 645.203 247.59 814 101.102C1014 -72.4653 1415.33 62.7017 1508 107.035"
                        stroke-width="30"
                    />
                    <g opacity="0.15">
                        <path
                            class="swip-thick swip-thick-overlay"
                            d="M-12 523.455C50.5 457.602 155.5 335.104 291.5 353.602C494.479 381.21 587 609.603 530 609.603C482.5 609.603 348.883 300.307 473 204.102C682 42.1038 839 537.603 767.5 568.101C728.084 584.914 645.203 247.59 814 101.102C1014 -72.4653 1415.33 62.7017 1508 107.035"
                            stroke="url(#pattern)"
                            stroke-width="30"
                            style="mix-blend-mode: screen"
                        />
                    </g>
                    <path
                        class="swip-thin"
                        d="M-32 543.455C30.5 477.602 135.5 355.104 271.5 373.602C474.479 401.21 567 629.603 510 629.603C462.5 629.603 328.883 320.307 453 224.102C662 62.1038 819 557.603 747.5 588.101C708.084 604.914 625.203 267.59 794 121.102C994 -52.4653 1395.33 82.7017 1488 127.035"
                    />
                    <defs>
                        <pattern
                            id="pattern"
                            patternContentUnits="objectBoundingBox"
                            width="0.069079"
                            height="0.126135"
                        >
                            <use
                                xlink:href="#image0_701:8"
                                transform="translate(0.069079) scale(0.000197368 0.000504538) rotate(90)"
                            />
                        </pattern>
                        <image id="image0_701:8" width="250" height="350" xlink:href="/noise/noise.gif" />
                    </defs>
                </svg>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Foreward',
    props: {
        document: Object,
    },
}
</script>

<style lang="scss">
.foreward {
    position: relative;

    &-intro {
        position: relative;
        padding-top: 0;
        padding-bottom: 0;

        &-image {
            position: relative;
            margin: 0 auto;
            margin-top: 8vh;
            background: lighten(#0b0e11, 80%);
            overflow: hidden;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
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
            mix-blend-mode: soft-light;
            transform: scale(1.25) translate(-9%, 6%);

            path {
                stroke-dasharray: 3050;
                stroke-dashoffset: 3050;
                animation: swip-draw 1.82s ease-in-out forwards;
                animation-delay: 0.86s;

                &.swip-thick {
                    animation: swip-draw 1.78s ease-in-out forwards;
                    animation-delay: 0.92s;
                }

                @keyframes swip-draw {
                    0% {
                        stroke-dashoffset: 3050;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
            }
        }

        &-thick {
            stroke: c('primary-base');

            &-overlay {
                stroke: url(#a);
            }

            html[theme='dark'] & {
                stroke: c('primary-base');

                &-overlay {
                    stroke: url(#pattern);
                }
            }
        }
        &-thin {
            stroke: c('base-0');
        }
    }
}
</style>
