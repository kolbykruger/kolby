<template>
    <section class="introduction">
        <div class="container">
            <h1 class="introduction-title">Kolby Kruger</h1>
            <h2 class="introduction-subtitle">Web designer & developer<br />based in Vermont.</h2>
            <p class="introduction-description">
                I have a passion for design, programming, motion animation, and web apps.
            </p>
        </div>

        <!-- <canvas ref="canvas"></canvas> -->
    </section>
</template>

<script>
//import { Canvas } from '~/mixins/intro/Canvas.js'
export default {
    name: 'Introduction',
    //mixins: [Canvas]
}
</script>

<style lang="scss">
.introduction {
    position: relative;
    margin-top: calc(var(--offset) * -1);
    display: grid;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    overflow: hidden;

    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: relative;
        display: grid;
        place-content: center;
        z-index: 4;
    }

    canvas {
        z-index: 2;
        filter: blur(50px);
        opacity: 0.7;
    }

    &-title {
        margin-bottom: 0;
    }

    &-subtitle {
    }

    &-description {
        max-width: 18em;
    }
}
</style>
