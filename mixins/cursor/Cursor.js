import { lerp } from '~/plugins/utils'

export const Cursor = {
    name: 'Cursor',
    data() {
        return {
            cursor: {
                x: 0,
                y: 0,
                width: 48,
                height: 48,
            },
            props: {
                bounds: {
                    circle: {
                        width: 0,
                        height: 0,
                    },
                    text: {
                        width: 0,
                        height: 0,
                    },
                },
                circle: {
                    x: {
                        previous: 0,
                        current: 0,
                        smooth: 0.3,
                    },
                    y: {
                        previous: 0,
                        current: 0,
                        smooth: 0.3,
                    },
                },
                fill: '#000',
            },
        }
    },
    methods: {
        render(pointer) {
            // Default cursor active
            if (!this.stick.active) {
                this.props.circle.x.current = this.cursor.x - this.props.bounds.circle.width / 2
                this.props.circle.y.current = this.cursor.y - this.props.bounds.circle.height / 2
            }

            // Stick active [MIXIN]
            if (this.stick.active) {
                this.props.circle.x.current =
                    this.stick.x - (this.stick.x - (this.cursor.x - this.props.bounds.circle.width / 2)) * 0.2
                this.props.circle.y.current =
                    this.stick.y - (this.stick.y - (this.cursor.y - this.props.bounds.circle.height / 2)) * 0.2
            }

            // Buttons active [MIXIN]
            if (this.btn.active) {
                this.props.circle.x.current =
                    this.btn.x - (this.btn.x - (this.cursor.x - this.props.bounds.circle.width / 2)) * 0.2
                this.props.circle.y.current =
                    this.btn.y - (this.btn.y - (this.cursor.y - this.props.bounds.circle.height / 2)) * 0.2
                this.cursor.width = this.btn.width
                this.cursor.height = this.btn.height
            }

            // Calculate lerps for smooth transitions
            for (const key in this.props.circle) {
                this.props.circle[key].previous = lerp(
                    this.props.circle[key].previous,
                    this.props.circle[key].current,
                    this.props.circle[key].smooth
                )
            }

            this.move(this.props.circle.x.previous, this.props.circle.y.previous, 0.2, pointer.cursor)

            requestAnimationFrame(() => {
                this.render(pointer)
            })
        },
    },
    mounted() {
        const cursor = this.$refs.pointerSVG
        const circle = this.$refs.pointerCircle
        const cursorBounds = cursor.getBoundingClientRect()

        this.props.bounds.circle.width = cursorBounds.width
        this.props.bounds.circle.height = cursorBounds.height

        // Track cursor position and store pos
        window.addEventListener('mousemove', event => {
            this.cursor = { x: event.clientX, y: event.clientY }
        })

        // Loop through render call for Mouse Move
        requestAnimationFrame(() => {
            this.render({ cursor, circle })
        })
    },
}
