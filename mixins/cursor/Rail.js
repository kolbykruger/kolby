import { lerp } from '~/plugins/utils'

export const Rail = {
    name: 'Rail',
    data() {
        return {
            cursor: {
                x: 0,
                y: 0
            },
            props: {
                bounds: {
                    circle: {
                        width: 0,
                        height: 0
                    },
                    text: {
                        width: 0,
                        height: 0
                    }
                },
                circle: {
                    x: {
                        previous: 0,
                        current: 0,
                        smooth: 0.2
                    },
                    y: {
                        previous: 0,
                        current: 0,
                        smooth: 0.2
                    }
                }
            }
        }
    },
    methods: {
        render(pointer) {
            if (this.checkState('-rail', pointer.ptr)) {
                this.props.circle.x.current = this.cursor.x - this.props.bounds.circle.width / 2
                this.props.circle.y.current = this.cursor.y - this.props.bounds.circle.height / 2

                // Calculate lerps for smooth transitions
                for (const key in this.props.circle) {
                    this.props.circle[key].previous = this.props.circle[key].current
                }

                this.move(this.props.circle.x.current, this.props.circle.y.current, 0.2, pointer.cursor)
            }

            requestAnimationFrame(() => {
                this.render(pointer)
            })
        }
    },
    mounted() {
        const flickity = this.$refs.flickity
        const ptr = document.querySelector('.pointer')
        const cursor = document.querySelector('.pointer-svg')
        const circle = document.querySelector('.pointer-circle')
        const text = document.querySelector('.pointer-text')
        const cursorBounds = cursor.getBoundingClientRect()

        this.props.bounds.circle.width = cursorBounds.width
        this.props.bounds.circle.height = cursorBounds.height

        this.$refs.flickity.on('pointerDown', event => {
            this.setState('-rail', ptr)
            this.cursor = { x: event.clientX, y: event.clientY }
        })
        this.$refs.flickity.on('pointerDown', () => {
            this.setState('-rail', ptr)
        })
        this.$refs.flickity.on('dragStart', () => {
            this.setState('-rail', ptr)
        })
        this.$refs.flickity.on('dragEnd', () => {
            this.removeState('-rail', ptr)
        })

        this.$refs.flickity.on('dragMove', event => {
            if (this.checkState('-rail', ptr)) {
                this.cursor = { x: event.clientX, y: event.clientY }
            }
        })

        // Loop through render call for Mouse Move
        requestAnimationFrame(() => {
            this.render({ cursor, circle, text, ptr })
        })
    }
}
