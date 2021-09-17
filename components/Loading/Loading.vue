<template>
    <div class="loadingstate">
        {{ loading }}
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    methods: {
        start() {
            this.loading = true
            this.$store.commit('loading/setLoading', { status: true })
        },
        finish() {
            this.loading = false
            this.$nextTick(() => {
                this.$store.commit('loading/setLoading', { status: false })
            })
        }
    }
}
</script>
<style>
.loadingstate {
    position: fixed;
    z-index: 999999999999;
    top: 0;
    left: 0;
}
</style>
