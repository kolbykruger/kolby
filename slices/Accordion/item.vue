<template>
    <div class="accordion-item" :data-index="index" :class="[{ '-expanded': open }, 'accordion-item-accent-' + accent]">
        <a :name="encodeURIComponent(item.Title)"></a>
        <button
            data-cursor="md"
            class="accordion-item-button"
            :class="{ 'accordion-item-button--icon': item.Icon ? true : false }"
            @click="toggleAccordion()"
            :aria-expanded="open"
            :aria-controls="`collapse_${index}`"
        >
            <span
                class="accordion-item-button-icon"
                v-if="item.Icon"
                v-html=""
                aria-hidden="true"
            ></span>
            <p class="accordion-item-button-title">{{ item.Title }}</p>
            <div class="accordion-item-button-indicator" data-anchor data-exclusion>
                <svg fill="none" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m0.25342 2.1106c0 0.89165 0.7334 1.5986 1.5977 1.8176 4.3858 1.1117 8.043 6.5902 8.7347 11.565 0.1254 0.9026 0.8563 1.6443 1.7676 1.6443 0.0084 0 0.0167-1e-4 0.025-2e-4 0.0083 1e-4 0.0167 2e-4 0.025 2e-4 0.9113 0 1.6422-0.7417 1.7682-1.6442 0.6946-4.9728 4.364-10.449 8.7344-11.564 0.8639-0.22043 1.5974-0.92744 1.5974-1.8191s-0.7282-1.6275-1.6075-1.4792c-4.5725 0.77137-8.4439 4.7424-10.518 9.3745-2.0736-4.6321-5.945-8.6031-10.518-9.3745-0.87923-0.14832-1.6075 0.5875-1.6075 1.4792z"
                        fill="#0B0E11"
                    />
                </svg>
            </div>
        </button>

        <div
            class="accordion-item-panel"
            :aria-expanded="open ? true : false"
            :aria-hidden="open ? false : true"
            :id="`collapse_${index}`"
            ref="accordionPanel"
            :style="{ '--height': panelHeight + 'px' }"
        >
            <prismic-rich-text :field="item.Description" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'item',
    props: {
        item: Object,
        index: Number,
        color: String,
    },
    data() {
        return {
            open: false,
            panelHeight: 0,
            accent: 'primary',
            colors: ['primary', 'secondary', 'tertiary', 'quaternary'],
        }
    },
    methods: {
        toggleAccordion() {
            this.open = !this.open
            const panel = this.$refs.accordionPanel
        },
        calculatePanelHeight() {
            const panel = this.$refs.accordionPanel || false
            if (panel) {
                this.panelHeight = panel.scrollHeight
            }
        },
        assignRandomColor() {
            const arr = this.colors
            this.accent = arr[Math.floor(Math.random() * arr.length)]
        },
    },
    mounted() {
        // Run to calculate the panel height
        this.calculatePanelHeight()
        if (this.color) {
            this.color == 'Random' ? this.assignRandomColor() : (this.accent = this.color.toLowerCase())
        }

        window.addEventListener('resize', () => {
            this.calculatePanelHeight()
        })
    },
}
</script>

<style lang="scss">
.accordion-item {
    svg {
        width: 100%;
        height: 100%;

        * {
            fill: c('base-0');
        }
    }

    &.accordion-item-accent {
        &-secondary {
            .accordion-item-button {
                &[aria-expanded='true'] {
                    .accordion-item-button-title,
                    .accordion-item-button-icon svg path {
                        color: c('secondary-base');
                        fill: c('secondary-base');
                    }
                }
            }
        }

        &-tertiary {
            .accordion-item-button {
                &[aria-expanded='true'] {
                    .accordion-item-button-title,
                    .accordion-item-button-icon svg path {
                        color: c('tertiary-base');
                        fill: c('tertiary-base');
                    }
                }
            }
        }

        &-quaternary {
            .accordion-item-button {
                &[aria-expanded='true'] {
                    .accordion-item-button-title,
                    .accordion-item-button-icon svg path {
                        color: c('quaternary-base');
                        fill: c('quaternary-base');
                    }
                }
            }
        }
    }

    &-button {
        //RESET BUTTON
        appearance: none;
        background: none;
        border: none;
        outline: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;

        display: grid;
        align-items: center;
        grid-template-columns: auto clamp(1.75rem, 2vw, 2.5rem);
        grid-column-gap: clamp(0.75rem, 2vw, 1.5rem);
        width: 100%;
        padding: 1em 0;
        text-align: left;
        transition: max-height 250ms ease;
        cursor: pointer;

        &--icon {
            grid-template-columns: clamp(1.75rem, 2vw, 2.5rem) auto clamp(1.75rem, 2vw, 2.5rem);

            & + .accordion-item-panel {
                padding-left: calc(clamp(1.75rem, 2vw, 2.5rem) + clamp(0.75rem, 2vw, 1.5rem));
            }
        }

        @include mq('tablet') {
            padding: 2em 0;
        }

        &:focus {
            outline: none;
        }

        &-icon {
            margin-bottom: 0.5rem;
        }

        &-indicator {
            padding: 0.5em;
            transition: transform 0.32s cubic-bezier(0.68, -0.55, 0.265, 1.55);

            svg {
                path {
                    fill: c('base-3');
                }
            }
        }

        &[aria-expanded='true'] {
            .accordion-item-button-title,
            .accordion-item-button-icon svg path {
                transition: color 0.32s cubic-bezier(0.68, -0.55, 0.265, 1.55) fill 0.32s
                    cubic-bezier(0.68, -0.55, 0.265, 1.55);
                color: c('primary-base');
                fill: c('primary-base');
            }

            .accordion-item-button-indicator {
                transform: rotate(180deg);
            }
        }
    }

    &-panel {
        position: relative;
        max-height: 0;
        padding-left: 0;
        overflow: hidden;
        transition: max-height 0.32s ease;

        @include mq('tablet') {
            padding-right: calc(clamp(1.75rem, 2vw, 2.5rem) + clamp(0.75rem, 2vw, 1.5rem));
        }

        &[aria-expanded='true'] {
            max-height: var(--height);
        }

        p:last-of-type {
            margin-bottom: revert;
        }
    }
}
</style>
