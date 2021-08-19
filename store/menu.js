export const state = () => ({
    open: false
})

export const mutations = {
    open(state) {
        state.open = true
    },
    close(state) {
        state.open = false
    },
    toggle(state) {
        console.log(state)
        state.open = !state.open
    }
}
