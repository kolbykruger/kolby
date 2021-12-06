import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'

export const Animations = {
    name: 'Animations',
    data() {
        return {
            timeline: null,
            animations: null,
            elems: null,
            ease: null,
        }
    },
    methods: {
        initAnimations() {
            this.resetAnimations()
            this.$router.onReady(() => {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.getAnimations()
                    }, 1000)
                })
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
            this.timeline = gsap.timeline()
            this.animations = gsap.utils.toArray(this.elems).map((el, i) => {
                // Props
                // Start
                const start = el.getAttribute('data-anim-start') || '80%'
                // Duration
                const duration = el.getAttribute('data-anim-duration') || 0.95
                // Elements
                let targets = el
                const elements = el.getAttribute('data-anim-elements')
                if (elements != '' && elements && elements != null) {
                    targets = elements
                }
                // Stagger
                const stagger = el.getAttribute('data-anim-stagger') || 0.2

                return this.timeline
                    .set(targets, {
                        y: '12%',
                        opacity: 0,
                    })
                    .to(targets, duration, {
                        scrollTrigger: {
                            trigger: el,
                            start: 'top ' + start,
                            toggleActions: 'play none none none',
                            markers: false,
                            animation: this.tl,
                            onEnter: () => {
                                el.classList.add('anim--active')

                                gsap.to(targets, duration, {
                                    y: '0%',
                                    opacity: 1,
                                    ease: this.ease,
                                    duration: duration,
                                    stagger: targets.length > 1 ? stagger : 0,
                                })
                            },
                        },
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
        },
    },
    mounted() {
        gsap.registerPlugin(CustomEase)
        this.ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')
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
        },
    },
}
