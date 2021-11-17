<template>
    <section class="tiles" ref="tiles">
        <div class="tiles-text">
            <prismic-rich-text class="tiles-title" v-if="slice.primary.title" :field="slice.primary.title" />
            <prismic-rich-text
                class="tiles-brief"
                v-if="slice.primary.description"
                :field="slice.primary.description"
            />
        </div>
        <div class="tiles-container">
            <!-- <div class="tiles-row">
                <div class="tiles-item" v-for="(item, index) in createTileRow(1)" :key="index">
                    <prismic-image :field="item.Image" />
                </div>
            </div> -->
            <div class="tiles-row">
                <div class="tiles-item" v-for="(item, index) in createTileRow(2)" :key="index">
                    <prismic-image :field="item.Image" />
                </div>
            </div>
            <div class="tiles-row">
                <div class="tiles-item" v-for="(item, index) in createTileRow(1)" :key="index">
                    <prismic-image :field="item.Image" />
                </div>
            </div>
            <div class="tiles-row">
                <div class="tiles-item" v-for="(item, index) in createTileRow(2)" :key="index">
                    <prismic-image :field="item.Image" />
                </div>
            </div>
            <div class="tiles-row">
                <div class="tiles-item" v-for="(item, index) in createTileRow(1)" :key="index">
                    <prismic-image :field="item.Image" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
    name: 'Tiles',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    data() {
        return {
            timeline: null,
        }
    },
    methods: {
        createTileRow(row) {
            const count = row * 6
            return this.getTileRow(count)
        },
        getTileRow(count) {
            const tiles = this.slice.items
            const start = count - 6
            return tiles.slice(start, count)
        },
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

        const tiles = this.$refs.tiles
        const tilesRows = tiles.querySelectorAll('.tiles-row')

        this.tl = gsap.timeline()

        this.tl.play()

        this.tl.to(
            '.tiles-row:nth-of-type(even)',
            {
                scrollTrigger: {
                    trigger: '.tiles',
                    start: 'top bottom',
                    end: 'bottom 100px',
                    scrub: true,
                },
                x: 120,
                ease: 'none',
            },
            'tilesRowsEven'
        )
        this.tl.to(
            '.tiles-row:nth-of-type(even) img',
            {
                scrollTrigger: {
                    trigger: '.tiles',
                    start: 'top bottom',
                    end: 'bottom 100px',
                    scrub: true,
                },
                x: '10%',
                scale: 1.2,
                ease: 'none',
            },
            'tilesRowsEvenImages'
        )
        this.tl.to(
            '.tiles-row:nth-of-type(odd)',
            {
                scrollTrigger: {
                    trigger: '.tiles',
                    start: 'top bottom',
                    end: 'bottom 100px',
                    scrub: true,
                },
                x: -220,
                ease: 'none',
            },
            'tilesRowsOdd'
        )
        this.tl.to(
            '.tiles-row:nth-of-type(odd) img',
            {
                scrollTrigger: {
                    trigger: '.tiles',
                    start: 'top bottom',
                    end: 'bottom 100px',
                    scrub: true,
                },
                x: '-10%',
                scale: 1.2,
                ease: 'none',
            },
            'tilesRowsOddImages'
        )
    },
    watch: {
        $route() {
            this.tl.pause()
        },
    },
    beforeDestroy() {
        this.tl.pause()
    },
}
</script>

<style lang="scss">
.tiles {
    --tile-offset: 32vh;
    position: relative;
    height: 125vh;
    // margin-top: var(--tile-offset);
    margin-bottom: var(--tile-offset);
    overflow: hidden;

    &-text {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        padding: 3em;
        z-index: 2;
    }

    &-title {
        h1,
        h2,
        h3 {
            font-size: clamp(3.815rem, -0.875rem + 8.333vw, 11.642rem);
            text-shadow: 0px 0px 400px #f4f1ee, 0px 0px 200px rgba(#f4f1ee, 0.6), 0px 0px 100px rgba(#f4f1ee, 0.3);
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 0;

            html[theme='dark'] & {
                text-shadow: 0px 0px 400px #13161b, 0px 0px 200px rgba(#13161b, 0.6), 0px 0px 100px rgba(#13161b, 0.3);
            }
        }
    }

    &-container {
        // transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0) rotate(22.5deg);
        width: 150%;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    &-row {
        --size: 2.5vw;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: var(--size);
        margin-bottom: var(--size);
        will-change: transform;
    }

    &-item {
        overflow: hidden;
        aspect-ratio: 600 / 450;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.2);
            opacity: 0.9;
            will-change: transform;

            html[theme='dark'] & {
                opacity: 0.7;
            }
        }
    }
}
</style>
