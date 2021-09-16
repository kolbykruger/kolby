export const Shift = {
    name: 'Shift',
    methods: {
        shift() {
            const shifts = document.querySelectorAll('[data-shift]')

            if (!shifts) {
                return false
            }

            // sizes structure
            shifts.forEach(shift => {
                shift.addEventListener('mouseenter', () => {
                    this.setState(`-shift`)
                })

                shift.addEventListener('mouseleave', () => {
                    this.removeState(`-shift`)
                })
            })
        }
    },
    mounted() {
        this.shift()
    }
}
