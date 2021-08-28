<template>
    <section class="case-study-neighbor" v-if="page">
        <div class="container">
            <p>Next project</p>
            <nuxt-link data-magnetic data-cursor="lg" :to="'/case-study/' + page.uid">
                <h2>{{ page.data.Name[0].text }}</h2>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Neighbor',
    props: {
        page: Object
    }
}
</script>

<style lang="scss" scoped>
.case-study-neighbor {
    text-align: center;

    .container {
        padding-top: 18vh;
        padding-bottom: 18vh;
    }

    a {
        display: grid;
        place-content: center;
        color: #000;
        text-decoration: none;
        padding: 1em;
    }

    h2 {
        margin-top: 0.125em;
        margin-bottom: 0;
    }
}
</style>
