<template>
    <section class="accessibility">
        <div class="container">
            <button @click="setFocus('navigation')">Skip to Navigation</button>
            <button @click="setFocus('content')">Skip to Content</button>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        path() {
            return this.$route.path
        }
    },
    methods: {
        setFocus(el) {
            this.$nextTick(() => {
                const elem = document.getElementById(el)

                if (elem) {
                    elem.tabIndex = -1
                    elem.scrollTo({
                        top: elem.offsetTop,
                        behavior: 'smooth'
                    })
                    elem.focus()
                }
            })
        }
    }
}
</script>

<style lang="scss">
.accessibility {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    transform: translateY(-100%);

    &:focus,
    &:focus-within {
        transform: translateY(0%);
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    button {
        font-size: 1.5rem;
        border-radius: 0.35em;
        margin-right: 0.5em;
        line-height: 1;
        height: 52px;
        padding: 0 0.65em;
        background: c('base-3');
        color: c('base-9');
    }
}
</style>
