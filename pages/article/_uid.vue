<template>
    <main class="page article-content" id="content">
        <div class="page-contents">
            <article class="article">
                <section class="article-header">
                    <div class="container">
                        <p class="article-header-date">
                            <nuxt-link
                                data-stick
                                data-cursor="lg"
                                data-progress="4"
                                data-callback="route"
                                data-callback-location="/articles"
                                to="/articles"
                                >Articles</nuxt-link
                            >
                            <span>—</span> {{ formatDate }}
                        </p>
                        <Pageheading :name="document.data.Name" size="small" />

                        <prismic-rich-text
                            class="article-header-lead"
                            v-if="document.data.Summary"
                            :field="document.data.Summary"
                        />
                    </div>
                </section>

                <main class="article-content">
                    <slice-zone class="slices" type="article" :uid="$route.params.uid" />
                </main>

                <aside class="article-track">
                    <!-- <ArticleDetails :document="document" /> -->

                    <div data-sticky>
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
import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import ArticleDetails from '~/components/ArticleDetails/ArticleDetails.vue'
import TableOfContents from '~/components/TableOfContents/TableOfContents.vue'
import { Animations } from '~/mixins/animations/Animations.js'

export default {
    components: {
        SliceZone,
        Pageheading,
        TableOfContents,
    },
    mixins: [Animations],
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
}
</style>
