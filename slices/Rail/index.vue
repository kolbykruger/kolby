<template>
    <section class="rail">
        <div class="container" v-if="slice.primary.Title">
            <prismic-rich-text class="rail-title" :field="slice.primary.Title" />
            <prismic-rich-text class="rail-summary" :field="slice.primary.Summary" />
        </div>
        <div class="rail-container" data-cursor="invisible">
            <Flickity ref="flickity" class="rail-slider" :options="flickityOptions">
                <div class="rail-item" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
                    <div v-if="slice.variation == 'railWithDateCompany'">
                        <p class="rail-item-date" v-if="item.Date">
                            {{ i == 0 ? '~ ' : '' }}{{ formatDate(item.Date) || '2021' }}
                        </p>
                        <prismic-rich-text class="rail-item-title" :field="item.Title" />
                        <div class="rail-item-title">
                            <h4>
                                —
                                <prismic-link :field="item.Link">{{ item.Company || 'Company' }}</prismic-link>
                            </h4>
                        </div>
                        <prismic-rich-text class="rail-item-summary" :field="item.Summary" />
                    </div>
                    <div v-else>
                        <p class="rail-item-eyebrow" v-if="item.Eyebrow">— {{ item.Eyebrow || 'Eyebrow' }}</p>
                        <prismic-rich-text class="rail-item-title" :field="item.Title" />
                        <prismic-rich-text class="rail-item-summary" :field="item.Summary" />
                    </div>
                </div>
                <div class="rail-item" aria-hidden="true">
                    <span></span>
                </div>
            </Flickity>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Rail',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            flickityOptions: {
                cellSelector: '.rail-item',
                cellAlign: 'left',
                contain: true,
                freeScroll: true,
                prevNextButtons: false,
                pageDots: false,
                selectedAttraction: 0.01,
                friction: 0.2
            }
        }
    },
    methods: {
        formatDate(d) {
            const date = new Date(d)
            const options = {
                year: 'numeric'
            }
            return date.toLocaleDateString('en-us', options)
        },
        next() {
            this.$refs.flickity.next()
        },
        prev() {
            this.$refs.flickity.previous()
        }
    },
    mounted() {}
}
</script>

<style lang="scss">
.rail {
    background: #0b0e11;
    color: #f4f1ee;

    .container {
        padding-top: 10vh;
        padding-bottom: 15vh;
    }

    &-container {
        padding-bottom: 10vh;
    }

    .flickity {
        &-slider {
            position: relative;
            margin: 0 auto;
            margin-left: 270px;
        }
    }

    &-item {
        min-width: 980px;
        min-height: 600px;
        margin-right: 10vw;
        width: min-content;
        opacity: 0.5;
        transition: opacity 0.4s ease;
        user-select: none;

        &.is-selected {
            opacity: 1;
        }

        &:last-of-type {
            margin-right: calc(10vw + 270px * 2);
        }

        &-eyebrow,
        &-date,
        &-title {
            font-family: 'Ogg', serif;
            font-weight: 600;
        }

        &-date,
        &-eyebrow {
            &,
            &:last-of-type {
                margin-bottom: 1.5em;
            }
        }

        &-title {
            h2,
            h3,
            h4 {
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &-date,
        &-eyebrow,
        &-summary {
            &,
            & > * {
                color: darken(#fff, 30%);
            }
        }

        &-summary {
            margin-top: 3em;
        }
    }
}
</style>
