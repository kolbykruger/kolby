<template>
    <section class="anchors">
        <div class="container">
            <!-- <pre><code>{{ slice }}</code></pre> -->

            <button
                data-stick
                data-magnetic
                data-cursor="md"
                class="anchors-button"
                ref="anchorsButton"
                @click="toggle"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 7C4.55228 7 5 6.55228 5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7ZM7.25 6C7.25 5.58579 7.58579 5.25 8 5.25L20 5.25C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75L8 6.75C7.58579 6.75 7.25 6.41421 7.25 6ZM8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75L20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25L8 11.25ZM8 17.25C7.58579 17.25 7.25 17.5858 7.25 18C7.25 18.4142 7.58579 18.75 8 18.75L20 18.75C20.4142 18.75 20.75 18.4142 20.75 18C20.75 17.5858 20.4142 17.25 20 17.25L8 17.25ZM5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM4 19C4.55228 19 5 18.5523 5 18C5 17.4477 4.55228 17 4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19Z"
                        fill="#22282F"
                    />
                </svg>
                <span class="visually-hidden">Toggle {{ slice.primary.Label || 'Table of Contents' }}</span>
            </button>

            <div class="anchors-panel" ref="anchorsPanel" :class="{ '-open': open }">
                <span class="anchors-panel-background">
                    <span class="anchors-panel-border"></span>
                </span>
                <div class="anchors-panel-items">
                    <div class="anchors-panel-item anchors-panel-header">
                        <div class="anchors-panel-header-text">
                            {{ slice.primary.label || 'Links' }}
                        </div>
                    </div>
                    <div class="anchors-panel-item" v-for="(item, index) in slice.items" :key="index">
                        <nuxt-link :to="{ path: path, hash: hash(item.Anchor ? item.Anchor : item.Name) }">
                            <span v-if="item.Index">{{ item.Index }}.</span> {{ item.Name }}
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <!-- <div class="anchors-items">
                <prismic-rich-text :field="slice.primary.title" class="title" />
                <prismic-rich-text :field="slice.primary.description" />
            </div> -->
        </div>
    </section>
</template>

<script>
export default {
    name: 'Anchors',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        path() {
            const page = this.slice.primary.Page.slug
            return page ? page : this.$route.path
        }
    },
    methods: {
        hash(str) {
            return str.replace(/\W+/g, '-').toLowerCase()
        },
        toggle() {
            const state = !this.open
            const focus = state ? this.$refs.anchorsPanel : this.$refs.anchorsButton
            this.open = state
            focus.focus()
        }
    }
}
</script>

<style lang="scss">
.anchors {
    .container {
        padding: 0;
    }

    &-button,
    &-panel {
        position: fixed;
        bottom: 3em;
        right: 3em;
    }

    &-button {
        bottom: 2em;
        right: 2em;
        --size: 3.75em;
        width: var(--size);
        height: var(--size);
        display: grid;
        place-content: center;
        background: c('menu-background');
        border-radius: 50%;
        z-index: 99;
        outline: none;

        &:hover,
        &:focus {
            outline: none;
        }

        svg {
            path {
                fill: c('menu-color');
            }
        }
    }

    &-panel {
        background: c('background');
        border-radius: 0.365em;
        opacity: 0;
        visibility: hidden;
        transform: translateY(1em);
        overflow: hidden;
        z-index: 98;

        &.-open {
            animation: anchors-enter 0.66s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

            @keyframes anchors-enter {
                from {
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(1em);
                }
                to {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
            }
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-image: url('/noise/noise.gif');
            opacity: 0.2;
            mix-blend-mode: overlay;
        }

        p {
            margin: 0;
            margin-bottom: 0;
        }

        &-items {
            position: relative;
            padding-top: 2em;
            padding-bottom: 2.5em;
            z-index: 2;
            width: calc(100% + 40px);
            max-height: 600px;
            overflow-y: auto;
        }

        &-header {
            font-size: 1.5rem;
            padding: 0.5em 2em;
            margin-bottom: 0.75em;
            display: inline-block;
            //color: c('base-3');

            &-text {
                display: inline-flex;
                width: 100%;
                border-bottom: 1px solid c('base-3');
                padding-bottom: 0.125em;
            }
        }

        &-item {
            a {
                display: inline-flex;
                color: c('base-0');
                padding: 0.5em 2em;
                width: 100%;
                font-size: 1.5rem;
                text-decoration: none;
                transition: 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);

                &:hover,
                &:focus {
                    color: c('primary-base');
                }
            }

            span {
                font-variant-numeric: tabular-nums;
                padding-right: 0.5em;
                color: c('base-3');
            }
        }

        &-background,
        &-border {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &-background {
            z-index: -1;

            &::before,
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
            }

            &::after {
                width: 100%;
                height: 100%;
                pointer-events: none;
                background: radial-gradient(ellipse at 100% 100%, var(--color-base-0), transparent 75%);
                opacity: 0.1;
                filter: blur(var(--size));
            }
        }

        &-border {
            &::before,
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
            }

            &::before {
                width: 100%;
                height: 1px;
                background: linear-gradient(to left, c('base-7'), transparent);
            }

            &::after {
                width: 1px;
                height: 100%;
                background: linear-gradient(to top, c('base-7'), transparent);
            }
        }
    }
}
</style>
