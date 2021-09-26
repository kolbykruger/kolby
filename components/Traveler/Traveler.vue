<template>
    <div class="traveler" ref="traveler" aria-hidden="true">
        <span ref="travelerBackground" class="traveler-background"></span>
        <span ref="travelerNoise" class="traveler-noise"></span>
        <span class="visually-hidden">{{ counter }}</span>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { TweenLite } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
    name: 'Traveler',
    data() {
        return {
            animations: null,
            elems: null
        }
    },
    props: {
        counter: Number
    },
    methods: {
        initTraveler() {
            this.resetTraveler()
            this.$nextTick(() => {
                setTimeout(() => {
                    this.getTravelers()
                }, 1100)
            })
        },
        getTravelers() {
            const travelers = document.querySelectorAll('[data-traveler]')

            if (!travelers) {
                return false
            }

            this.resetTraveler()

            gsap.registerPlugin(TweenLite)
            gsap.registerPlugin(ScrollTrigger)

            this.elems = travelers
            this.createAnimations()
        },
        createAnimations() {
            this.animations = gsap.utils.toArray(this.elems).map(el => {
                const color = el.dataset.traveler ? el.dataset.traveler : 'transparent'
                return gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 50%',
                        end: 'bottom',
                        markers: false,
                        animation: this.tl,
                        onToggle: self => {
                            self.isActive
                        },
                        onUpdate: self => {
                            self.isActive ? this.animateColor(color) : this.animateColor('transparent')
                        }
                    }
                })
            })
        },
        destroyAnimations() {
            if (!this.animations) {
                return false
            }
            ScrollTrigger.refresh()
            this.animations.forEach(anim => {
                if (anim) {
                    anim.kill()
                }
            })
        },
        animateColor(color) {
            const tr = this.$refs.travelerBackground

            TweenLite.to(tr, 1.5, {
                backgroundColor: color ? color : 'transparent'
            })
        },
        resetTraveler() {
            const tr = this.$refs.travelerBackground
            TweenLite.to(tr, 1.5, {
                backgroundColor: 'transparent'
            })
            this.destroyAnimations()
            this.elems = null
        }
    },
    mounted() {
        this.initTraveler()
    },
    updated() {
        this.initTraveler()
    },
    watch: {
        $route() {
            this.resetTraveler()
        },
        loadingStatus(value) {
            if (!value) {
                this.initTraveler()
            }
        }
    }
}
</script>

<style lang="scss">
.traveler {
    pointer-events: none;
    user-select: none;
    mix-blend-mode: overlay;

    span {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
    }

    &-background {
        z-index: -1;
    }

    &-noise {
        z-index: 1000;
        background-image: url('/noise/noise.gif');
        background-size: auto;
        background-repeat: repeat;
        opacity: 0.4;

        html[theme='dark'] & {
            opacity: 0.12;
        }
    }
}
</style>
