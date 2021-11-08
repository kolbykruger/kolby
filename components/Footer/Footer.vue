<template>
    <footer class="footer" ref="footer" data-traveler="transparent">
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
                <button @click="scrollToTop()" class="footer-scroll-top" data-stick data-cursor="lg">
                    <svg fill="none" viewBox="0 0 97 141" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m41.8 41.174c-9.6647 14.337-23.838 25.074-39.798 25.91-1.1031 0.0578-2.0025-0.843-2.0025-1.9476l1.0632e-7 -8.9158c1.317e-8 -1.1045 0.89755-1.992 1.9985-2.0806 20.748-1.6715 38.736-28.991 39.756-51.572 0.0498-1.1034 0.941-1.9978 2.0456-1.9978h0.2 9 0.2c1.1046 0 1.9958 0.89433 2.0454 1.9978 1.0151 22.584 18.921 49.908 39.756 51.572 1.101 0.088 1.9986 0.9755 1.9986 2.08v8.9158c0 1.1046-0.8994 2.0054-2.0025 1.9476-15.959-0.8354-30.133-11.573-39.798-25.91v97.396c0 1.104-0.8954 2-2 2h-9.4c-1.1045 0-2-0.896-2-2l1e-4 -97.396z"
                            clip-rule="evenodd"
                            fill="#0B0E11"
                            fill-rule="evenodd"
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
        --size: 96px;
        display: grid;
        place-content: center;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        cursor: pointer;
        overflow: hidden;

        &:hover,
        &:focus {
            svg {
                transform: scale(1);
                animation: arrow-move 1.2s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;

                @keyframes arrow-move {
                    25% {
                        transform: translateY(-16px) scale(1);
                    }
                    100% {
                        transform: translateY(16px) scale(1);
                    }
                }
            }
        }

        svg {
            --size: 64px;
            width: var(--size);
            height: var(--size);
            object-fit: contain;
            transform: scale(0.8);
            transition: 260ms cubic-bezier(0.075, 0.82, 0.165, 1);

            path {
                fill: c('base-0');
            }
        }
    }
}
</style>
