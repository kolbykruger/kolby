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
    props: {
        counter: Number
    },
    methods: {
        initTraveler() {
            this.resetTraveler()
            this.$nextTick(() => {
                setTimeout(() => {
                    this.traveler()
                }, 1100)
            })
        },
        traveler() {
            const tr = this.$refs.travelerBackground
            const travelers = document.querySelectorAll('[data-traveler]')
            //console.log(travelers)

            if (!travelers) {
                return false
            }

            gsap.registerPlugin(TweenLite)
            gsap.registerPlugin(ScrollTrigger)

            // sizes structure
            travelers.forEach(traveler => {
                const color = traveler.dataset.traveler

                ScrollTrigger.create({
                    trigger: traveler,
                    start: 'top 50%',
                    end: 'bottom',
                    markers: false,
                    onToggle: self => {
                        self.isActive
                    },
                    onUpdate: self => {
                        TweenLite.to(tr, 1.5, {
                            backgroundColor: color ? color : 'transparent'
                        })
                    }
                })
            })
        },
        resetTraveler() {
            const tr = this.$refs.travelerBackground
            TweenLite.to(tr, 1.5, {
                backgroundColor: 'transparent'
            })
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    user-select: none;
    mix-blend-mode: overlay;
    z-index: 1;

    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
    }

    &-background {
    }

    &-noise {
        background-image: url('/noise/noise.gif');
        background-size: auto;
        background-repeat: repeat;
        opacity: 0.3;
        z-index: 2;

        html[theme='dark'] & {
            opacity: 0.2;
        }
    }
}
</style>
