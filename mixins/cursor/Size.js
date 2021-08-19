export const Size = {
    name: 'Size',
    methods: {
        sizes() {
            const sizes = document.querySelectorAll('[data-cursor]')

            if (!sizes) {
                return false
            }

            // sizes structure
            sizes.forEach(size => {
                const measurement = size.dataset.dataCursor
                size.addEventListener('mouseenter', () => {
                    this.setState(`-size=${measurement}`)
                })
                size.addEventListener('mouseleave', () => {
                    this.removeState(`-size=${measurement}`)
                })
            })
        }
    },
    mounted() {
        this.sizes()
    }
}
