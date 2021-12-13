<template>
    <section class="banner-image">
        <div class="banner-image-container">
            <Picture :field="slice.primary.image" />
            <!-- <prismic-image data-exclusion :field="slice.primary.image" /> -->
        </div>
    </section>
</template>

<script>
export default {
    name: 'BannerImage',
    props: {
        slice: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.banner-image {
    overflow: hidden;

    @include mq('tablet') {
        max-height: 100vh;
        height: 100%;
    }

    &-container {
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;

        @include mq('tablet') {
            height: 100vh;
        }
    }
}
</style>
