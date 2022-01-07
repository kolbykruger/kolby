<template>
    <div v-if="loading" class="loading-page">
        <span class="visually-hidden">LOADING...</span>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false,
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
        },
    },
}
</script>
<style>
.loading-page {
    z-index: -1;
}
</style>
