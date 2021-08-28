<template>
    <header class="header" ref="header" :class="{ '-open': menuStatus }">
        <div class="container">
            <div class="grid grid-col-2 grid-gap-lg">
                <Mark />
                <Navicon />
            </div>
        </div>
    </header>
</template>

<script>
import Mark from '~/components/Header/Mark'
import Navicon from '~/components/Header/Navicon'

export default {
    name: 'Header',
    components: {
        Mark,
        Navicon
    },
    computed: {
        menuStatus() {
            return this.$store.state.menu.open
        }
    },
    methods: {
        setOffset() {
            const header = this.$refs.header
            const bounds = header.getBoundingClientRect()
            document.documentElement.style.setProperty('--offset', bounds.height + 60 + 'px')
        }
    },
    mounted() {
        this.setOffset()

        window.addEventListener('resize', event => {
            this.setOffset()
        })
    },
    watch: {
        $route() {
            this.setOffset()
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 3.75em;
    left: 0;
    width: 100%;
    z-index: 150;

    .container {
        padding: 0 calc(270px - 2em);
    }

    &.-open {
        position: fixed;
    }

    .grid {
        align-items: center;
    }
}
</style>
