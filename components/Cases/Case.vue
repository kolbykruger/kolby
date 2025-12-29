<template>
    <div class="case case--large" ref="case" :style="{ '--accent': item.data.Accent }">
        <span class="case-cover">
            <span class="case-background"></span>
            <Picture
                :field="item.data.Cover"
                :sizes="{
                    'phone-small': '375px',
                    phone: '460px',
                    'phone-large': '600px',
                    tablet: '768px',
                    'laptop-small': '1024px',
                    laptop: '399px',
                    'laptop-large': '449px',
                    'desktop-small': '533px',
                    desktop: '639px',
                    'desktop-large': '853px',
                }"
            />
        </span>

        <div class="case-details">
            <h2 class="case-title">{{ item.data.Name[0].text }}</h2>
            <prismic-rich-text class="case-summary" v-if="item.data.View" :field="item.data.View" />
            <Button
                :location="'/works/' + item.uid"
                class="case-link"
                :size="this.isMobile ? 'small' : 'default'"
                :magnetic="true"
            >
                Explore
                <template #posticon><ArrowRight /></template>
            </Button>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import ArrowRight from '~/assets/svg/arrows/Arrow-Right.svg?inline'

export default {
    name: 'Case',
    props: {
        item: Object,
        index: Number,
    },
    data() {
        return {
            cursor: false,
            mouse: {
                x: 0,
                y: 0,
            },
            isMobile: true,
        }
    },
    components: {
        ArrowRight,
    },
    computed: {
        isLargerDisplay() {
            return this.index % 3 == 0 ? true : false
        },
    },
    mounted() {
        this.isMobile = screen.width <= 786 ? true : false

        window.addEventListener('resize', () => {
            this.isMobile = screen.width <= 600 ? true : false
        })

        if (this.isMobile) {
            return false
        }

        const caseStudy = this.$refs.case
        const caseStudyImg = caseStudy.querySelector('img')

        caseStudy.addEventListener('mouseenter', () => {
            this.cursor = true
        })

        caseStudy.addEventListener('mousemove', e => {
            const bounds = caseStudy.getBoundingClientRect()

            let x = e.clientX / bounds.width - 0.5
            let y = e.clientY / bounds.height - 0.5

            requestAnimationFrame(() => {
                gsap.to(caseStudyImg, {
                    x: 15 * x,
                    y: 15 * y,
                    ease: 'power2.out',
                })
            })
        })

        caseStudy.addEventListener('mouseleave', () => {
            this.cursor = false
            requestAnimationFrame(() => {
                gsap.to(caseStudyImg, {
                    x: 0,
                    y: 0,
                    ease: 'linear',
                })
            })
        })

        window.addEventListener('mouseleave', () => {
            this.cursor = false

            requestAnimationFrame(() => {
                gsap.to(caseStudyImg, {
                    x: 0,
                    y: 0,
                    ease: 'linear',
                })
            })
        })
    },
}
</script>

<style lang="scss">
.case {
    position: relative;
    width: 100%;
    overflow: hidden;

    &.case--large {
        @include mq('laptop-large') {
            grid-column: span 2;
        }
    }

    &-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    &-cover {
        //position: relative;
        display: block;
        transition: 0.3s cubic-bezier(0, 0.98, 0.74, 0.77);
        overflow: hidden;

        @include mq('laptop-large') {
            aspect-ratio: 0.875;
        }

        .case--large & {
            @include mq('laptop-large') {
                aspect-ratio: 1.75;
            }
        }

        figure {
            aspect-ratio: unset;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            background: c('base-9');
            transition: 0.3s ease;

            @include mq('laptop-large') {
                opacity: 0.2;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.3s ease;

            @include mq('laptop') {
                opacity: 0.5;
            }
        }
    }

    &-background {
        background: radial-gradient(circle at 0% 100%, var(--accent) 30%, c('background'));
        transition: 0.3s ease;

        @include mq('laptop-large') {
            opacity: 0.46;
        }

        &::before {
            @include mq('laptop-large') {
                @include image-noise;
            }
        }
    }

    @mixin case-active-state {
        .case {
            &-cover {
                transform: scale(0.98);

                figure {
                    opacity: 0.1;
                    transform: scale(1.16);
                }
            }
            &-background {
                opacity: 0.55;
            }
        }

        .button a {
            color: c('base-9');
            border-color: transparent;

            svg path {
                fill: c('base-9');
            }
            &::before {
                transform: translate(-50%, -100%);
                border-radius: 2em;
            }
        }
    }

    @mixin case-active-state-mobile {
        .case {
            &-cover {
                figure {
                    opacity: 0.7;
                }
            }
            &-background {
                opacity: 0.55;
            }
        }

        .button a {
            color: c('base-9');
            border-color: transparent;

            svg path {
                fill: c('base-9');
            }
            &::before {
                transform: translate(-50%, -100%);
                border-radius: 2em;
            }
        }
    }

    @include mq('laptop', 'max-width') {
        @include case-active-state-mobile;
    }

    @include mq('laptop') {
        &:hover,
        &:focus,
        &:focus-within {
            @include case-active-state;
        }
    }

    &-details {
        position: relative;
        max-width: 52em;
        z-index: 1;
        padding: 1.875em;

        @include mq('phone-large') {
        }
        @include mq('tablet') {
            padding: 6.25em;
        }
        @include mq('laptop-large') {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            height: 100%;
        }
    }

    &-title {
        @include fs-xl;
        margin-bottom: var(--flow-space-xs);
        margin-top: 0;
    }

    &-summary {
        margin-bottom: 2em;

        * {
            color: c('base-0');
        }
    }
}
</style>
