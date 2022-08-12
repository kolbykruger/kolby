<template>
    <section class="quote">
        <div class="container">
            <div v-for="(quote, index) in slice.items" :key="index" class="quote-item">
                <div class="quote-item--quotemark">
                    <Quotes />
                </div>
                <prismic-rich-text class="quote-item--tagline" v-if="quote.tagline" :field="quote.tagline" />
                <prismic-rich-text class="quote-item--quote" v-if="quote.quote" :field="quote.quote" />
                <div class="quote-item--quotee">
                    <div class="quote-item--quotee-image" v-if="quote.cover.url">
                        <prismic-image :field="quote.cover" />
                    </div>

                    <div class="quote-item--quotee-info">
                        <h5 class="quote-item--quotee-name">{{ quote.quotee }}</h5>
                        <p class="quote-item--quotee-sub" v-if="quote.identifier">{{ quote.identifier }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Quotes from '@/assets/svg/duotone/quotes-2.svg?inline'

export default {
    name: 'Quote',
    components: {
        Quotes,
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
}
</script>

<style lang="scss">
.quote {
    margin-bottom: 6vh;

    &-item {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 3em;
        border-radius: 0.125em;
        margin-bottom: 2em;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 6px;
            height: 100%;
            background: linear-gradient(to bottom, c('base-3') 60%, transparent);

            @include mq('tablet') {
                width: 4px;
                border-radius: 0.125em 0 0 0;
            }
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

        &--quotemark {
            margin-bottom: 1em;
            transform: translateX(-0.25em);
            color: c('secondary-base');
            transition: 0.3s ease;

            svg {
                --size: 3.5em;
                width: var(--size);
                height: var(--size);

                path {
                    fill: c('base-5');
                }
            }
        }

        &--tagline {
            h4 {
                margin-top: 1em;
            }
        }

        &--quote {
        }

        &--quotee {
            flex: 1;
            display: flex;
            align-items: flex-end;
            margin-top: 1.5em;

            &-image {
                --size: 75px;
                width: var(--size);
                height: var(--size);
                aspect-ratio: 1;
                margin-right: 1em;

                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    border-radius: 0.75em;
                }
            }

            &-info {
                display: flex;
                justify-content: center;
                flex-direction: column;
            }

            h5 {
                margin-top: 0;
                margin-bottom: 0;
            }
        }
    }
}
</style>
