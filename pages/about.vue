<template>
    <main class="page about" id="content">
        <div class="page-contents">
            <Foreward :document="document" />
            <slice-zone class="slices" type="about" uid="about" />
        </div>
    </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import { Animations } from '~/mixins/animations/Animations.js'

export default {
    components: {
        //Pageheading
        SliceZone,
    },
    mixins: [Animations],
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getSingle('about')

        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
}
</script>

<style lang="scss"></style>
