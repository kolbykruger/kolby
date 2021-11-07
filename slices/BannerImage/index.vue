<template>
    <section class="banner-image">
        <div class="banner-image-container">
            <!-- <nuxt-img
                provider="prismic"
                v-if="slice.primary.image.url"
                :src="slice.primary.image.url"
                sizes="sm:200px, md:50px, lg:100vw, xl:100vw, xxl: 100vw"
                densities="1x 2x"
            /> -->
            <prismic-image data-exclusion :field="slice.primary.image" />
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
