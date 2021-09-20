<template>
    <section class="scroller">
        <div class="container">
            <div class="scroller-indicator"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Scroller'
}
</script>

<style lang="scss">
.scroller {
    margin: 3vh 0 6vh;

    &-indicator {
        position: relative;
        width: 3px;
        height: 2.75em;
        background: c('base-8');
        overflow: hidden;

        html[theme='dark'] & {
            background: c('base-7');
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: c('base-7');
            transform-origin: top;
            animation: scroller-indicator 2.32s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;

            html[theme='dark'] & {
                background: c('base-3');
            }

            @keyframes scroller-indicator {
                0% {
                    transform: scaleY(0);
                }
                50% {
                    transform: scaleY(1.1);
                }
                100% {
                    opacity: 0;
                }
            }
        }
    }
}
</style>
