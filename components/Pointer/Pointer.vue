<template>
    <div class="pointer" aria-hidden="true" ref="pointer">
        <svg class="pointer-svg" width="80" height="80" viewBox="0 0 80 80" ref="pointerSVG">
            <circle
                vector-effect="non-scaling-stroke"
                class="pointer-circle"
                cx="40"
                cy="40"
                r="20"
                ref="pointerCircle"
            />
        </svg>
    </div>
</template>

<script>
import { gsap, TweenMax } from 'gsap'
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
                scale: {
                    previous: 0,
                    current: 0,
                    smooth: 0.2,
                    fill: '#000'
                },
                visible: false
            }
        }
    },
    methods: {
        render(pointer) {
            this.cursorProps.circle.x.current = this.cursor.x - this.cursorProps.bounds.circle.width / 2
            this.cursorProps.circle.y.current = this.cursor.y - this.cursorProps.bounds.circle.height / 2

            // Calculate lerps for smooth transitions
            for (const key in this.cursorProps.circle) {
                this.cursorProps.circle[key].previous = lerp(
                    this.cursorProps.circle[key].previous,
                    this.cursorProps.circle[key].current,
                    this.cursorProps.circle[key].smooth
                )
            }
            this.cursorProps.scale.previous = lerp(
                this.cursorProps.scale.previous,
                this.cursorProps.scale.current,
                this.cursorProps.scale.smooth
            )

            gsap.to(pointer.cursor, {
                x: this.cursorProps.circle.x.previous,
                y: this.cursorProps.circle.y.previous,
                force3D: true,
                overwrite: true,
                duration: 0.2,
                opacity: 1
            })

            pointer.circle.style.transform = `
                scale(${this.cursorProps.scale.previous})
            `

            requestAnimationFrame(() => {
                this.render(pointer)
            })
        }
    },
    mounted() {
        gsap.registerPlugin(TweenMax)

        const cursor = this.$refs.pointerSVG
        const circle = this.$refs.pointerCircle

        const cursorBounds = cursor.getBoundingClientRect()

        this.cursorProps.bounds.circle.width = cursorBounds.width
        this.cursorProps.bounds.circle.height = cursorBounds.height

        // If the pointer enters the document
        document.addEventListener('mouseenter', () => {
            if (this.cursorProps.visible) return
            this.cursorProps.visible = true
            this.cursorProps.scale.previous = this.cursorProps.scale.current = 0.2
        })

        // If the pointer leaves the document
        document.addEventListener('mouseleave', () => {
            if (!this.cursorProps.visible) return
            this.cursorProps.visible = false
            this.cursorProps.scale.previous = this.cursorProps.scale.current = 0
        })

        // Track cursor position and store pos
        window.addEventListener('mousemove', event => (this.cursor = { x: event.clientX, y: event.clientY }))

        // Loop through render call for Mouse Move
        requestAnimationFrame(() => {
            this.render({ cursor, circle })
        })
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

        &-svg {
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
        }

        &-circle {
            fill: #000;
            stroke: #000;
            stroke-width: 1.5px;
            transform-origin: 50% 50%;
            transform: scale(0);
            transition: transform 0.3s ease-in-out, opacity 0.1s;
            mix-blend-mode: exclusion;
        }

        &-text {
            position: absolute;
            top: 1.8rem;
            font-size: 1.25rem;
            line-height: 1;
            text-transform: uppercase;
            font-weight: 500;
            left: 80px;
        }
    }
}
</style>
