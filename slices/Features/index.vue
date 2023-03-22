<template>
    <section class="features" :class="alignment">
        <div class="container">
            <prismic-rich-text :field="slice.primary.title" class="features-title" />
            <prismic-rich-text :field="slice.primary.description" class="features-description" />
            <div class="features-grid features-grid-links" v-if="slice.variation == 'featuresWithLink'">
                <div class="features-item" v-for="(item, index) in slice.items" :key="index">
                    <nuxt-link
                        data-cursor="lg"
                        data-magnetic="0.03,0.03"
                        class="features-item-link"
                        :to="link(item.Relationship)"
                    >
                        <!-- <span
                            class="features-item-icon"
                            v-if="item.Icon"
                            v-html="require(`../assets/svg/${item.Icon}.svg?raw`)"
                        ></span> -->
                        <prismic-rich-text :field="item.Title" class="features-item-title" ref="featuresTitle" />
                        <prismic-rich-text
                            :field="item.Description"
                            class="features-item-description"
                            ref="featuresDescription"
                        />
                    </nuxt-link>
                </div>
            </div>
            <div class="features-grid" v-else>
                <div class="features-item" v-for="(item, index) in slice.items" :key="index">
                    <!-- <span class="features-item-icon" v-if="item.Icon" v-html="item.Icon"></span> -->
                    <span
                        class="features-item-icon"
                        v-if="item.Icon"
                        v-html="require(`~/assets/svg/${item.Icon ? item.Icon : 'duotone/nut'}.svg?raw`)"
                    >
                        <!-- <img :src="`../assets/svg/${item.Icon}.svg`" /> -->
                    </span>
                    <prismic-rich-text :field="item.Title" class="features-item-title" ref="featuresTitle" />
                    <prismic-rich-text
                        :field="item.Description"
                        class="features-item-description"
                        ref="featuresDescription"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Features',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    computed: {
        alignment() {
            const a = this.slice.primary.Alignment ? this.slice.primary.Alignment : 'Left'
            return 'features-alignment-' + a.toLowerCase()
        },
    },
    methods: {
        link(link) {
            const type = link.type
            const uid = link.uid
            const path = type == 'article' ? 'article/' : '/'
            return path + uid
        },
    },
}
</script>

<style lang="scss">
.features {
    margin-top: 12vh;
    margin-bottom: 12vh;
    overflow: hidden;

    .container {
    }

    &-title {
        max-width: 100em;

        h1,
        h2,
        h3 {
            font-family: $font-1;
        }

        h2 {
            max-width: 10em;
        }

        h3 {
            max-width: 18em;
        }
    }

    &-description {
    }

    &-grid {
        max-width: 100em;
        // margin: 0 auto;
        margin-top: 12vh;

        @include mq('tablet') {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 3em;
        }

        &-links {
            .features-item {
                padding: 0;
            }
        }
    }

    &-item {
        position: relative;
        // border: 1px solid c('base-4');
        padding: 3em;
        margin-bottom: 1em;
        // border-radius: 0.375em;
        border-radius: 0.125em;

        @include mq('tablet') {
            margin-bottom: 0;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: c('base-4');
            background: radial-gradient(circle at 0% 0%, c('base-3') 30%, c('background'));
            opacity: 0.1;
            z-index: -1;
        }

        &-link {
            display: block;
            padding: 3vw;
            text-decoration: none;
            color: c('base-0');
        }

        &-icon {
            --size: 3em;
            width: var(--size);
            height: var(--size);

            svg {
                --size: 3em;
                width: var(--size);
                height: var(--size);

                * {
                    fill: c('base-2');
                }
            }
        }

        &-title {
            h1,
            h2,
            h3,
            h4 {
                margin-top: 0.75em;
                @include fs-lg;
                // font-family: $font-1;
            }
        }

        &-description {
            p {
                @include fs-xxs;
            }
        }
    }

    &-alignment {
        &-center {
            .features {
                &-title {
                    text-align: center;
                    margin: 0 auto;

                    h1,
                    h2,
                    h3,
                    h4 {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
                &-grid {
                    margin: 0 auto;
                    text-align: center;
                }
            }
        }
    }
}
</style>
