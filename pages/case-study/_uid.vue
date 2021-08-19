<template>
    <main class="page case-study">
        <section class="case-study-intro">
            <div class="container">
                <prismic-rich-text class="pageheading" :field="document.data.Name" />
                <h2 class="case-study-intro-tagline">{{ document.data.Tagline }}</h2>
                <prismic-rich-text class="case-study-intro-summary" :field="document.data.Summary" />
            </div>
        </section>
        <Stats :document="document" />
        <slice-zone type="case-study" :uid="$route.params.uid" />
        <Neighbor :document="document" />
    </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Stats from '@/components/CaseStudy/Stats/Stats.vue'
import Neighbor from '@/components/CaseStudy/Neighbor/Neighbor.vue'

export default {
    components: {
        SliceZone,
        Stats,
        Neighbor
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

<style lang="scss">
.case-study {
    &-intro {
        &-tagline,
        &-summary {
            max-width: 72em;
        }
    }
}
</style>
