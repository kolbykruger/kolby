export const state = () => ({
    elem: null
})

export const mutations = {
    setRailElem(state, payload) {
        state.elem = payload.flickity
    },
    removeRailElem(state) {
        state.elem = null
    }
}
