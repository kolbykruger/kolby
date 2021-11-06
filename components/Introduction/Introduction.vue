<template>
    <section class="introduction">
        <div class="container">
            <h1 class="introduction-title">Kolby Kruger</h1>
            <h2 class="introduction-subtitle">Web designer & developer<br />based in Vermont.</h2>
            <p class="introduction-description">
                I have a passion for design, programming, motion animation, and web apps.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Introduction',
}
</script>

<style lang="scss">
.introduction {
    position: relative;
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

    &-description {
        max-width: 18em;
    }
}
</style>
