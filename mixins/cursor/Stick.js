export const Stick = {
    name: 'Stick',
    data() {
        return {
            stick: {
                active: false,
                x: 0,
                y: 0,
            },
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

                    // Check if element is specified in attribute
                    // If it's specified, stick to that element instead
                    let stickElement = stick
                    const toStickAttribute = stick.getAttribute('data-stick')
                    if (toStickAttribute != '') {
                        stickElement = stick.parentNode.querySelector(stick.getAttribute('data-stick'))
                    }

                    const bounds = stickElement.getBoundingClientRect()

                    this.stick.active = true
                    this.stick.x = bounds.left + bounds.width / 2 - this.props.bounds.circle.width / 2
                    this.stick.y = bounds.top + bounds.height / 2 - this.props.bounds.circle.height / 2
                    // this.props.scale.previous = this.props.scale.current = 1.5
                })
                stick.addEventListener('mouseleave', () => {
                    this.removeState('-stick')
                    this.stick.active = false
                    // this.props.scale.previous = this.props.scale.current = 0.18
                })
            })
        },
    },
    mounted() {
        if (!this.deviceCheck) {
            return false
        }
        this.sticks()
    },
    watch: {
        $route() {
            this.stick.active = false
        },
    },
}
