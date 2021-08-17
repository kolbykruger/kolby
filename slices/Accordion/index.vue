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
                        <div class="accordion-button-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                    fill="#22282F"
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
            const text = button.childNodes[0].textContent.trim()
            window.location.hash = encodeURIComponent(text)
        }
    }
}
</script>

<style lang="scss" scoped>
.accordion {
    .container {
        max-width: 92em;
        margin: 0;
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
        padding: 1.5em 0;
        text-align: left;
        transition: max-height 250ms ease;
        cursor: pointer;

        &-title {
        }

        &-icon {
            font-size: clamp(1.25rem, -0.875rem + 8.333vw, 1.999rem);
            opacity: 0.5;

            svg {
                width: 1.999rem;
                height: 1.999rem;
                transition: transform 250ms ease;
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
        overflow: hidden;
        transition: max-height 250ms ease;
    }
}
</style>
