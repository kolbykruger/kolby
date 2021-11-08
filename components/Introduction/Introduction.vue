<template>
    <section class="introduction">
        <div class="container">
            <h1 class="introduction-title">Kolby Kruger</h1>
            <h2 class="introduction-subtitle">Web designer & developer<br />based in Vermont.</h2>
            <!-- <p class="introduction-description">
                I have a passion for design, programming, motion animation, and web apps.
            </p> -->
        </div>
        <span class="introduction-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="614" viewBox="0 0 1440 614" fill="none">
                <path
                    d="M-41.3029 610.968C51.4053 414.612 134.664 250.342 240.427 231.624C346.189 212.905 396.429 329.465 469.903 325.357C543.378 321.249 575.812 264.554 596.593 211.712C617.374 158.869 659.038 55.0081 748.079 50.0301C837.121 45.0521 886.723 150.214 911.662 194.097C936.602 237.98 1001.63 328.559 1085.07 323.894C1168.5 319.23 1190.46 265.138 1269.91 267.368C1349.36 269.598 1381.91 348.918 1464.1 344.323C1546.29 339.728 1527.88 278.557 1604.47 274.276"
                    stroke="url(#paint0_linear)"
                    stroke-opacity="0.3"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="-41.3029"
                        y1="610.968"
                        x2="1618.11"
                        y2="518.196"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.109375" stop-color="#F7768E" />
                        <stop offset="0.515625" stop-color="#11C9C3" />
                        <stop offset="0.901042" stop-color="#B267E6" />
                    </linearGradient>
                </defs>
            </svg>
        </span>
        <Scroller />
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
    margin-top: calc(#{var(--offset)} * -1);
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
    }

    &-title {
        margin-bottom: 0;
    }

    &-description {
        max-width: 18em;
    }

    &-line {
        position: absolute;
        top: 0;
        left: -10vw;
        width: 120vw;
        height: 100%;
        pointer-events: none;
        user-select: none;
        z-index: 2;
        opacity: 0.3;
        svg {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .scroller {
        position: absolute;
        bottom: 5vh;

        .container {
            display: block;
        }
    }
}
</style>
