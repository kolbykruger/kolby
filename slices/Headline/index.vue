<template>
    <section class="headline">
        <div class="container">
            <prismic-rich-text :field="slice.primary.title" class="title" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Headline',
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

<style lang="scss" scoped>
.headline {
    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }
}
</style>
