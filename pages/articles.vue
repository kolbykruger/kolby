<template>
    <main class="page">
        <Pageheading name="Articles" />

        <section class="articles">
            <div class="container">
                <ul class="articles-list">
                    <li class="article-item" v-for="article in articles.results" :key="article.id">
                        <nuxt-link data-cursor="lg" :to="'/article/' + article.uid">
                            <!-- <p class="article-item-category">Self</p> -->
                            <h2 class="article-item-title">{{ article.data.Name[0].text }}</h2>

                            <prismic-rich-text class="article-item-summary" :field="article.data.Summary" />

                            <div class="article-item-details">
                                <p class="article-item-date">
                                    {{ formatDate(article.last_publication_date) }}
                                </p>
                                <span v-if="article.data.Read"> — </span>
                                <p class="article-item-read" v-if="article.data.Read">
                                    {{ article.data.Read }} min read
                                </p>
                                <span v-if="article.data.Category"> — </span>
                                <p class="article-item-category" v-if="article.data.Category">
                                    {{ article.data.Category }}
                                </p>
                            </div>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </section>

        <pre><code>{{ articles.results }}</code></pre>
    </main>
</template>

<script>
// import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'

export default {
    components: {
        Pageheading
    },
    async asyncData({ $prismic, params, error }) {
        const articles = await $prismic.api.query($prismic.predicates.at('document.type', 'article'), {
            orderings: '[document.first_publication_date ]'
        })
        if (articles) {
            return { articles }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
    methods: {
        formatDate(d) {
            const date = new Date(d)
            const options = {
                month: 'long',
                day: 'numeric'
            }
            return date.toLocaleString('en-us', options)
        }
    }
}
</script>

<style lang="scss">
.articles {
    .container {
    }

    &-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
}

.article {
    &-item {
        max-width: 800px;
        margin-bottom: 10vh;

        a {
            display: inline-block;
            text-decoration: none;
            color: currentColor;
        }

        &-category {
        }

        &-title {
            font-size: clamp(3.998rem, -0.875rem + 8.333vw, 3.998rem);
            margin: 0;
            margin-bottom: 0.25em;
        }

        &-summary {
        }

        &-details {
            display: flex;
            align-items: center;
            margin-top: 0.5em;
            opacity: 0.5;

            span {
                margin: 0 0.35em;
            }

            p {
                margin: 0;
            }
        }

        &-date {
        }

        &-read {
        }
    }
}
</style>
