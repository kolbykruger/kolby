<template>
    <section class="article-block">
        <div class="container">
            <prismic-rich-text :field="slice.primary.Content" :htmlSerializer="htmlSerializer" />
        </div>
    </section>
</template>

<script>
import { Serializer } from '~/mixins/serializer/Serializer.js'

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
    },
    mixins: [Serializer]
}
</script>

<style lang="scss">
.article-block {
}
</style>
