<template>
    <main class="page about">
        <section class="about-intro">
            <div class="container">
                <h1 class="about-intro-title">
                    <span>kolby</span>
                    <span>kruger</span>
                </h1>
                <div
                    class="about-intro-image"
                    :style="{
                        'aspect-ratio': document.data.Cover.dimensions.width / document.data.Cover.dimensions.height
                    }"
                >
                    <prismic-image :field="document.data.Cover" />
                </div>
            </div>
        </section>

        <section class="about-bio">
            <div class="container">
                <p>
                    Hi, I'm Kolby Kruger, a twenty-eight year old from Vermont who has a passion for creativity. I'm a
                    web designer & developer, however my interests expand into motion design, animation, and UX / UI
                    design.
                </p>
                <p>
                    I live with my girlfriend <span data-stick data-cursor="mark">Lizzy</span>, and our quirky cat,
                    <span data-stick data-cursor="mark">Wasabi</span>. Most weekends you'll find us adventuring
                    outdoors, sailing & paddleboarding in the summers, and skiing in the winters. We're avid hikers, and
                    like to adventure and enjoy what nature has to offer.
                </p>
            </div>
        </section>

        <slice-zone type="about" uid="about" />

        <section>
            <div class="container">
                <h2>Freelancing</h2>
            </div>
        </section>
    </main>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
    components: {
        //Pageheading
        SliceZone
    },
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getSingle('about')

        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    }
}
</script>

<style lang="scss">
.about {
    &-intro {
        position: relative;
        padding-top: 10vh;
        padding-bottom: 10vh;

        &-title {
            position: absolute;
            top: 10vh;
            left: 0;
            right: 0;
            text-align: center;
            //font-size: calc(140px + (280 - 140) * ((100vw - 300px) / (1920 - 300)));
            font-size: clamp(8.75rem, -0.875rem + 15vw, 17.5rem);
            line-height: 1;
            font-kerning: none;
            user-select: none;
            z-index: 2;

            span {
                display: block;
            }
        }
        &-image {
            position: relative;
            width: 58vw;
            margin: 0 auto;
            margin-top: 14vh;
            background: lighten(#0b0e11, 80%);
            overflow: hidden;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 50%;
                background: linear-gradient(to top, rgba(244, 241, 238, 0), rgba(244, 241, 238, 0.75));
                //clip-path: circle(25.8% at 50% 50%);
            }

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
    }

    &-bio {
        .container {
            max-width: 68em;
            margin: 0 auto;
            padding: 10vh 1em 20vh;
        }

        p {
            font-size: clamp(1.75rem, -0.875rem + 15vw, 3.25rem);
            line-height: 1.45;

            span {
                text-decoration: underline;
            }
        }
    }
}
</style>
