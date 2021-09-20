<template>
    <main class="page articles-content">
        <Pageheading name="Articles" />

        <section class="articles-filters">
            <div class="container">
                <ul class="articles-filters-categories">
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
                </ul>
                <p v-if="filteredArticles">
                    {{ filteredArticles.length }} {{ filteredArticles.length > 1 ? 'articles' : 'article' }}
                </p>
            </div>
        </section>

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

    &-content {
        .pageheading {
            .container {
                max-width: calc(50em + 18em + 6em);
                padding: 0;
            }
        }
    }

    &-filters {
        position: relative;
        margin-bottom: 8vh;

        .container {
            display: grid;
            grid-template-columns: 50em 18em;
            grid-gap: 6em;
            place-content: center;
        }

        &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 1px;
            background: c('base-7');
        }

        &-categories {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            margin-bottom: 0;

            li {
                margin-bottom: 0;

                button {
                    position: relative;
                    margin-right: 1em;
                    color: c('base-6');
                    outline: none;

                    html[theme='dark'] & {
                        color: c('base-4');
                    }

                    &.-active {
                        color: c('base-4');

                        html[theme='dark'] & {
                            color: c('base-0');
                        }

                        &::after {
                            content: '';
                            position: absolute;
                            top: calc(100% + 1px);
                            left: 0;
                            width: 100%;
                            height: 4px;
                            background: c('primary-base');
                            z-index: 2;
                        }
                    }
                }
            }
        }
    }

    &-grid {
        display: grid;
        grid-template-columns: 50em 18em;
        grid-gap: 6em;
        place-content: center;
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
