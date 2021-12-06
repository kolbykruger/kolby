<template>
    <footer class="footer" ref="footer" data-traveler="transparent" data-anim>
        <div class="container">
            <span class="footer-magic"></span>
            <div class="footer-grid">
                <div class="footer-copy">
                    <h2>Have an idea?</h2>
                    <h2>Let's work together.</h2>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path
                            d="M34.4018 26.5679C35.2661 26.787 35.9995 27.4939 35.9995 28.3855V28.3855C35.9995 29.2772 35.2713 30.013 34.392 29.8647C28.0634 28.7971 23.0778 21.6001 22.343 15.0043C22.2421 14.0986 22.9882 13.3585 23.8995 13.3585V13.3585C24.8108 13.3585 25.5417 14.1002 25.6672 15.0028C26.3588 19.9777 30.016 25.4561 34.4018 26.5679Z"
                            fill="#0B0E11"
                        />
                        <path
                            d="M23.8495 13.3585C24.7608 13.3585 25.5069 14.0986 25.406 15.0043C24.6712 21.6001 19.6856 28.7971 13.357 29.8647C12.4778 30.013 11.7495 29.2772 11.7495 28.3855V28.3855C11.7495 27.4939 12.483 26.7869 13.347 26.5664C17.7173 25.4514 21.3868 19.9755 22.0813 15.0027C22.2073 14.1002 22.9382 13.3585 23.8495 13.3585V13.3585Z"
                            fill="#0B0E11"
                        />
                    </svg>
                    <span class="visually-hidden">Scroll to the top.</span>
                </button>
            </div>
        </div>
    </footer>
</template>

<script>
import Socials from '../Socials/Socials.vue'
export default {
    components: { Socials },
    name: 'Footer',
    computed: {
        year() {
            const d = new Date()
            return d.getFullYear()
        },
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
    },
    mounted() {},
}
</script>

<style lang="scss">
.footer {
    position: relative;
    z-index: 2;

    @include mq('tablet') {
        padding-bottom: 18vh;
    }

    .container {
    }

    &-magic {
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

    &-grid {
        @include mq('tablet') {
            display: flex;
            justify-content: space-between;
        }
    }

    &-copy,
    &-cta {
        flex: 1;
    }

    &-top {
        display: grid;
        place-content: center;
        position: absolute;
        bottom: 3vh;
        left: 0;
        right: 0;
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
}
</style>
