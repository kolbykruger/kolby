<template>
    <section class="branding">
        <div class="container">
            <div class="branding-graphics">
                <div class="branding-type" data-anim>
                    <prismic-image :field="slice.primary.Typography" />
                </div>
                <div class="branding-logo" data-anim>
                    <prismic-image :field="slice.primary.Logo" />
                </div>
            </div>
            <div class="branding-colors" :style="{ '--count': slice.items.length }">
                <div class="branding-color" v-for="(item, i) in slice.items" :key="`slice-item-${i}`" data-anim>
                    <div
                        class="branding-swatch"
                        :class="{ 'branding-swatch-color-reversed': reverseColor(item.Color) }"
                        :style="`background-color: ${item.Color}`"
                    >
                        <p class="branding-swatch-label">
                            <small>{{ item.Color }}</small>
                        </p>
                        <p class="branding-swatch-name">{{ item.ColorName }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Branding',
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
        reverseColor(color) {
            return color == '#000000' ? true : false
        },
    },
}
</script>

<style lang="scss" scoped>
.branding {
    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    &-graphics {
        display: grid;
        grid-gap: 5vh;

        @include mq('tablet') {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1.5vw;
        }
    }

    &-type,
    &-logo {
        border-radius: 0.125em;
        box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), -1px 0 15px rgba(0, 0, 0, 0.07);
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-colors {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1vh;
        margin-top: 5vh;

        @include mq('tablet') {
            grid-template-columns: repeat(calc(var(--count) / 2), 1fr);
            grid-gap: 1.5vw;
        }

        @include mq('laptop-large') {
            grid-template-columns: repeat(var(--count), 1fr);
            grid-gap: 1.5vw;
        }
    }

    &-color {
        position: relative;
        padding-bottom: 100%;
        border-radius: 0.125em;
        box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), -1px 0 15px rgba(0, 0, 0, 0.07);
        overflow: hidden;

        @include mq('tablet') {
            &::before {
                @include image-noise-with-motion;
            }
        }
    }

    &-swatch {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 6%;

        @include mq('tablet') {
            padding: 10%;
        }

        p {
            position: relative;
            margin: 0;
            mix-blend-mode: difference;
            font-weight: 500;
            z-index: 2;

            html[theme='dark'] & {
                mix-blend-mode: multiply;
            }
        }

        &-label {
            text-transform: uppercase;
        }

        &-name {
            display: none;

            @include mq('tablet') {
                display: block;
            }
        }

        &-color-reversed {
            p {
                color: #fff;

                &,
                html[theme='dark'] & {
                    mix-blend-mode: unset;
                }
            }
        }
    }
}
</style>
