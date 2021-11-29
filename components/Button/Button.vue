<template>
    <div class="button" :class="'button-size-' + size" ref="btn">
        <nuxt-link data-magnetic class="button-link" :to="location" v-if="location">
            <span><slot></slot></span>
        </nuxt-link>
        <button data-magnetic class="button-btn" v-else @click="emitClick">
            <span><slot></slot></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        location: String,
        size: {
            type: String,
            default: 'normal',
        },
    },
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    computed: {},
    methods: {
        emitClick(event) {
            // add a @clicked to parent button component
            this.$emit('clicked', event)
        },
    },
    mounted() {},
}
</script>

<style lang="scss">
.button {
    &-link,
    &-btn {
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

        .article & {
            border-color: c('base-4');
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

        &::after {
            content: '';
            position: absolute;

            --offset: 0;
            top: var(--offset);
            left: var(--offset);
            bottom: var(--offset);
            right: var(--offset);
            border-radius: 2em;
            background: radial-gradient(ellipse at 0% 0%, c('base-3'), transparent 75%);
            opacity: 0.12;
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

    &.button-size {
        &-small {
            .button {
                &-link,
                &-btn {
                    height: 52px;
                    font-size: 1.125rem;
                }
            }
        }
    }
}
</style>
