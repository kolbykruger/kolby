<template>
    <header
        class="header"
        ref="header"
        :class="{
            '-open': menuStatus,
        }"
    >
        <div class="container">
            <div class="grid grid-col-2 grid-gap-lg">
                <Mark />
                <div class="header--actions">
                    <Button location="/contact" size="small" v-if="showButton">
                        Start your project
                        <template #posticon><ArrowRight /></template>
                    </Button>
                    <Navicon />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Mark from '~/components/Header/Mark'
import Navicon from '~/components/Header/Navicon'
import ArrowRight from '~/assets/svg/arrows/Arrow-Right.svg?inline'

export default {
    name: 'Header',
    components: {
        Mark,
        Navicon,
        ArrowRight,
    },
    data() {
        return {
            showButton: false,
        }
    },
    computed: {
        menuStatus() {
            return this.$store.state.menu.open
        },
    },
    methods: {
        setOffset() {
            const header = this.$refs.header

            const bounds = header ? header.getBoundingClientRect() : 0
            document.documentElement.style.setProperty('--offset', bounds.height + 60 + 'px')
        },
        checkRouteForButton() {
            const whitelist = ['/contact', '/approach']
            const route = this.$route
            console.log(route)
            this.showButton = whitelist.includes(route.path) ? true : false
        },
    },
    mounted() {
        this.setOffset()
        this.checkRouteForButton()

        window.addEventListener('resize', event => {
            this.setOffset()
        })
    },
    watch: {
        $route() {
            this.setOffset()
            this.checkRouteForButton()
        },
    },
}
</script>

<style lang="scss">
.header {
    position: absolute;
    top: 1.25em;
    left: 0;
    width: 100%;
    z-index: 150;

    @include mq('tablet') {
        top: 3.75em;
    }

    .container {
        padding: 0 calc(20px - 2em);

        @media (min-width: 360px) {
            padding: 0 calc(30px - 2em);
        }
        @media (min-width: 768px) {
            padding: 0 calc(100px - 2em);
        }
        @media (min-width: 1024px) {
            padding: 0 calc(120px - 2em);
        }
        @media (min-width: 1200px) {
            padding: 0 calc(150px - 2em);
        }
        @media (min-width: 1350px) {
            padding: 0 calc(180px - 2em);
        }
        @media (min-width: 1600px) {
            padding: 0 calc(220px - 2em);
        }
        @media (min-width: 1920px) {
            padding: 0 calc(270px - 2em);
        }
    }

    &.-open {
        position: fixed;
    }

    .grid {
        align-items: center;
    }

    &--actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .button.button-size-small .button-action {
        margin-bottom: 0;
    }
}
</style>
