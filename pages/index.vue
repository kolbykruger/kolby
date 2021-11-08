<template>
    <main class="page" id="content">
        <div class="page-contents">
            <Introduction />

            <section class="headline">
                <div class="container">
                    <h2>Featured <br />work</h2>
                </div>
            </section>

            <section class="case-studies" v-if="cases">
                <div class="container">
                    <CaseStudyItem v-for="study in cases.results" :key="study.id" :item="study" />
                    <nuxt-link class="button" to="/work">View more work</nuxt-link>
                </div>
            </section>

            <!-- <slice-zone type="page" uid="home" /> -->
        </div>
    </main>
</template>

<script>
import Introduction from '~/components/Introduction/Introduction.vue'
import { Animations } from '~/mixins/animations/Animations.js'
// import SliceZone from 'vue-slicezone'

export default {
    components: {
        Introduction,
        // Headline,
        // SliceZone
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
