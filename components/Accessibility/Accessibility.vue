<template>
    <div class="accessibility">
        <button @click="setFocus('navigation')">Skip to: Navigation</button>
        <button @click="setFocus('content')">Skip to: Content</button>
    </div>
</template>

<script>
export default {
    computed: {
        path() {
            return this.$route.path
        }
    },
    methods: {
        setFocus(elem) {
            this.$nextTick(() => {
                document.getElementById('navigation').focus()
            })
        }
    }
}
</script>

<style lang="scss">
.accessibility {
    display: none;
}
</style>
