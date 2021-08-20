<template>
    <section class="case-study-neighbor">
        <div class="container">
            <p>Next project</p>
            <nuxt-link data-magnetic to="/">
                <h2>Vermont Electric</h2>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Neighbor'
    // props: {
    //     document: Object
    // }
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
        font-family: inherit;
    }
}
</style>
