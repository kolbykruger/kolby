export const Visibility = {
    name: 'Visibility',
    data() {
        return {
            visible: false
        }
    },
    methods: {
        visibility() {
            const cursor = this.$refs.pointerSVG

            // If the pointer enters the document
            document.addEventListener('mouseenter', () => {
                if (this.visible) return
                this.visible = true
                this.setState('-visible')
            })

            // If the pointer leaves the document
            document.addEventListener('mouseleave', () => {
                if (!this.visible) return
                this.visible = false
                this.removeState('-visible')
            })

            // If the pointer moves within the document
            document.addEventListener('mousemove', () => {
                if (this.visible) return
                this.visible = true
                this.setState('-visible')
            })

            // If the pointer moves within the window
            window.addEventListener('mousemove', () => {
                if (this.visible) return
                this.visible = true
                this.setState('-visible')
            })
        }
    },
    mounted() {
        this.visibility()
    }
}
