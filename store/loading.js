export const state = () => ({
    loading: false,
    initial: true,
})

export const mutations = {
    setLoading(state, payload) {
        state.loading = payload.status
    },
    setInitialLoad(state, payload) {
        state.initial = payload.status
    },
}
