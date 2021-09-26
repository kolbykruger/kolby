<template>
    <section class="menu" ref="menu" tabindex="-1" :class="{ '-open': status, '-closed': !open }">
        <div class="menu-background">
            <span class="menu-background-artwork"></span>
            <span class="menu-background-color"></span>
        </div>
        <div class="container">
            <div class="menu-navigation grid">
                <nav>
                    <ul ref="navLarge" class="navigation-items navigation-items-lg">
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link data-magnetic="0.1, 0.1, 0.08" class="navigation-link" to="/work">
                                    <span data-text="Work">Work</span>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link data-magnetic="0.1, 0.1, 0.08" class="navigation-link" to="/process">
                                    <span data-text="Process">Process</span>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link data-magnetic="0.1, 0.1, 0.08" class="navigation-link" to="/about">
                                    <span data-text="About">About</span>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>
                    <ul ref="navSmall" class="navigation-items navigation-items-sm">
                        <li class="navigation-item navigation-item-sm">
                            <div class="navigation-item-bit">
                                <nuxt-link data-stick data-cursor="xl" class="navigation-link" to="/articles">
                                    <span data-text="Articles">Articles</span>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-sm">
                            <div class="navigation-item-bit">
                                <nuxt-link data-stick data-cursor="xl" class="navigation-link" to="/lab">
                                    <span data-text="LinkedIn">Spotify</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="168"
                                        height="169"
                                        viewBox="0 0 168 169"
                                        fill="none"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M99.841 58.9134C82.8693 62.2172 65.2546 59.7876 53.3788 49.0933C52.558 48.3541 52.5589 47.0812 53.34 46.3001L59.6444 39.9957C60.4255 39.2147 61.6876 39.2218 62.5289 39.9376C78.3822 53.4271 110.419 46.8282 127.107 31.5825C127.923 30.8375 129.185 30.8353 129.966 31.6163L130.081 31.731C130.09 31.7397 130.099 31.7486 130.108 31.7575L136.613 38.2629C137.394 39.044 137.392 40.3065 136.647 41.1219C121.396 57.8086 114.736 89.791 128.292 105.701C129.008 106.542 129.015 107.804 128.234 108.585L121.93 114.889C121.149 115.67 119.876 115.671 119.136 114.85C108.442 102.975 106.013 85.3602 109.316 68.3885L40.4466 137.258C39.6655 138.039 38.3992 138.039 37.6181 137.258L30.9713 130.611C30.1903 129.83 30.1903 128.564 30.9713 127.783L99.841 58.9134Z"
                                            fill="#0B0E11"
                                        />
                                    </svg>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-sm">
                            <div class="navigation-item-bit">
                                <a
                                    data-stick
                                    data-cursor="xl"
                                    class="navigation-link"
                                    to="https://github.com/kolbykruger"
                                >
                                    <span data-text="Github">Github</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="168"
                                        height="169"
                                        viewBox="0 0 168 169"
                                        fill="none"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M99.841 58.9134C82.8693 62.2172 65.2546 59.7876 53.3788 49.0933C52.558 48.3541 52.5589 47.0812 53.34 46.3001L59.6444 39.9957C60.4255 39.2147 61.6876 39.2218 62.5289 39.9376C78.3822 53.4271 110.419 46.8282 127.107 31.5825C127.923 30.8375 129.185 30.8353 129.966 31.6163L130.081 31.731C130.09 31.7397 130.099 31.7486 130.108 31.7575L136.613 38.2629C137.394 39.044 137.392 40.3065 136.647 41.1219C121.396 57.8086 114.736 89.791 128.292 105.701C129.008 106.542 129.015 107.804 128.234 108.585L121.93 114.889C121.149 115.67 119.876 115.671 119.136 114.85C108.442 102.975 106.013 85.3602 109.316 68.3885L40.4466 137.258C39.6655 138.039 38.3992 138.039 37.6181 137.258L30.9713 130.611C30.1903 129.83 30.1903 128.564 30.9713 127.783L99.841 58.9134Z"
                                            fill="#0B0E11"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-sm">
                            <div class="navigation-item-bit">
                                <Theme />
                            </div>
                        </li>
                    </ul>
                </nav>
                <aside>
                    <p class="navigation-item navigation-item-sm">
                        <a
                            class="navigation-item-bit"
                            data-stick
                            data-cursor="xxl"
                            data-shift
                            href="mailto:hi@kolby.dev"
                        >
                            hi@kolby.dev
                        </a>
                        <span>Inquiries</span>
                    </p>
                </aside>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import Theme from '@/components/Theme/Theme.vue'

export default {
    name: 'Menu',
    components: {
        Theme
    },
    data() {
        return {
            open: true,
            routing: false,
            timeline: null,
            largeLinks: null,
            smallLinks: null,
            largeLinkTimeline: null,
            smallLinkTimeline: null,
            ease: null
        }
    },
    computed: {
        status() {
            return this.$store.state.menu.open
        },
        mode() {
            return this.$store.state.theme.mode
        }
    },
    mounted() {
        gsap.registerPlugin(CustomEase)
        this.ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')

        this.timeline = gsap.timeline()
        this.largeLinkTimeline = gsap.timeline()
        this.smallLinkTimeline = gsap.timeline()

        const menu = this.$refs.menu
        this.largeLinks = menu.querySelectorAll('.navigation-item-lg .navigation-item-bit')
        this.smallLinks = menu.querySelectorAll('.navigation-item-sm .navigation-item-bit')

        this.timeline.set(menu, {
            y: '-100%'
        })
    },
    watch: {
        $route() {
            const menu = this.$refs.menu
            this.routing = true
            this.timeline.to(menu, {
                y: '-100%',
                delay: 1,
                duration: 0
            })
            this.$store.commit('menu/close')
            this.routing = false
        },
        status: function(value) {
            const menu = this.$refs.menu
            this.open = value

            if (this.open) {
                this.timeline.to(menu, {
                    y: '0%',
                    duration: 0.8,
                    ease: this.ease
                })

                this.largeLinkTimeline
                    .set(this.largeLinks, {
                        y: '-100%',
                        rotate: '-5deg'
                    })
                    .to(this.largeLinks, {
                        y: '0%',
                        rotate: '0deg',
                        duration: 0.92,
                        delay: 0.28,
                        ease: this.ease,
                        stagger: {
                            amount: 0.03
                        }
                    })

                this.smallLinkTimeline
                    .set(this.smallLinks, {
                        y: '-100%',
                        rotate: '-5deg'
                    })
                    .to(this.smallLinks, {
                        y: '0%',
                        rotate: '0deg',
                        duration: 0.92,
                        delay: 0.48,
                        ease: this.ease,
                        stagger: {
                            amount: 0.03
                        }
                    })
            } else {
                if (!this.routing) {
                    this.timeline.to(menu, {
                        y: '-100%',
                        duration: 0.6,
                        delay: 0.45,
                        ease: this.ease
                    })

                    this.largeLinkTimeline
                        .set(this.largeLinks, {
                            y: '0%',
                            rotate: '0deg'
                        })
                        .to(this.largeLinks, {
                            y: '-150%',
                            rotate: '-5deg',
                            duration: 0.92,
                            delay: 0.08,
                            ease: this.ease,
                            stagger: {
                                amount: 0.03
                            }
                        })

                    this.smallLinkTimeline
                        .set(this.smallLinks, {
                            y: '0%',
                            rotate: '0deg'
                        })
                        .to(this.smallLinks, {
                            y: '-150%',
                            rotate: '-5deg',
                            duration: 0.92,
                            delay: 0.06,
                            ease: this.ease,
                            stagger: {
                                amount: 0.03
                            }
                        })
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110vh;
    padding-bottom: 10vh;
    z-index: 100;

    &.-open {
        .menu {
            &-background {
                &-artwork {
                    animation: none;
                }
            }
        }
    }

    &.-closed {
        .menu {
            &-background {
                &-artwork {
                    animation: artwork-out 0.33s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
            }
        }
    }

    .container {
        height: 100%;
    }

    a {
        display: inline-flex;
        text-decoration: none;
        color: c('menu-color');

        svg {
            --size: 1em;
            width: var(--size);
            height: var(--size);
            margin-left: 0.25em;
            margin-bottom: 0.25em;

            path {
                fill: c('menu-color');
            }
        }
    }

    p {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        margin: 0;
        color: c('menu-color');
        transform: translateY(1em);

        a {
            padding: 1em;

            &:hover,
            &:focus {
                ~ span {
                    opacity: 0;
                    transition: 0s;
                }
            }
        }

        span {
            display: block;
            margin-bottom: 0;
            color: c('base-5');
            padding: 0 1em;
            transform: translateY(1em);
            pointer-events: none;
            user-select: none;
            transition: 0.6s ease;
        }
    }

    &-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        &-artwork,
        &-color {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        &-artwork {
            --size: 60vw;
            width: var(--size);
            height: var(--size);
            background: c('base-6');
            z-index: 2;
            filter: blur(var(--size));
            border-radius: 50%;
            transform: translate(-25%, -25%);
            opacity: 0.3;
            transition: background 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);

            html[theme='dark'] & {
                background: c('primary-base');
            }
        }

        &-color {
            z-index: 1;
            background-color: c('menu-background');
        }
    }

    &-navigation {
        display: grid;
        grid-template-columns: 3fr 1fr;
        height: 100%;
        align-items: end;
        padding-bottom: 10vh;
    }

    .navigation {
        &-items {
            margin-bottom: 0;

            &-lg {
                padding-bottom: 8vh;
            }
            &-sm {
                display: flex;
                align-items: center;
            }
        }
        &-item {
            margin-bottom: 0;
            clip-path: polygon(-100% 0, 200% 0, 200% 100%, -100% 100%);

            &-bit {
                position: relative;
                display: inline-flex;
                transform: translateY(-100%);
            }

            &-lg {
                font-size: 20vw;
                font-family: $font-1;

                @media (min-width: 600px) {
                    font-size: 7vw;
                }
                @media (min-width: 960px) {
                    font-size: 7vw;
                }
                @media (min-width: 1600px) {
                    font-size: 4.5vw;
                }
            }
            &-sm {
                display: none;
                padding-right: 5vw;

                @media (min-width: 600px) {
                    display: block;
                }

                a {
                    &::after {
                        display: none;
                    }
                }
            }

            a {
                position: relative;

                &:after {
                    content: '';
                    position: absolute;
                    bottom: 12%;
                    left: -0.125em;
                    right: -0.125em;
                    height: 0.35em;
                    background: c('primary-base');
                    transform: scaleX(0);
                    opacity: 0;
                    transform-origin: 0 50%;
                    transition: transform 0.66s cubic-bezier(0.42, 0.39, 0.17, 1), opacity 0.66s ease;
                    z-index: -1;
                }
                &:hover,
                &:focus {
                    &::after {
                        transform: scaleX(1);
                        opacity: 0.5;
                        transition: transform 0.92s cubic-bezier(0.42, 0.39, 0.17, 1);
                    }
                }
            }

            span {
                position: relative;
                display: inline-flex;
            }
        }
    }

    @keyframes artwork-in {
        0% {
            opacity: 0;
        }
        to {
            opacity: 0.3;
        }
    }

    @keyframes artwork-out {
        0% {
            opacity: 0.3;
        }
        to {
            opacity: 0;
        }
    }
}
</style>
