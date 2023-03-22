<template>
    <section class="credits">
        <div class="container">
            <p>
                Technologies<br/>
                <a href="https://kolby.dev/">Nuxt</a>,
                <a href="https://kolby.dev/">Prismic</a>,
                <a href="https://kolby.dev/">Netlify</a>
            </p>
            <p>
                Designer & Developer<br/>
                <a href="https://kolby.dev/">Kolby Kruger</a>
            </p>
            <div>
                <button @click="clickHandler" data-magnetic data-stick>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6L18 18" stroke="#2F384C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <span class="visually-hidden">Close credits panel</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Credits',
        methods: {
            clickHandler(e) {
                this.$emit('closeCreditsPanel')
            }
        }
    }
</script>

<style lang="scss">
.credits {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5vh 5vw;
    background: c('base-9');
    // color: c('base-9');
    transition: 0.4s cubic-bezier(0,.89,.41,1);
    z-index: 100;
    opacity: 0;
    visibility: hidden;

    &.-visibile {
        opacity: 1;
        visibility: visible;
    }

    .container {
        display: flex;
        justify-content: space-between;
    }

    p {
        margin: 0;
    }
}
</style>
