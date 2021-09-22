<template>
    <section
        class="timeline"
        ref="timeline"
        :class="{
            'timeline-vertical': slice.variation == 'timelineVertical'
        }"
    >
        <div class="container">
            <div class="timeline-rail" :style="{ '--count': count }">
                <div class="timeline-item" v-for="(item, index) in slice.items" :key="index">
                    <p class="timeline-label">{{ item.Eyebrow }}</p>
                    <p class="timeline-title">
                        <span>{{ firstWord(item.Title) }}</span
                        ><span>{{ otherWords(item.Title) }}</span>
                    </p>
                    <prismic-rich-text class="timeline-summary" v-if="item.Summary" :field="item.Summary" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Timeline',
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
            observer: null,
            offset: null
        }
    },
    computed: {
        count() {
            return this.slice.items.length
        },
        path() {
            return this.$route.path
        }
    },
    methods: {
        firstWord(text) {
            const t = text.split(' ')[0]
            return t
        },
        otherWords(text) {
            let t = text.split(' ')
            t.shift()
            return t.join(' ')
        }
    }
}
</script>

<style lang="scss">
.timeline {
    .container {
        padding-top: 6vh;
    }

    &-vertical {
        .timeline {
            &-rail {
                grid-template-columns: 100%;
                grid-template-rows: repeat(var(--count), 1fr);
                grid-gap: 5vh;

                &::before {
                    right: auto;
                    top: 0.55em;
                    bottom: 0;
                    height: 100%;
                    width: 1px;
                }
            }

            &-item {
                padding: 0 3.75em;

                &::before {
                    top: 0.55em;
                    left: -0.75em;
                    width: 1.5em;
                    height: 0.35em;
                }
            }
        }
    }

    &-rail {
        position: relative;
        display: grid;
        grid-template-columns: repeat(var(--count), 1fr);
        grid-gap: 3em;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 1px;
            background: c('base-7');
        }
    }

    &-item {
        position: relative;
        padding: 3em 0;

        &::before {
            content: '';
            position: absolute;
            top: -0.75em;
            left: 0;
            width: 0.35em;
            height: 1.5em;
            background: c('base-0');
        }
    }

    &-label,
    &-title,
    &-summary {
        margin: 0;
    }

    &-label {
        font-family: $font-2;
        font-size: 1.125rem;
        font-weight: 500;
        //text-transform: uppercase;
        margin-bottom: 1.5em;
        color: c('base-5');
    }

    &-title {
        //width: min-content;
        max-width: 60%;
        line-height: 1.2;

        span {
            display: block;
        }
    }

    &-summary {
        max-width: 50em;

        & > p {
            //font-family: $font-2;
            font-size: 1.5rem;
            //text-transform: uppercase;
            margin-top: 1em;
            color: c('base-5');
        }
    }
}
</style>
