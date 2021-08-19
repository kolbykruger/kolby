export const Interactivity = {
    name: 'Interactivity',
    mounted() {
        const cursor = this.$refs.pointerSVG
        // Mouse clicks for micro-interactivity
        window.addEventListener('mousedown', () => {
            this.setState('-active')
        })

        window.addEventListener('mouseup', () => {
            this.removeState('-active')
        })
    }
}
