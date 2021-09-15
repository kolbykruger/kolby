<template>
    <div class="navicon" :class="{ '-open': status }">
        <button data-magnetic data-stick data-cursor="lg" class="navicon-button" @click="toggleMenu">
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

    // &::before {
    //     content: '';
    //     display: block;
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     --size: 25vw;
    //     width: var(--size);
    //     height: var(--size);
    //     background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjU0IiBoZWlnaHQ9IjY1NCIgdmlld0JveD0iMCAwIDY1NCA2NTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIG9wYWNpdHk9IjAuNiI+CjxwYXRoIGQ9Ik0zNDQgMzI3QzM0NCAzMzYuMzg4IDMzNi4zODkgMzQ0IDMyNyAzNDRDMzE3LjYxMSAzNDQgMzEwIDMzNi4zODggMzEwIDMyN0MzMTAgMzE3LjYxMSAzMTcuNjExIDMxMCAzMjcgMzEwQzMzNi4zODkgMzEwIDM0NCAzMTcuNjExIDM0NCAzMjdaIiBzdHJva2U9IiMzRTNFM0UiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMzY4IDMyN0MzNjggMzQ5LjY0NCAzNDkuNjQ0IDM2OCAzMjcgMzY4QzMwNC4zNTYgMzY4IDI4NiAzNDkuNjQ0IDI4NiAzMjdDMjg2IDMwNC4zNTYgMzA0LjM1NiAyODYgMzI3IDI4NkMzNDkuNjQ0IDI4NiAzNjggMzA0LjM1NiAzNjggMzI3WiIgc3Ryb2tlPSIjM0UzRTNFIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTM5MiAzMjdDMzkyIDM2Mi44OTkgMzYyLjg5OSAzOTIgMzI3IDM5MkMyOTEuMTAxIDM5MiAyNjIgMzYyLjg5OSAyNjIgMzI3QzI2MiAyOTEuMTAyIDI5MS4xMDEgMjYyIDMyNyAyNjJDMzYyLjg5OSAyNjIgMzkyIDI5MS4xMDIgMzkyIDMyN1oiIHN0cm9rZT0iIzNFM0UzRSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik00MTYgMzI3QzQxNiAzNzYuMTUzIDM3Ni4xNTMgNDE2IDMyNyA0MTZDMjc3Ljg0NyA0MTYgMjM4IDM3Ni4xNTMgMjM4IDMyN0MyMzggMjc3Ljg0NiAyNzcuODQ3IDIzOCAzMjcgMjM4QzM3Ni4xNTMgMjM4IDQxNiAyNzcuODQ2IDQxNiAzMjdaIiBzdHJva2U9IiMzRTNFM0UiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNNDQwIDMyN0M0NDAgMzg5LjQwOCAzODkuNDA4IDQ0MCAzMjcgNDQwQzI2NC41OTIgNDQwIDIxNCAzODkuNDA4IDIxNCAzMjdDMjE0IDI2NC41OTIgMjY0LjU5MiAyMTQgMzI3IDIxNEMzODkuNDA4IDIxNCA0NDAgMjY0LjU5MiA0NDAgMzI3WiIgc3Ryb2tlPSIjM0UzRTNFIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMzI3IiBjeT0iMzI3IiByPSIxMzciIHN0cm9rZT0iIzNFM0UzRSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjMyNyIgY3k9IjMyNyIgcj0iMTYxIiBzdHJva2U9IiMzRTNFM0UiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNNTEyIDMyN0M1MTIgNDI5LjE3MyA0MjkuMTczIDUxMiAzMjcgNTEyQzIyNC44MjcgNTEyIDE0MiA0MjkuMTczIDE0MiAzMjdDMTQyIDIyNC44MjcgMjI0LjgyNyAxNDIgMzI3IDE0MkM0MjkuMTczIDE0MiA1MTIgMjI0LjgyNyA1MTIgMzI3WiIgc3Ryb2tlPSIjM0UzRTNFIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTUzNiAzMjdDNTM2IDQ0Mi40MjggNDQyLjQyOCA1MzYgMzI3IDUzNkMyMTEuNTcyIDUzNiAxMTggNDQyLjQyOCAxMTggMzI3QzExOCAyMTEuNTczIDIxMS41NzIgMTE4IDMyNyAxMThDNDQyLjQyOCAxMTggNTM2IDIxMS41NzMgNTM2IDMyN1oiIHN0cm9rZT0iIzNFM0UzRSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjMyNyIgY3k9IjMyNyIgcj0iMjMzIiBzdHJva2U9IiMzRTNFM0UiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIzMjciIGN5PSIzMjciIHI9IjI1NyIgc3Ryb2tlPSIjM0UzRTNFIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTYwNiAzMjYuOTk5QzYwNiA0ODEuMDg3IDQ4MS4wODcgNjA1Ljk5OSAzMjcgNjA1Ljk5OUMxNzIuOTEzIDYwNS45OTkgNDggNDgxLjA4NyA0OCAzMjYuOTk5QzQ4IDE3Mi45MTIgMTcyLjkxMyA0Ny45OTk1IDMyNyA0Ny45OTk1QzQ4MS4wODcgNDcuOTk5NSA2MDYgMTcyLjkxMiA2MDYgMzI2Ljk5OVoiIHN0cm9rZT0iIzNFM0UzRSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjMyNyIgY3k9IjMyNyIgcj0iMzAyIiBzdHJva2U9IiMzRTNFM0UiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIzMjciIGN5PSIzMjciIHI9IjMyNiIgc3Ryb2tlPSIjM0UzRTNFIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9nPgo8L3N2Zz4K);
    //     background-size: 654px 654px;
    //     background-position: center;
    //     background-repeat: no-repeat;
    //     opacity: 0.2;
    // }

    &.-open {
        button,
        small {
            color: c('background');
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
