export const Invisible = {
    name: 'Size',
    methods: {
        invisibility() {
            const invisibiles = document.querySelectorAll('[data-cursor="invisible"]')

            if (!invisibiles) {
                return false
            }

            // sizes structure
            invisibiles.forEach(elem => {
                elem.addEventListener('mouseenter', () => {
                    this.setState(`-invisible`)
                })

                elem.addEventListener('mouseleave', () => {
                    this.removeState(`-invisible`)
                })
            })
        }
    },
    mounted() {
        this.invisibility()
    }
}
