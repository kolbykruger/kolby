<template>
    <main class="page article-content">
        <Pageheading :name="document.data.Name" />

        <article class="article">
            <div class="container">
                <div class="article-grid">
                    <!-- <aside class="article-track"></aside> -->
                    <div class="article-content">
                        <slice-zone type="article" :uid="$route.params.uid" />
                    </div>
                    <aside class="article-track">
                        <div data-sticky class="article-details">
                            <div class="article-details-container">
                                <ul class="article-details-group">
                                    <li class="article-details-label">Date</li>
                                    <li class="article-details-item">
                                        <span>{{ formatDate }}</span>
                                    </li>
                                </ul>

                                <ul class="article-details-group">
                                    <li class="article-details-label">Read time</li>
                                    <li class="article-details-item">
                                        <span>{{ document.data.Read + ' minutes' || 'Read time' }}</span>
                                    </li>
                                </ul>

                                <ul class="article-details-group" v-if="document.data.Category">
                                    <li class="article-details-label">Category</li>
                                    <li class="article-details-item">
                                        <span>
                                            <nuxt-link
                                                :to="{
                                                    path: '/articles',
                                                    query: { category: document.data.Category }
                                                }"
                                                >{{ document.data.Category }}</nuxt-link
                                            >
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>

        <!-- <pre><code>{{ document }}</code></pre> -->
    </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'

export default {
    components: {
        SliceZone,
        Pageheading
    },
    computed: {
        formatDate() {
            const date = new Date(this.document.last_publication_date)
            const options = {
                year: 'numeric',
                day: 'numeric',
                month: 'long'
            }
            return date.toLocaleDateString('en-us', options)
        }
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
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&display=swap');

.article {
    &-content {
        .pageheading {
            .container {
                max-width: calc(50em + 18em + 6em);
                padding: 0;
            }
        }
    }

    .article-grid {
        display: grid;
        //grid-template-columns: auto 800px auto;
        grid-template-columns: 50em 18em;
        grid-gap: 6em;
        place-content: center;
    }

    .article-track {
        > [data-sticky] {
            position: sticky;
            top: 10vh;
        }
    }

    // .article-content {
    //     > div section:first-of-type {
    //         h2,
    //         h3,
    //         p {
    //             margin-top: 0;
    //         }
    //     }
    // }

    section {
        position: relative;
        margin: 0 auto;

        &:first-of-type {
            h2:first-of-type,
            h3:first-of-type,
            p:first-of-type {
                margin-top: 0;
            }
        }

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

    &-details {
        &-container {
        }

        &-group {
            margin-bottom: 3vh;
        }

        &-label {
            font-weight: 500;
        }

        &-item {
            opacity: 0.75;
        }

        &-label,
        &-item {
            font-size: clamp(1.25rem, -0.875rem + 8.333vw, 1.414rem);
        }
    }
}
</style>
