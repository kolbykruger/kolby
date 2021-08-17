<template>
    <main class="page">
        <section>
            <div class="container">
                <h1>Work</h1>
            </div>
        </section>

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

export default {
    // components: {
    //     SliceZone
    // },
    async asyncData({ $prismic, params, error }) {
        const cases = await $prismic.api.query($prismic.predicates.at('document.type', 'case-study'), {
            orderings: '[document.first_publication_date ]'
        })
        if (cases) {
            return { cases }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    }
}
</script>
