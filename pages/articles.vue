<template>
    <main class="page articles-content" id="content">
        <div class="page-contents">
            <Pageheading name="Articles" />

            <section class="articles-filters">
                <div class="container">
                    <div class="articles-filters-grid" ref="articlesFilterGrid">
                        <div class="articles-filters-categories">
                            <ul class="articles-filters-categories-list">
                                <li v-for="(item, index) in categories" :key="index">
                                    <button
                                        data-stick
                                        data-cursor="lg"
                                        class="button"
                                        :data-category="item.toLowerCase()"
                                        :class="{ '-active': category == item.toLowerCase() }"
                                        @click="updateSelectedCategory(item)"
                                    >
                                        {{ item }}
                                    </button>
                                </li>
                                <span class="articles-filters-categories-list-marker" ref="marker"></span>
                            </ul>

                            <select
                                class="articles-filters-categories-select"
                                ref="selectFilter"
                                name=""
                                id=""
                                v-model="selectedCategory"
                            >
                                <option :value="item.toLowerCase()" v-for="(item, index) in categories" :key="index">
                                    {{ item }}
                                </option>
                            </select>
                        </div>

                        <p class="articles-filters-count" v-if="filteredArticles">
                            <small>{{ filteredArticles.length }} {{ filteredArticlesLabel }}</small>
                        </p>
                    </div>
                </div>
            </section>

            <section class="articles">
                <div class="container">
                    <div class="articles-grid articles-grid-full">
                        <ul class="articles-list" v-if="articles">
                            <transition-group
                                name="fade"
                                v-on:before-enter="beforeEnter"
                                v-on:enter="enter"
                                v-on:leave="leave"
                                v-bind:css="false"
                                tag="div"
                            >
                                <ArticleItem v-for="article in filteredArticles" :key="article.id" :article="article" />
                            </transition-group>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import { Animations } from '~/mixins/animations/Animations.js'

export default {
    data() {
        return {
            categories: ['Latest', 'Guide', 'Spotlight', 'Snippets'],
            selectedCategory: null,
            ease: null,
        }
    },
    mixins: [Animations],
    components: {
        Pageheading,
    },
    async asyncData({ $prismic, params, error }) {
        const articles = await $prismic.api.query($prismic.predicates.at('document.type', 'article'), {
            orderings: '[document.first_publication_date desc]',
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

            const categoryCheckForLatest = category == 'latest' ? null : category

            return categoryCheckForLatest
                ? articles.results.filter(a => {
                      return a.data.Category.toLowerCase() == category.toLowerCase()
                  })
                : articles.results
        },
        filteredArticlesLabel() {
            const count = this.filteredArticles.length
            return count == 0 || count >= 2 ? 'articles' : 'article'
        },
        category() {
            const category = this.$route.query.category
            return category ? category.toLowerCase() : 'Latest'
        },
        path() {
            return this.$route.path
        },
    },
    methods: {
        filterArticles(category) {
            const path = this.path
            const query = category ? { category: category } : null
            this.$router.push({ path: path, query: query })

            const marker = this.$refs.marker
            const selectedCategory = this.$refs.articlesFilterGrid.querySelector(`button[data-category="${category}"]`)
            const bounds = selectedCategory.getBoundingClientRect()
            const afBounds = this.$refs.articlesFilterGrid.getBoundingClientRect()

            this.moveMarker(marker, bounds.left - afBounds.left, bounds.width)
        },
        updateSelectedCategory(category) {
            this.selectedCategory = category.toLowerCase()
        },
        moveMarker(elem, x, width) {
            gsap.to(elem, 0.66, {
                x: x - 4 + 'px',
                width: width + 8 + 'px',
                ease: this.ease,
            })
        },
        beforeEnter(el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter(el, done) {
            gsap.to(
                el,
                0.66,
                {
                    opacity: 1,
                    height: null,
                    stagger: 0.5,
                },
                done
            )
        },
        leave(el, done) {
            gsap.to(
                el,
                0.33,
                {
                    opacity: 0,
                    height: 0,
                    paddingBottom: 0,
                    marginBottom: 0,
                    stagger: 0.5,
                    ease: 'power1.ease',
                },
                done
            )
        },
    },
    watch: {
        selectedCategory(value) {
            const selectedCategory = value.toLowerCase()
            this.filterArticles(selectedCategory)
        },
    },
    mounted() {
        gsap.registerPlugin(CustomEase)
        this.ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')

        const category = this.category
        this.selectedCategory = this.category.toLowerCase()

        const marker = this.$refs.marker
        const afBounds = this.$refs.articlesFilterGrid.getBoundingClientRect()
        if (category) {
            const elem = document.querySelector(
                `.articles-filters-categories button[data-category="${category.toLowerCase()}"`
            )

            if (elem) {
                const bounds = elem.getBoundingClientRect()
                this.moveMarker(marker, bounds.left - afBounds.left, bounds.width)
            }
        } else {
            const elem = document.querySelector(`.articles-filters-categories button[data-category=""]`)
            if (elem) {
                const bounds = elem.getBoundingClientRect()
                this.moveMarker(marker, bounds.left - afBounds.left, bounds.width)
            }
        }
    },
}
</script>

<style lang="scss">
.articles {
    .container {
    }

    &-content {
        .pageheading {
            .container {
                @include mq('laptop-large') {
                    max-width: calc(50em + 18em + 6em);
                    padding-left: 0;
                    padding-right: 0;
                }
            }
        }
    }

    &-filters {
        margin-top: 4vh;
        margin-bottom: 2vh;

        @include mq('laptop-small') {
            margin-bottom: 6vh;
        }

        .container {
        }

        &-grid {
            position: relative;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 6vw;
            align-items: center;
            overflow: hidden;

            @include mq('laptop-large') {
                grid-template-columns: 50em 18em;
                grid-gap: 6em;
                place-content: center;
                max-width: calc(50em + 18em + 6em);
                margin: 0 auto;
            }

            &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 1px;
                background: c('base-4');
            }
        }

        &-categories {
            &-list {
                position: relative;
                display: none;
                flex-flow: row nowrap;
                align-items: center;
                margin-bottom: 0;
                overflow-x: auto;
                overflow-y: hidden;
                white-space: nowrap;

                @include mq('laptop-small') {
                    display: flex;
                }

                &-marker {
                    //--width: 80px;
                    position: absolute;
                    top: calc(100% - 2px);
                    left: 0;
                    display: inline-block;
                    height: 5px;
                    //width: var(--width);
                    //transform: translateX(var(--offset));
                    transition: 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);
                    background: c('base-0');
                    z-index: 2;
                }

                li {
                    margin-bottom: 0;

                    button {
                        margin-right: 1em;
                        padding: 0 0.25em;
                        color: c('base-3');
                        outline: none;
                        @include fs-xxs;

                        html[theme='dark'] & {
                            // color: c('base-4');
                        }

                        &.-active {
                            color: c('base-0');

                            html[theme='dark'] & {
                                color: c('base-0');
                            }
                        }
                    }
                }
            }
            &-select {
                display: inline-flex;

                @include mq('laptop-small') {
                    display: none;
                }
            }
        }

        &-count {
            display: block;
            text-align: right;
            padding-right: 0.5em;
        }
    }

    &-grid {
        @include mq('laptop-large') {
            display: grid;
            grid-template-columns: 50em 18em;
            grid-gap: 6em;
            place-content: center;
            max-width: calc(50em + 18em + 6em);
            margin: 0 auto;

            &.articles-grid-full {
                grid-template-columns: 100%;
            }
        }
    }

    &-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column;
    }

    &-categories {
        // display: flex;
        // align-items: center;
        // margin-bottom: 5vh;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(1em);
}

.fade-leave-active {
    position: absolute;
    opacity: 0;
}
</style>
