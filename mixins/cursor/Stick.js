export const Stick = {
    name: 'Stick',
    data() {
        return {
            stick: {
                active: false,
                x: 0,
                y: 0
            }
        }
    },
    methods: {
        sticks() {
            const sticks = document.querySelectorAll('[data-stick]')

            if (!sticks) {
                return false
            }

            sticks.forEach(stick => {
                stick.addEventListener('mouseenter', () => {
                    this.setState('-stick')
                    const bounds = stick.getBoundingClientRect()
                    this.props.stick.active = true
                    this.props.stick.x = bounds.left + bounds.width / 2 - this.props.bounds.circle.width / 2
                    this.props.stick.y = bounds.top + bounds.height / 2 - this.props.bounds.circle.height / 2
                    // this.props.scale.previous = this.props.scale.current = 1.5
                })
                stick.addEventListener('mouseleave', () => {
                    this.removeState('-stick')
                    this.props.stick.active = false
                    // this.props.scale.previous = this.props.scale.current = 0.18
                })
            })
        }
    },
    mounted() {
        this.sticks()
    }
}
