<template>
    <main class="page">
        <section>
            <div class="container">
                <Pageheading v-if="error.statusCode === 404" :name="err" />
                <NuxtLink to="/">Home page</NuxtLink>
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
        Pageheading
    },
    computed: {
        err() {
            return this.error.statusCode === 404 ? 'Page not found' : 'An error occurred'
        }
    }
}
</script>
