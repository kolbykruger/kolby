<template>
    <section class="gallery">
        <div class="container">
            <prismic-rich-text :field="slice.primary.title" class="title" />
            <prismic-rich-text :field="slice.primary.description" />

            <div class="gallery-items grid grid-col-4 grid-gap-lg">
                <div class="gallery-item" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
                    <div
                        class="gallery-img"
                        :style="{
                            'aspect-ratio': item.Image.crop.dimensions.width / item.Image.crop.dimensions.height
                        }"
                    >
                        <prismic-image :field="item.Image.crop" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Gallery',
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
.gallery {
    .container {
        padding-bottom: 10vh;
    }
}
</style>
