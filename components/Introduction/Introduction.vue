<template>
    <section class="introduction" ref="intro">
        <div class="container">
            <NameTitle ref="title" />
            <h2 ref="subTitle" class="introduction-subtitle">I design and create web <b>experiences</b></h2>
            <!-- <p ref="description" class="introduction-description">
                I'm a designer & developer based in Vermont that is passionate about creating extraordinary online
                experiences through web design, web development, and ux/ui.
            </p> -->
            <button
                ref="button"
                @click="scrollNext"
                data-stick
                data-progress="4"
                data-callback="intro"
                class="introduction-indicator"
            >
                <svg viewBox="0 0 97 67" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m1.9986 12.996c-1.1011-0.088-1.9986-0.9754-1.9986-2.08l-6.7312e-7 -8.9158c-8.3393e-8 -1.1046 0.89943-2.0053 2.0025-1.9476 28.898 1.5128 51.94 35.49 52.962 64.518 0.0389 1.1039-0.86 1.9959-1.9646 1.9959h-9.2c-1.1046 0-1.9958-0.8943-2.0454-1.9978-1.0151-22.584-18.921-49.908-39.756-51.572z"
                        fill="#0B0E11"
                    />
                    <path
                        d="m44 66.566c-1.1046 0-2.0035-0.892-1.9646-1.9959 1.0222-29.027 24.064-63.005 52.962-64.518 1.1031-0.057744 2.0025 0.84303 2.0025 1.9476v8.9158c0 1.1046-0.8975 1.992-1.9985 2.0807-20.748 1.6715-38.736 28.991-39.756 51.572-0.0498 1.1035-0.941 1.9978-2.0456 1.9978h-9.2z"
                        fill="#0B0E11"
                    />
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'
import NameTitle from '@/components/Pageheading/NameTitle.vue'

export default {
    name: 'Introduction',
    components: {
        NameTitle,
    },
    methods: {
        scrollNext() {
            const next = this.$refs.intro.nextElementSibling.childNodes[0]
            const nextBounds = next.getBoundingClientRect()
            const nextOffset = nextBounds.top
            const nextHeight = (nextBounds.height - window.innerHeight) / 2
            const scrollPos = nextOffset + nextHeight
            window.scrollTo({
                top: scrollPos,
                behavior: 'smooth',
            })
        },
    },
    mounted() {
        gsap.registerPlugin(SplitText)
        gsap.registerPlugin(CustomEase)
        const ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')
        const tl = gsap.timeline()
        const splitTextOptions = {
            type: 'lines,words,chars',
            charsClass: 'pageheading-char',
            wordsClass: 'pageheading-word',
            linesClass: 'pageheading-line',
        }

        const intro = this.$refs.intro
        const title = intro.querySelectorAll('.name-title-text')
        const star = intro.querySelector('.name-title-star')
        const splitTitle = new SplitText(title, splitTextOptions)
        const splitSubTitle = new SplitText(this.$refs.subTitle, splitTextOptions)
        const splitDescription = new SplitText(this.$refs.description, splitTextOptions)
        const splitButton = this.$refs.button

        tl.set(splitTitle.chars, {
            y: '100%',
            rotateX: 110,
            d: 1300,
        })
        tl.set(splitSubTitle.chars, {
            y: '100%',
            rotateX: 110,
            d: 1300,
        })
            .set(star, {
                scale: 0,
            })
            .set(splitDescription.chars, {
                y: '100%',
                rotateX: 110,
                d: 1300,
                opacity: 0,
            })
            .set(splitButton, {
                y: '30%',
                rotateX: 110,
                d: 1300,
                opacity: 0,
            })
            .staggerTo(
                splitTitle.chars,
                0.95,
                {
                    y: '0%',
                    rotateX: 0,
                    d: 0,
                    ease: 'Power2.easeOut',
                    delay: 1.16,
                },
                0.014
            )
            .to(star, 1, {
                scale: 1,
                delay: -0.8,
                ease: 'Power2.easeOut',
            })
            .staggerTo(
                splitSubTitle.chars,
                0.68,
                {
                    y: '0%',
                    rotateX: 0,
                    d: 0,
                    ease: 'Power2.easeOut',
                    delay: -0.6,
                },
                0.014
            )
            .staggerTo(
                splitDescription.chars,
                0.68,
                {
                    y: '0%',
                    rotateX: 0,
                    d: 0,
                    opacity: 1,
                    ease: 'Power1.easeOut',
                    delay: -0.4,
                },
                0.003
            )
            .staggerTo(
                splitButton,
                0.68,
                {
                    y: '0%',
                    rotateX: 0,
                    d: 0,
                    opacity: 1,
                    ease: 'Power1.easeOut',
                    delay: -0.4,
                },
                0.014
            )
    },
}
</script>

<style lang="scss">
.introduction {
    position: relative;
    min-height: 100vh;
    margin-top: calc(#{var(--offset)} * -1);
    overflow: hidden;

    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    &-subtitle {
        max-width: 9em;
        margin-top: 1em;
        // margin-bottom: 1em;

        b {
            color: c('primary-base');
        }
    }

    &-description {
        max-width: 25em;
    }

    &-indicator {
        position: absolute;
        bottom: 6vh;
        --size: 3em;
        width: var(--size);
        height: var(--size);
        padding: 1em;
        border-radius: 50%;

        svg {
            path {
                fill: c('base-0');
            }
        }
    }
}
</style>
