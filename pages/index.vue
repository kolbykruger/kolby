<template>
    <main class="page" id="content">
        <div class="page-contents">
            <Introduction />

            <slice-zone class="slices" type="home" uid="home" />

            <Cases :cases="cases.results" v-if="cases" />
        </div>
    </main>
</template>

<script>
import Introduction from '~/components/Introduction/Introduction.vue'
import Cases from '~/components/Cases/Cases.vue'
import { Animations } from '~/mixins/animations/Animations.js'
import SliceZone from 'vue-slicezone'
import ArrowRight from '~/assets/svg/arrows/Arrow-Right.svg?inline'

export default {
    components: {
        Introduction,
        Cases,
        SliceZone,
        ArrowRight,
    },
    mixins: [Animations],
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.query($prismic.predicates.at('document.type', 'home'))

        const caseStudyIds = document.results[0].data.FeaturedWork.map(i => {
            return i.CaseStudy.id
        })

        const cases = await $prismic.api.getByIDs(caseStudyIds)

        if (cases && document) {
            return { document, cases }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
}
</script>
