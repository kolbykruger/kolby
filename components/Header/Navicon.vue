<template>
    <div class="navicon" :class="{ '-open': status }">
        <button data-magnetic data-stick data-cursor="md" class="navicon-button" @click="toggleMenu">
            <small>Menu</small>
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
        button,
        small {
            color: #fff;
        }
    }

    &-button {
        position: relative;
        --size: 64px;
        width: var(--size);
        height: var(--size);
    }
}
</style>
