<template>
    <component :is="tag" ref="title" class="name-title" data-anim>
        <span class="name-title-text" ref="firstName"> Kolby </span>
        <span class="name-title-star" ref="star">
            <svg
                enable-background="new 0 0 14.4 14.5"
                version="1.1"
                viewBox="0 0 14.4 14.5"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon
                    points="7.2 1.3 8.4 4.5 11.4 3 10 6.1 13.2 7.2 10 8.4 11.4 11.5 8.4 10 7.2 13.2 6.1 10 3 11.5 4.5 8.4 1.2 7.2 4.5 6.1 3 3 6.1 4.5"
                />

                <path
                    d="m6.5 1.5c0.4 1.1 0.8 2.1 1.1 3.2 0.1 0.4 0.7 0.4 1 0.2 1-0.5 2.1-1 3.1-1.5-0.3-0.2-0.7-0.3-1-0.5-0.4 1.1-0.9 2.1-1.4 3.1-0.1 0.2 0 0.5 0.3 0.6 1.1 0.4 2.1 0.8 3.2 1.1 0.1-0.3 0.2-0.7 0.3-1-1.1 0.4-2.2 0.8-3.3 1.2-0.2 0.1-0.7 0.3-0.6 0.7 0.5 1 1 2.1 1.5 3.1 0.4-0.2 0.8-0.5 1.1-0.7-1-0.5-2.1-1-3.1-1.5-0.3-0.2-1 0-1.1 0.4-0.3 1.1-0.7 2.1-1.1 3.2 0.5 0 1-0.1 1.4-0.1-0.4-1.1-0.8-2.1-1.1-3.2-0.1-0.4-0.7-0.4-1-0.2-1 0.5-2.1 1-3.1 1.5 0.3 0.2 0.7 0.3 1 0.5 0.5-1 1-2.1 1.5-3.1 0.1-0.2 0-0.5-0.3-0.6-1.1-0.4-2.2-0.8-3.2-1.2-0.1 0.3-0.2 0.7-0.3 1 1.1-0.3 2.1-0.7 3.2-1.1 0.2-0.1 0.8-0.4 0.6-0.7-0.5-1-1-2.1-1.5-3.1-0.4 0.3-0.7 0.5-1.1 0.7 1 0.5 2.1 1 3.1 1.5 0.3 0.2 1 0 1.1-0.4 0.4-1.1 0.8-2.1 1.1-3.2 0.3-0.8-1.2-0.8-1.4-0.2-0.4 1.1-0.7 2.1-1.1 3.2 0.3-0.1 0.7-0.3 1.1-0.4-1-0.5-2.1-1-3.1-1.5-0.3-0.1-1.4 0.2-1.1 0.7 0.5 1 1 2.1 1.5 3.1 0.2-0.2 0.4-0.5 0.6-0.7-1.1 0.4-2.2 0.7-3.3 1.1-0.4 0.1-0.9 0.8-0.3 1 1.1 0.4 2.2 0.8 3.2 1.2-0.1-0.2-0.1-0.4-0.2-0.6-0.5 1-1 2.1-1.5 3.1-0.3 0.6 0.7 0.7 1 0.5 1-0.5 2.1-1 3.1-1.5-0.3-0.1-0.7-0.2-1-0.2 0.4 1.1 0.8 2.1 1.1 3.2 0.2 0.6 1.2 0.4 1.4-0.1 0.4-1.1 0.8-2.1 1.1-3.2-0.4 0.1-0.7 0.3-1.1 0.4 1 0.5 2.1 1 3.1 1.5 0.3 0.2 1.4-0.2 1.1-0.7-0.5-1-1-2.1-1.5-3.1-0.2 0.2-0.4 0.5-0.6 0.7 1.1-0.4 2.1-0.8 3.2-1.1 0.4-0.1 0.9-0.8 0.3-1-1.1-0.4-2.1-0.8-3.2-1.1l0.3 0.6c0.5-1 1-2.1 1.5-3.1 0.3-0.6-0.7-0.7-1-0.5-1 0.5-2.1 1-3.1 1.5 0.3 0.1 0.7 0.2 1 0.2-0.3-1.2-0.7-2.3-1.1-3.3-0.2-0.7-1.6-0.3-1.4 0.4z"
                />
            </svg>
        </span>
        <span class="name-title-text" ref="lastName"> Kruger </span>
    </component>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'

export default {
    name: 'NameTitle',
    props: {
        tag: {
            type: String,
            default: 'h1',
        },
        animation: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        gsap.registerPlugin(SplitText)
        gsap.registerPlugin(CustomEase)
        gsap.registerPlugin(ScrollTrigger)

        if (!this.animation) {
            return false
        }

        const timeline = gsap.timeline()
        const ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')
        const nametitle = this.$refs.title
        const firstName = this.$refs.firstName
        const lastName = this.$refs.lastName
        const star = this.$refs.star

        const splitTextOptions = {
            type: 'lines,words,chars',
            charsClass: 'name-title-char',
            wordsClass: 'name-title-word',
            linesClass: 'name-title-line',
        }

        const firstNameSplitText = new SplitText(firstName, splitTextOptions)
        const lastNameSplitText = new SplitText(lastName, splitTextOptions)

        const name = gsap.utils.toArray([...firstNameSplitText.chars, ...lastNameSplitText.chars])

        timeline
            .set(name, {
                yPercent: 100,
                rotateX: 110,
                d: 1300,
            })
            .set(star, {
                scale: 0,
            })

        ScrollTrigger.batch(name, {
            trigger: nametitle,
            start: 'top 90%',
            markers: false,
            onEnter: batch => {
                timeline
                    .to(batch, {
                        yPercent: 0,
                        rotateX: 0,
                        d: 0,
                        ease: ease,
                        duration: 1.6,
                        delay: 0.2,
                        stagger: 0.014,
                    })
                    .to(star, 1, {
                        scale: 1,
                        delay: -0.8,
                        ease: 'Power2.easeOut',
                    })
            },
        })
    },
}
</script>

<style lang="scss">
.name-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 6.25vw;
    font-size: clamp(3.815rem, -0.875rem + 8.333vw, 11.642rem);
    width: 100%;

    &-text {
        flex: 1;

        &:first-of-type {
            text-align: right;

            .pageheading-line {
                text-align: right !important;
            }
        }

        &:last-of-type {
            text-align: left;

            .pageheading-line {
                text-align: left !important;
            }
        }
    }

    &-star {
        max-width: 50px;
        max-width: clamp(20px, -0.875rem + 3.333vw, 50px);
        width: 100%;
        margin: 0 2.5vw;

        svg {
            width: 100%;
            max-width: 50px;
            animation: star 6s linear infinite;

            @keyframes star {
                to {
                    transform: rotate(360deg);
                }
            }

            path,
            polygon {
                fill: c('base-0');
            }
        }
    }

    &-line {
        overflow: hidden;
    }

    &-word {
        perspective: 1000px;
        transform-style: preserve-3d;
    }
}
</style>
