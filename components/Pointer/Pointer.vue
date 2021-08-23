<template>
    <div class="pointer" aria-hidden="true" ref="pointer">
        <span class="pointer-svg" ref="pointerSVG">
            <span class="pointer-circle" ref="pointerCircle"></span>
            <span class="pointer-text" ref="pointerText" v-html="caption.text"></span>
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
// import { Rail } from '~/mixins/cursor/Rail.js'
// import { Image } from '~/mixins/cursor/Image.js'
import { Caption } from '~/mixins/cursor/Caption.js'
import { Move } from '~/mixins/cursor/Move.js'
import { State } from '~/mixins/cursor/State.js'

export default {
    name: 'Pointer',
    mixins: [Cursor, Visibility, Interactivity, Size, Magnetic, Stick, Caption, Move, State]
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
            background: #fff;
            border-radius: 50%;
            clip-path: circle(50% at 50% 50%);
            transform-origin: 50% 50%;
            transform: scale(0);
            transition: transform 0.3s ease-in-out, opacity 0.1s;
            z-index: 2;
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
