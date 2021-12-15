<template>
    <section class="accordion" data-anim>
        <div class="container">
            <div class="accordion-heading" v-if="slice.primary.heading">
                <prismic-rich-text :field="slice.primary.heading" />
            </div>
            <div class="accordion-items">
                <Item v-for="(item, index) in slice.items" :item="item" :index="index" :key="index" data-anim-child />
            </div>
        </div>
    </section>
</template>

<script>
import Item from './item.vue'
import { FadeUp } from '@/mixins/animations/FadeUp'

export default {
    name: 'Accordion',
    mixins: [FadeUp],
    components: {
        Item,
    },
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    methods: {
        toggle(event) {
            const button = event.currentTarget
            const panel = button.nextElementSibling
            const item = event.currentTarget.parentElement

            //add styling/classes/attributes to parent
            item.classList.contains('.-expanded')
                ? item.classList.remove('.-expanded')
                : item.classList.add('.-expanded')

            //Add styling/classes/attributes to button
            button.classList.contains('.-expanded')
                ? button.classList.remove('.-expanded')
                : button.classList.add('.-expanded')

            //Add styling/classes/attributes to panel
            panel.classList.contains('.-expanded')
                ? panel.classList.remove('.-expanded')
                : panel.classList.add('.-expanded')
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 'px'
            panel.setAttribute('aria-expanded', panel.style.maxHeight ? true : false)
            panel.setAttribute('aria-hidden', panel.style.maxHeight ? false : true)

            //Add hash to url
            //const text = button.childNodes[0].textContent.trim()
            //window.location.hash = encodeURIComponent(text)
        },
    },
}
</script>

<style lang="scss">
.accordion {
    .container {
        max-width: 92em;
        margin: 0;
        padding-bottom: 10vh;
    }

    &-item {
        // border-bottom: 1px solid c('base-4');

        &::after {
            content: '';
            display: block;
            left: 0;
            width: 100%;
            height: 1px;
            background: c('base-4');
            background: linear-gradient(to right, c('base-4') 65%, transparent);
        }
    }
}
</style>
