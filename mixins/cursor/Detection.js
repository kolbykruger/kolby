export const Detection = {
    name: 'Detection',
    computed: {
        checkPerformance() {
            try {
                const canvas = document.createElement('canvas')
                return (
                    (!!window.WebGLRenderingContext && canvas.getContext('webgl')) ||
                    canvas.getContext('experimental-webgl')
                )
            } catch (e) {
                return false
            }
        },
        checkPointer() {
            return window.matchMedia('(pointer: fine)').matches
        },
        checkHover() {
            return window.matchMedia('(hover: hover)').matches
        },
        checkSize() {
            return window.matchMedia('(min-width: 968px)').matches
        }
    },
    mounted() {
        this.$store.commit(
            'device/setStatus',
            {
                type: 'pointer',
                status: this.checkPointer
            },
            'deviceStatus',
            {
                type: 'hover',
                status: this.checkHover
            },
            'deviceStatus',
            {
                type: 'performance',
                status: this.checkPerformance ? true : false
            },
            'deviceStatus',
            {
                type: 'size',
                status: this.checkSize
            }
        )
        this.$store.commit('device/setDimensions', {
            width: window.screen.width,
            height: window.screen.height
        })
    }
}
