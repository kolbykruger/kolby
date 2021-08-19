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
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M13 10V6C13 5.66667 12.8 5 12 5C11.2 5 11 5.66667 11 6V10C11 10.8 10.3333 11 10 11H6C5.66667 11 5 11.2 5 12C5 12.8 5.66667 13 6 13H10C10.8 13 11 13.6667 11 14V18C11 18.3333 11.2 19 12 19C12.8 19 13 18.3333 13 18V14C13 13.2 13.6667 13 14 13H18C18.3333 13 19 12.8 19 12C19 11.2 18.3333 11 18 11H14C13.6667 11 13 10.8 13 10Z"
                                    fill="black"
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
                opacity: 0.5;
            }
        }

        &--expanded {
            color: red;

            svg {
                transform: rotateZ(225deg);
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
