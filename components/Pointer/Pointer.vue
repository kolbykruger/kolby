<template>
    <div class="pointer" aria-hidden="true" ref="pointer">
        <span class="pointer-svg" ref="pointerSVG">
            <span class="pointer-circle" ref="pointerCircle"></span>
            <span class="pointer-text" ref="pointerText">{{ cursorProps.caption.text }}</span>
        </span>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { lerp } from '~/plugins/utils'

export default {
    name: 'Pointer',
    data() {
        return {
            cursor: {
                x: 0,
                y: 0
            },
            cursorProps: {
                bounds: {
                    circle: {
                        width: 0,
                        height: 0
                    },
                    text: {
                        width: 0,
                        height: 0
                    }
                },
                circle: {
                    x: {
                        previous: 0,
                        current: 0,
                        smooth: 0.2
                    },
                    y: {
                        previous: 0,
                        current: 0,
                        smooth: 0.2
                    }
                },
                stick: {
                    active: false,
                    x: 0,
                    y: 0
                },
                magnetic: {
                    active: false,
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    s: 0.2
                },
                caption: {
                    active: false,
                    text: null
                },
                // scale: {
                //     previous: 0,
                //     current: 0,
                //     smooth: 0.2,
                //     active: 0.18,
                //     inactive: 1.32,
                //     default: 0.18
                // },
                fill: '#000',
                visible: false
            }
        }
    },
    methods: {
        render(pointer) {
            // Default cursor active
            if (!this.cursorProps.stick.active) {
                this.cursorProps.circle.x.current = this.cursor.x - this.cursorProps.bounds.circle.width / 2
                this.cursorProps.circle.y.current = this.cursor.y - this.cursorProps.bounds.circle.height / 2
            }

            // Stick active
            if (this.cursorProps.stick.active) {
                this.cursorProps.circle.x.current =
                    this.cursorProps.stick.x - (this.cursorProps.stick.x - this.cursor.x) * 0.15
                this.cursorProps.circle.y.current =
                    this.cursorProps.stick.y - (this.cursorProps.stick.y - this.cursor.y) * 0.15
            }

            // Calculate lerps for smooth transitions
            for (const key in this.cursorProps.circle) {
                this.cursorProps.circle[key].previous = lerp(
                    this.cursorProps.circle[key].previous,
                    this.cursorProps.circle[key].current,
                    this.cursorProps.circle[key].smooth
                )
            }
            // this.cursorProps.scale.previous = lerp(
            //     this.cursorProps.scale.previous,
            //     this.cursorProps.scale.current,
            //     this.cursorProps.scale.smooth
            // )

            this.move(this.cursorProps.circle.x.previous, this.cursorProps.circle.y.previous, 0.2, pointer.cursor)

            // pointer.circle.style.transform = `
            //     scale(${this.cursorProps.scale.previous})
            // `
            // gsap.to(pointer.circle, 0, {
            //     scale: this.cursorProps.scale.previous
            // })
            // pointer.circle.style.background = this.cursorProps.fill

            requestAnimationFrame(() => {
                this.render(pointer)
            })
        },
        move(x, y, duration, elem) {
            gsap.to(elem, {
                x: x,
                y: y,
                force3D: true,
                overwrite: true,
                duration: duration || 0.2,
                opacity: 1
            })
        },
        actionables() {
            this.sticks()
            this.magnetics()
            this.captions()
            this.exclusions()
        },
        sticks() {
            const sticks = document.querySelectorAll('[data-anchor]')

            console.log(sticks)

            if (!sticks) {
                return false
            }
            sticks.forEach(stick => {
                stick.addEventListener('mouseenter', () => {
                    this.setState('-stick')
                    const bounds = stick.getBoundingClientRect()
                    this.cursorProps.stick.active = true
                    this.cursorProps.stick.x = bounds.left + bounds.width / 2 - this.cursorProps.bounds.circle.width / 2
                    this.cursorProps.stick.y =
                        bounds.top + bounds.height / 2 - this.cursorProps.bounds.circle.height / 2
                    // this.cursorProps.scale.previous = this.cursorProps.scale.current = 1.5
                })
                stick.addEventListener('mouseleave', () => {
                    this.removeState('-stick')
                    this.cursorProps.stick.active = false
                    // this.cursorProps.scale.previous = this.cursorProps.scale.current = 0.18
                })
            })
        },
        magnetics() {
            const magnetics = document.querySelectorAll('[data-magnetic]')
            if (!magnetics) {
                return false
            }
            magnetics.forEach(magnet => {
                magnet.addEventListener('mouseenter', () => {
                    this.setState('-magnetic')
                    this.cursorProps.magnetic.active = true
                    const bounds = magnet.getBoundingClientRect()
                    this.cursorProps.magnetic.x = bounds.left - window.pageXOffset
                    this.cursorProps.magnetic.y = bounds.top - window.pageYOffset
                    this.cursorProps.magnetic.width = bounds.width
                    this.cursorProps.magnetic.height = bounds.height
                    this.cursorProps.magnetic.s = 0.2
                })
                magnet.addEventListener('mouseleave', () => {
                    this.removeState('-magnetic')
                    this.cursorProps.magnetic.active = false
                    this.cursorProps.magnetic.s = 0.7
                    requestAnimationFrame(() => {
                        this.move(0, 0, this.cursorProps.magnetic.s, magnet)
                    })
                })
                magnet.addEventListener('mousemove', () => {
                    const x = (this.cursor.x - this.cursorProps.magnetic.x - this.cursorProps.magnetic.width / 2) * 0.2
                    const y = (this.cursor.y - this.cursorProps.magnetic.y - this.cursorProps.magnetic.height / 2) * 0.2

                    requestAnimationFrame(() => {
                        this.move(x, y, this.cursorProps.magnetic.s, magnet)
                    })
                })
            })
        },
        captions() {
            const captions = document.querySelectorAll('[data-caption]')
            if (!captions) {
                return false
            }
            captions.forEach(caption => {
                caption.addEventListener('mouseenter', () => {
                    const text = caption.dataset.caption
                    this.setState('-caption')
                    this.cursorProps.caption.active = true
                    this.cursorProps.caption.text = text
                    this.$refs.pointerText.style.opacity = 1
                })
                caption.addEventListener('mouseleave', () => {
                    this.removeState('-caption')
                    this.cursorProps.caption.active = false
                    this.cursorProps.caption.text = null
                    this.$refs.pointerText.style.opacity = 0
                })
            })
        },
        exclusions() {
            const exclusions = document.querySelectorAll('[data-exclusion]')
            if (!exclusions) {
                return false
            }
            exclusions.forEach(exclusion => {
                exclusion.addEventListener('mouseenter', () => {
                    this.setState('-exclusion')
                })
                exclusion.addEventListener('mouseleave', () => {
                    this.removeState('-exclusion')
                })
            })
        },
        setState(state) {
            const pointer = this.$refs.pointer
            pointer.classList.add(state)
        },
        removeState(state) {
            const pointer = this.$refs.pointer
            pointer.classList.remove(state)
        }
    },
    mounted() {
        const cursor = this.$refs.pointerSVG
        const circle = this.$refs.pointerCircle
        const text = this.$refs.pointerText
        const cursorBounds = cursor.getBoundingClientRect()

        this.cursorProps.bounds.circle.width = cursorBounds.width
        this.cursorProps.bounds.circle.height = cursorBounds.height

        // If the pointer enters the document
        document.addEventListener('mouseenter', () => {
            if (this.cursorProps.visible) return
            this.cursorProps.visible = true
            this.setState('-visible')
            // this.cursorProps.scale.previous = this.cursorProps.scale.current = this.cursorProps.scale.default
        })

        // If the pointer leaves the document
        document.addEventListener('mouseleave', () => {
            if (!this.cursorProps.visible) return
            this.cursorProps.visible = false
            this.removeState('-visible')
            // this.cursorProps.scale.previous = this.cursorProps.scale.current = 0
        })

        // Track cursor position and store pos
        window.addEventListener('mousemove', event => {
            this.cursor = { x: event.clientX, y: event.clientY }
            if (this.cursorProps.visible) return
            this.cursorProps.visible = true
            this.setState('-visible')
        })

        // Mouse clicks for micro-interactivity
        window.addEventListener('mousedown', () => {
            this.setState('-active')
            //this.cursorProps.scale.previous = this.cursorProps.scale.current = this.cursorProps.scale.active
        })

        window.addEventListener('mouseup', () => {
            this.removeState('-active')
            //this.cursorProps.scale.previous = this.cursorProps.scale.current = this.cursorProps.scale.inactive
        })

        // Loop through render call for Mouse Move
        requestAnimationFrame(() => {
            this.render({ cursor, circle, text })
        })

        // Start Actionables
        this.actionables()
    },
    watch: {
        $route(to, from) {
            console.log(to)
            this.actionables()
        }
    }
}
</script>

//
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
        z-index: 9999;

        &.-visible {
            .pointer-circle {
                transform: scale(0.2);
            }
            &.-active {
                .pointer-circle {
                    transform: scale(0.23);
                    background: rgba(0, 0, 0, 0.9);
                }
            }
        }

        &.-exclusion {
            mix-blend-mode: exclusion;
            .pointer-circle {
                background: #fff;
                transform: scale(1.8);
            }
            &.-active {
                .pointer-circle {
                    background: #fff;
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
            background: currentColor;
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
            color: #fff;
            font-size: 1.125rem;
            line-height: 1;
            font-weight: 500;
            text-transform: uppercase;
            opacity: 0;
            transition: transform 0.3s, opacity 0.4s;
            z-index: 3;
        }
    }
}
</style>
