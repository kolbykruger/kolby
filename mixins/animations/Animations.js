import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const Animations = {
    name: 'Animations',
    data() {
        return {
            animations: null,
            elems: null
        }
    },
    methods: {
        initAnimations() {
            this.resetAnimations()
            this.$nextTick(() => {
                setTimeout(() => {
                    this.getAnimations()
                }, 1100)
            })
        },
        getAnimations() {
            const sections = document.querySelectorAll('[data-anim]')

            if (!sections) {
                return false
            }

            this.resetAnimations()

            gsap.registerPlugin(ScrollTrigger)

            this.elems = sections
            this.createAnimations()
        },
        createAnimations() {
            this.animations = gsap.utils.toArray(this.elems).map(el => {
                return gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: 'top bottom',
                        markers: false,
                        animation: this.tl,
                        onEnter: ({ self, progress, direction, isActive }) => {
                            // gsap.to(el, {
                            //     rotate: +180
                            // })
                            self.isActive
                        }
                    }
                })
            })
        },
        resetAnimations() {
            this.destroyAnimations()
            this.elems = null
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
        }
    },
    mounted() {
        this.initAnimations()
    },
    updated() {
        this.initAnimations()
    },
    watch: {
        $route() {
            this.resetAnimations()
        },
        loadingStatus(value) {
            if (!value) {
                this.initTraveler()
            }
        }
    }
}
