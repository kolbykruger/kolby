<template>
    <section class="menu" ref="menu" :class="{ '-open': status, '-closed': !status }">
        <div class="container">
            <div class="menu-navigation grid">
                <nav>
                    <ul class="navigation-items navigation-items-lg">
                        <li class="navigation-item navigation-item-lg">
                            <nuxt-link data-magnetic class="navigation-link" to="/work">
                                <span>Work</span>
                            </nuxt-link>
                        </li>
                        <li class="navigation-item navigation-item-lg">
                            <nuxt-link data-magnetic class="navigation-link" to="/process">
                                <span>Process</span>
                            </nuxt-link>
                        </li>
                        <li class="navigation-item navigation-item-lg">
                            <nuxt-link data-magnetic class="navigation-link" to="/about">
                                <span>About</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <ul class="navigation-items navigation-items-sm">
                        <li class="navigation-item navigation-item-sm">
                            <nuxt-link data-stick class="navigation-link" to="/blog">
                                <span>Blog</span>
                            </nuxt-link>
                        </li>
                        <li class="navigation-item navigation-item-sm">
                            <nuxt-link data-stick class="navigation-link" to="/lab">
                                <span>Lab</span>
                            </nuxt-link>
                        </li>
                        <li class="navigation-item navigation-item-sm">
                            <a data-stick class="navigation-link" to="https://github.com/kolbykruger">
                                <span>Github</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <aside>
                    <p>Inquiries</p>
                    <p>
                        <a>
                            hello@kolby.dev
                        </a>
                    </p>
                </aside>
            </div>
        </div>
        <div class="menu-background"></div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
export default {
    name: 'Menu',
    computed: {
        status() {
            return this.$store.state.menu.open
        }
    },
    watch: {
        $route() {
            this.$store.commit('menu/close')
            const bg = this.$refs.menu.querySelector('.menu-background')

            gsap.to(bg, {
                background: '#fff',
                duration: 1
            })
            setTimeout(() => {
                gsap.to(bg, {
                    background: '#000',
                    duraiton: 0
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
                span {
                    animation: link-in 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
            }
        }
    }

    &.-closed {
        transform: translateY(0%);
        animation: menu-out 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        animation-delay: 0.55s;

        .navigation {
            &-item {
                &-lg {
                    @for $i from 1 through 3 {
                        &:nth-child(#{$i}) span {
                            animation-delay: $i * 0.04s + 0.32s;
                        }
                    }
                }
                &-sm {
                    @for $i from 1 through 3 {
                        &:nth-child(#{$i}) span {
                            animation-delay: $i * 0.04s + 0.28s;
                        }
                    }
                }
                span {
                    transform: translateY(0%);
                    animation: link-out 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
        color: #fff;
    }

    p {
        margin: 0;
        color: #fff;

        &:not(:last-of-type) {
            margin-bottom: 0.25em;
            opacity: 0.25;
        }
    }

    &-background {
        background: #000;
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

            &-lg {
                font-size: 4.5vw;
                font-family: 'Ogg';

                @for $i from 1 through 3 {
                    &:nth-child(#{$i}) span {
                        animation-delay: $i * 0.04s + 0.28s;
                    }
                }
            }
            &-sm {
                padding-right: 5vw;

                @for $i from 1 through 3 {
                    &:nth-child(#{$i}) span {
                        animation-delay: $i * 0.04s + 0.32s;
                    }
                }
            }

            a {
                overflow: hidden;
            }

            span {
                display: inline-flex;
                transform: translateY(-100%);
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
}
</style>
