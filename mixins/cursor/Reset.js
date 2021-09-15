export const Reset = {
    name: 'Reset',
    methods: {
        reset() {
            const pointer = this.$refs.pointer
            pointer.className = 'pointer'
            pointer.classList.add('-visible')
        }
    },
    mounted() {
        this.reset()
    }
}
