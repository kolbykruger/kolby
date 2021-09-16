<template>
    <div class="layout-default">
        <Header />
        <Menu />
        <Nuxt />
        <Footer />
        <Splash />
        <Traveler />
        <Pointer :counter="counter" />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Menu from '@/components/Menu/Menu.vue'
import Footer from '@/components/Footer/Footer.vue'
import Pointer from '@/components/Pointer/Pointer.vue'
import Splash from '@/components/Splash/Splash.vue'
import Traveler from '@/components/Traveler/Traveler.vue'

export default {
    data() {
        return {
            counter: 0
        }
    },
    components: {
        Header,
        Menu,
        Footer,
        Pointer,
        Splash,
        Traveler
    },
    watch: {
        $route() {
            this.counter++
        }
    }
}
</script>
