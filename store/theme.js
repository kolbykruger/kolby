export const state = () => ({
    mode: 'light'
})

export const mutations = {
    setTheme(state, payload) {
        console.log(payload)
        state.mode = payload.mode
    }
}
