<template>
    <section class="textblock" data-anim>
        <div class="container">
            <div class="textblock-snap">
                <p class="textblock-eyebrow" v-if="slice.primary.Index">
                    <span>{{ slice.primary.Index || '01' }}</span>
                </p>
                <prismic-rich-text
                    :field="slice.primary.title"
                    class="textblock-title"
                    ref="textblockTitle"
                    :htmlSerializer="htmlSerializer"
                />
                <prismic-rich-text
                    :field="slice.primary.description"
                    class="textblock-description"
                    ref="textblockDescription"
                />

                <div
                    class="textblock-list-grid"
                    v-if="slice.variation == 'textblockWithGridList'"
                    data-anim
                    data-anim-elements=".textblock-list-item"
                >
                    <ul class="textblock-list">
                        <li class="textblock-list-item" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
                            <p class="textblock-list-name">{{ item.Name }}</p>
                            <p class="textblock-list-outline">
                                {{ item.Outline }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'
import { Serializer } from '~/mixins/serializer/Serializer.js'

export default {
    name: 'Textblock',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    mixins: [Serializer],
    mounted() {
        gsap.registerPlugin(SplitText)
        gsap.registerPlugin(CustomEase)
        gsap.registerPlugin(ScrollTrigger)

        const headline = this.$refs.textblockTitle.querySelector('h1,h2,h3')
        const description = this.$refs.textblockDescription
        const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        const splitText = new SplitText(headline, {
            type: 'lines,words,chars',
            charsClass: 'headline-char',
            wordsClass: 'headline-word',
            linesClass: 'headline-line',
        })

        gsap.set(splitText.chars, {
            yPercent: 100,
            rotateX: 110,
            d: 1300,
        })

        gsap.set(description, {
            yPercent: 8,
            alpha: 0,
        })

        let delay = 0
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
                    delay = i * 0.2
                })
            },
        })
        ScrollTrigger.batch(description, {
            start: 'top 90%',
            onEnter: batch => {
                console.log(delay)
                gsap.to(batch, {
                    yPercent: 0,
                    alpha: 1,
                    delay: delay + 0.5,
                })
            },
        })
    },
}
</script>

<style lang="scss">
.textblock {
    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    &-snap {
        max-width: 64em;
    }

    &-eyebrow {
        &,
        &:last-of-type {
            margin-bottom: 1em;
        }

        span {
            font-family: $font-2;
            font-weight: 500;
            opacity: 0.25;
        }
    }

    &-title {
        h1,
        h2,
        h3,
        h4,
        h5 {
            margin-top: 0;
        }
    }

    &-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2vw;
        margin-top: 6vh;

        &-grid {
        }

        &-item {
            list-style-type: none;
        }

        &-name {
            margin: 0;
        }

        &-outline {
            @include fs-xxs;
            margin: 0;
            margin-top: 0.25em;
            opacity: 0.75;
            // line-height: 1;
        }
    }
}
</style>
