<template>
    <section data-cursor="invisible" class="embed" data-anim>
        <div class="container">
            <prismic-embed class="embed-item" :field="slice.primary.Embed" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Embed',
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
.embed {
    padding-top: 10vh;
    padding-bottom: 10vh;

    &-item {
        position: relative;
        //max-width: 600px;

        &[data-oembed-type='video'] {
            &::before {
                content: '';
                display: block;
                padding-top: 56.25%;
            }

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 0.125em;
                overflow: hidden;
                margin: 0;
            }
        }
    }
}
</style>
