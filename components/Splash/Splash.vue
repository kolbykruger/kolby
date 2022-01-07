<template>
    <div class="splash" ref="splash" aria-hidden="true">
        <div class="splash-swipe" data-exclusion>
            <span class="splash-strap" :class="{ '-hidden': !initialLoad }">
                <span class="splash-strap-text-container">
                    <span class="splash-strap-text" ref="strap" aria-label="kolby."> kolby. </span>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'

export default {
    name: 'Splash',
    data() {
        return {
            timeline: {
                splash: null,
                strap: null,
            },
            ease: null,
            initialLoad: true,
        }
    },
    computed: {
        page() {
            return mapState(['page'])
        },
        loading() {
            return this.$store.state.loading.loading
        },
    },
    methods: {
        loadingAnimation() {
            const splash = this.$refs.splash
            const strap = this.$refs.strap
            const splitText = new SplitText(strap, {
                type: 'lines,words,chars',
                charsClass: 'strap-char',
                wordsClass: 'strap-word',
                linesClass: 'strap-line',
            })

            // Initial Load
            this.timeline.strap
                // Set initial position of characters
                .set(splitText.chars, {
                    yPercent: 150,
                    rotateX: 110,
                    d: 1300,
                })
                .set(strap, {
                    alpha: 1,
                })
                // Stagger characters to "on-screen"
                .staggerTo(
                    splitText.chars,
                    0.95,
                    {
                        yPercent: 0,
                        rotateX: 0,
                        d: 0,
                        ease: this.ease,
                    },
                    0.02
                )
                // move characters out after 0.2
                .to(splitText.chars, 1.2, {
                    yPercent: -150,
                    rotateX: 110,
                    d: 1300,
                    ease: this.ease,
                    delay: 0.2,
                })
        },
    },
    mounted() {
        gsap.registerPlugin(CustomEase)
        gsap.registerPlugin(SplitText)
        this.ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')
        const splash = this.$refs.splash

        // initial load
        this.timeline.splash = gsap.timeline()
        this.timeline.strap = gsap.timeline({ repeat: 0 })

        requestAnimationFrame(() => {
            this.loadingAnimation()
        })

        // Handles initial loading
        this.$nextTick(() => {
            setTimeout(() => {
                this.timeline.splash.to(splash, {
                    yPercent: -150,
                    duration: 1.2,
                    delay: 1,
                    ease: this.ease,
                })
                this.initialLoad = false
                // Notifies app that loads from now on are route navigations
                this.$store.commit('loading/setInitialLoad', { status: false })
            }, 1000)
        })
    },
    watch: {
        loading(value) {
            const splash = this.$refs.splash
            const status = value
            if (value) {
                // If the page is loading
                this.timeline.splash
                    .set(splash, {
                        yPercent: 150,
                        duration: 0,
                    })
                    .to(splash, {
                        yPercent: 0,
                        duration: 0.8,
                        ease: this.ease,
                    })
                // setTimeout(() => {
                //     if (status) {
                //         this.timeline.strap.restart()
                //         this.timeline.strap.repeat(0)
                //     }
                // }, 1500)
            } else {
                // If the page is finished loading
                this.$nextTick(() => {
                    this.timeline.splash.to(splash, {
                        yPercent: -150,
                        duration: 1.2,
                        delay: 0.8,
                        ease: 'expo.out',
                    })
                })
            }
        },
    },
}
</script>

<style lang="scss">
.page-enter-active {
    // transition-duration: opacity 0.25s ease-out;
    transition-delay: 1s;

    .page-contents {
        transition: opacity 0.25s ease-out;
        transition-delay: 0.5s;
    }
}

.page-leave-active {
    .page-contents {
        transition: opacity 0.25s ease-in;
    }
}

.page-enter,
.page-leave-active {
    opacity: 0;

    .page-contents {
        opacity: 0;
    }
}

.splash {
    position: fixed;
    top: 0;
    right: 0;
    height: 110%;
    left: 0;
    z-index: 199;
    background-color: c('splash-background');
    user-select: none;

    &-strap {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 100%;
        display: grid;
        place-content: center;
    }

    &-strap {
        color: c('menu-color');
        font-size: 10vw;
        font-family: $font-1;
        font-weight: 600;
        font-feature-settings: 'kern' off;
        font-kerning: none;
        letter-spacing: 0.025em;
        z-index: 3;

        @include mq('tablet') {
            font-size: 2vw;
        }

        &.-hidden {
            .splash-strap-text {
                animation: strap-out 0.92s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                animation-delay: 0.3s;
            }
        }

        &-text-container {
            line-height: 1.2;
            clip-path: polygon(-100% 0, 200% 0, 200% 100%, -100% 100%);
            overflow: hidden;
        }

        &-text {
            display: inline-flex;
            opacity: 0;

            &-letter {
                position: relative;
            }
        }

        &-line {
            overflow: hidden;
        }

        &-word {
            perspective: 1000px;
            transform-style: preserve-3d;
        }
    }
}
</style>
