<template>
    <main class="page">
        <section class="case-study-intro">
            <div class="container">
                <prismic-rich-text class="pageheading" :field="document.data.Name" />
                <h2 class="tagline">{{ document.data.Tagline }}</h2>
                <prismic-rich-text class="summary" :field="document.data.Summary" />
            </div>
        </section>
        <Stats :document="document" />
        <slice-zone type="case-study" :uid="$route.params.uid" />
    </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Stats from '@/components/CaseStudy/Stats/Stats.vue'

export default {
    components: {
        SliceZone,
        Stats
    },
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getByUID('case-study', params.uid)
        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    }
}
</script>
