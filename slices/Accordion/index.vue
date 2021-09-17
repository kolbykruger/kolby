<template>
    <section class="accordion">
        <div class="container">
            <div class="accordion-heading" v-if="slice.primary.heading">
                <prismic-rich-text :field="slice.primary.heading" />
            </div>
            <div class="accordion-items">
                <div class="accordion-item" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
                    <a :name="encodeURIComponent(item.Title)"></a>
                    <button class="accordion-button" @click="toggle">
                        <p class="accordion-button-title">
                            {{ item.Title }}
                        </p>
                        <div class="accordion-button-icon" data-anchor data-exclusion>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="97"
                                height="141"
                                viewBox="0 0 97 141"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M55.1999 100.055C64.8646 85.7176 79.0381 74.9801 94.9975 74.1447 96.1006 74.0869 97 74.9877 97 76.0923V85.0081C97 86.1126 96.1024 87.0001 95.0014 87.0888 74.253 88.7602 56.2656 116.08 55.2456 138.661 55.1958 139.764 54.3046 140.658 53.2 140.658H53 44 43.8C42.6954 140.658 41.8042 139.764 41.7546 138.66 40.7395 116.077 22.8338 88.7529 1.99862 87.0881.897561 87.0001-694524e-11 86.1126-689696e-11 85.0081L-650723e-11 76.0923C-645895e-11 74.9877.899431 74.0869 2.00249 74.1447 17.9619 74.9801 32.1353 85.7175 41.7999 100.054L41.8 2.6582C41.8 1.55363 42.6954.658201 43.8.658201H53.1999C54.3045.658201 55.1999 1.55363 55.1999 2.6582V100.055z"
                                    fill="#0b0e11"
                                />
                            </svg>
                        </div>
                    </button>
                    <div class="accordion-panel" aria-expanded="false" aria-hidden="true">
                        <prismic-rich-text :field="item.Description" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            }
        }
    },
    methods: {
        toggle(event) {
            const button = event.currentTarget
            const panel = button.nextElementSibling
            const item = event.currentTarget.parentElement

            //add styling/classes/attributes to parent
            item.classList.contains('accordion-item--expanded')
                ? item.classList.remove('accordion-item--expanded')
                : item.classList.add('accordion-item--expanded')

            //Add styling/classes/attributes to button
            button.classList.contains('accordion-button--expanded')
                ? button.classList.remove('accordion-button--expanded')
                : button.classList.add('accordion-button--expanded')

            //Add styling/classes/attributes to panel
            panel.classList.contains('accordion-panel--expanded')
                ? panel.classList.remove('accordion-panel--expanded')
                : panel.classList.add('accordion-panel--expanded')
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 'px'
            panel.setAttribute('aria-expanded', panel.style.maxHeight ? true : false)
            panel.setAttribute('aria-hidden', panel.style.maxHeight ? false : true)

            //Add hash to url
            //const text = button.childNodes[0].textContent.trim()
            //window.location.hash = encodeURIComponent(text)
        }
    }
}
</script>

<style lang="scss" scoped>
.accordion {
    .container {
        max-width: 92em;
        margin: 0;
        padding-bottom: 10vh;
    }

    &-items {
    }

    &-item {
        &:not(:first-of-type) {
            border-top: 1px solid #ddd;
        }
        &--expanded {
            padding-bottom: 1.5em;
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
        grid-template-columns: minmax(0, 1fr) 1.999rem;
        grid-row-gap: 1.5em;
        width: 100%;
        padding: 0;
        text-align: left;
        transition: max-height 250ms ease;
        cursor: pointer;

        &-title {
        }

        &-icon {
            font-size: clamp(1.25rem, -0.875rem + 8.333vw, 1.999rem);
            padding: 1em 0;

            svg {
                --size: 1.999rem;
                width: var(--size);
                height: var(--size);
                transition: transform 250ms ease;

                path {
                    fill: c('base-6');
                }
            }
        }

        &--expanded {
            svg {
                transform: rotateZ(180deg);
                opacity: 1;
            }
        }
    }

    &-panel {
        max-height: 0;
        padding-right: 4rem;
        overflow: hidden;
        transition: max-height 250ms ease;
    }
}
</style>
