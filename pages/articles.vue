<template>
    <main class="page articles-content" id="content">
        <Pageheading name="Articles" />

        <section class="articles-filters">
            <div class="container">
                <div class="articles-filters-grid">
                    <ul class="articles-filters-categories">
                        <li>
                            <button
                                data-stick
                                data-cursor="lg"
                                class="button"
                                :class="{ '-active': category == 'all' }"
                                @click="$router.push({ path: '/articles' })"
                            >
                                <small>Latest</small>
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
                                <small>{{ item }}</small>
                            </button>
                        </li>
                    </ul>
                    <p class="articles-filters-count" v-if="filteredArticles">
                        <small
                            >{{ filteredArticles.length }}
                            {{ filteredArticles.length > 1 ? 'articles' : 'article' }}</small
                        >
                    </p>
                </div>
            </div>
        </section>

        <section class="articles">
            <div class="container">
                <div class="articles-grid">
                    <ul class="articles-list" v-if="articles">
                        <transition-group name="list-complete" tag="div">
                            <ArticleItem v-for="article in filteredArticles" :key="article.id" :article="article" />
                        </transition-group>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
// import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import { Animations } from '~/mixins/animations/Animations.js'

export default {
    data() {
        return {
            categories: ['Code', 'Guide']
        }
    },
    mixins: [Animations],
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
        margin-bottom: 8vh;

        .container {
        }

        &-grid {
            position: relative;
            display: grid;
            grid-template-columns: 50em 18em;
            grid-gap: 6em;
            place-content: center;
            max-width: calc(50em + 18em + 6em);
            margin: 0 auto;

            &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 1px;
                background: c('base-7');
            }
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
                    color: c('base-4');
                    outline: none;

                    html[theme='dark'] & {
                        color: c('base-4');
                    }

                    &.-active {
                        color: c('base-0');

                        html[theme='dark'] & {
                            color: c('base-0');
                        }

                        &::after {
                            content: '';
                            position: absolute;
                            top: 100%;
                            left: 0;
                            width: 100%;
                            height: 6px;
                            background: c('base-0');
                            z-index: 2;
                        }
                    }
                }
            }
        }

        &-count {
            text-align: right;
            padding-right: 0.5em;
        }
    }

    &-grid {
        display: grid;
        grid-template-columns: 50em 18em;
        grid-gap: 6em;
        place-content: center;
        max-width: calc(50em + 18em + 6em);
        margin: 0 auto;
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

.list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
}

.list-complete-enter,
.list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.list-complete-leave-active {
    position: absolute;
}
</style>
