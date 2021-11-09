<template>
    <div class="pointer" aria-hidden="true" ref="pointer">
        <span class="pointer-svg" ref="pointerSVG">
            <span class="pointer-circle" ref="pointerCircle"></span>
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
            .pointer-circle {
                transform: scale(0.2);
            }
            &.-active {
                .pointer-circle {
                    transform: scale(0.23);
                    //background: rgba(0, 0, 0, 0.9);
                }
            }
        }

        &.-exclusion {
            //mix-blend-mode: exclusion;
            .pointer-circle {
                //background: #fff;
                transform: scale(1.8);
            }
            &.-active {
                .pointer-circle {
                    //background: #fff;
                    transform: scale(1.2);
                }
            }
        }

        &.-stick {
            .pointer-circle {
                transform: scale(1.8);
            }

            &.-active {
                .pointer-circle {
                    transform: scale(1.6);
                }
            }
        }

        &.-magnetic {
            .pointer-circle {
                transform: scale(1.32);
            }

            &.-active {
                .pointer-circle {
                    transform: scale(1.3);
                }
            }
        }

        &.-size {
            &-invisible {
                .pointer-circle {
                    transform: scale(0);
                }
            }
            &-xs {
                .pointer-circle {
                    transform: scale(0.5);
                }
            }
            &-sm {
                .pointer-circle {
                    transform: scale(1.32);
                }

                &.-active {
                    .pointer-circle {
                        transform: scale(1.3);
                    }
                }
            }
            &-md {
                .pointer-circle {
                    transform: scale(1.6);
                }

                &.-active {
                    .pointer-circle {
                        transform: scale(1);
                    }
                }
            }
            &-lg {
                .pointer-circle {
                    transform: scale(2.2);
                }

                &.-active {
                    .pointer-circle {
                        transform: scale(2);
                    }
                }
            }
            &-xl {
                .pointer-circle {
                    transform: scale(3.2);
                }

                &.-active {
                    .pointer-circle {
                        transform: scale(3);
                    }
                }
            }
            &-xxl {
                .pointer-circle {
                    transform: scale(4.75);
                }

                &.-active {
                    .pointer-circle {
                        transform: scale(4);
                    }
                }
            }
            &-mark {
                .pointer-circle {
                    transform: scale(3);
                }
                &.-active {
                    .pointer-circle {
                        transform: scale(2.6);
                    }
                }
            }
            &-huge {
                .pointer-circle {
                    transform: scale(50);
                }
                &.-active {
                    .pointer-circle {
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

        // &.-shift {
        //     .pointer-circle {
        //         animation: color-shift 2.8s ease-in-out infinite;

        //         @keyframes color-shift {
        //             0% {
        //                 background: #b267e6;
        //             }
        //             20% {
        //                 background: #f7768e;
        //             }
        //             40% {
        //                 background: #ffdb69;
        //             }
        //             60% {
        //                 background: #11c9c3;
        //             }
        //             80% {
        //                 background: #89ddff;
        //             }
        //             100% {
        //                 background: #b267e6;
        //             }
        //         }
        //     }
        // }

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

            // &::before {
            //     content: '';
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     width: 100%;
            //     height: 100%;
            //     background-image: url('/noise/noise.gif');
            //     background-size: 200%;
            //     background-position: center;
            //     z-index: -1;
            //     opacity: 0.08;
            // }

            // &::before {
            //     content: '';
            //     position: absolute;
            //     --size: 0;
            //     top: var(--size);
            //     left: var(--size);
            //     right: var(--size);
            //     bottom: var(--size);
            //     border-radius: 50%;
            //     border: 0.025em solid #33a3f5;
            //     border-left-color: transparent;
            //     animation: circle-rotate 2s linear infinite;
            //     z-index: -1;

            //     @keyframes circle-rotate {
            //         to {
            //             transform: rotate(360deg);
            //         }
            //     }
            // }
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
