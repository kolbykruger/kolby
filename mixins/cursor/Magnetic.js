import { lerp } from '~/plugins/utils'

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
                s: 0.2,
            },
            options: {
                x: 0.2,
                y: 0.2,
            },
        }
    },
    methods: {
        magnetics() {
            const $this = this
            const magnetic = document.querySelectorAll('[data-magnetic]')

            if (!magnetic) {
                return false
            }

            magnetic.forEach(magnet => {
                const attr = magnet.getAttribute('data-magnetic')

                if (attr === false) {
                    return false
                }
                const vals = attr ? attr.split(',') : null
                const options = {
                    x: vals ? vals[0] : this.options.x,
                    y: vals ? vals[1] : this.options.y,
                    s: vals ? vals[2] : this.magnetic.s,
                }
                const pos = {
                    x: {
                        previous: 0,
                        current: 0,
                    },
                    y: {
                        previous: 0,
                        current: 0,
                    },
                }

                magnet.addEventListener('mouseenter', () => {
                    this.setState('-magnetic')
                    this.magnetic.active = true

                    const bounds = magnet.getBoundingClientRect()

                    this.magnetic.x = bounds.left //- window.pageXOffset
                    this.magnetic.y = bounds.top //- window.pageYOffset
                    this.magnetic.width = bounds.width
                    this.magnetic.height = bounds.height
                    this.magnetic.s = 0.01
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
                    pos.x.current = (this.cursor.x - this.magnetic.x - this.magnetic.width / 2) * options.x
                    pos.y.current = (this.cursor.y - this.magnetic.y - this.magnetic.height / 2) * options.y

                    $this.move(pos.x.current, pos.y.current, 0, magnet)
                })
            })
        },
    },
    mounted() {
        if (!this.deviceCheck) {
            return false
        }
        this.magnetics()
    },
}
