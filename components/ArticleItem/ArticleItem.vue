<template>
    <li class="article-item">
        <nuxt-link class="article-item-link" data-cursor="lg" :to="'/article/' + article.uid">
            <div class="article-item-details">
                <p class="article-item-date">
                    {{ formatDate }}<span>—</span><span class="code">{{ article.data.Category }}</span>
                </p>
            </div>

            <h2 class="article-item-title">{{ article.data.Name[0].text }}</h2>

            <prismic-rich-text class="article-item-summary" :field="article.data.Summary" />
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
        position: relative;
        margin-bottom: 3vh;
        padding-bottom: 3vh;

        &::after {
            content: '';
            position: absolute;
            margin-top: 3vh;
            display: block;
            width: 100%;
            height: 1px;
            background: c('base-4');
            background: linear-gradient(to right, c('base-4') 65%, transparent);
        }

        a {
            display: inline-block;
            text-decoration: none;
            color: c('base-0');
            max-width: 50em;

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
            font-family: $font-1;
            font-size: clamp(2.441rem, -0.875rem + 8.333vw, 3.052rem);
            @include fs-lg;
            margin: 0;
            margin-bottom: 0;
            transition: color 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &-summary {
            margin-top: flow('lg');

            p {
                @include fs-xxs;
            }
        }

        &-details {
            display: flex;
            align-items: center;
            margin-top: 0.5em;
            margin-bottom: flow('sm');

            span {
                margin: 0 0.35em;
            }

            p {
                margin: 0;
            }
        }

        &-date {
            @include fs-xxs;
            opacity: 0.6;
        }

        &-read {
        }
    }
}
</style>
