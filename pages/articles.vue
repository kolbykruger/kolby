<template>
    <main class="page articles-content" id="content">
        <div class="page-contents">
            <Pageheading name="Articles" />

            <section class="articles-filters">
                <div class="container">
                    <div class="articles-filters-grid" ref="articlesFilterGrid">
                        <ul class="articles-filters-categories">
                            <li>
                                <button
                                    data-stick
                                    data-cursor="lg"
                                    class="button"
                                    data-category=""
                                    :class="{ '-active': !category }"
                                    @click=";[filterArticles($event, null)]"
                                >
                                    <small>Latest</small>
                                </button>
                            </li>
                            <li v-for="(item, index) in categories" :key="index">
                                <button
                                    data-stick
                                    data-cursor="lg"
                                    class="button"
                                    :data-category="item.toLowerCase()"
                                    :class="{ '-active': category == item.toLowerCase() }"
                                    @click=";[filterArticles($event, item)]"
                                >
                                    <small>{{ item }}</small>
                                </button>
                            </li>
                            <span class="articles-filters-categories-marker" ref="marker"></span>
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
            categories: ['Guide', 'Spotlight'],
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

            return category
                ? articles.results.filter(a => {
                      return a.data.Category.toLowerCase() == category.toLowerCase()
                  })
                : articles.results
        },
        category() {
            const category = this.$route.query.category
            return category ? category.toLowerCase() : null
        },
        path() {
            return this.$route.path
        },
    },
    methods: {
        filterArticles(event, item) {
            const path = this.path
            const hash = item ? item : null
            const query = hash ? { category: hash } : null
            this.$router.push({ path: path, query: query })

            const marker = this.$refs.marker
            const bounds = event.target.getBoundingClientRect()
            const afBounds = this.$refs.articlesFilterGrid.getBoundingClientRect()

            this.moveMarker(marker, bounds.left - afBounds.left, bounds.width)
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
    mounted() {
        gsap.registerPlugin(CustomEase)
        this.ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')

        const category = this.category

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
        margin-bottom: 6vh;

        .container {
        }

        &-grid {
            position: relative;

            @include mq('laptop-large') {
                display: grid;
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
            position: relative;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            margin-bottom: 0;

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
                    }
                }
            }
        }

        &-count {
            display: none;

            @include mq('laptop-large') {
                display: block;
                text-align: right;
                padding-right: 0.5em;
            }
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
