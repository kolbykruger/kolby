<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
    <main class="page" id="content">
        <div class="page-contents">
            <Pageheading :name="document.data.Name" />
            <slice-zone class="slices" type="page" :uid="$route.params.uid" />
        </div>
    </main>
</template>

<script>
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import SliceZone from 'vue-slicezone'
import { Animations } from '~/mixins/animations/Animations.js'

export default {
    components: {
        Pageheading,
        SliceZone,
    },
    mixins: [Animations],
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getByUID('page', params.uid)
        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
}
</script>
