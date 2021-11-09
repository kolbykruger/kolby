export const Buttons = {
    name: 'Buttons',
    data() {
        return {
            btn: {
                active: false,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
        }
    },
    methods: {
        buttons() {
            const buttons = document.querySelectorAll('[data-button]')

            if (!buttons) {
                return false
            }

            buttons.forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    this.setState('-btn')
                    const bounds = btn.getBoundingClientRect()

                    this.btn.active = true
                    this.btn.x = bounds.left + bounds.width / 2 - this.props.bounds.circle.width / 2
                    this.btn.y = bounds.top + bounds.height / 2 - this.props.bounds.circle.height / 2
                    this.btn.width = bounds.width
                    this.btn.height = bounds.height
                    // this.props.scale.previous = this.props.scale.current = 1.5
                })
                btn.addEventListener('mouseleave', () => {
                    this.removeState('-btn')
                    this.btn.active = false
                    // this.props.scale.previous = this.props.scale.current = 0.18
                })
            })
        },
    },
    mounted() {
        if (!this.deviceCheck) {
            return false
        }
        this.buttons()
    },
    watch: {
        $route() {
            this.btn.active = false
        },
    },
}
