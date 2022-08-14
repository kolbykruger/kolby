<template>
    <section
        class="banner-image"
        :class="{ 'banner-image-full': slice.variation != 'bannerImageConfined' }"
        ref="bannerImage"
    >
        <div class="container">
            <div class="banner-image-container">
                <Picture
                    :field="slice.primary.image"
                    :noise="noise"
                    :styles="{ 'object-position': alignment }"
                    :sizes="{
                        'phone-small': '375px',
                        phone: '460px',
                        'phone-large': '600px',
                        tablet: '768px',
                        'laptop-small': '1024px',
                        laptop: '1200px',
                        'laptop-large': '1350px',
                        'desktop-small': '1600px',
                        desktop: '1920px',
                        'desktop-large': '2560px',
                    }"
                />
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
    computed: {
        noise() {
            return this.slice.primary.noise == 'No' ? false : true
        },
        alignment() {
            return this.slice.primary.alignment ? this.slice.primary.alignment.toLowerCase() : 'top'
        },
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

        const bannerImage = this.$refs.bannerImage
        // const img = bannerImage.querySelector('img')

        // gsap.set(img, {
        //     yPercent: -12,
        // })
        // gsap.to(img, {
        //     scrollTrigger: {
        //         trigger: bannerImage,
        //         start: 'top bottom',
        //         scrub: true,
        //     },
        //     yPercent: 12,
        // })
    },
}
</script>

<style lang="scss">
.banner-image {
    overflow: hidden;

    @include mq('desktop') {
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

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: top;
        opacity: 0.9;
        // transform: translateY(-150px);

        @include mq('desktop') {
            height: 100vh;
        }
    }
}
</style>
