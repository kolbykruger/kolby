<template>
    <section class="features">
        <div class="container">
            <!-- <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" /> -->

            <div class="features-grid">
                <div class="features-videos" data-cursor="invisible">
                    <div class="features-video" v-if="video">
                        <video loading="lazy" width="320" height="240" autoplay muted loop playsinline>
                            <source :src="video.url" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div class="features-actions">
                    <button
                        class="features-action"
                        :class="{ '-active': selected == index }"
                        v-for="(item, index) in slice.items"
                        :key="index"
                        @click="updateSelected(index)"
                    >
                        <div class="features-action-icon" v-html="item.Icon"></div>
                        <div class="features-action-text">
                            <p class="features-action-title">{{ item.Title }} - {{ index }}</p>
                            <prismic-rich-text class="features-action-description" :field="item.Description" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Features',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    data() {
        return {
            selected: 0,
            video: null,
        }
    },
    methods: {
        updateSelected(index) {
            this.selected = index
            this.video = this.slice.items[index].Video
        },
    },
    mounted() {
        this.video = this.slice.items[0].Video
    },
}
</script>

<style lang="scss">
.features {
    &-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 3em;
    }

    &-videos {
        position: relative;
        aspect-ratio: 640 / 360;
        background: c('base-8');
        overflow: hidden;

        iframe,
        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            // display: none;
            z-index: 2;
        }

        html[theme='dark'] & {
            background: c('base-9');
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                to right,
                rgba(#f4f1ee, 0) 0,
                rgba(#f4f1ee, 0.8) 50%,
                rgba(#f4f1ee, 0) 100%
            );
            animation: video-loading 0.96s infinite linear;
            z-index: 1;

            html[theme='dark'] & {
                background-image: linear-gradient(
                    to right,
                    rgba(#13161b, 0) 0,
                    rgba(#13161b, 0.8) 50%,
                    rgba(#13161b, 0) 100%
                );
            }

            @keyframes video-loading {
                0% {
                    transform: translate3d(-100%, 0, 0);
                }
                100% {
                    transform: translate3d(100%, 0, 0);
                }
            }
        }
    }

    &-actions {
    }

    &-action {
        appearance: none;
        background: none;
        border: none;
        outline: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;

        display: grid;
        grid-template-columns: clamp(1.75rem, 2vw, 2.5rem) auto clamp(1.75rem, 2vw, 2.5rem);
        grid-column-gap: clamp(0.75rem, 2vw, 1.5rem);
        width: 100%;
        padding: 2em;
        margin-bottom: 0.5em;
        border-radius: 0.375em;
        text-align: left;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        &.-active {
            background: c('base-8');

            html[theme='dark'] & {
                background: c('base-9');
            }
        }

        svg {
            width: 100%;
            height: 100%;

            path {
                fill: c('base-0');
            }
        }

        &-description {
            * {
                font-size: clamp(1.125rem, -0.875rem + 3.333vw, 1.563rem);
            }
        }
    }
}
</style>
