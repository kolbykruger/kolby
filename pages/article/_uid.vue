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
                    <!-- <ArticleDetails :document="document" /> -->

                    <div data-sticky>
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
                        <TableOfContents :document="document" />

                        <div class="article-code-sections" data-sticky v-if="containsCodeBlock">
                            <Button size="small" @clicked="toggleCodeSections">
                                {{ showCode ? 'Show entire article' : 'Show code snippets' }}
                            </Button>
                        </div>
                    </div>
                </aside>
            </article>
        </div>
    </main>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'

import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import ArticleDetails from '~/components/ArticleDetails/ArticleDetails.vue'
import TableOfContents from '~/components/TableOfContents/TableOfContents.vue'
import ShapeCollection from '~/components/Shapes/ShapeCollection.vue'
import { ArticleShapes } from '~/mixins/shapes/ArticleShapes.js'

export default {
    components: {
        SliceZone,
        Pageheading,
        TableOfContents,
        ShapeCollection,
    },
    mixins: [ArticleShapes],
    data() {
        return {
            showCode: false,
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
                    this.showCode ? section.classList.add('-hidden') : section.classList.remove('-hidden')
                }
            })
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
            charsClass: 'pageheading-char',
            wordsClass: 'pageheading-word',
            linesClass: 'pageheading-line',
        })

        const summary = new SplitText(this.$refs.articleSummary, {
            type: 'lines,words,chars',
            charsClass: 'pageheading-char',
            wordsClass: 'pageheading-word',
            linesClass: 'pageheading-line',
        })

        gsap.set(date.chars, {
            yPercent: 100,
            rotateX: 110,
            d: 1300,
        })

        gsap.set(summary.chars, {
            yPercent: 100,
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
                        gsap.to(summary.chars, {
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
    max-width: calc(1280px + 8vw);
    padding: 0 48px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    margin-bottom: 3rem;
    counter-reset: sidenotes markers;

    .container {
        padding: 0;
    }

    main {
    }

    aside {
        padding-left: 4vw;

        section {
            position: relative;
            padding-left: 2em;
            padding-top: 2em;
            padding-bottom: 1px;
            margin-bottom: 3em;

            .article-aside-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;

                &::before,
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                .article-aside-border {
                    &::before,
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                    }

                    &::before {
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background: linear-gradient(to right, c('base-4'), transparent);
                    }

                    &::after {
                        top: 0;
                        width: 1px;
                        height: 100%;
                        background: linear-gradient(to bottom, c('base-4'), transparent);
                    }
                }
            }
        }
    }

    &-header {
        padding-top: 6vh;
        margin-bottom: 8vh;

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
        }

        &-lead {
            padding-bottom: 6vh;

            &:empty {
                padding-bottom: 2vh;
            }
        }
    }

    .article-track {
        > [data-sticky] {
            position: sticky;
            top: 6vh;
        }
    }

    .article-content {
        padding-top: 0;

        section:first-of-type {
            *:is(p):first-child,
            *:is(a):first-child + h2,
            *:is(a):first-child + h3 {
                margin-top: 0;
            }
        }

        h2 {
            font-family: $font-1;
            font-size: clamp(1.999rem, -0.875rem + 8.333vw, 3.998rem);
            font-weight: 600;
        }

        h3 {
            font-size: clamp(1.699rem, -0.875rem + 8.333vw, 2.827rem);
        }

        h4 {
            font-size: clamp(1.563rem, -0.875rem + 8.333vw, 1.999rem);
        }

        h5 {
            font-size: clamp(1.414rem, -0.875rem + 8.333vw, 1.414rem);
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
