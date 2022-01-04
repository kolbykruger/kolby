<template>
    <section
        class="banner-image"
        :class="{ 'banner-image-full': slice.variation != 'bannerImageConfined' }"
        ref="bannerImage"
    >
        <div class="container">
            <div class="banner-image-container">
                <Picture :field="slice.primary.image" />
            </div>
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
        gsap.set(bannerImage.querySelector('picture'), {
            yPercent: -12,
        })
        gsap.to(bannerImage.querySelector('picture'), {
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
        max-height: 96vh;
        height: 100%;
    }

    &-full {
        .container {
            padding: 0;
        }
    }

    .container {
    }

    picture {
        position: relative;

        &::before {
            @include image-noise;
        }
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        opacity: 0.9;
        // transform: translateY(-150px);

        @include mq('tablet') {
            height: 100vh;
        }
    }
}
</style>
