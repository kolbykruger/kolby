<template>
    <main class="page">
        <Pageheading name="Work" />

        <section class="case-studies">
            <div class="container">
                <ul>
                    <li v-for="study in cases.results" :key="study.id">
                        <nuxt-link :to="'/case-study/' + study.uid">{{ study.data.Name[0].text }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </section>

        <!-- <slice-zone type="work" uid="work" /> -->
    </main>
</template>

<script>
// import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'

export default {
    components: {
        Pageheading
    },
    async asyncData({ $prismic, params, error }) {
        const cases = await $prismic.api.query($prismic.predicates.at('document.type', 'case-study'), {
            orderings: '[document.first_publication_date ]'
        })
        const document = await $prismic.api.query($prismic.predicates.at('document.type', 'work'))
        if (cases && document) {
            return { cases, document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    }
}
</script>
