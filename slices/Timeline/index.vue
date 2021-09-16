<template>
    <section class="timeline">
        <div class="container">
            <div class="timeline-rail" :style="{ '--count': count }">
                <div class="timeline-item" v-for="(item, index) in slice.items" :key="index">
                    <p class="timeline-label">{{ item.Eyebrow }}</p>
                    <p class="timeline-title">{{ firstWord(item.Title) }}<br />{{ otherWords(item.Title) }}</p>
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
    computed: {
        count() {
            return this.slice.items.length
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
    margin-top: 6vh;
    margin-bottom: 12vh;

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
    }

    &-summary {
        & > p {
            font-family: $font-2;
            font-size: 1.125rem;
            font-weight: 500;
            //text-transform: uppercase;
            margin-top: 1.5em;
            color: c('base-7');
        }
    }
}
</style>
