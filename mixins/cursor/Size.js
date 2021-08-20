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
                const measurement = size.dataset.cursor

                size.addEventListener('mouseenter', () => {
                    if (typeof measurement == 'string') {
                        this.setState(`-size-${measurement}`)
                    }
                })

                size.addEventListener('mouseleave', () => {
                    if (typeof measurement == 'string') {
                        this.removeState(`-size-${measurement}`)
                    }
                })
            })
        }
    },
    mounted() {
        this.sizes()
    }
}
