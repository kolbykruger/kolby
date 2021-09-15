<template>
    <section class="menu" ref="menu" :class="{ '-open': status, '-closed': !status }">
        <div class="container">
            <div class="menu-navigation grid">
                <nav>
                    <ul ref="navLarge" class="navigation-items navigation-items-lg">
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link data-magnetic class="navigation-link" to="/work">
                                    <span data-text="Work">Work</span>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link data-magnetic class="navigation-link" to="/process">
                                    <span data-text="Process">Process</span>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link data-magnetic class="navigation-link" to="/about">
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
                                    <span data-text="LinkedIn">LinkedIn</span>
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
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <aside>
                    <p>
                        <a data-stick data-cursor="xxl" href="mailto:hi@kolby.dev">
                            hi@kolby.dev
                        </a>
                        <span>Inquiries</span>
                    </p>
                </aside>
            </div>
        </div>
        <div class="menu-background"></div>
    </section>
</template>

<script>
import { gsap, TimelineLite } from 'gsap'

export default {
    name: 'Menu',
    computed: {
        status() {
            return this.$store.state.menu.open
        }
    },
    mounted() {
        const navLarge = this.$refs.navLarge
        const links = navLarge.querySelectorAll('.navigation-link')

        links.forEach(link => {
            const linkText = link.querySelector('span')
            gsap.registerPlugin(TimelineLite)
            const tl = new TimelineLite()
            let playing = false

            link.addEventListener('mouseenter', () => {
                if (playing) {
                    return false
                }

                playing = true

                tl.to(linkText, 1.2, {
                    y: '-100%',
                    ease: 'Power3.easeOut',
                    overwrite: 'auto'
                })
                tl.to(linkText, 0, {
                    y: '0%',
                    overwrite: 'auto',
                    onComplete: () => {
                        playing = false
                    }
                })
            })
            link.addEventListener('mouseleave', () => {
                tl.to(linkText, 0, {
                    y: '0%',
                    overwrite: false
                })
            })
        })
    },
    watch: {
        $route() {
            this.$store.commit('menu/close')
            const bg = this.$refs.menu.querySelector('.menu-background')

            gsap.to(bg, {
                background: '#fff',
                duration: 0.5
            })
            setTimeout(() => {
                gsap.to(bg, {
                    background: '#0b0e11',
                    duration: 0
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
                    animation: link-in 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }

                span::after {
                    animation: link-opacity 0s 0.8s ease forwards;
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
                    animation: link-out 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }

                &-lg {
                    @for $i from 1 through 3 {
                        &:nth-child(#{$i}) .navigation-item-bit {
                            animation-delay: $i * 0.08s + 0.12s;
                        }
                    }
                }
                &-sm {
                    @for $i from 1 through 3 {
                        &:nth-child(#{$i}) .navigation-item-bit {
                            animation-delay: $i * 0.08s + 0.18s;
                        }
                    }
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
        color: c('background');
    }

    p {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        margin: 0;
        color: c('background');
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
        background: c('base-0');
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
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
                font-family: 'Ogg';

                @for $i from 1 through 3 {
                    &:nth-child(#{$i}) .navigation-item-bit {
                        animation-delay: $i * 0.12s + 0.28s;
                    }
                }
            }
            &-sm {
                padding-right: 5vw;

                @for $i from 1 through 3 {
                    &:nth-child(#{$i}) .navigation-item-bit {
                        animation-delay: $i * 0.1s + 0.48s;
                    }
                }
            }

            a {
                &:hover,
                &:focus {
                    // span {
                    //     animation: link-enter 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;

                    //     &::after {
                    //         transform: translateY(100%) skew(0deg);
                    //         opacity: 1;
                    //     }
                    // }
                }
            }

            span {
                position: relative;
                display: inline-flex;
                // animation: link-exit 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;

                &::after {
                    content: attr(data-text);
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    transform: translateY(100%);
                    transition: opacity 0s, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                }
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
            transform: translateY(-100%) skew(-4deg);
        }
        to {
            transform: translateY(0%) skew(0deg);
        }
    }

    @keyframes link-out {
        0% {
            transform: translateY(0%) skew(0deg);
        }
        to {
            transform: translateY(-100%) skew(-4deg);
        }
    }

    @keyframes link-enter {
        0% {
            transform: translateY(0%);
        }
        to {
            transform: translateY(-100%);
        }
    }

    @keyframes link-exit {
        0% {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0%);
        }
    }

    @keyframes link-opacity {
        0% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
}
</style>
