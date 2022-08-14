<template>
    <main class="page" id="content">
        <div class="page-contents page-contents--thank-you">
            <Pageheading name="Thank you!" />
            <section>
                <div class="container">
                    <p>Thank you for your message. I'll get back to you soon!</p>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { ThankYouMeta } from '~/mixins/meta/ThankYouMeta.js'

const confetti = require('canvas-confetti')
import Pageheading from '~/components/Pageheading/Pageheading.vue'

export default {
    components: {
        Pageheading,
    },
    data() {
        return {
            duration: 8 * 1000,
            defaults: {
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                zIndex: 0,
            },
        }
    },
    mixins: [ThankYouMeta],
    methods: {
        celebrate() {
            const animationEnd = Date.now() + this.duration
            const canvas = this.$refs.canvas
            const c = confetti.create(canvas, {
                resize: true,
            })

            let interval = setInterval(() => {
                let timeLeft = animationEnd - Date.now()

                if (timeLeft <= 0) {
                    return clearInterval(interval)
                }

                let particleCount = 50 * (timeLeft / this.duration)

                c(
                    Object.assign({}, this.defaults, {
                        particleCount,
                        origin: {
                            x: this.randomInRange(0.1, 0.3),
                            y: Math.random() - 0.2,
                        },
                    })
                )
                c(
                    Object.assign({}, this.defaults, {
                        particleCount,
                        origin: {
                            x: this.randomInRange(0.7, 0.9),
                            y: Math.random() - 0.2,
                        },
                    })
                )
            }, 1000)
        },
        randomInRange(min, max) {
            return Math.random() * (max - min) + min
        },
    },
    mounted() {
        this.celebrate()
    },
}
</script>

<style lang="scss">
.page-contents--thank-you {
    text-align: center;

    .pageheading {
        &-name {
            max-width: 100%;
        }
    }
}
</style>
