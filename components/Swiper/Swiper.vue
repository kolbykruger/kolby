<template>
    <div class="swiper" :class="{ 'swiper-constrain': constrain }">
        <div class="swiper-track" ref="swiper">
            <div class="swiper-thumb" :style="{ '--width': width + 'px', '--offset': offset + 'px' }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Swiper',
    props: {
        count: Number,
        progress: {
            type: Number,
            default: 0,
        },
        index: {
            type: Number,
            default: 0,
        },
        constrain: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            bounds: null,
            width: 0,
            offset: 0,
        }
    },
    computed: {},
    methods: {
        getBounds() {
            this.bounds = this.$refs.swiper.getBoundingClientRect().width
        },
        calculateWidth() {
            // Returns the width in pixels
            this.width = this.bounds / this.count
        },
        calculateOffset() {
            // Returns the offset in pixels
            this.offset = (this.bounds - this.width) * this.progress
        },
        calculateOffsetFromIndex() {
            console.log(this.index)
            const currentProgress = this.index / (this.count - 1)
            console.log(this.index, this.count, currentProgress)
            this.offset = (this.bounds - this.width) * currentProgress
        },
    },
    mounted() {
        if (this.$refs.swiper) {
            this.getBounds()
            this.calculateWidth()
            this.calculateOffset()

            if (this.index > 0) {
                this.calculateOffsetFromIndex()
            }
        }

        window.addEventListener('resize', () => {
            this.getBounds()
            this.calculateWidth()
            this.calculateOffset()

            if (this.index > 0) {
                this.calculateOffsetFromIndex()
            }
        })
    },
    watch: {
        progress(value) {
            this.calculateOffset()
        },
    },
}
</script>

<style lang="scss">
.swiper {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 2;

    &-constrain {
        margin: 0 auto;
        margin-top: 3vh;
        max-width: 180px;
    }

    &-track {
        position: relative;
        display: block;
        width: 100%;
        height: 1.5px;
        background: c('base-7');

        html[theme='dark'] & {
            background: c('base-4');
        }
    }

    &-thumb {
        position: absolute;
        top: 0;
        display: block;
        width: var(--width);
        height: 1.5px;
        border-radius: 1px;
        background: c('quaternary-base');
        transform: translateX(var(--offset));
        will-change: transform;

        html[theme='dark'] & {
            background: c('base-0');
        }
    }
}
</style>
