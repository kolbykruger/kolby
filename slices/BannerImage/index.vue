<template>
    <section class="banner-image" ref="bannerImage">
        <div class="banner-image-container">
            <Picture :field="slice.primary.image" />
            <!-- <prismic-image data-exclusion :field="slice.primary.image" /> -->
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
    name: 'BannerImage',
    props: {
        slice: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

        const bannerImage = this.$refs.bannerImage
        gsap.set(bannerImage.querySelector('img'), {
            yPercent: -12,
        })
        gsap.to(bannerImage.querySelector('img'), {
            scrollTrigger: {
                trigger: bannerImage,
                start: 'top bottom',
                scrub: true,
            },
            yPercent: 12,
        })
    },
}
</script>

<style lang="scss">
.banner-image {
    overflow: hidden;

    @include mq('tablet') {
        max-height: 90vh;
        height: 100%;
    }

    &-container {
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        // transform: translateY(-150px);

        @include mq('tablet') {
            height: 100vh;
        }
    }
}
</style>
