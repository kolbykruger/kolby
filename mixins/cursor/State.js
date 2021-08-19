export const State = {
    name: 'State',
    methods: {
        setState(state) {
            const pointer = this.$refs.pointer
            if (!pointer.classList.contains(state)) {
                pointer.classList.add(state)
            }
        },
        removeState(state) {
            const pointer = this.$refs.pointer
            if (pointer.classList.contains(state)) {
                pointer.classList.remove(state)
            }
        }
    }
}
