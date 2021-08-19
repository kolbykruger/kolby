export const Caption = {
    name: 'Caption',
    data() {
        return {
            caption: {
                active: false,
                text: null
            }
        }
    },
    methods: {
        captions() {
            const text = this.$refs.pointerText
            const captions = document.querySelectorAll('[data-caption]')

            if (!captions) {
                return false
            }

            captions.forEach(caption => {
                caption.addEventListener('mouseenter', () => {
                    this.setState('-caption')
                    this.caption.active = true
                    this.caption.text = caption.dataset.caption
                    text.style.opacity = 1
                })
                caption.addEventListener('mouseleave', () => {
                    this.removeState('-caption')
                    this.caption.active = false
                    this.caption.text = null
                    text.style.opacity = 0
                })
            })
        }
    },
    mounted() {
        this.captions()
    }
}
