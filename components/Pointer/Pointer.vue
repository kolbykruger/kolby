<template>
    <div class="pointer" aria-hidden="true" ref="pointer">
        <span class="pointer-svg" ref="pointerSVG">
            <span class="pointer-circle" ref="pointerCircle"></span>
            <div class="pointer-progress" ref="pointerProgress">
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
            </div>
            <span class="pointer-text" ref="pointerText" v-html="caption.text"></span>
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
// import { Rail } from '~/mixins/cursor/Rail.js'
// import { Image } from '~/mixins/cursor/Image.js'
import { Caption } from '~/mixins/cursor/Caption.js'
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
        Buttons,
        Caption,
        Move,
        State,
        Reset,
    ],
    computed: {
        loadingStatus() {
            return this.$store.state.loading.loading
        },
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

            this.$nextTick(() => {
                setTimeout(() => {
                    this.sizes()
                    this.magnetics()
                    this.sticks()
                    this.captions()
                    this.visibility()
                    this.invisibility()
                    this.progress()
                    this.shift()
                    this.knob()
                    this.buttons()
                }, 1100) // page animation transition length
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
        loadingStatus(value) {
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
            &-xs {
                .pointer-circle,
                .pointer-progress {
                    transform: scale(0.5);
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

        &-invisible {
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

        &-svg {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: 48px;
            height: 48px;
            pointer-events: none;
            opacity: 0;
            will-change: transform;
        }

        &-circle {
            position: relative;
            display: block;
            width: 48px;
            height: 48px;
            background: c('cursor');
            border-radius: 50%;
            clip-path: circle(50% at 50% 50%);
            transform-origin: 50% 50%;
            transform: scale(0);
            transition: transform 0.3s ease-in-out, opacity 0.1s;
            z-index: 2;
        }

        &-progress {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 48px;
            height: 48px;
            border-radius: 50%;
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

        &-text {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
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
            z-index: 3;
        }
    }
}

[data-magnetic] {
    display: inline-block;
}
</style>
