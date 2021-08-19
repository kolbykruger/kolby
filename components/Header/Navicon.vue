<template>
    <div class="navicon" :class="{ '-open': status }">
        <button @click="toggleMenu">
            <span>Menu</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Navicon',
    computed: {
        status() {
            return this.$store.state.menu.open
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('menu/toggle')
        }
    }
}
</script>

<style lang="scss" scoped>
.navicon {
    justify-self: end;

    &.-open {
        button {
            color: #fff;
        }
    }
}
</style>
