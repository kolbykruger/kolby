<template>
    <section class="menu" ref="menu" :class="{ '-open': status, '-closed': !open }" tabindex="-1">
        <div class="menu-background">
            <span class="menu-background-noise"></span>
            <span class="menu-background-artwork"></span>
            <span class="menu-background-color"></span>
        </div>
        <div class="container">
            <div class="menu-navigation">
                <nav>
                    <ul ref="navLarge" class="navigation-items navigation-items-lg">
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link
                                    data-cursor="lg"
                                    class="navigation-link"
                                    to="/work"
                                    @click.native="setMenuStatus('/work')"
                                >
                                    <span data-text="Work">Work</span>
                                    <span class="navigation-link-sticky" aria-hidden="true"></span>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link
                                    data-cursor="lg"
                                    class="navigation-link"
                                    to="/about"
                                    @click.native="setMenuStatus('/about')"
                                >
                                    <span data-text="About">About</span>
                                    <span class="navigation-link-sticky" aria-hidden="true"></span>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-lg">
                            <div class="navigation-item-bit">
                                <nuxt-link
                                    data-cursor="lg"
                                    class="navigation-link"
                                    to="/approach"
                                    @click.native="setMenuStatus('/approach')"
                                >
                                    <span data-text="Approach">Approach</span>
                                    <span class="navigation-link-sticky" aria-hidden="true"></span>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>
                    <ul ref="navSmall" class="navigation-items navigation-items-sm">
                        <li class="navigation-item navigation-item-sm">
                            <div class="navigation-item-bit">
                                <nuxt-link
                                    data-stick
                                    data-cursor="xl"
                                    class="navigation-link"
                                    to="/articles"
                                    @click.native="setMenuStatus('/articles')"
                                >
                                    <span data-text="Articles">Articles</span>
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-sm">
                            <div class="navigation-item-bit">
                                <a
                                    data-stick
                                    data-cursor="xl"
                                    class="navigation-link"
                                    :href="$store.state.contact.socials.github"
                                    target="_blank"
                                    rel="noopener norefer"
                                >
                                    <span data-text="Github">Github</span>
                                    <ArrowExternal />
                                </a>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-sm">
                            <div class="navigation-item-bit">
                                <a
                                    data-stick
                                    data-cursor="xl"
                                    class="navigation-link"
                                    :href="$store.state.contact.socials.linkedin"
                                    target="_blank"
                                    rel="noopener norefer"
                                >
                                    <span data-text="LinkedIn">LinkedIn</span>
                                    <ArrowExternal />
                                </a>
                            </div>
                        </li>
                        <li class="navigation-item navigation-item-sm navigation-item-sm--theme">
                            <div class="navigation-item-bit">
                                <Theme />
                            </div>
                        </li>
                    </ul>
                </nav>
                <aside>
                    <p class="navigation-item navigation-item-sm">
                        <button
                            class="navigation-item-bit navigation-item-spoiler"
                            data-stick
                            data-magnetic
                            data-cursor="xxl"
                            @click="copyEmail"
                            @mouseenter="revealEmail"
                        >
                            <span class="navigation-item-spoiler-passive">Say hello</span>
                            <span class="navigation-item-spoiler-active">{{ contact }}</span>
                        </button>
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

import ArrowExternal from '@/assets/svg/arrows/Arrow-External.svg?inline'

export default {
    name: 'Menu',
    components: {
        Theme,
        ArrowExternal,
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
            ease: null,
            contact: null,
        }
    },
    computed: {
        status() {
            return this.$store.state.menu.open
        },
        mode() {
            return this.$store.state.theme.mode
        },
        email() {
            return this.$store.state.contact.email
        },
    },
    methods: {
        setMenuStatus(loc) {
            if (loc == this.$route.path) {
                this.$store.commit('menu/close')
                this.routing = false
            }
        },
        revealEmail() {
            this.contact = this.email
        },
        copyEmail(e) {
            const el = document.createElement('textarea')
            el.value = this.email
            el.setAttribute('readonly', '')
            el.classList.add('visually-hidden')
            e.target.appendChild(el)
            el.select()
            document.execCommand('copy')
            e.target.removeChild(el)
            this.contact = 'Copied!'
            setTimeout(() => {
                this.contact = this.email
            }, 3000)
        },
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
            y: '-100%',
        })

        // Show email on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) {
            this.contact = this.email
        }
    },
    watch: {
        $route() {
            const menu = this.$refs.menu
            this.routing = true
            this.timeline.to(menu, {
                y: '-100%',
                delay: 1,
                duration: 0,
            })
            this.$store.commit('menu/close')
            this.routing = false
        },
        status: function (value) {
            const menu = this.$refs.menu
            this.open = value

            let menuTransitions = {
                in: {
                    y: '0%',
                    duration: 0.8,
                    ease: this.ease,
                },
                out: {
                    y: '-100%',
                    duration: 0.6,
                    delay: 0.45,
                    ease: this.ease,
                },
            }

            let largeLinkTransitions = {
                in: {
                    y: '0%',
                    rotate: '0deg',
                    duration: 0.92,
                    delay: 0.28,
                    ease: this.ease,
                    stagger: {
                        amount: 0.05,
                    },
                },
                out: {
                    y: '-150%',
                    rotate: '-5deg',
                    duration: 0.92,
                    delay: 0.08,
                    ease: this.ease,
                    stagger: {
                        amount: 0.03,
                    },
                },
            }

            let smallLinkTransitions = {
                in: {
                    y: '0%',
                    rotate: '0deg',
                    duration: 0.92,
                    delay: 0.48,
                    ease: this.ease,
                    stagger: {
                        amount: 0.05,
                    },
                },
                out: {
                    y: '-150%',
                    rotate: '-5deg',
                    duration: 0.92,
                    delay: 0.06,
                    ease: this.ease,
                    stagger: {
                        amount: 0.03,
                    },
                },
            }

            if (this.open) {
                this.timeline.to(menu, menuTransitions.in)
                this.largeLinkTimeline.to(this.largeLinks, largeLinkTransitions.in)
                this.smallLinkTimeline.to(this.smallLinks, smallLinkTransitions.in)
            } else {
                if (!this.routing) {
                    this.timeline.to(menu, menuTransitions.out)
                    this.largeLinkTimeline.to(this.largeLinks, largeLinkTransitions.out)
                    this.smallLinkTimeline.to(this.smallLinks, smallLinkTransitions.out)
                }
            }
        },
    },
}
</script>

<style lang="scss">
.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    // padding-bottom: 10vh;
    z-index: 100;
    will-change: transform;

    @supports (margin-bottom: env(safe-area-inset-bottom)) {
        margin-bottom: env(safe-area-inset-bottom);
    }

    // @media (min-width: 968px) {
    //     height: 110vh;
    // }

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
                    animation: artwork-out 0.92s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
            }
        }
    }

    .container {
        height: 100%;
    }

    nav {
        width: 100%;
    }

    aside {
        display: block;
        margin-top: 6vh;

        .navigation-item-sm {
            padding-right: 0;
        }

        button {
            outline: none;
        }

        @include mq('tablet') {
            display: flex;
            justify-content: flex-end;
            margin-top: 0;
        }
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
            padding: 0 1em;
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

            @include mq('tablet') {
                background-image: url('/noise/noise.gif');
                opacity: 0.15;
                mix-blend-mode: overlay;
            }
        }

        &-artwork {
            --size: 150vw;
            width: var(--size);
            height: var(--size);
            background: c('base-6');
            z-index: 2;
            filter: blur(var(--size));
            border-radius: 50%;
            transform: translate(-35%, -25%);
            opacity: 0.5;
            transition: background 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);
            will-change: opacity;

            @include mq('tablet') {
                --size: 60vw;
                transform: translate(-25%, -25%);
                filter: blur(var(--size));
                opacity: 0.3;
            }

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        // align-items: center;
        padding-top: 10vh;

        @include mq('tablet') {
            display: grid;
            align-items: end;
            grid-template-columns: 3fr 1fr;
            padding-top: 0;
            padding-bottom: 10vh;
        }
    }

    .navigation {
        &-items {
            margin-bottom: 0;

            &-lg {
                padding-bottom: 12vh;
            }

            &-sm {
                display: flex;
                flex-direction: column;

                @include mq('tablet') {
                    flex-direction: row;
                    align-items: center;
                }
            }
        }
        &-item {
            margin-bottom: 0;
            //clip-path: polygon(-100% 0, 200% 0, 200% 100%, -100% 100%);
            overflow: hidden;

            &-bit {
                position: relative;
                display: inline-flex;
                transform: translateY(-100%);
                will-change: transform;
            }

            &-lg {
                font-family: $font-1;
                font-size: clamp(3.052rem, -0.875rem + 8.333vw, 4.5vw);
            }

            &-sm {
                font-size: clamp(1.563rem, -0.875rem + 3vw, 1.693rem);
                padding-right: 5vw;
                padding-bottom: 0.25vh;

                a {
                    &::after {
                        display: none;
                    }
                }

                &--theme {
                    position: absolute;
                    bottom: 1em;
                    right: 0;

                    @include mq('tablet') {
                        position: relative;
                        bottom: auto;
                        right: auto;
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
                    transition: transform 0.46s cubic-bezier(0.42, 0.39, 0.17, 1), opacity 0.66s ease;
                    z-index: -1;
                }

                .navigation-link-sticky {
                    --offset: 1.5em;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translate(var(--offset), -50%);
                }

                &.nuxt-link-exact-active {
                    &::after {
                        background: c('menu-color');
                    }
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

            &-spoiler {
                display: block;
                padding: 0;
                text-align: left;

                @include mq('tablet') {
                    padding: 0.5em;
                    margin-top: 0;
                    text-align: center;
                }

                &:hover,
                &:focus {
                    .navigation-item-spoiler {
                        &-passive {
                            @include mq('tablet') {
                                opacity: 0;
                                transform: translateY(-150%);
                            }
                        }

                        &-active {
                            @include mq('tablet') {
                                opacity: 1;
                                transform: translateY(0%);
                            }
                        }
                    }
                }

                &-active,
                &-passive {
                    display: block;
                    padding: 0;

                    @include mq('tablet') {
                        padding: 0 1em;
                    }
                }

                &-active {
                    color: c('primary-base');

                    @include mq('tablet') {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: grid;
                        place-content: center;
                        text-align: center;
                        opacity: 0;
                        transform: translateY(100%);
                    }
                }

                &-passive {
                    color: c('menu-color');
                    transform: translate(0, 0);

                    @include mq('tablet') {
                        display: grid;
                        place-content: center;
                    }
                }
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
