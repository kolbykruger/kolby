<template>
    <div class="traveler" ref="traveler" aria-hidden="true">
        <div class="traveler-blend" v-if="!status">
            <span ref="travelerBackground" class="traveler-background"></span>
            <span ref="travelerNoise" class="traveler-noise"></span>
        </div>
        <span class="visually-hidden" aria-hidden="true">{{ counter }}</span>
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
            elems: null,
        }
    },
    computed: {
        status() {
            return this.$store.state.menu.open
        },
    },
    props: {
        counter: Number,
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
                        },
                    },
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
                '--color': color ? color : 'transparent',
            })
        },
        resetTraveler() {
            const tr = this.$refs.travelerBackground
            TweenLite.to(tr, 1.5, {
                '--color': 'transparent',
            })
            this.destroyAnimations()
            this.elems = null
        },
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
        },
    },
}
</script>

<style lang="scss">
.traveler {
    pointer-events: none;
    user-select: none;

    &.-initiated {
        // Performance for when menu is open
        display: none;
    }

    &-blend {
        mix-blend-mode: overlay;
    }

    :where(span) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
    }

    &-background {
        --color: var(--color-background);
        background: linear-gradient(to right, var(--color) 60%, c('background'));
    }

    &-noise {
        @include mq('tablet') {
            top: -10rem;
            left: -10rem;
            width: calc(100% + 20rem);
            height: calc(100% + 20rem);
            background-image: url('/noise/noise-2.png');
            background-size: auto;
            background-repeat: repeat;
            animation: noise 1s steps(2) infinite;
            opacity: 0.8;
            z-index: 1000;

            html[theme='dark'] & {
                opacity: 0.3;
            }

            @keyframes noise {
                0% {
                    transform: translate3d(0, 9rem, 0);
                }
                10% {
                    transform: translate3d(-1rem, -4rem, 0);
                }
                20% {
                    transform: translate3d(-8rem, 2rem, 0);
                }
                30% {
                    transform: translate3d(9rem, -9rem, 0);
                }
                40% {
                    transform: translate3d(-2rem, 7rem, 0);
                }
                50% {
                    transform: translate3d(-9rem, -4rem, 0);
                }
                60% {
                    transform: translate3d(2rem, 6rem, 0);
                }
                70% {
                    transform: translate3d(7rem, -8rem, 0);
                }
                80% {
                    transform: translate3d(-9rem, 1rem, 0);
                }
                90% {
                    transform: translate3d(6rem, -5rem, 0);
                }
                to {
                    transform: translate3d(-7rem, 0, 0);
                }
            }
        }
    }

    // &-injection {
    //     // mix-blend-mode: overlay;

    //     iframe {
    //         position: absolute;
    //         top: 0;
    //         left: 0;
    //         width: 100%;
    //         height: 100%;
    //         object-fit: cover;
    //     }
    // }

    // &-dots {
    //     background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpiWLly5X8gYCCEGUEEMYCJgUgwqhAvAAgwANmrIO6kDMxtAAAAAElFTkSuQmCC');
    //     background-size: 10px 10px;
    //     margin-top: calc(var(--offset) + 10vh - 1em);

    //     @include mq('phone-small') {
    //         margin-left: calc(30px - 1em);
    //         margin-right: calc(30px - 1em);
    //     }
    //     @include mq('phone-large') {
    //         margin-left: calc(100px - 1em);
    //         margin-right: calc(100px - 1em);
    //     }
    //     @include mq('laptop-small') {
    //         margin-left: calc(120px - 1em);
    //         margin-right: calc(120px - 1em);
    //     }
    //     @include mq('laptop') {
    //         margin-left: calc(150px - 1em);
    //         margin-right: calc(150px - 1em);
    //     }
    //     @include mq('laptop-large') {
    //         margin-left: calc(180px - 1em);
    //         margin-right: calc(180px - 1em);
    //     }
    //     @include mq('desktop-small') {
    //         margin-left: calc(220px - 1em);
    //         margin-right: calc(220px - 1em);
    //     }
    //     @include mq('desktop') {
    //         margin-left: calc(270px - 1em);
    //         margin-right: calc(270px - 1em);
    //     }
    // }
}
</style>
