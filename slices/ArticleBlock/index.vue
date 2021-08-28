<template>
    <section class="article-block">
        <div class="container">
            <prismic-rich-text :field="slice.primary.Content" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'ArticleBlock',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss">
.article-block {
}
</style>
