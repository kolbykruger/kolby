<template>
    <div class="layout-default">
        <Accessibility />
        <Traveler :counter="counter" />
        <Header />
        <Menu />
        <Nuxt />
        <Footer />
        <Splash />
        <Pointer :counter="counter" />
    </div>
</template>

<script>
import Accessibility from '@/components/Accessibility/Accessibility.vue'
import Header from '@/components/Header/Header.vue'
import Menu from '@/components/Menu/Menu.vue'
import Footer from '@/components/Footer/Footer.vue'
import Pointer from '@/components/Pointer/Pointer.vue'
import Splash from '@/components/Splash/Splash.vue'
import Traveler from '@/components/Traveler/Traveler.vue'

export default {
    data() {
        return {
            counter: 0,
        }
    },
    components: {
        Accessibility,
        Header,
        Menu,
        Footer,
        Pointer,
        Splash,
        Traveler,
    },
    watch: {
        $route() {
            this.counter++
        },
    },
}
</script>
