export const Exclusion = {
    name: 'Exclusion',
    methods: {
        exclusion() {
            const exclusions = document.querySelectorAll('[data-exclusion]')

            if (!exclusions) {
                return false
            }

            exclusions.forEach(exclusion => {
                exclusion.addEventListener('mouseenter', () => {
                    this.setState('-exclusion')
                })
                exclusion.addEventListener('mouseleave', () => {
                    this.removeState('-exclusion')
                })
            })
        }
    },
    mounted() {
        this.exclusion()
    }
}
