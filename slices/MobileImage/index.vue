<template>
    <section class="mobile" :class="layout">
        <div class="container">
            <div class="mobile-grid" :class="{ 'mobile-grid-sm': size }" :style="{ '--count': slice.items.length }">
                <div
                    class="mobile-item"
                    :class="{ 'mobile-item-sm': size }"
                    v-for="(item, i) in slice.items"
                    :key="`slice-item-${i}`"
                >
                    <prismic-image class="mobile-image" :field="item.Image" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MobileImage',
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
        size() {
            const count = this.slice.items.length
            return count > 3 ? true : false
        },
        layout() {
            const layout = this.slice.primary.Layout
            return layout ? `mobile-layout-${layout.toLowerCase()}` : null
        },
    },
}
</script>

<style lang="scss">
.mobile {
    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    &-grid {
        display: grid;
        grid-gap: 5vh;
        max-width: 1600px;
        margin: 0 auto;
        grid-template-columns: repeat(calc(#{var(--count)} / 2), 1fr);

        @include mq('tablet') {
            grid-gap: 3vw;
            grid-template-columns: repeat(var(--count), 1fr);
        }

        &-sm {
            max-width: 100%;
            grid-gap: 1.5vw;
        }
    }

    &-item {
        background-color: #fff;
        border: 0.7em solid #fff;
        border-radius: 3.3em;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
        overflow: hidden;

        img {
            border: 1px solid #fafafa;
            border-radius: 3.3em;
            padding: 0.5em;
        }
    }

    &-layout {
        .container {
            padding-top: 18vh;
        }

        &-pyramid {
            .mobile-item:nth-of-type(even) {
                transform: translateY(-8vh);
            }
        }

        &-waterfall {
            .container {
                padding-top: 18vh;
                padding-bottom: 18vh;
            }

            .mobile-item {
                &:nth-child(1) {
                    transform: translateY(-8vh);
                }
                &:nth-child(2) {
                    transform: translateY(-4vh);
                }
                &:nth-child(4) {
                    transform: translateY(4vh);
                }
                &:nth-child(5) {
                    transform: translateY(8vh);
                }
            }
        }
    }
}
</style>
