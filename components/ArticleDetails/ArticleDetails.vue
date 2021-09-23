<template>
    <div class="article-details">
        <span class="article-aside-background">
            <div class="article-aside-border"></div>
        </span>
        <div class="article-details-container">
            <Author />

            <ul class="article-details-group">
                <li class="article-details-label">Updated</li>
                <li class="article-details-item">
                    <span>{{ formatDate }}</span>
                </li>
            </ul>

            <ul class="article-details-group" v-if="document.data.Read">
                <li class="article-details-label">Read time</li>
                <li class="article-details-item">
                    <span>{{ document.data.Read }} {{ document.data.Read > 1 ? 'minutes' : 'minute' }}</span>
                </li>
            </ul>

            <ul class="article-details-group" v-if="document.data.Category">
                <li class="article-details-label">Category</li>
                <li class="article-details-item">
                    <span>
                        <nuxt-link
                            data-stick
                            data-cursor="lg"
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
</template>

<script>
export default {
    name: 'ArticleDetails',
    props: {
        document: Object
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
    }
}
</script>

<style lang="scss">
.article {
    &-details {
        position: relative;
        padding-left: 2em;
        padding-top: 2em;
        padding-bottom: 1px;

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

            a {
                text-decoration: none;
                color: c('primary-base');
            }
        }
    }
}
</style>
