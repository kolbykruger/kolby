<template>
    <div class="layout-default">
        <Header />
        <Menu />
        <Nuxt />
        <Footer />
        <Splash />
        <Pointer />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Menu from '@/components/Menu/Menu.vue'
import Footer from '@/components/Footer/Footer.vue'
import Pointer from '@/components/Pointer/Pointer.vue'
import Splash from '@/components/Splash/Splash.vue'

export default {
    components: {
        Header,
        Menu,
        Footer,
        Pointer,
        Splash
    }
}
</script>
