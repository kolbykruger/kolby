<template>
    <div class="pointer" aria-hidden="false" ref="pointer">
        <svg class="pointer-svg" width="80" height="80" viewBox="0 0 80 80" ref="pointerSVG">
            <circle
                vector-effect="non-scaling-stroke"
                class="pointer-svg-circle"
                cx="40"
                cy="40"
                r="20"
                ref="pointerSVGCircle"
            />
        </svg>
        <div class="pointer-trail"></div>
        <div class="pointer-text"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
    name: 'Pointer',
    mounted() {
        const pointer = this.$refs.pointerSVG
        const circle = this.$refs.pointerSVGCircle
        const bounds = pointer.getBoundingClientRect()

        const mouse = {
            x: 0,
            y: 0
        }

        window.addEventListener('mouseenter', event => {
            pointer.style.visibility = 'visible'
            pointer.style.opacity = 1
            circle.style.transform = `scale(1)`
        })

        window.addEventListener('mouseleave', event => {
            pointer.style.visibility = 'hidden'
            pointer.style.opacity = 0
            circle.style.transform = `scale(0)`
        })

        window.addEventListener('mousemove', event => {
            mouse.x = event.clientX - bounds.width / 2
            mouse.y = event.clientY - bounds.height / 2

            requestAnimationFrame(() => {
                //pointer.style.transform = `translateX(${mouse.x}px) translateY(${mouse.y}px)`
                circle.style.transform = `scale(1)`
                gsap.to(pointer, {
                    duration: 0.9,
                    ease: 'Power3.easeOut',
                    opacity: 1,
                    transform: `translateX(${mouse.x}px) translateY(${mouse.y}px)`
                })
            })
        })
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
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        mix-blend-mode: difference;
        z-index: 9999;

        &-svg {
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;

            &-circle {
                fill: none;
                stroke: #000;
                stroke-width: 1px;
                transform-origin: 50% 50%;
                transform: scale(0);
            }
        }

        &-text {
            position: absolute;
            top: 1.875rem;
            left: 80px;
            font-size: 0.857rem;
            text-transform: uppercase;
            font-weight: 500;
        }
    }
}
</style>
