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
                    v-if="slice.variation == 'textblockWithGridList' || slice.variation == 'textblockWithGridButton'"
                    data-anim
                    data-anim-elements=".textblock-list-item"
                >
                    <ul class="textblock-list">
                        <li class="textblock-list-item" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
                            <p class="textblock-list-name">{{ item.Name }}</p>
                            <p class="textblock-list-outline" v-if="item.Outline">
                                {{ item.Outline }}
                            </p>
                            <prismic-rich-text
                                class="textblock-list-outline"
                                v-if="item.summary"
                                :field="item.summary"
                            />
                            <div class="textblock-list-action" v-if="slice.variation == 'textblockWithGridButton'">
                                <div v-if="item.button.url">
                                    <a
                                        data-stick
                                        data-cursor="md"
                                        :href="item.button.url"
                                        :target="item.button.url.includes('.pdf') ? '_blank' : item.button.target"
                                        >{{ item.button_text ? item.button_text : 'Learn More' }}</a
                                    >
                                </div>
                            </div>
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
        const description = this.$refs.textblockDescription.children
        const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        const splitText = new SplitText(headline, {
            type: 'lines,words,chars',
            charsClass: 'textblock-char',
            wordsClass: 'textblock-word',
            linesClass: 'textblock-line',
        })
        const descSplitText = new SplitText(description, {
            type: 'lines,words',
            linesClass: 'textblock-description-line',
            wordsClass: 'textblock-description-word',
        })

        gsap.set(splitText.chars, {
            yPercent: 100,
            rotateX: 110,
            d: 1300,
        })

        gsap.set(descSplitText.words, {
            yPercent: 150,
        })

        let delay = 0
        ScrollTrigger.batch(headline, {
            start: 'top 90%',
            markers: false,
            onEnter: batch => {
                batch.forEach((section, i) => {
                    gsap.to(section.querySelectorAll('.textblock-char'), {
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
                batch.forEach((section, i) => {
                    gsap.to(section.querySelectorAll('.textblock-description-word'), {
                        yPercent: 0,
                        delay: 0.5 * i,
                        stagger: 0.005,
                    })
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

    &-description {
        &-line {
            overflow: hidden;
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

            > p {
                @include fs-xxs;
            }
            // line-height: 1;
        }

        &-action {
            @include fs-xxs;
            margin: 0;
            margin-top: 0.25em;
            opacity: 0.75;
            line-height: 1;
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
