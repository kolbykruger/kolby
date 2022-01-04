<template>
    <div class="swiper">
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
        swipe() {},
    },
    mounted() {
        this.getBounds()
        this.calculateWidth()
        this.calculateOffset()

        window.addEventListener('resize', () => {
            this.getBounds()
            this.calculateWidth()
            this.calculateOffset()
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

    &-track {
        position: relative;
        display: block;
        width: 100%;
        height: 1.5px;
        background: c('base-4');
    }

    &-thumb {
        position: absolute;
        top: 0;
        display: block;
        width: var(--width);
        height: 1.5px;
        border-radius: 1px;
        background: c('base-0');
        transform: translateX(var(--offset));
    }
}
</style>
