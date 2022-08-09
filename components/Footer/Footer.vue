<template>
    <footer class="footer" ref="footer" data-traveler="transparent" data-anim>
        <div class="container">
            <div class="footer-squig">
                <div
                    class="footer-squiggle"
                    v-if="$store.state.theme.mode == 'dark'"
                    :style="{ 'background-image': `url(${squiggleDarkMode})` }"
                ></div>
                <div class="footer-squiggle" v-else :style="{ 'background-image': `url(${squiggle})` }"></div>
            </div>
            <span class="footer-magic"></span>
            <div class="footer-grid">
                <div class="footer-copy">
                    <h2>Have an idea?</h2>
                    <h2>Let's work together.</h2>

                    <button :href="`mailto:${contact}`" class="footer-email" @click="copyEmail">
                        <span class="footer-email-active">{{ contact }}</span>
                    </button>

                    <Socials />
                </div>
                <div class="footer-cta">
                    <Compass />
                </div>
            </div>
            <div class="footer-top">
                <button
                    @click="scrollToTop()"
                    class="footer-scroll-top"
                    data-stick
                    data-progress="4"
                    data-callback="top"
                    data-anim
                    data-anim-start="bottom"
                >
                    <span class="visually-hidden">Scroll to the top.</span>
                </button>
            </div>
        </div>
    </footer>
</template>

<script>
const confetti = require('canvas-confetti')
import Socials from '../Socials/Socials.vue'
import squiggle from '@/assets/svg/animated/squiggle.svg?data'
import squiggleDarkMode from '@/assets/svg/animated/squiggle-dark-mode.svg?data'

export default {
    components: { Socials },
    name: 'Footer',
    data() {
        return {
            contact: null,
            squiggle,
            squiggleDarkMode,
        }
    },
    computed: {
        year() {
            const d = new Date()
            return d.getFullYear()
        },
        email() {
            return this.$store.state.contact.email
        },
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
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
            this.celebrate()
            setTimeout(() => {
                this.contact = this.email
            }, 3000)
        },
        celebrate() {
            const canvas = this.$refs.canvas
            const c = confetti.create(canvas, {
                resize: true,
            })
            c({
                particleCount: 100,
                spread: 160,
            })
        },
    },
    mounted() {
        this.contact = this.email
    },
}
</script>

<style lang="scss">
.footer {
    position: relative;
    padding-bottom: 6vh;
    z-index: 2;

    @include mq('tablet') {
        padding-bottom: 18vh;
    }

    .container {
    }

    &-magic {
        @include mq('tablet') {
            position: absolute;
            top: -300%;
            left: 0;
            width: 100%;
            height: 400%;
            z-index: -1;
            pointer-events: none;
            user-select: none;
            background: radial-gradient(ellipse at 10% 90%, c('base-0'), transparent 60%);
            opacity: 0.2;
            filter: blur(var(--size));
            transition: background 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);

            html[theme='dark'] & {
                background: radial-gradient(ellipse at 10% 90%, c('base-3'), transparent 60%);
            }
        }
    }

    &-grid {
        @include mq('tablet') {
            display: flex;
            justify-content: space-between;
        }
    }

    &-copy,
    &-cta {
        flex: 1;

        h2 + h2 {
            margin-top: 0;
        }
    }

    &-email {
        position: relative;
        display: inline-flex;
        padding-bottom: 1em;
        margin-bottom: 0;
        overflow: hidden;

        &-link {
            color: c('base-0');
            text-decoration: none;
        }

        @include mq('tablet') {
            display: none;
        }
    }

    &-top {
        display: grid;
        place-content: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        @include mq('tablet') {
            bottom: 3vh;
        }
    }

    &-scroll-top {
        --size: 3em;
        display: grid;
        place-content: center;
        width: var(--size);
        height: var(--size);
        padding: 1em;
        border-radius: 50%;
        cursor: pointer;
        overflow: hidden;

        svg {
            path {
                fill: c('base-0');
            }
        }
    }

    &-squiggle {
        width: 100%;
        height: 5px;
        mix-blend-mode: difference;

        @include mq('tablet') {
            max-width: 280px;
        }
    }
}
</style>
