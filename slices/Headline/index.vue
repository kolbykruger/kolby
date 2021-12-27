<template>
    <section class="headline">
        <div class="container">
            <prismic-rich-text :field="slice.primary.title" class="headline-title" ref="headline" />
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'

export default {
    name: 'Headline',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    mounted() {
        gsap.registerPlugin(SplitText)
        gsap.registerPlugin(CustomEase)
        gsap.registerPlugin(ScrollTrigger)

        const headline = this.$refs.headline.childNodes[0]
        const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        const splitText = new SplitText(headline, {
            type: 'lines,words,chars',
            charsClass: 'headline-char',
            wordsClass: 'headline-word',
            linesClass: 'headline-line',
        })

        gsap.set(splitText.chars, {
            yPercent: 150,
            rotateX: 110,
            d: 1300,
        })

        ScrollTrigger.batch(headline, {
            start: 'top 90%',
            markers: false,
            onEnter: batch => {
                batch.forEach((section, i) => {
                    gsap.to(section.querySelectorAll('.headline-char'), {
                        yPercent: 0,
                        rotateX: 0,
                        d: 0,
                        ease: ease,
                        delay: i * 0.2,
                        stagger: 0.014,
                    })
                })
            },
        })
    },
}
</script>

<style lang="scss">
.headline {
    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    &-title {
        max-width: 80em;

        strong {
            color: c('primary-base');
            font-weight: inherit;
        }
    }

    &-line {
        overflow: hidden;
    }

    &-word {
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    + .headline {
        .container {
            padding-top: 0;
            margin-top: -10vh;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            margin-top: 0;
        }

        h3,
        h4,
        h5 {
            font-weight: 400;

            @media (min-width: 768px) {
                max-width: 52vw;
            }
        }
    }
}
</style>
