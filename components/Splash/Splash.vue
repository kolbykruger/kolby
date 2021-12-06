<template>
    <div class="splash" ref="splash" aria-hidden="true">
        <div class="splash-swipe" data-exclusion>
            <span class="splash-strap" ref="strap" :class="{ '-hidden': !initialLoad }">
                <span class="splash-strap-text-container">
                    <span class="splash-strap-text" ref="strapText" aria-label="kolby.">
                        <span class="splash-strap-text-letter" data-letter="k" aria-hidden="true">k</span>
                        <span class="splash-strap-text-letter" data-letter="o" aria-hidden="true">o</span>
                        <span class="splash-strap-text-letter" data-letter="l" aria-hidden="true">l</span>
                        <span class="splash-strap-text-letter" data-letter="b" aria-hidden="true">b</span>
                        <span class="splash-strap-text-letter" data-letter="y" aria-hidden="true">y</span>
                        <span class="splash-strap-text-letter" data-letter="." aria-hidden="true">.</span>
                    </span>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'

export default {
    name: 'Splash',
    data() {
        return {
            timeline: null,
            textTimeline: null,
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
    mounted() {
        gsap.registerPlugin(CustomEase)

        this.ease = CustomEase.create('custom', 'M0,0 C0.23,1 0.32,1 1,1 ')

        // initial load
        this.timeline = gsap.timeline()
        this.textTimeline = gsap.timeline()
        const splash = this.$refs.splash
        const strapText = this.$refs.strapText

        // Initial Load
        this.timeline
            .set(splash, {
                y: '0%',
            })
            .to(splash, {
                y: '-100%',
                duration: 1.2,
                delay: 1.5,
                ease: 'expo.out',
            })

        this.textTimeline
            .set(strapText, {
                y: '150%',
                rotate: '3deg',
            })
            .to(strapText, {
                y: '0',
                rotate: '0deg',
                duration: 0.8,
                ease: this.ease,
            })

        this.$nextTick(() => {
            setTimeout(() => {
                this.textTimeline.to(strapText, {
                    y: '-150%',
                    rotate: '-3deg',
                    duration: 1.2,
                    delay: 0,
                    ease: this.ease,
                })
                this.initialLoad = false
            }, 1000)
        })
    },
    watch: {
        loading(value) {
            const splash = this.$refs.splash
            const strapText = this.$refs.strapText
            if (value) {
                this.timeline
                    .set(splash, {
                        y: '100%',
                        duration: 0,
                    })
                    .to(splash, {
                        y: '0%',
                        duration: 0.8,
                        // ease: this.ease,
                        ease: this.ease,
                    })
            } else {
                this.$nextTick(() => {
                    this.timeline.to(splash, {
                        y: '-100%',
                        duration: 1.2,
                        delay: 0.6,
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
    transition-duration: opacity 0.25s ease-out;
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
            transform: translateY(150%);

            &-letter {
                position: relative;
            }
        }
    }
}
</style>
