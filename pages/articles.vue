<template>
    <main class="page">
        <Pageheading name="Articles" />

        <section class="articles">
            <div class="container">
                <div class="articles-grid">
                    <ul class="articles-list" v-if="articles">
                        <li class="article-item" v-for="article in filteredArticles" :key="article.id">
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
                    <ul class="articles-categories">
                        <li>
                            <p>Categories</p>
                        </li>
                        <li>
                            <button
                                data-stick
                                data-cursor="lg"
                                class="button"
                                :class="{ '-active': category == 'all' }"
                                @click="$router.push({ path: '/articles' })"
                            >
                                Latest
                            </button>
                        </li>
                        <li v-for="(item, index) in categories" :key="index">
                            <button
                                data-stick
                                data-cursor="lg"
                                class="button"
                                :class="{ '-active': category.toLowerCase() == item.toLowerCase() }"
                                @click="$router.push({ path: '/articles', query: { category: item } })"
                            >
                                {{ item }}
                            </button>
                        </li>
                        <li v-if="articles">{{ filteredArticles.length }} articles</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
// import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'

export default {
    data() {
        return {
            categories: ['Code', 'Guide']
        }
    },
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
    },
    computed: {
        filteredArticles() {
            const category = this.$route.query.category
            const articles = this.articles

            return category
                ? articles.results.filter(a => {
                      return a.data.Category.toLowerCase() == category.toLowerCase()
                  })
                : articles.results
        },
        category() {
            const category = this.$route.query.category
            return category ? category : 'all'
        }
    }
}
</script>

<style lang="scss">
.articles {
    .container {
    }

    &-grid {
        display: grid;
        grid-template-columns: 800px 250px;
        grid-gap: 6em;
    }

    &-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &-categories {
        // display: flex;
        // align-items: center;
        // margin-bottom: 5vh;
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
