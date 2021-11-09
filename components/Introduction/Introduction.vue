<template>
    <section class="introduction">
        <div class="container">
            <h1 ref="title" class="introduction-title">Kolby Kruger</h1>
            <h2 ref="subTitle" class="introduction-subtitle">I design and create web <b>experiences</b></h2>
            <p ref="description" class="introduction-description">
                I'm a designer & developer based in Vermont that is passionate about creating extraordinary online
                experiences through web design, web development, and ux/ui.
            </p>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'

export default {
    name: 'Introduction',
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
        const splitTitle = new SplitText(this.$refs.title, splitTextOptions)
        const splitSubTitle = new SplitText(this.$refs.subTitle, splitTextOptions)
        const splitDescription = new SplitText(this.$refs.description, splitTextOptions)

        tl.set(splitTitle.chars, {
            y: '100%',
            rotateX: 110,
            d: 1300,
        })
            .set(splitSubTitle.chars, {
                y: '100%',
                rotateX: 110,
                d: 1300,
            })
            .set(splitDescription.chars, {
                y: '100%',
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
            .staggerTo(
                splitSubTitle.chars,
                0.95,
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
                0.5,
                {
                    y: '0%',
                    rotateX: 0,
                    d: 0,
                    opacity: 1,
                    ease: 'Power1.easeOut',
                    delay: -0.6,
                },
                0.004
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

    &-title {
        margin-bottom: 0;
    }

    &-subtitle {
        max-width: 9em;
        margin-top: 1em;
        margin-bottom: 1em;

        b {
            color: c('primary-base');
        }
    }

    &-description {
        max-width: 25em;
    }
}
</style>
