<template>
    <section class="textblock">
        <div class="container">
            <div class="textblock-snap">
                <p class="textblock-eyebrow">
                    <span>0{{ slice.primary.Index || '01' }}</span>
                </p>
                <prismic-rich-text :field="slice.primary.title" class="textblock-title" />
                <prismic-rich-text :field="slice.primary.description" class="textblock-description" />

                <div class="textblock-list-grid" v-if="slice.variation == 'textblockWithGridList'">
                    <ul class="textblock-list">
                        <li class="textblock-list-item" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
                            <p class="textblock-list-name">{{ item.Name }}</p>
                            <p class="textblock-list-outline">
                                <small>{{ item.Outline }}</small>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Textblock',
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

<style lang="scss">
.textblock {
    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    &-snap {
        max-width: 64em;
    }

    &-eyebrow {
        &,
        &:last-of-type {
            margin-bottom: 1em;
        }

        span {
            font-family: monospace;
            font-weight: 500;
            opacity: 0.25;
        }
    }

    &-title {
        h1,
        h2,
        h3,
        h4,
        h5 {
            margin-top: 0;
        }
    }

    &-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2vw;
        margin-top: 6vh;

        &-grid {
        }

        &-item {
            list-style-type: none;
        }

        &-name {
            margin: 0;
        }

        &-outline {
            margin: 0;
            margin-top: 0.25em;
            opacity: 0.75;
            line-height: 1;
        }
    }
}
</style>
