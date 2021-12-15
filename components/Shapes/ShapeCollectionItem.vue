<template>
    <span class="shape-collection-shape" ref="shape">
        <span class="shape-collection-geometry" :data-geometry="shape.geometry || 'square'" :style="shape.style"></span>
    </span>
</template>

<script>
export default {
    name: 'ShapeCollectionItem',
    props: {
        shape: {
            type: Object,
        },
        index: {
            type: Number,
        },
    },
    mounted() {
        const shape = this.$refs.shape.animate(this.shape.animation.keyframes, {
            duration: this.shape.animation.duration,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
        })
    },
}
</script>

<style lang="scss">
.shape-collection {
    &-shape,
    &-geometry {
        display: block;
    }

    &-shape {
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
        animation-fill-mode: backwards;
        animation-iteration-count: infinite;
    }

    &-geometry {
        position: absolute;

        &[data-geometry='square'] {
        }

        &[data-geometry='circle'] {
            border-radius: 100em;
        }
    }
}
</style>
