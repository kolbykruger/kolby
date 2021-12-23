<template>
    <div class="audio" ref="audio" :class="{ '-active': isShowing }">
        <audio ref="track" :src="source" type="audio/mpeg" preload="metadata" loop />
        <div class="audio-player">
            <div class="audio-player-seek">
                <input
                    ref="seek"
                    :style="{
                        '--current': (slider.current / slider.max) * 100 + '%',
                    }"
                    type="range"
                    :min="slider.min"
                    :max="slider.max"
                    v-model="slider.current"
                />
            </div>

            <div class="audio-player-details">
                <p class="audio-player-track">{{ title }}</p>
                <button class="audio-player-exit" data-cursor="xxs" data-stick @click="close">
                    <ChevronDown />
                    <span class="visually-hidden">Minimize audio player</span>
                </button>
            </div>
            <div class="audio-player-controls">
                <div class="audio-player-actions">
                    <button class="audio-player-actions-play" data-cursor="xxs" data-stick @click="playState">
                        <span class="audio-player-icon" v-if="!isPlaying">
                            <Play />
                            <span class="visually-hidden">Play audio</span>
                        </span>
                        <span class="audio-player-icon" v-else>
                            <Pause />
                            <span class="visually-hidden">Pause audio</span>
                        </span>
                    </button>
                    <button class="audio-player-actions-reset" data-cursor="xxs" data-stick @click="replay">
                        <span class="audio-player-icon">
                            <Replay />
                            <span class="visually-hidden">Replay audio</span>
                        </span>
                    </button>
                    <button class="audio-player-actions-volume" data-cursor="xxs" data-stick @click="toggleVolume">
                        <span class="audio-player-icon" v-if="volume.value > 0">
                            <VolumeHigh />
                            <span class="visually-hidden">Adjust volume of audio</span>
                        </span>
                        <span class="audio-player-icon" v-else>
                            <VolumeSlash />
                            <span class="visually-hidden">The audio volume is currently muted</span>
                        </span>
                    </button>
                </div>
                <p class="audio-player-time">
                    <span v-if="hasPlayed">
                        <span class="visually-hidden">Time played: </span>
                        {{ calculateTime(slider.current) }}
                    </span>
                    <span class="audio-player-time-separator" v-if="hasPlayed">/</span>
                    <span class="visually-hidden">of total time: </span> {{ calculateTime(duration) }}
                </p>
            </div>

            <div class="audio-player-volume" v-if="volume.isShowing">
                <input
                    class="audio-player-volume-seek"
                    :style="{
                        '--current': volume.value + '%',
                        '--height': $refs.audio.getBoundingClientRect().height + 'px',
                    }"
                    type="range"
                    min="0"
                    max="100"
                    v-model="volume.value"
                    @change="setVolume"
                />
            </div>
        </div>
    </div>
</template>

<script>
// Icons
import Play from '~/assets/svg/duotone/play.svg?inline'
import Pause from '~/assets/svg/duotone/pause.svg?inline'
import Replay from '~/assets/svg/duotone/replay.svg?inline'
import VolumeHigh from '~/assets/svg/duotone/volume-high.svg?inline'
import VolumeSlash from '~/assets/svg/duotone/volume-slash.svg?inline'
import ChevronDown from '~/assets/svg/duotone/chevron-down.svg?inline'

export default {
    name: 'Audio',
    props: {
        source: {
            type: String,
            default() {
                return {
                    url: 'https://www.w3schools.com/html/horse.mp3',
                }
            },
        },
        title: {
            type: String,
            default: 'Listen to this article',
        },
        isShowing: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        Play,
        Pause,
        Replay,
        VolumeHigh,
        VolumeSlash,
        ChevronDown,
    },
    data() {
        return {
            volume: {
                value: 50,
                isShowing: false,
            },
            duration: 0,
            slider: {
                current: 0,
                buffered: 0,
                min: 0,
                max: 0,
            },
            isPlaying: false,
            hasPlayed: false,
            animFrame: null,
        }
    },
    computed: {
        currentPlayedTime() {
            return this.slider.current
        },
    },
    methods: {
        calculateTime(time) {
            const minutes = Math.floor(time / 60)
            const seconds = Math.floor(time % 60)
            return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
        },
        playState() {
            this.isPlaying = !this.isPlaying
            if (this.isPlaying) {
                this.hasPlayed = true
                this.$refs.track.currentTime = this.slider.current
                this.$refs.track.play()
                requestAnimationFrame(this.updateTime)
            } else {
                this.$refs.track.pause()
                cancelAnimationFrame(this.animFrame)
            }
        },
        updateTime() {
            const audio = this.$refs.track
            this.slider.current = Math.floor(audio.currentTime)
            this.animFrame = requestAnimationFrame(this.updateTime)
        },
        replay() {
            const playing = this.isPlaying
            this.isPlaying = false
            this.$refs.track.pause()
            this.slider.current = 0
            this.$refs.track.currentTime = 0

            if (playing) {
                this.isPlaying = true
                this.$refs.track.play()
            }
        },
        toggleVolume() {
            this.volume.isShowing = !this.volume.isShowing
        },
        setVolume() {
            this.$refs.track.volume = this.volume.value / 100
        },
        close() {
            this.$emit('clicked', {
                isShowing: false,
            })
        },
    },
    mounted() {
        const audio = this.$refs.track
        const seek = this.$refs.seek

        audio.addEventListener('loadedmetadata', () => {
            if (audio.readyState > 0) {
                this.duration = audio.duration
                this.slider.max = Math.floor(audio.duration)
            }
        })

        seek.addEventListener('mousedown', () => {
            this.hasPlayed = true
        })

        seek.addEventListener('input', () => {
            this.hasPlayed = true
            cancelAnimationFrame(this.animFrame)
        })

        seek.addEventListener('change', () => {
            this.hasPlayed = true
            this.$refs.track.currentTime = this.slider.current
            cancelAnimationFrame(this.animFrame)
            if (this.isPlaying) {
                this.animFrame = requestAnimationFrame(this.updateTime)
            }
        })
    },
    watch: {
        currentPlayedTime(value) {
            if (value >= Math.floor(this.duration)) {
                this.$refs.track.pause()
                this.isPlaying = false
                cancelAnimationFrame(this.animFrame)
            }
        },
    },
}
</script>

<style lang="scss">
.audio {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2em;
    width: 100%;
    max-width: 100%;
    background: c('base-9');
    transform: translateY(100%);
    transition: transform 0.15s ease-in-out;
    z-index: 20;

    @include mq('laptop-small') {
        left: unset;
        right: unset;
        max-width: 300px;
        padding: 1.5em;
        padding-top: 0.75em;
        border-radius: 0.375em 0.375em 0 0;
    }

    &.-active {
        transform: translateY(0);
    }

    input[type='range'] {
        -webkit-appearance: none;
        width: 100%;
        height: 5px;
        outline: none;
        padding: 0;
        margin: 0;
        border-radius: 0.375em;
        transition: all 0.15s ease-in-out;
        cursor: pointer;

        // Range Handle
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background: c('primary-base');
            cursor: pointer;
            transition: all 0.15s ease-in-out;
        }
        &::-moz-range-thumb {
            width: 1em;
            height: 1em;
            border: 0;
            border-radius: 50%;
            background: c('primary-base');
            cursor: pointer;
            transition: background 0.15s ease-in-out;
        }
    }

    button {
        position: relative;
        --size: 1em;
        width: var(--size);
        height: var(--size);
        outline: none;
        display: grid;
        place-content: center;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: c('base-8');
            z-index: -1;
            pointer-events: none;
            border-radius: 0.275em;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        svg {
            --size: 0.5em;
            display: block;
            width: var(--size);
            height: var(--size);

            > * {
                fill: c('base-1');
            }
        }
    }

    &-player {
        &-details {
            display: grid;
            grid-template-columns: auto 1.25em;
            align-items: baseline;
            grid-gap: 1em;
        }

        &-track {
            @include fs-mini;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.75em;
        }

        &-actions {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0.4em;

            button {
            }

            &-play {
            }

            &-reset {
            }

            &-volume {
            }
        }

        &-time {
            @include fs-mini;
            font-variant-numeric: tabular-nums;
            letter-spacing: 0.025em;

            span {
                opacity: 0.5;
            }
        }

        &-volume {
            position: absolute;
            top: -1em;
            right: 0.75em;
            width: 145px;
            height: 2em;
            padding: 0 0.75em;
            background: c('base-9');
            border-radius: 1em;
            box-shadow: 1px 1px 4px #000;

            input[type='range'].audio-player-volume-seek {
                position: absolute;
                top: 50%;
                left: 1em;
                width: calc(100% - 2em);
                transform: translate(0, -50%);
                background: linear-gradient(
                    90deg,
                    c('primary-base') var(--current),
                    rgba(217, 220, 227, 0.25) var(--current)
                );

                &::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 0.75em;
                    height: 0.75em;
                }

                &:hover {
                    &::-webkit-slider-thumb {
                        transform: scale(1.3);
                    }
                }
            }
        }

        &-seek {
            input[type='range'] {
                background: linear-gradient(
                    90deg,
                    c('primary-base') var(--current),
                    rgba(217, 220, 227, 0.25) var(--current)
                );
                margin-bottom: 1em;
                transform: translateY(2px);

                @include mq('tablet') {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    margin-bottom: 0;
                }

                &:hover {
                    transform: translateY(0);

                    &::-webkit-slider-thumb {
                        transform: scale(1.5);
                        box-shadow: 1px 1px 8px c('base-9');
                    }
                }
            }
        }

        button.audio-player-exit {
            &::after {
                display: none;
            }

            svg {
                --size: 0.65em;
                width: var(--size);
                height: var(--size);
            }
        }
    }
}
</style>
