<template>
    <div class="traveler" ref="splash" aria-hidden="true">
        <span class="traveler-background"></span>
        <span class="traveler-noise"></span>
    </div>
</template>

<script>
export default {
    name: 'Traveler'
}
</script>

<style lang="scss">
.traveler {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    user-select: none;
    mix-blend-mode: overlay;
    z-index: 1;

    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
    }

    &-noise {
        background-image: url('/noise/noise.gif');
        background-size: auto;
        background-repeat: repeat;
        opacity: 0.3;

        html[theme='dark'] & {
            opacity: 0.2;
        }
    }
}
</style>
