<template>
    <main class="page">
        <Pageheading name="Work" />

        <section class="work-intro">
            <div class="container">
                <p>
                    Since 2016, I've worked on over 100 projects
                </p>
            </div>
        </section>

        <section class="case-studies" v-if="cases">
            <div class="container">
                <!-- <ul>
                    <li >
                        <nuxt-link :to="'/works/' + study.uid">{{ study.data.Name[0].text }}</nuxt-link>
                    </li>
                </ul> -->

                <CaseStudyItem v-for="study in cases.results" :key="study.id" :item="study" />
            </div>
        </section>

        <!-- <slice-zone type="work" uid="work" /> -->
    </main>
</template>

<script>
// import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import CaseStudyItem from '~/components/CaseStudyItem/CaseStudyItem.vue'

export default {
    components: {
        Pageheading,
        CaseStudyItem
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

<style lang="scss">
.case-studies {
    .container {
    }

    ul {
    }

    li {
    }
}
</style>
