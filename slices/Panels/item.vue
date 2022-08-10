<template>
    <div class="leaf" ref="leaf" :class="{ '-active': selected == index }" :style="{ '--width': width + '%' }">
        <div class="container">
            <p class="leaf-label">{{ index <= 9 ? `0${index + 1}` : index }}</p>
            <span class="leaf-icon" v-if="item.Icon" v-html="require(`~/assets/svg/${item.Icon}.svg?raw`)"></span>
            <prismic-rich-text class="leaf-heading" :field="item.Heading" />
            <prismic-rich-text class="leaf-content" :field="item.Content" />
            <button
                data-cursor="lg"
                class="leaf-action"
                :style="{ '--width': width + '%' }"
                @click="updateSelectedIndex(index)"
            >
                <span class="leaf-action-indicator">
                    <svg fill="none" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m0.25342 2.1106c0 0.89165 0.7334 1.5986 1.5977 1.8176 4.3858 1.1117 8.043 6.5902 8.7347 11.565 0.1254 0.9026 0.8563 1.6443 1.7676 1.6443 0.0084 0 0.0167-1e-4 0.025-2e-4 0.0083 1e-4 0.0167 2e-4 0.025 2e-4 0.9113 0 1.6422-0.7417 1.7682-1.6442 0.6946-4.9728 4.364-10.449 8.7344-11.564 0.8639-0.22043 1.5974-0.92744 1.5974-1.8191s-0.7282-1.6275-1.6075-1.4792c-4.5725 0.77137-8.4439 4.7424-10.518 9.3745-2.0736-4.6321-5.945-8.6031-10.518-9.3745-0.87923-0.14832-1.6075 0.5875-1.6075 1.4792z"
                            fill="#0B0E11"
                        />
                    </svg>
                </span>
                <span class="visually-hidden">Open leaf</span>
            </button>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'

export default {
    name: 'item',
    props: {
        item: {
            type: Object,
        },
        index: {
            type: Number,
        },
        width: {
            type: Number,
        },
        count: {
            type: Number,
        },
        selected: {
            type: Number,
        },
    },
    data() {
        return {
            ease: null,
            duration: 0,
            previous: 0,
        }
    },
    methods: {
        updateSelectedIndex(index) {
            this.$emit('update', index)
        },
        computeShift() {
            const index = this.index,
                width = this.width,
                selected = this.selected,
                offset = this.index == 0 ? 0.75 : this.index

            const shift = selected > index ? width * index + width : width * index

            const clipping =
                selected == index
                    ? `polygon(0% 0, 150% 0, 150% 100%, 0% 100%)`
                    : `polygon(${width}% 0, 150% 0, 150% 100%, ${width}% 100%)`

            this.triggerShift({ shift, clipping })
        },
        triggerShift(props) {
            const leaf = this.$refs.leaf

            const stagger = 0.035

            gsap.to(leaf, this.duration, {
                x: `-${props.shift}%`,
                clipPath: props.clipping,
                ease: this.ease,
                delay: stagger * (this.count - (this.index + 1)),
            })
        },
    },
    mounted() {
        this.ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        this.duraiton = 0
        this.computeShift()
    },
    watch: {
        selected(value) {
            this.duration = 0.55
            this.computeShift()
            this.previous = value
        },
    },
}
</script>

<style lang="scss">
.leaf {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 57.15%;
    border-bottom: 1px solid c('base-4');
    overflow: hidden;

    @include mq('tablet') {
        border-right: 1px solid c('base-4');
        border-bottom: none;
    }

    .container {
        position: relative;
        height: 100%;
        margin: 0;

        @include mq('tablet') {
            padding-top: 6vh;
            padding-bottom: 12vh;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: c('base-4');
                background: radial-gradient(circle at 0% 0%, c('base-3') 30%, c('background'));
                opacity: 0.1;
                z-index: -1;
            }
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        pointer-events: none;
        height: 100%;
        width: 8vw;
        background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.125), transparent);
        user-select: none;
        pointer-events: none;
    }

    &:nth-of-type(1) {
        z-index: 6;
    }

    &:nth-of-type(2) {
        z-index: 5;
    }

    &:nth-of-type(3) {
        z-index: 4;
    }

    &:nth-of-type(4) {
        z-index: 3;
    }

    &:nth-of-type(5) {
        z-index: 2;
    }

    &:nth-of-type(6) {
        z-index: 1;
    }

    &.-active {
        z-index: 6;

        .leaf {
            &-action {
                z-index: -1;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
            }
        }

        ~ .leaf .leaf-action-indicator {
            transform: rotate(-270deg);
        }
    }

    &-label {
        position: absolute;
        top: 0;
        right: 0;
        display: grid;
        place-content: center;
        width: calc(100% - var(--width));
        padding: 2vw 0;
        font-family: $font-2;
        font-size: 2vw;
        font-variant-caps: all-petite-caps;
        font-variant-numeric: slashed-zero;
        opacity: 0.125;
    }

    &-icon {
        --size: 3em;
        width: var(--size);
        height: var(--size);

        @include mq('tablet') {
            --size: 6em;
        }

        svg {
            --size: 3em;
            width: var(--size);
            height: var(--size);

            @include mq('tablet') {
                --size: 6em;
            }

            * {
                fill: c('base-3');
            }
        }
    }

    &-heading {
        h2,
        h3 {
            margin-top: 0.75em;
        }
    }

    &-content {
    }

    &-action {
        //RESET BUTTON
        appearance: none;
        background: none;
        border: none;
        outline: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;

        position: absolute;
        top: 0;
        left: var(--width);
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - var(--width));
        z-index: 1;
        cursor: pointer;

        &-indicator {
            display: flex;
            --width: 2em;
            width: var(--width);
            height: var(--width);
            transform: rotate(-90deg);
            opacity: 0;
            transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate(-1em, 0) rotate(-90deg);
        }

        svg {
            width: 100%;
            height: 100%;

            * {
                fill: c('base-3');
            }
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: c('base-9');
            opacity: 0;
            z-index: 1;
            user-select: none;
            pointer-events: none;
            transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        &:focus {
            outline: none;
        }

        &:hover {
            &::after {
                opacity: 0.2;
            }
            .leaf-action-indicator {
                opacity: 0.2;
                transform: translate(0, 0) rotate(-90deg);
            }
        }

        @include mq('tablet', 'max-width') {
            display: none;
        }
    }

    @include mq('tablet', 'max-width') {
        width: 100% !important;
        transform: none !important;
        clip-path: none !important;
    }
}
</style>
