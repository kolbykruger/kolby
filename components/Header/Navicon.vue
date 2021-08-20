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
            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjQ2OTY3IDUuNDY5NjdDNS43NjI1NiA1LjE3Njc4IDYuMjM3NDQgNS4xNzY3OCA2LjUzMDMzIDUuNDY5NjdMMTIgMTAuOTM5M0wxNy40Njk3IDUuNDY5NjdDMTcuNzYyNiA1LjE3Njc4IDE4LjIzNzQgNS4xNzY3OCAxOC41MzAzIDUuNDY5NjdDMTguODIzMiA1Ljc2MjU2IDE4LjgyMzIgNi4yMzc0NCAxOC41MzAzIDYuNTMwMzNMMTMuMDYwNyAxMkwxOC41MzAzIDE3LjQ2OTdDMTguODIzMiAxNy43NjI2IDE4LjgyMzIgMTguMjM3NCAxOC41MzAzIDE4LjUzMDNDMTguMjM3NCAxOC44MjMyIDE3Ljc2MjYgMTguODIzMiAxNy40Njk3IDE4LjUzMDNMMTIgMTMuMDYwN0w2LjUzMDMzIDE4LjUzMDNDNi4yMzc0NCAxOC44MjMyIDUuNzYyNTYgMTguODIzMiA1LjQ2OTY3IDE4LjUzMDNDNS4xNzY3OCAxOC4yMzc0IDUuMTc2NzggMTcuNzYyNiA1LjQ2OTY3IDE3LjQ2OTdMMTAuOTM5MyAxMkw1LjQ2OTY3IDYuNTMwMzNDNS4xNzY3OCA2LjIzNzQ0IDUuMTc2NzggNS43NjI1NiA1LjQ2OTY3IDUuNDY5NjdaIiBmaWxsPSIjMjIyODJGIi8+Cjwvc3ZnPgo=');
                background-size: 150% 150%;
                background-position: 50% 50%;
                z-index: -1;
            }
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
