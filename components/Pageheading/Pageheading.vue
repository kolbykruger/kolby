<template>
    <section class="pageheading" :class="size ? 'pageheading-size-' + size : ''" ref="pageheading">
        <div class="container">
            <div class="pageheading-name">
                <h1 aria-hidden="true" :aria-label="pagename" class="pageheading-title" ref="pageheadingTitle">
                    {{ pagename }}
                </h1>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'

export default {
    name: 'pageheading',
    props: {
        name: [String, Object, Array],
        size: String,
    },
    computed: {
        pagename() {
            let name = this.name ? (typeof this.name == 'object' ? this.name[0].text : this.name) : 'Pageheading'
            return name
        },
    },
    mounted() {
        gsap.registerPlugin(SplitText)
        gsap.registerPlugin(CustomEase)
        const ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')
        const tl = gsap.timeline()
        const title = this.$refs.pageheadingTitle
        const splitText = new SplitText(title, {
            type: 'lines,words,chars',
            charsClass: 'pageheading-char',
            wordsClass: 'pageheading-word',
            linesClass: 'pageheading-line',
        })
        tl.set(splitText.chars, {
            y: '100%',
            rotateX: 110,
            d: 1300,
        }).staggerTo(
            splitText.chars,
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
    },
}
</script>

<style lang="scss">
.pageheading {
    position: relative;

    .container {
        @include mq('tablet') {
            padding-top: 10vh;
        }
    }

    &-size-small {
        h1 {
            font-size: clamp(3.052rem, -0.875rem + 8.333vw, 7.451rem);
        }
    }

    &-name {
        max-width: 80em;
    }

    &-title {
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
