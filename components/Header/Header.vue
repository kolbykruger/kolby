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
        Navicon,
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
        calculateHeaderState(position, bounds, el) {
            position.current > bounds.height ? el.classList.add('-unsticky') : el.classList.remove('-unsticky')

            if (position.current < position.previous && position.current > bounds.height) {
                el.classList.add('-sticky')
            } else {
                el.classList.remove('-sticky')
            }
        },
    },
    mounted() {
        this.setOffset()

        const header = this.$refs.header
        const bounds = header.getBoundingClientRect()
        let isScrolling
        let position = {
            current: 0,
            previous: 0,
        }

        let scrollDistance = (callback, refresh) => {
            // Check if a proper callback was initialized
            if (!callback || typeof callback !== 'function') {
                return
            }

            //
            let isScrolling, start, end, distance

            window.addEventListener(
                'scroll',
                event => {
                    // Set the starting position
                    if (!start) {
                        start = window.pageYOffset
                    }

                    // Clear the timeout if still scrolling
                    window.clearTimeout(isScrolling)

                    // set a timeout to detect when scrolling ends
                    isScrolling = setTimeout(() => {
                        // Calculate the distance
                        end = window.pageYOffset
                        distance = end - start

                        // Trigger the callback
                        callback(distance, start, end)

                        // Reset the calculations
                        start = end = distance = null
                    }, refresh || 66)
                },
                false
            )
        }

        scrollDistance(distance => {
            if (distance < 0 && parseInt(Math.abs(distance), 10) > 16 && window.pageYOffset > bounds.height) {
                header.classList.add('-sticky')
            } else {
                header.classList.remove('-sticky')
            }
        })

        window.addEventListener('resize', event => {
            this.bounds = header.getBoundingClientRect()
            this.setOffset()
        })
    },
    watch: {
        $route() {
            this.setOffset()
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 1.25em;
    left: 0;
    width: 100%;
    z-index: 150;

    &.-sticky {
        position: fixed;
        animation: header-sticky 300ms ease forwards;

        @keyframes header-sticky {
            from {
                transform: translateY(calc(-150% + 1.25em));
            }
            to {
                transform: translateY(0);
            }
        }
    }

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
}
</style>
