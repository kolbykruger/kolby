<template>
    <div class="navicon" :class="{ '-open': status }" id="navigation">
        <button data-magnetic="0.3, 0.3, 0.18" data-stick data-cursor="lg" class="navicon-button" @click="toggleMenu">
            <div class="navicon-track">
                <span class="navicon-text navicon-text-close" :aria-hidden="!status">Close</span>
                <span class="navicon-text navicon-text-open" :aria-hidden="status">Menu</span>
            </div>
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
    position: relative;
    justify-self: end;
    color: c('menu-navicon');

    &.-open {
        button,
        small {
            color: c('menu-color');
        }

        .navicon-track {
            transform: translateY(0%);
        }
    }

    &-button {
        position: relative;
        --size: 96px;
        width: var(--size);
        height: var(--size);
        color: c('base-0');
        padding: 0;
        font-size: 1.616rem;
        overflow: hidden;
        outline: none;
    }

    &-track {
        transform: translateY(-50%);
        transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &-text {
        display: grid;
        place-content: center;
        text-align: center;
        --size: 96px;
        width: var(--size);
        height: var(--size);
        line-height: 1;

        &-close {
            position: relative;
        }

        &-open {
        }
    }
}
</style>
