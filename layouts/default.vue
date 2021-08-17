<template>
    <div class="layout-default">
        <Header />
        <Nuxt />
        <Footer />
        <Transitions />
        <Pointer />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Pointer from '@/components/Pointer/Pointer.vue'
import Transitions from '@/components/Transitions/Transitions.vue'

export default {
    components: {
        Header,
        Footer,
        Pointer,
        Transitions
    }
}
</script>
