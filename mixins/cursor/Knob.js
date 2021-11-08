export const Knob = {
    name: 'Knob',
    methods: {
        knob() {
            const knobs = document.querySelectorAll('[data-knob]')

            if (!knobs) {
                return false
            }

            // sizes structure
            knobs.forEach(knob => {
                knob.addEventListener('mouseenter', () => {
                    this.setState(`-knob`)
                })

                knob.addEventListener('mouseleave', () => {
                    this.removeState(`-knob`)
                })
            })
        },
    },
    mounted() {
        this.knob()
    },
}
