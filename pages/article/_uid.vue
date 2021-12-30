<template>
    <main class="page article-content" id="content">
        <div class="page-contents">
            <article class="article">
                <section class="article-header">
                    <div class="container">
                        <p class="article-header-date" ref="articleDate">
                            <nuxt-link
                                data-stick
                                data-cursor="lg"
                                data-progress="4"
                                data-callback="route"
                                data-callback-location="/articles"
                                to="/articles"
                                >Articles</nuxt-link
                            >
                            <span>— {{ formatDate }}</span>
                        </p>

                        <Pageheading :name="document.data.Name" size="small" />

                        <prismic-rich-text
                            class="article-header-lead"
                            v-if="document.data.Summary"
                            :field="document.data.Summary"
                            ref="articleSummary"
                        />
                    </div>
                </section>

                <main class="article-content">
                    <slice-zone class="slices" type="article" :uid="$route.params.uid" />
                </main>

                <aside class="article-track">
                    <Author />
                    <ShapeCollection
                        :collection="{
                            top: '0',
                            transform: 'translate(0px, -40%)',
                            left: '60%',
                            width: '177px',
                            height: '201px',
                        }"
                        :shapes="shapes"
                    />

                    <div data-sticky>
                        <section v-if="document.data.Narration.url">
                            <div class="container">
                                <Button type="text" size="small" @clicked="listenToArticle">
                                    <template #preicon>
                                        <Headphones />
                                    </template>
                                    Listen to this article
                                </Button>
                                <Button type="text" size="small" @clicked="toggleCodeSections">
                                    <template #preicon>
                                        <Terminal />
                                    </template>
                                    {{ showCode ? 'Show entire article' : 'Show code snippets' }}
                                </Button>
                            </div>
                        </section>
                        <section>
                            <div class="container">
                                <TableOfContents :document="document" :showCode="showCode" />
                            </div>
                        </section>
                        <!-- <section>
                            <div class="container">
                                <Button type="text" size="small" @clicked="listenToArticle">
                                    <template #preicon>
                                        <Headphones />
                                    </template>
                                    Back to top
                                </Button>
                            </div>
                        </section> -->

                        <Audio
                            v-if="document.data.Narration.url"
                            :isShowing="showAudio"
                            :source="document.data.Narration.url"
                            :title="document.data.Name[0].text"
                            @clicked="showAudio = false"
                        />
                    </div>
                </aside>
            </article>
        </div>
    </main>
</template>

<script>
// Animations
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'

// Icons
import Headphones from '~/assets/svg/duotone/headphones.svg?inline'
import Terminal from '~/assets/svg/duotone/terminal.svg?inline'

// Components
import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import Audio from '~/components/Audio/Audio.vue'
import TableOfContents from '~/components/TableOfContents/TableOfContents.vue'
import ShapeCollection from '~/components/Shapes/ShapeCollection.vue'
import { ArticleShapes } from '~/mixins/shapes/ArticleShapes.js'

export default {
    components: {
        SliceZone,
        Pageheading,
        Audio,
        TableOfContents,
        ShapeCollection,
        Headphones,
        Terminal,
    },
    mixins: [ArticleShapes],
    data() {
        return {
            showCode: false,
            showAudio: false,
        }
    },
    computed: {
        formatDate() {
            const d = this.document.last_publication_date
            const date = new Date(d)
            const options = {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }
            return date.toLocaleString('en-us', options)
        },
        containsCodeBlock() {
            const slices = this.document.data.slices
            if (!slices) {
                return
            }

            const cb = slices.filter(slice => {
                return slice.slice_type == 'code_block'
            })

            return cb ? true : false
        },
        initialLoad() {
            return this.$store.state.loading.initial
        },
    },
    methods: {
        toggleCodeSections() {
            this.showCode = !this.showCode
            const sections = document.querySelectorAll('article main section')
            sections.forEach(section => {
                const status = section.classList.contains('code-block') ? true : false
                if (!status) {
                    //section.style.display = this.showCode ? 'none' : null
                    if (this.showCode) {
                        gsap.to(section, {
                            height: 0,
                            maxHeight: 0,
                            alpha: 0,
                            visibility: 'hidden',
                            ease: 'power3.ease',
                            duration: 1,
                        })
                    } else {
                        gsap.to(section, {
                            height: 'unset',
                            maxHeight: 'unset',
                            alpha: 1,
                            visibility: 'visible',
                            ease: 'power3.ease',
                            duration: 1,
                        })
                    }
                }
            })
        },
        listenToArticle() {
            this.showAudio = !this.showAudio
        },
    },
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getByUID('article', params.uid)
        // const nextArticle = (
        //     await $prismic.api.query($prismic.predicates.at('document.type', 'case-study'), {
        //         pageSize: 3,
        //         after: `${document.id}`,
        //         orderings: '[my.post.date]'
        //     })
        // ).results[0]
        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
    mounted() {
        gsap.registerPlugin(SplitText)
        gsap.registerPlugin(CustomEase)

        const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        const tl = gsap.timeline()

        const date = new SplitText(this.$refs.articleDate, {
            type: 'lines,words,chars',
            charsClass: 'article-header-date-char',
            wordsClass: 'article-header-date-word',
            linesClass: 'article-header-date-line',
        })

        const summary = new SplitText(this.$refs.articleSummary.children, {
            type: 'lines,words',
            wordsClass: 'article-header-lead-word',
            linesClass: 'article-header-lead-line',
        })

        gsap.set(date.chars, {
            yPercent: 150,
            rotateX: 110,
            d: 1300,
        })

        gsap.set(summary.words, {
            yPercent: 150,
            rotateX: 110,
            d: 1300,
        })

        this.$router.onReady(() => {
            this.$nextTick(() => {
                setTimeout(
                    () => {
                        gsap.to(date.chars, {
                            yPercent: 0,
                            rotateX: 0,
                            d: 0,
                            ease: ease,
                            stagger: 0.02,
                            delay: this.initialLoad ? 0.16 : 0.5,
                        })
                        gsap.to(summary.words, {
                            yPercent: 0,
                            rotateX: 0,
                            d: 0,
                            ease: ease,
                            stagger: 0.01,
                            delay: this.initialLoad ? 0.56 : 1.1,
                        })
                    },
                    this.initialLoad ? 2000 : 1000
                ) // page animation transition length
            })
        })
    },
}
</script>

<style lang="scss">
.article {
    &-header {
        padding-top: 6vh;
        margin-bottom: 2vh;

        @include mq('laptop-small') {
            margin-bottom: 8vh;
        }

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: c('base-4');
            background: linear-gradient(to right, c('base-4') 65%, transparent);
        }

        .pageheading {
            .container {
                padding: 0;
            }
        }

        &-date {
            display: flex;
            align-items: center;
            flex-flow: row wrap;
            padding-bottom: 4vh;

            a {
                text-decoration: none;
            }

            span {
                margin: 0 0.25em;
                opacity: 0.25;
            }

            &-line {
                overflow: hidden;
            }

            &-word {
                perspective: 1000px;
                transform-style: preserve-3d;
            }
        }

        &-lead {
            padding-bottom: 2vh;

            @include mq('laptop-small') {
                padding-bottom: 6vh;
            }

            &:empty {
                padding-bottom: 2vh;
            }

            &-line {
                overflow: hidden;
            }

            &-word {
                perspective: 1000px;
                transform-style: preserve-3d;
            }
        }
    }

    .art {
        &-line {
            // overflow: hidden;
        }

        &-char-parent {
            overflow: hidden;
            perspective: 1000px;
            transform-style: preserve-3d;
        }
    }
}
</style>
