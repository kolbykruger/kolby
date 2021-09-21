<template>
    <section class="menu" ref="menu" :class="{ '-open': status, '-closed': !status }">
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
        <div class="menu-background">
            <span class="menu-background-noise"></span>
            <span class="menu-background-artwork"></span>
            <span class="menu-background-color"></span>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import Theme from '@/components/Theme/Theme.vue'

export default {
    name: 'Menu',
    components: {
        Theme
    },
    computed: {
        status() {
            return this.$store.state.menu.open
        },
        mode() {
            return this.$store.state.theme.mode
        }
    },
    mounted() {},
    watch: {
        $route() {
            this.$store.commit('menu/close')
            const bg = this.$refs.menu
            const bgColor = bg.querySelector('.menu-background-color')
            const bgNoise = bg.querySelector('.menu-background-noise')
            const toColor = this.mode == 'dark' ? '#000' : '#fff'

            gsap.to(bgColor, {
                background: toColor,
                duration: 0.5
            })
            gsap.to(bgNoise, 0, {
                opacity: 0
            })
            setTimeout(() => {
                gsap.to(bgColor, {
                    background: '#0b0e11',
                    duration: 0
                })
                gsap.to(bgNoise, 0, {
                    opacity: 0.1
                })
            }, 2000)
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
    transform: translateY(-100%);

    &.-open {
        animation: menu-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;

        .navigation {
            &-item {
                &-bit {
                    animation: link-in 0.92s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
            }
        }

        .menu {
            &-background {
                &-artwork {
                    animation: none;
                }
            }
        }
    }

    &.-closed {
        transform: translateY(0%);
        animation: menu-out 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        animation-delay: 0.45s;

        .navigation {
            &-item {
                &-bit {
                    transform: translateY(0%);
                    animation: link-out 0.66s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }

                &-lg {
                    @for $i from 1 through 3 {
                        &:nth-child(#{$i}) .navigation-item-bit {
                            animation-delay: $i * 0.03s + 0.08s;
                        }
                    }
                }
                &-sm {
                    @for $i from 1 through 4 {
                        &:nth-child(#{$i}) .navigation-item-bit {
                            animation-delay: $i * 0.03s + 0.06s;
                        }
                    }
                }
            }
        }

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

            &.-tiny {
                --size: 0.75em;
                width: var(--size);
                height: var(--size);
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

        &-noise,
        &-artwork,
        &-color {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        &-noise {
            z-index: 3;
            background-image: url('/noise/noise.gif');
            opacity: 0.1;
            mix-blend-mode: overlay;
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
                font-size: 4.5vw;
                font-family: $font-1;

                @for $i from 1 through 3 {
                    &:nth-child(#{$i}) .navigation-item-bit {
                        animation-delay: $i * 0.03s + 0.28s;
                    }
                }
            }
            &-sm {
                padding-right: 5vw;

                @for $i from 1 through 4 {
                    &:nth-child(#{$i}) .navigation-item-bit {
                        animation-delay: $i * 0.03s + 0.48s;
                    }
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

    @keyframes menu-in {
        0% {
            transform: translateY(-100%);
            clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
        }
        to {
            transform: translateY(0%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }

    @keyframes menu-out {
        0% {
            transform: translateY(0%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
        }
        to {
            transform: translateY(-100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }

    @keyframes link-in {
        0% {
            transform: translate(0%, -150%) rotate(-5deg);
        }
        to {
            transform: translate(0%, 0%) rotate(0deg);
        }
    }

    @keyframes link-out {
        0% {
            transform: translate(0%, 0%) rotate(0deg);
        }
        to {
            transform: translate(0%, -150%) rotate(-5deg);
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
