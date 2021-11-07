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
}
</style>
