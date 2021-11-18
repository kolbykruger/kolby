<template>
    <li class="article-item">
        <nuxt-link data-cursor="lg" :to="'/article/' + article.uid">
            <!-- <p class="article-item-category">Self</p> -->
            <h2 class="article-item-title">{{ article.data.Name[0].text }}</h2>

            <prismic-rich-text class="article-item-summary" :field="article.data.Summary" />

            <!-- <div class="article-item-details">
                <p class="article-item-date">
                    <small>{{ formatDate }}</small>
                </p>
                <span v-if="article.data.Read"> — </span>
                <p class="article-item-read" v-if="article.data.Read">
                    <small>{{ article.data.Read }} min read</small>
                </p>
                <span v-if="article.data.Category"> — </span>
                <p class="article-item-category" v-if="article.data.Category">
                    <small>{{ article.data.Category }}</small>
                </p>
            </div> -->
        </nuxt-link>
    </li>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: {
        article: Object,
    },
    computed: {
        formatDate() {
            const d = this.article.last_publication_date
            const date = new Date(d)
            const options = {
                month: 'long',
                day: 'numeric',
            }
            return date.toLocaleString('en-us', options)
        },
    },
}
</script>

<style lang="scss">
.article {
    &-item {
        max-width: 800px;
        margin-bottom: 10vh;

        a {
            display: inline-block;
            text-decoration: none;
            color: c('base-0');

            &:hover,
            &:focus {
                .article-item-title {
                    color: c('primary-base');
                }
            }
        }

        &-category {
        }

        &-title {
            font-size: clamp(2.441rem, -0.875rem + 8.333vw, 3.052rem);
            margin: 0;
            margin-bottom: 0.5em;
            transition: color 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &-summary {
            p {
                font-size: clamp(1.125rem, -0.875rem + 3.333vw, 1.563rem);
            }
        }

        &-details {
            display: flex;
            align-items: center;
            margin-top: 0.5em;

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
