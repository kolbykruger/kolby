<template>
    <main class="page article-content" id="content">
        <div class="page-contents">
            <Pageheading :name="document.data.Name" size="small" />

            <article class="article">
                <div class="container">
                    <div class="article-grid">
                        <!-- <aside class="article-track"></aside> -->
                        <div class="article-content">
                            <slice-zone type="article" :uid="$route.params.uid" />
                        </div>
                        <aside class="article-track">
                            <ArticleDetails :document="document" />

                            <div data-sticky>
                                <TableOfContents :document="document" />

                                <div class="article-code-sections" data-sticky v-if="containsCodeBlock">
                                    <button @click="toggleCodeSections">
                                        {{ showCode ? 'Hide' : 'Show' }} code snippets
                                    </button>
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
        containsCodeBlock() {
            const slices = this.document.data.slices
            if (!slices) {
                return
            }

            const cb = slices.filter(slice => {
                console.log(slice.slice_type)
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
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&display=swap');

.article {
    &-content {
        margin-bottom: 6vh;

        .pageheading {
            .container {
                @include mq('laptop-large') {
                    max-width: calc(56em + 18em + 8vw);
                    padding-left: 0;
                    padding-right: 0;
                }
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

                &::after {
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    background: radial-gradient(ellipse at 0% 0%, var(--color-base-0), transparent 75%);
                    opacity: 0.1;
                }
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
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, c('base-7'), transparent);
                }

                &::after {
                    width: 1px;
                    height: 100%;
                    background: linear-gradient(to bottom, c('base-7'), transparent);
                }
            }
        }
    }

    &-code-sections {
        margin-top: 1.5em;
        // text-align: center;

        button {
            display: inline-block;
            line-height: 1;
            height: 44px;
            width: 100%;
            font-size: 1.125rem;
            font-weight: 500;
            color: c('base-6');
            padding: 0 0.75em;
            border-radius: 4px;
            background: c('base-5');

            html[theme='dark'] & {
                color: c('base-5');
                background: c('base-7');
            }
        }
    }
}
</style>
