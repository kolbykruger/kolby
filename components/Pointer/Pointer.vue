<template>
    <div class="pointer" aria-hidden="true" ref="pointer" :data-counter="counter">
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
import { Invisible } from '~/mixins/cursor/Invisible.js'
// import { Rail } from '~/mixins/cursor/Rail.js'
// import { Image } from '~/mixins/cursor/Image.js'
import { Caption } from '~/mixins/cursor/Caption.js'
import { Move } from '~/mixins/cursor/Move.js'
import { State } from '~/mixins/cursor/State.js'
import { Reset } from '~/mixins/cursor/Reset.js'

export default {
    name: 'Pointer',
    props: {
        counter: Number
    },
    mixins: [Cursor, Visibility, Interactivity, Size, Magnetic, Stick, Invisible, Caption, Move, State, Reset],
    updated() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.sizes()
                this.magnetics()
                this.sticks()
                this.captions()
                this.visibility()
                this.invisibility()
            }, 1050) // page animation transition length
        })
    },
    watch: {
        $route() {
            this.reset()
        }
    }
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
                    transform: scale(4.2);
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
            background: #fff;
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
            //     background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgZmlsbD0ibm9uZSI+DQo8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj4NCjxyZWN0IHg9Ii00MC43MDciIHk9IjM0NS42OSIgd2lkdGg9IjQzOC4zNTkiIGhlaWdodD0iNDM4LjM1OSIgcng9IjExNC4yMjUiIHRyYW5zZm9ybT0icm90YXRlKC02MS44MTkyIC00MC43MDcgMzQ1LjY5KSIgZmlsbD0iI0Y4Nzg1MyIvPg0KPC9tYXNrPg0KPGcgbWFzaz0idXJsKCNtYXNrMCkiPg0KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+DQo8cmVjdCB3aWR0aD0iNTMyLjQxOCIgaGVpZ2h0PSI1MzIuNDE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMzE0NSAtNi4wNjMxMSkiIGZpbGw9IiM4MTI2NUQiLz4NCjxsaW5lIHgxPSIyNDEuNzA4IiB5MT0iLTI3OC4wMDIiIHgyPSItMjg0LjI1NSIgeTI9IjI0Ny45NjEiIHN0cm9rZT0iI0U2RDRERiIgc3Ryb2tlLXdpZHRoPSIxLjgwOTE5Ii8+DQo8bGluZSB4MT0iNDc0LjM1OCIgeTE9Ii00NS4zNTk0IiB4Mj0iLTUxLjYwNDYiIHkyPSI0ODAuNjA0IiBzdHJva2U9IiNFNkQ0REYiIHN0cm9rZS13aWR0aD0iMS44MDkxOSIvPg0KPGxpbmUgeDE9IjM1OC4wMzQiIHkxPSItMTYxLjY4MSIgeDI9Ii0xNjcuOTI5IiB5Mj0iMzY0LjI4MiIgc3Ryb2tlPSIjRTZENERGIiBzdHJva2Utd2lkdGg9IjEuODA5MTkiLz4NCjxsaW5lIHgxPSI1OTAuNjgxIiB5MT0iNzAuOTY0OCIgeDI9IjY0LjcxNzciIHkyPSI1OTYuOTI4IiBzdHJva2U9IiNFNkQ0REYiIHN0cm9rZS13aWR0aD0iMS44MDkxOSIvPg0KPGxpbmUgeDE9IjcwNy4wMDEiIHkxPSIxODcuMjg4IiB4Mj0iMTgxLjAzOCIgeTI9IjcxMy4yNTEiIHN0cm9rZT0iI0U2RDRERiIgc3Ryb2tlLXdpZHRoPSIxLjgwOTE5Ii8+DQo8bGluZSB4MT0iMjk5Ljg3IiB5MT0iLTIxOS44NDMiIHgyPSItMjI2LjA5MyIgeTI9IjMwNi4xMiIgc3Ryb2tlPSIjRTZENERGIiBzdHJva2Utd2lkdGg9IjEuODA5MTkiLz4NCjxsaW5lIHgxPSI1MzIuNTE5IiB5MT0iMTIuODA0MSIgeDI9IjYuNTU1NTgiIHkyPSI1MzguNzY3IiBzdHJva2U9IiNFNkQ0REYiIHN0cm9rZS13aWR0aD0iMS44MDkxOSIvPg0KPGxpbmUgeDE9IjQxNi4xOTQiIHkxPSItMTAzLjUxOSIgeDI9Ii0xMDkuNzY5IiB5Mj0iNDIyLjQ0NCIgc3Ryb2tlPSIjRTZENERGIiBzdHJva2Utd2lkdGg9IjEuODA5MTkiLz4NCjxsaW5lIHgxPSI2NDguODQxIiB5MT0iMTI5LjEyNyIgeDI9IjEyMi44NzgiIHkyPSI2NTUuMDkiIHN0cm9rZT0iI0U2RDRERiIgc3Ryb2tlLXdpZHRoPSIxLjgwOTE5Ii8+DQo8bGluZSB4MT0iNzY1LjE2NSIgeTE9IjI0NS40NSIgeDI9IjIzOS4yMDIiIHkyPSI3NzEuNDEzIiBzdHJva2U9IiNFNkQ0REYiIHN0cm9rZS13aWR0aD0iMS44MDkxOSIvPg0KPGxpbmUgeDE9IjI3MC43OSIgeTE9Ii0yNDguOTI0IiB4Mj0iLTI1NS4xNzMiIHkyPSIyNzcuMDM5IiBzdHJva2U9IiNFNkQ0REYiIHN0cm9rZS13aWR0aD0iMS44MDkxOSIvPg0KPGxpbmUgeDE9IjUwMy40MzciIHkxPSItMTYuMjc3NyIgeDI9Ii0yMi41MjY0IiB5Mj0iNTA5LjY4NSIgc3Ryb2tlPSIjRTZENERGIiBzdHJva2Utd2lkdGg9IjEuODA5MTkiLz4NCjxsaW5lIHgxPSIzODcuMTE0IiB5MT0iLTEzMi42MDEiIHgyPSItMTM4Ljg0OSIgeTI9IjM5My4zNjIiIHN0cm9rZT0iI0U2RDRERiIgc3Ryb2tlLXdpZHRoPSIxLjgwOTE5Ii8+DQo8bGluZSB4MT0iNjE5Ljc1OSIgeTE9IjEwMC4wNDciIHgyPSI5My43OTU4IiB5Mj0iNjI2LjAxIiBzdHJva2U9IiNFNkQ0REYiIHN0cm9rZS13aWR0aD0iMS44MDkxOSIvPg0KPGxpbmUgeDE9IjczNi4wODMiIHkxPSIyMTYuMzciIHgyPSIyMTAuMTIiIHkyPSI3NDIuMzMyIiBzdHJva2U9IiNFNkQ0REYiIHN0cm9rZS13aWR0aD0iMS44MDkxOSIvPg0KPGxpbmUgeDE9IjMyOC45NTIiIHkxPSItMTkwLjc2MyIgeDI9Ii0xOTcuMDExIiB5Mj0iMzM1LjIiIHN0cm9rZT0iI0U2RDRERiIgc3Ryb2tlLXdpZHRoPSIxLjgwOTE5Ii8+DQo8bGluZSB4MT0iNTYxLjYwMSIgeTE9IjQxLjg4NDUiIHgyPSIzNS42Mzc3IiB5Mj0iNTY3Ljg0OCIgc3Ryb2tlPSIjRTZENERGIiBzdHJva2Utd2lkdGg9IjEuODA5MTkiLz4NCjxsaW5lIHgxPSI0NDUuMjc2IiB5MT0iLTc0LjQzODUiIHgyPSItODAuNjg2NiIgeTI9IjQ1MS41MjQiIHN0cm9rZT0iI0U2RDRERiIgc3Ryb2tlLXdpZHRoPSIxLjgwOTE5Ii8+DQo8bGluZSB4MT0iNjc3LjkyMyIgeTE9IjE1OC4yMDgiIHgyPSIxNTEuOTYiIHkyPSI2ODQuMTciIHN0cm9rZT0iI0U2RDRERiIgc3Ryb2tlLXdpZHRoPSIxLjgwOTE5Ii8+DQo8bGluZSB4MT0iNzk0LjI0NSIgeTE9IjI3NC41MyIgeDI9IjI2OC4yODIiIHkyPSI4MDAuNDkzIiBzdHJva2U9IiNFNkQ0REYiIHN0cm9rZS13aWR0aD0iMS44MDkxOSIvPg0KPC9nPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4NCjxyZWN0IHdpZHRoPSI1MzIuNDE4IiBoZWlnaHQ9IjUzMi40MTgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMzE0NSAtNi4wNjMxMSkiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4=);
            //     background-size: 200%;
            //     background-position: center;
            //     z-index: -1;
            //     opacity: 0;
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
