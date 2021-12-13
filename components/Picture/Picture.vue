<template>
    <figure class="picture" :style="{ 'aspect-ratio': field.dimensions.width / field.dimensions.height }">
        <nuxt-picture v-if="!dev" fit="clip" loading="lazy" :src="field.url" :sizes="sizes" />
        <prismic-image fit="clip" class="picture-dev" v-if="dev" :field="field" />

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
            dev: false,
        }
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
            defaults: {
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
            },
        },
    },
    created() {
        const state = process.env.NODE_ENV
        console.log(state)
        if (state == 'development') {
            this.dev = true
        }
    },
}
</script>

<style lang="scss">
.picture {
    overflow: hidden;

    &-dev {
    }
}
</style>
