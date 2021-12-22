<template>
    <div class="button" :class="['button-size-' + size, 'button-type-' + type]" ref="btn">
        <component data-magnetic :is="element" :to="location" @click="emitClick" class="button-action">
            <span v-if="$slots.preicon" class="button-icon button-icon-pre"><slot name="preicon"></slot></span>
            <span class="button-content"><slot></slot></span>
            <span v-if="$slots.posticon" class="button-icon button-icon-post"><slot name="posticon"></slot></span>
        </component>
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
        type: {
            type: String,
            default: 'button',
        },
        magnetic: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    computed: {
        element() {
            return this.location ? 'nuxt-link' : 'button'
        },
    },
    methods: {
        emitClick(event) {
            // add a @clicked to parent button component
            if (!this.location) {
                this.$emit('clicked', event)
            }
        },
    },
    mounted() {},
}
</script>

<style lang="scss">
.button {
    &-link,
    &-action {
        position: relative;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: c('base-0');
        background: transparent;
        font-size: 1.5rem;
        overflow: hidden;
        outline: none;

        &[data-magnetic] {
            display: inline-flex;
        }
    }

    &-type {
        &-button {
            .button {
                &-action {
                    height: 68px;
                    padding: 0 1.4em;
                    margin-right: 0.7em;
                    margin-bottom: 0.7em;
                    border-radius: 2em;
                    border: 1px solid c('base-4');
                    transition: color 0.2s ease, border-color 0.3s ease;

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
            }
        }

        &-text {
            .button {
                &-action {
                    @include fs-sm;
                    padding: 0;
                }
            }
        }
    }

    &-icon,
    &-content {
        position: relative;
        display: block;
    }

    &-content {
        line-height: 1;

        + .button-icon {
            margin-left: 0.7em;
        }
    }

    &-icon {
        --size: 1.125em;
        width: var(--size);
        height: var(--size);

        + .button-content {
            margin-left: 0.7em;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;

            > * {
                fill: c('base-3');
            }
        }
    }

    &.button-size {
        &-small {
            .button {
                &-type {
                    &-button {
                        .button {
                            &-action {
                                height: 52px;
                                font-size: 1.125rem;
                            }
                        }
                    }
                }
                &-action {
                    font-size: 1.25rem;
                }
            }
        }
    }
}
</style>
