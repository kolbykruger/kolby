export const state = () => ({
    mode: 'dark'
})

export const mutations = {
    setTheme(state, payload) {
        state.mode = payload.mode
    }
}
