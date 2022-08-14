<template>
    <main class="page page-error">
        <section>
            <div class="container">
                <Pageheading v-if="error.statusCode === 404" :name="err" />
                <h3>Woops, sorry!</h3>
                <p>That page seems to be lost. Here's a <NuxtLink to="/">link to go back home</NuxtLink>.</p>
            </div>
        </section>
    </main>
</template>

<script>
import Pageheading from '@/components/Pageheading/Pageheading'
export default {
    props: ['error'],
    //layout: 'error',
    components: {
        Pageheading,
    },
    computed: {
        err() {
            return this.error.statusCode === 404 ? '404' : 'An error occurred'
        },
    },
}
</script>

<style lang="scss">
.page-error {
    text-align: center;

    .pageheading-name {
        max-width: 100%;
    }
}
</style>
