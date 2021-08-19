<template>
    <div class="layout-default">
        <Header />
        <Nuxt />
        <Footer />
        <Splash />
        <Pointer />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Pointer from '@/components/Pointer/Pointer.vue'
import Splash from '@/components/Splash/Splash.vue'

export default {
    components: {
        Header,
        Footer,
        Pointer,
        Splash
    },
    mounted() {
        console.log(this.$refs)
    }
}
</script>
