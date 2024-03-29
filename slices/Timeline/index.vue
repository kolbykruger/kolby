<template>
    <section
        class="timeline"
        ref="timeline"
        :class="{
            'timeline-vertical': slice.variation == 'timelineVertical',
            'timeline-image': slice.variation == 'timelineImages',
        }"
        data-anim
        data-anim-elements=".timeline-item"
    >
        <div class="container">
            <div class="timeline-rail" :style="{ '--count': count }">
                <div class="timeline-item" v-for="(item, index) in slice.items" :key="index">
                    <p v-if="item.Eyebrow" class="timeline-item-label">{{ item.Eyebrow }}</p>

                    <div class="timeline-item-image" v-if="slice.variation == 'timelineImages'">
                        <Picture v-if="item.Image" :field="item.Image" />
                    </div>

                    <p class="timeline-item-title">
                        <span>{{ firstWord(item.Title) }}</span
                        ><span>{{ otherWords(item.Title) }}</span>
                    </p>
                    <prismic-rich-text class="timeline-item-summary" v-if="item.Summary" :field="item.Summary" />
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
            },
        },
    },
    data() {
        return {
            observer: null,
            offset: null,
        }
    },
    computed: {
        count() {
            return this.slice.items.length
        },
        path() {
            return this.$route.path
        },
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
        },
    },
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
                    top: 0;
                    left: -0.75em;
                    width: 1.5em;
                    height: 0.35em;

                    @include mq('tablet') {
                        top: 0.55em;
                        left: -0.5em;
                    }
                }
            }
        }
    }

    &-rail {
        position: relative;
        display: grid;
        grid-template-rows: repeat(var(--count), 1fr);
        grid-gap: 5vh;

        &::before {
            content: '';
            position: absolute;
            right: auto;
            top: 0.55em;
            bottom: 0;
            height: 100%;
            width: 1px;
            background: c('base-7');
        }

        @include mq('tablet') {
            grid-template-columns: repeat(var(--count), 1fr);
            grid-template-rows: 100%;
            grid-gap: 3em;

            &::before {
                left: 0;
                right: 0;
                top: 0;
                height: 1px;
                width: 100%;
            }
        }
    }

    &-item {
        position: relative;
        padding: 0;
        padding-left: 2em;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -0.75em;
            width: 1.5em;
            height: 0.35em;
            background: c('base-0');

            @include mq('tablet') {
                top: 0.55em;
                left: -0.5em;
            }
        }

        @include mq('tablet') {
            padding: 3em 0;

            &::before {
                top: -0.75em;
                left: 0;
                width: 0.35em;
                height: 1.5em;
            }
        }

        &-image {
            position: relative;
            margin-bottom: 2em;
            width: 100%;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: c('base-4');
                opacity: 0.25;
                z-index: -1;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: fill;
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
            margin-bottom: 1.5em;
            color: c('base-5');
        }

        &-title {
            max-width: 60%;
            @include fs-md;
            line-height: 1.2;

            span {
                display: block;
            }
        }

        &-summary {
            @media (min-width: 640px) {
                max-width: 50em;
            }

            @include mq('tablet') {
                max-width: 80%;
            }

            & > p {
                @include fs-sm;
                margin-top: 1em;
                color: c('base-5');
            }
        }
    }
}
</style>
