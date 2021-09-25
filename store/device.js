export const state = () => ({
    dimensions: {
        width: null,
        height: null
    },
    pointer: false,
    hover: false,
    performance: false,
    size: false
})

export const mutations = {
    setStatus(state, payload) {
        state[payload.type] = payload.status
    },
    setDimensions(state, payload) {
        state.dimensions.width = payload.width
        state.dimensions.height = payload.height
    }
}

export const getters = {
    getDeviceStatus: state => {
        return {
            pointer: state.pointer,
            hover: state.hover,
            performance: state.performance,
            size: state.size
        }
    }
}
