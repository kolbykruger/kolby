export const Magnetic = {
    name: 'Magnetic',
    data() {
        return {
            magnetic: {
                active: false,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                s: 0.2
            },
            options: {
                x: 0.2,
                y: 0.2
            }
        }
    },
    methods: {
        magnetics() {
            const magnetic = document.querySelectorAll('[data-magnetic]')

            console.log(magnetic)

            if (!magnetic) {
                return false
            }

            magnetic.forEach(magnet => {
                magnet.addEventListener('mouseenter', () => {
                    this.setState('-magnetic')
                    this.magnetic.active = true

                    const bounds = magnet.getBoundingClientRect()
                    this.magnetic.x = bounds.left //- window.pageXOffset
                    this.magnetic.y = bounds.top //- window.pageYOffset
                    this.magnetic.width = bounds.width
                    this.magnetic.height = bounds.height
                    this.magnetic.s = 0.2

                    if (magnet.dataset.magnetic) {
                        //this.options = JSON.parse(magnet.dataset.magnetic)
                        const data = JSON.parse(magnet.dataset.magnetic)
                        this.options.x = data[0] ? data[0] : 0.2
                        this.options.y = data[1] ? data[1] : 0.2
                    }
                })
                magnet.addEventListener('mouseleave', () => {
                    this.removeState('-magnetic')
                    this.magnetic.active = false
                    this.magnetic.s = 0.7

                    requestAnimationFrame(() => {
                        // global gsap move function
                        this.move(0, 0, this.magnetic.s, magnet)
                    })
                })
                magnet.addEventListener('mousemove', () => {
                    const x = (this.cursor.x - this.magnetic.x - this.magnetic.width / 2) * this.options.x
                    const y = (this.cursor.y - this.magnetic.y - this.magnetic.height / 2) * this.options.y

                    requestAnimationFrame(() => {
                        // global gsap move function
                        this.move(x, y, this.magnetic.s, magnet)
                    })
                })
            })
        }
    },
    mounted() {
        this.magnetics()
    }
}
