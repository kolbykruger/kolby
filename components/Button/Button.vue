<template>
    <div class="button" ref="btn">
        <nuxt-link data-magnetic class="button-link" :to="location">
            <slot></slot>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        location: String,
    },
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    computed: {},
    mounted() {},
}
</script>

<style lang="scss">
.button {
    &-link {
        position: relative;
        display: inline-flex;
        align-items: center;
        height: 68px;
        margin-right: 0.7em;
        margin-bottom: 0.7em;
        padding: 0 1.4em;
        border-radius: 2em;
        text-decoration: none;
        color: c('base-0');
        border: 1px solid c('base-4');
        background: transparent;
        font-size: 1.5rem;
        transition: color 0.2s ease, border-color 0.3s ease;
        overflow: hidden;

        &[data-magnetic] {
            display: inline-flex;
        }

        html[theme='dark'] & {
            border-color: c('base-3');
        }

        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 100%;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: c('base-0');
            transform: translate(-50%, 0%);
            transition: 0.2s ease;
            z-index: -1;
            // mix-blend-mode: difference;
        }

        &:hover {
            color: c('base-9');
            border-color: transparent;

            html[theme='dark'] & {
                border-color: transparent;
            }

            &::before {
                transform: translate(-50%, -100%);
                border-radius: 2em;
            }
        }
    }
}
</style>
