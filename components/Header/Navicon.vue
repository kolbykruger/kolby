<template>
    <div class="navicon" :class="{ '-open': status }">
        <button data-magnetic data-stick data-cursor="md" class="navicon-button" @click="toggleMenu">
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
    justify-self: end;

    &.-open {
        button,
        small {
            color: #fff;
        }

        .navicon-track {
            transform: translateY(0%);
        }
    }

    &-button {
        position: relative;
        --size: 64px;
        width: var(--size);
        height: var(--size);
        padding: 0;
        font-size: 1.414rem;
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
        height: 64px;
        width: 64px;
        line-height: 1;

        &-close {
            position: relative;
        }

        &-open {
        }
    }

    @keyframes navicon-open {
        0% {
        }
        to {
        }
    }

    @keyframes navicon-close {
    }
}
</style>
