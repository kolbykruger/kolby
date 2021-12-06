<template>
    <div class="pointer" aria-hidden="true" ref="pointer">
        <span class="pointer-svg" ref="pointerSVG">
            <span class="pointer-circle" ref="pointerCircle"></span>
            <span class="pointer-progress" ref="pointerProgress">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M46.9995 24C46.9995 36.7025 36.7021 47 23.9995 47C11.297 47 0.999512 36.7025 0.999512 24C0.999512 11.2975 11.297 1 23.9995 1C36.7021 1 46.9995 11.2975 46.9995 24Z"
                        class="pointer-progress-track"
                    />
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M46.9995 24C46.9995 36.7025 36.7021 47 23.9995 47C11.297 47 0.999512 36.7025 0.999512 24C0.999512 11.2975 11.297 1 23.9995 1C36.7021 1 46.9995 11.2975 46.9995 24Z"
                        class="pointer-progress-fill"
                    />
                </svg>
            </span>
            <span class="pointer-arrow" ref="pointerArrow">
                <span class="pointer-arrow-right" v-if="arrow.direction == 'right' && arrow.active">
                    <svg fill="none" viewBox="0 0 17 25" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m1.6141 25c0.89165 0 1.5986-0.7334 1.8176-1.5977 1.1117-4.3858 6.5902-8.043 11.565-8.7346 0.9026-0.1255 1.6443-0.8564 1.6443-1.7677 0-0.0083 0-0.0167-2e-4 -0.025 2e-4 -0.0083 2e-4 -0.0167 2e-4 -0.025 0-0.9113-0.7417-1.6422-1.6442-1.7682-4.9728-0.6946-10.449-4.364-11.564-8.7344-0.22043-0.86397-0.92744-1.5974-1.8191-1.5974-0.89166 0-1.6275 0.72825-1.4792 1.6075 0.77137 4.5725 4.7424 8.4439 9.3745 10.518-4.6321 2.0736-8.6031 5.945-9.3745 10.518-0.14833 0.8792 0.5875 1.6075 1.4792 1.6075z"
                            clip-rule="evenodd"
                            fill="#0B0E11"
                            fill-rule="evenodd"
                        />
                    </svg>
                </span>
                <span class="pointer-arrow-down" v-if="arrow.direction == 'down' && arrow.active">
                    <svg viewBox="0 0 97 67" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m1.9986 12.996c-1.1011-0.088-1.9986-0.9754-1.9986-2.08l-6.7312e-7 -8.9158c-8.3393e-8 -1.1046 0.89943-2.0053 2.0025-1.9476 28.898 1.5128 51.94 35.49 52.962 64.518 0.0389 1.1039-0.86 1.9959-1.9646 1.9959h-9.2c-1.1046 0-1.9958-0.8943-2.0454-1.9978-1.0151-22.584-18.921-49.908-39.756-51.572z"
                            fill="#0B0E11"
                        />
                        <path
                            d="m44 66.566c-1.1046 0-2.0035-0.892-1.9646-1.9959 1.0222-29.027 24.064-63.005 52.962-64.518 1.1031-0.057744 2.0025 0.84303 2.0025 1.9476v8.9158c0 1.1046-0.8975 1.992-1.9985 2.0807-20.748 1.6715-38.736 28.991-39.756 51.572-0.0498 1.1035-0.941 1.9978-2.0456 1.9978h-9.2z"
                            fill="#0B0E11"
                        />
                    </svg>
                </span>
                <span class="pointer-arrow-left" v-if="arrow.direction == 'left' && arrow.active"> </span>
                <span class="pointer-arrow-up" v-if="arrow.direction == 'up' && arrow.active"> </span>
            </span>
            <span class="visually-hidden">{{ counter }}</span>
        </span>
    </div>
</template>

<script>
import { Cursor } from '~/mixins/cursor/Cursor.js'
import { Visibility } from '~/mixins/cursor/Visibility.js'
import { Interactivity } from '~/mixins/cursor/Interactivity.js'
import { Size } from '~/mixins/cursor/Size.js'
import { Magnetic } from '~/mixins/cursor/Magnetic.js'
import { Stick } from '~/mixins/cursor/Stick.js'
import { Invisible } from '~/mixins/cursor/Invisible.js'
import { Shift } from '~/mixins/cursor/Shift.js'
import { Knob } from '~/mixins/cursor/Knob.js'
import { Buttons } from '~/mixins/cursor/Buttons.js'
import { Progress } from '~/mixins/cursor/Progress.js'
import { Arrow } from '~/mixins/cursor/Arrow.js'
// import { Rail } from '~/mixins/cursor/Rail.js'
// import { Image } from '~/mixins/cursor/Image.js'
// import { Caption } from '~/mixins/cursor/Caption.js'
import { Move } from '~/mixins/cursor/Move.js'
import { State } from '~/mixins/cursor/State.js'
import { Reset } from '~/mixins/cursor/Reset.js'
import { mapGetters } from 'vuex'

export default {
    name: 'Pointer',
    props: {
        counter: Number,
    },
    mixins: [
        Cursor,
        Visibility,
        Interactivity,
        Size,
        Magnetic,
        Stick,
        Invisible,
        Shift,
        Knob,
        Progress,
        Arrow,
        Buttons,
        Move,
        State,
        Reset,
    ],
    computed: {
        checkPerformance() {
            try {
                const canvas = document.createElement('canvas')
                return (
                    (!!window.WebGLRenderingContext && canvas.getContext('webgl')) ||
                    canvas.getContext('experimental-webgl')
                )
            } catch (e) {
                return false
            }
        },
        checkPointer() {
            return window.matchMedia('(pointer: fine)').matches
        },
        checkHover() {
            return window.matchMedia('(hover: hover)').matches
        },
        checkSize() {
            return window.matchMedia('(min-width: 968px)').matches
        },
        deviceCheck() {
            const arr = {
                performance: this.checkPerformance,
                pointer: this.checkPointer,
                hover: this.checkHover,
                size: this.checkSize,
            }
            return Object.values(arr).every(Boolean)
        },
    },
    methods: {
        initPointer() {
            if (!this.deviceCheck) {
                return false
            }

            this.$router.onReady(() => {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.sizes()
                        this.magnetics()
                        this.sticks()
                        this.visibility()
                        this.invisibility()
                        this.progress()
                        this.arrows()
                        this.shift()
                        this.knob()
                        this.buttons()
                    }, 1000) // page animation transition length
                })
            })
        },
    },
    updated() {
        this.initPointer()
    },
    mounted() {
        this.initPointer()
    },
    watch: {
        $route() {
            this.reset()
        },
        loading(value) {
            if (!value) {
                this.initPointer()
            }
        },
    },
}
</script>

<style lang="scss">
html {
    --cursor-progress: 3;
}

.pointer {
    display: none;
}

@media (any-pointer: fine) {
    .pointer {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        user-select: none;
        mix-blend-mode: exclusion;
        z-index: 200;

        &.-visible {
            .pointer-circle,
            .pointer-progress {
                transform: scale(0.2);
            }
            &.-active {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(0.23);
                    //background: rgba(0, 0, 0, 0.9);
                }
            }
        }

        &.-exclusion {
            //mix-blend-mode: exclusion;
            .pointer-circle,
            .pointer-progress {
                //background: #fff;
                transform: scale(1.8);
            }
            &.-active {
                .pointer-circle,
                .pointer-progress {
                    //background: #fff;
                    transform: scale(1.2);
                }
            }
        }

        &.-stick {
            .pointer-circle,
            .pointer-progress {
                transform: scale(1.8);
            }

            &.-active {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(1.6);
                }
            }
        }

        &.-magnetic {
            .pointer-circle,
            .pointer-progress {
                transform: scale(1.32);
            }

            &.-active {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(1.3);
                }
            }
        }

        &.-size {
            &-invisible {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(0);
                }
            }
            &-xxs {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(0.35);
                }
            }
            &-xs {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(0.78);
                }
            }
            &-sm {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(1.32);
                }

                &.-active {
                    .pointer-circle,
                    .pointer-progress {
                        transform: scale(1.3);
                    }
                }
            }
            &-md {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(1.6);
                }

                &.-active {
                    .pointer-circle,
                    .pointer-progress {
                        transform: scale(1);
                    }
                }
            }
            &-lg {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(2.2);
                }

                &.-active {
                    .pointer-circle,
                    .pointer-progress {
                        transform: scale(2);
                    }
                }
            }
            &-xl {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(3.2);
                }

                &.-active {
                    .pointer-circle,
                    .pointer-progress {
                        transform: scale(3);
                    }
                }
            }
            &-xxl {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(4.75);
                }

                &.-active {
                    .pointer-circle,
                    .pointer-progress {
                        transform: scale(4);
                    }
                }
            }
            &-mark {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(3);
                }
                &.-active {
                    .pointer-circle,
                    .pointer-progress {
                        transform: scale(2.6);
                    }
                }
            }
            &-huge {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(50);
                }
                &.-active {
                    .pointer-circle,
                    .pointer-progress {
                        transform: scale(50);
                    }
                }
            }
        }

        &.-knob {
            .pointer-circle {
                background: rgba(#f4f1ee, 0.1);
                background: radial-gradient(transparent 75%, c('cursor'));
                border: 1px solid c('cursor');
            }
        }

        &.-progress {
            mix-blend-mode: normal;

            .pointer-circle {
                opacity: 0.1;
            }

            .pointer-progress {
                svg {
                    opacity: 1;
                }

                path {
                    animation: progress 5s linear forwards;
                    animation-duration: var(--cursor-progress);

                    @keyframes progress {
                        from {
                            stroke-dashoffset: 288;
                        }
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                }
            }
        }

        &.-invisible {
            .pointer-circle {
                transform: scale(0);
                opacity: 0;
            }
            &.-active {
                .pointer-circle {
                    transform: scale(0);
                    opacity: 0;
                }
            }
        }

        &-svg,
        &-circle,
        &-progress,
        &-arrow {
            --size: 48px;
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: var(--size);
            height: var(--size);
            pointer-events: none;
            border-radius: 50%;
        }

        &-svg {
            opacity: 0;
            will-change: transform;
        }

        &-circle {
            background: c('cursor');
            clip-path: circle(50% at 50% 50%);
            transform-origin: 50% 50%;
            transform: scale(0);
            transition: transform 0.3s ease-in-out, opacity 0.1s;
            z-index: 2;
        }

        &-progress {
            clip-path: circle(50% at 50% 50%);
            transform-origin: 50% 50%;
            transform: scale(0);
            transition: transform 0.3s ease-in-out, opacity 0.1s;
            z-index: 3;

            svg {
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 1s ease;
            }

            &-track,
            &-fill {
                stroke-width: 0.75;
            }

            &-track {
                stroke: c('cursor');
                opacity: 1;
            }

            &-fill {
                position: relative;
                stroke-dasharray: 288;
                stroke-dashoffset: 288;
                stroke-width: 2;
                stroke: c('primary-base');
                stroke-width: 2;
            }
        }

        &-arrow {
            display: grid;
            place-content: center;
            text-align: center;
            color: #000;
            font-size: 1.5rem;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            opacity: 0;
            transition: transform 0.3s, opacity 0.4s;
            transform: scale(0);
            z-index: 3;
            will-change: transform;

            svg {
                --size: 1em;
                width: var(--size);
                height: var(--size);
                padding: 0.2em;
            }
        }
    }
}

[data-magnetic] {
    display: inline-block;
}
</style>
