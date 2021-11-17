export const Progress = {
    name: 'Progress',
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        progress() {
            const $el = this
            const cursor = this.$refs.pointerSVG
            const progress = this.$refs.pointerProgress

            const progressions = document.querySelectorAll('[data-progress]')

            progressions.forEach(prog => {
                let status = false,
                    counter = 3,
                    seconds = 0,
                    callback = prog.dataset.callback ? prog.dataset.callback : null,
                    interval

                function incrementSeconds() {
                    if (!status) {
                        return false
                    }
                    seconds += 1
                    if (seconds === counter / 2) {
                        initCallback(callback, prog)
                    }
                }

                function initCallback(callback, el) {
                    // Clean-up after trigger
                    $el.removeState('-progress')
                    status = false
                    seconds = 0

                    if (callback == 'intro') {
                        // Uses data-callback="intro"
                        const next = el.closest('section').nextElementSibling.childNodes[0]
                        const nextBounds = next.getBoundingClientRect()
                        const nextOffset = nextBounds.top
                        const nextHeight = (nextBounds.height - window.innerHeight) / 2
                        const scrollPos = nextOffset + nextHeight
                        window.scrollTo({
                            top: scrollPos,
                            behavior: 'smooth',
                        })
                    }
                    if (callback == 'top') {
                        // Uses data-callback="top"
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    if (callback == 'route') {
                        // Uses data-callback="route"
                        // Utilizes data-callback-location="path"
                        const loc = el.dataset.callbackLocation
                        $el.$router.push({ path: loc })
                    }
                }

                prog.addEventListener('mouseenter', () => {
                    counter = prog.dataset.progress ? prog.dataset.progress : 3
                    interval = setInterval(incrementSeconds, 1000)
                    this.setState('-progress')
                    this.setProperty(counter + 's')
                    status = true
                })
                prog.addEventListener('mouseleave', () => {
                    clearInterval(interval)
                    this.removeState('-progress')
                    status = false
                    seconds = 0
                })
            })
        },
    },
    mounted() {
        this.progress()
    },
}
