<template>
    <footer class="footer" ref="footer" data-exclusion>
        <div class="footer-rail">
            <div class="footer-rail-animate">
                <div class="container">
                    <h2 style="opacity: 0.5">Got a project?</h2>
                    <h2>Let's work together.</h2>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
    name: 'Footer',
    mounted() {
        const footer = this.$refs.footer
        const footerRail = footer.querySelector('.footer-rail')
        const footerRailAnimate = footer.querySelector('.footer-rail-animate')
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.defaults({
            toggleActions: 'restart complete restart reset',
            start: '0% bottom',
            end: '100% bottom',
            scrub: 0.6,
            markers: true,
            toggleClass: '-active'
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: footer
            }
        }).fromTo(footerRailAnimate, { y: '-50%' }, { y: 0, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' })

        // ScrollTrigger.create({
        //     onUpdate: self => {
        //         let skew = self.getVelocity()
        //         console.log(skew)
        //     }
        // })
    }
}
</script>

<style lang="scss" scoped>
.footer {
    height: 78vh;
    overflow: hidden;
    background-color: #0b0e11;
    color: #f4f1ee;

    &-rail {
    }

    .container {
        height: 100%;
        display: grid;
        place-content: center;
    }
}
</style>
