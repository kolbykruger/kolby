<template>
    <section class="headline">
        <div class="container">
            <prismic-rich-text :field="slice.primary.title" class="title" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Headline',
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
.headline {
    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    + .headline {
        .container {
            padding-top: 0;
            margin-top: -10vh;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            margin-top: 0;
        }

        h3,
        h4,
        h5 {
            font-weight: 400;

            @media (min-width: 768px) {
                max-width: 52vw;
            }
        }
    }
}
</style>
