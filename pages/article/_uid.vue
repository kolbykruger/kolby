<template>
    <main class="page article-content" id="content">
        <div class="page-contents">
            <section class="article-header">
                <div class="container article-header-container">
                    <p class="article-header-date">{{ formatDate }}</p>
                    <Pageheading :name="document.data.Name" size="small" />

                    <prismic-rich-text
                        class="article-header-lead"
                        v-if="document.data.Summary"
                        :field="document.data.Summary"
                    />
                </div>
            </section>

            <article class="article">
                <div class="container">
                    <div class="article-grid">
                        <!-- <aside class="article-track"></aside> -->
                        <div class="article-content">
                            <slice-zone class="slices" type="article" :uid="$route.params.uid" />
                        </div>
                        <aside class="article-track">
                            <!-- <ArticleDetails :document="document" /> -->

                            <div data-sticky>
                                <TableOfContents :document="document" />

                                <div class="article-code-sections" data-sticky v-if="containsCodeBlock">
                                    <Button size="small" @clicked="toggleCodeSections">
                                        {{ showCode ? 'Show whole post' : 'Show code snippets' }}
                                    </Button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
            <!-- <pre><code>{{ document }}</code></pre> -->
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
            const sections = document.querySelectorAll('article section')
            sections.forEach(section => {
                const status = section.classList.contains('code-block') ? true : false
                if (!status) {
                    section.style.display = this.showCode ? 'none' : null
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
    &-content {
        margin-bottom: 6vh;

        .article-header {
            padding-top: 6vh;

            .container {
                @include mq('laptop-large') {
                    padding: 0;
                }
            }

            &-container {
                @include mq('laptop-large') {
                    margin: 0 auto;
                    max-width: calc(56em + 18em + 8vw);
                    padding-left: 0;
                    padding-right: 0;
                    padding-top: 6vh;
                    padding-bottom: 6vh;
                    border-bottom: 1px solid c('base-4');
                }
            }

            .pageheading {
                .container {
                    padding: 0;
                }
            }

            &-date {
                padding-bottom: 3vh;
            }

            &-lead {
                max-width: 42em;
                margin-bottom: 6vh;
            }
        }
    }

    .article-grid {
        display: flex;
        flex-direction: column-reverse;

        @include mq('laptop-large') {
            display: grid;
            grid-template-columns: 56em 18em;
            grid-gap: 8vw;
            place-content: center;
        }
    }

    .article-track {
        > [data-sticky] {
            position: sticky;
            top: 6vh;
        }
    }

    // Prevents the first element from having a positive margin
    .article-grid > .article-content > div > section:first-of-type {
        *:is(p):first-child,
        *:is(a):first-child + h2,
        *:is(a):first-child + h3 {
            margin-top: 0;
        }
    }

    section {
        position: relative;
        margin: 0 auto;

        // &:first-of-type {
        //     &:is(h2, h3, p) {
        //         margin-top: 0;
        //     }

        //     h2:first-of-type,
        //     h3:first-of-type,
        //     p:first-of-type {
        //         margin-top: 0;
        //     }
        // }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;

            > * {
                min-width: 100%;
                width: 100%;
            }
        }
    }

    h2 {
        font-family: $font-1;
        font-size: clamp(2.827rem, -0.875rem + 8.333vw, 3.998rem);
        font-weight: 600;
    }

    h3 {
        font-size: clamp(1.999rem, -0.875rem + 8.333vw, 2.827rem);
    }

    h4 {
        font-size: clamp(1.414rem, -0.875rem + 8.333vw, 1.999rem);
    }

    h5 {
        font-size: clamp(1.414rem, -0.875rem + 8.333vw, 1.414rem);
    }

    aside {
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

                // &::after {
                //     top: 0.5em;
                //     left: 0.5em;
                //     width: 100%;
                //     height: 100%;
                //     pointer-events: none;
                //     background: radial-gradient(ellipse at 0% 0%, c('base-3'), transparent 75%);
                //     opacity: 0.12;
                // }
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

    &-code-sections {
        margin-top: 1.5em;
        // text-align: center;

        // button {
        //     position: relative;
        //     display: inline-block;
        //     line-height: 1;
        //     height: 58px;
        //     width: 100%;
        //     font-size: 1.125rem;
        //     font-weight: 500;
        //     color: c('base-6');
        //     padding: 0 0.75em;
        //     border-radius: 4px;

        //     &::before,
        //     &::after {
        //         content: '';
        //         position: absolute;
        //         top: 0;
        //         left: 0;
        //     }

        //     &::before {
        //         top: 0.3em;
        //         left: 0.3em;
        //         bottom: 0.3em;
        //         right: 0.3em;
        //         background: radial-gradient(ellipse at 0% 0%, c('base-3'), transparent 75%);
        //         opacity: 0.12;
        //     }

        //     &::after {
        //         width: 100%;
        //         height: 100%;
        //         display: block;
        //         border: 2px solid c('base-3');
        //         opacity: 0.2;
        //     }

        //     html[theme='dark'] & {
        //         color: c('base-5');
        //     }
        // }
    }
}
</style>
