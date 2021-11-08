import { lerp } from '~/plugins/utils'

export const Rail = {
    name: 'Rail',
    data() {
        return {}
    },
    computed: {
        flickity() {
            this.$nextTick(() => {
                return this.$store.state.rail.elem
            })
        },
    },
    methods: {
        railRender(pointer) {
            if (this.checkState('-rail')) {
                this.props.circle.x.current = this.cursor.x - this.props.bounds.circle.width / 2
                this.props.circle.y.current = this.cursor.y - this.props.bounds.circle.height / 2

                // Calculate lerps for smooth transitions
                for (const key in this.props.circle) {
                    this.props.circle[key].previous = this.props.circle[key].current
                }

                this.move(this.props.circle.x.current, this.props.circle.y.current, 0, pointer.cursor)
            }

            requestAnimationFrame(() => {
                this.railRender(pointer)
            })
        },
    },
    mounted() {
        const flickity = this.flickity
        // console.log(flickity)
        // this.$nextTick(() => {
        //     console.log(flickity)
        // })

        // flickity.on('pointerDown', event => {
        //     this.setState('-rail')
        //     this.cursor = { x: event.clientX, y: event.clientY }
        // })
        // flickity.on('pointerUp', () => {
        //     this.removeState('-rail')
        // })
        // flickity.on('dragStart', () => {
        //     this.setState('-rail')
        // })
        // flickity.on('dragEnd', () => {
        //     this.removeState('-rail')
        // })

        // flickity.on('dragMove', event => {
        //     if (this.checkState('-rail')) {
        //         this.cursor = { x: event.clientX, y: event.clientY }
        //     }
        // })

        // Loop through render call for Mouse Move
        // requestAnimationFrame(() => {
        //     this.railRender({ cursor, circle, text })
        // })
    },
}
