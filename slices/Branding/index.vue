<template>
    <section class="branding">
        <div class="container">
            <div class="branding-graphics">
                <div class="branding-type">
                    <prismic-image :field="slice.primary.Typography" />
                </div>
                <div class="branding-logo">
                    <prismic-image :field="slice.primary.Logo" />
                </div>
            </div>
            <div class="branding-colors" :style="{ '--count': slice.items.length }">
                <div class="branding-color" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
                    <div class="branding-swatch" :style="`background-color: ${item.Color}`">
                        <p>
                            <small>{{ item.Color }}</small>
                        </p>
                        <p>{{ item.ColorName }}</p>
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
            }
        }
    }
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
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5vw;
    }

    &-type,
    &-logo {
        img {
            width: 100%;
        }
    }

    &-logo {
        border-radius: 0.125em;
        box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), -1px 0 15px rgba(0, 0, 0, 0.07);
        overflow: hidden;
    }

    &-colors {
        display: grid;
        grid-template-columns: repeat(var(--count), 1fr);
        grid-gap: 1.5vw;
        margin-top: 5vh;
    }

    &-color {
        position: relative;
        padding-bottom: 100%;
        border-radius: 0.125em;
        box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), -1px 0 15px rgba(0, 0, 0, 0.07);
        overflow: hidden;
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
        padding: 10%;

        p {
            mix-blend-mode: difference;
            margin: 0;
            font-weight: 500;
        }
    }
}
</style>
