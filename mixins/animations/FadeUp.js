import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'

export const FadeUp = {
    name: 'FadeUp',
    mounted() {
        // gsap.registerPlugin(ScrollTrigger)
        // gsap.registerPlugin(CustomEase)
        // const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1')
        // const transitionConfig = {
        //     yPercent: 0,
        //     alpha: 1,
        //     ease: ease,
        //     delay: 0.2,
        //     stagger: 0.02,
        // }
        // const anims = document.querySelectorAll('[data-anim]')
        // gsap.set('[data-anim], [data-anim-child]', {
        //     yPercent: 8,
        //     alpha: 0,
        // })
        // ScrollTrigger.batch('[data-anim]', {
        //     start: 'top 80%',
        //     onEnter: batch => {
        //         const children = batch.filter
        //         batch.forEach((section, i) => {
        //             const children = section.querySelectorAll('[data-anim-child]')
        //             if (children) {
        //                 gsap.set(batch, {
        //                     yPercent: 0,
        //                     alpha: 1,
        //                 })
        //                 gsap.to(children, transitionConfig)
        //             } else {
        //                 gsap.to(batch, transitionConfig)
        //             }
        //         })
        //     },
        // })
    },
}
