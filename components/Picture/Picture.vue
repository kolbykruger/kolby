<template>
    <figure
        ref="picture"
        class="picture"
        :class="{ '-loaded': !isLoading, '-noise': noise }"
        :style="{ 'aspect-ratio': field.dimensions.width / field.dimensions.height }"
    >
        <nuxt-img
            fit="clip"
            loading="lazy"
            crossorigin="anonymous"
            :class="{ '-loaded': !isLoading }"
            :style="styles"
            :src="field.url"
            :sizes="sizes"
            @load.native="isLoading = false"
        />
        <!-- <prismic-image
            v-if="isDev"
            fit="clip"
            loading="lazy"
            crossorigin="anonymous"
            class="picture-dev"
            :class="{ '-loaded': !isLoading }"
            :field="field"
            @load="isLoading = false"
        /> -->

        <!-- <Picture
            :field="document.data.Cover"
            :sizes="{
                'phone-small': 'px',
                phone: 'px',
                'phone-large': 'px',
                tablet: 'px',
                'laptop-small': 'px',
                laptop: 'px',
                'laptop-large': 'px',
                'desktop-small': 'px',
                desktop: 'px',
                'desktop-large': 'px',
            }"
        /> -->
    </figure>
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return {
            isLoading: true,
        }
    },
    computed: {
        isDev() {
            // Returns the production/development state
            // return false
            return process.env.NODE_ENV == 'development' ? true : false
        },
    },
    props: {
        field: {
            type: Object,
            defaults: {
                dimensions: {
                    width: 1916,
                    height: 1161,
                },
                alt: 'placeholder image',
                url: 'https://images.unsplash.com/photo-1638911022787-1e1edc253c70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80',
            },
        },
        sizes: {
            type: Object,
            default() {
                return {
                    'phone-small': '100vw',
                    phone: '100vw',
                    'phone-large': '100vw',
                    tablet: '100vw',
                    'laptop-small': '100vw',
                    laptop: '100vw',
                    'laptop-large': '100vw',
                    'desktop-small': '100vw',
                    desktop: '100vw',
                    'desktop-large': '100vw',
                }
            },
        },
        styles: {
            type: Object,
            default: null,
        },
        animation: {
            type: Boolean,
            defaults: false,
        },
        noise: {
            type: Boolean,
            defaults: false,
        },
    },
}
</script>

<style lang="scss">
.picture {
    overflow: hidden;

    &.-noise {
        @include mq('laptop-large') {
            position: relative;

            &::before {
                @include image-noise;
            }
        }
    }

    &.-loaded {
    }

    img {
        &.-loaded {
        }
    }
}
</style>
