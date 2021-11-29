export const Arrow = {
    name: 'Arrow',
    data() {
        return {
            arrow: {
                active: false,
                direction: null,
            },
        }
    },
    methods: {
        arrows() {
            const icon = this.$refs.pointerArrow
            const arrows = document.querySelectorAll('[data-arrow]')

            if (!arrows) {
                return false
            }

            arrows.forEach(arrow => {
                const direction = arrow.getAttribute('data-arrow')

                arrow.addEventListener('mouseenter', () => {
                    this.setState('-arrow')
                    this.setState(`-arrow-${direction}`)
                    this.arrow.active = true
                    this.arrow.direction = direction
                    icon.style.opacity = 1
                    icon.style.transform = `scale(1)`
                })
                arrow.addEventListener('mouseleave', () => {
                    this.removeState('-caption')
                    this.arrow.active = false
                    this.arrow.direction = null
                    icon.style.opacity = 0
                    icon.style.transform = null
                })
            })
        },
    },
    mounted() {
        this.arrows()
    },
}
