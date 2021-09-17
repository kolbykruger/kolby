<template>
    <section class="list">
        <div class="container">
            <ul class="list-items" v-if="slice.variation == 'default-slice'">
                <li
                    class="list-item"
                    v-for="(item, i) in slice.items"
                    :key="`slice-item-${i}`"
                    v-html="$prismic.asHtml(item.Item)"
                />
            </ul>
            <ol class="list-items" v-if="slice.variation == 'orderedList'">
                <li
                    class="list-item"
                    v-for="(item, i) in slice.items"
                    :key="`slice-item-${i}`"
                    v-html="$prismic.asHtml(item.Item)"
                />
            </ol>
        </div>
    </section>
</template>

<script>
export default {
    name: 'List',
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
.list {
    padding: 8vh 0;

    .container {
        width: 100%;
        max-width: 112em;
        margin: 0;
    }

    &-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        //grid-auto-flow: column;
        grid-gap: 1.5em;
        grid-row-gap: 0.5em;
    }

    &-item {
    }

    ul {
        li {
            display: flex;

            &::before {
                content: '—  ';
                margin-right: 0.375em;
            }
        }
    }

    ol {
        counter-reset: listCounter;

        li {
            display: flex;
            counter-increment: listCounter;

            &::before {
                content: '0' counter(listCounter) '.';
                font-variant-numeric: tabular-nums;
                margin-right: 0.35em;
            }

            &:nth-of-type(n + 10) {
                &::before {
                    content: counter(listCounter) '.';
                }
            }
        }
    }
}
</style>
