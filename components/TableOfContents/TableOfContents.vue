<template>
    <div class="toc" v-if="document" :data-uid="uid" ref="toc">
        <div class="toc-container" v-show="!showCode" v-if="links.length > 0">
            <p class="toc-label">Table of contents</p>
            <ul class="toc-list">
                <li class="toc-list-item" v-for="(link, index) in links" :key="index" :data-type="link.type">
                    <nuxt-link class="toc-list-item-link" :to="{ path: path, hash: hash(link.id) }">
                        {{ link.name ? link.name : link.id }}
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <div class="toc-container" v-show="showCode" v-if="codeblocks.length > 0">
            <p class="toc-label">Code Snippets</p>
            <ul class="toc-list">
                <li class="toc-list-item" v-for="(figure, index) in codeblocks" :key="index">
                    <nuxt-link class="toc-list-item-link" :to="{ path: path, hash: hash(figure.id) }">
                        {{ figure.name ? figure.name : figure.id }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
    name: 'TableOfContents',
    props: {
        document: Object,
        showCode: Boolean,
    },
    data() {
        return {
            links: [],
            codeblocks: [],
            activeItem: null,
        }
    },
    computed: {
        path() {
            return this.$route.path
        },
        uid() {
            return this.document ? this.document.uid : null
        },
    },
    methods: {
        hash(str) {
            return str.replace(/\W+/g, '-').toLowerCase()
        },
        getAnchorLinks() {
            this.links = []
            this.codeblocks = []

            const anchors = document.querySelectorAll('a[name]:not([data-figure])')
            const figures = document.querySelectorAll('a[name][data-figure]')

            anchors.forEach(item => {
                const id = item.getAttribute('name')
                const name = item.parentNode.textContent.replace('#', '')
                const type = item.getAttribute('data-type')
                const offset = item.getBoundingClientRect().top - 1
                this.links.push({
                    id,
                    name,
                    type,
                    offset,
                })
            })

            figures.forEach(item => {
                const id = item.getAttribute('name')
                const name = item.getAttribute('data-figure')
                const offset = item.getBoundingClientRect().top - 1
                this.codeblocks.push({
                    id,
                    name,
                    offset,
                })
            })

            if (this.links.length > 0) {
                this.links.unshift({
                    id: 'content',
                    name: 'Introduction',
                    offset: 0,
                })

                gsap.to(this.$refs.toc, {
                    y: 0,
                    alpha: 1,
                    visibility: 'visible',
                })
            }
        },
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.getAnchorLinks()
            }, 800)
        })
    },
    updated() {
        //this.getAnchorLinks()
    },
}
</script>

<style lang="scss">
.toc {
    display: none;
    opacity: 0;
    visibility: hidden;
    transform: translate(0, 3em);
    max-width: 275px;

    @include mq('laptop-small') {
        display: block;
    }

    @keyframes toc-enter {
        to {
            opacity: 1;
            visibility: visible;
            transform: translate(0, 0);
        }
    }

    &-label {
        @include fs-xxs;
        padding-bottom: 0.5em;
    }

    &-list {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 1em;
        list-style-type: none;

        &-item {
            padding-left: 0;
            margin-bottom: 0;
            font-size: 1.125rem;
            line-height: 1.2;

            &[data-type='h3'] {
                font-size: 1rem;
                padding-left: 1em;
                color: var(--color-base-6);

                a {
                    padding: 0.125em 0;
                }

                + [data-type='h2'] {
                    padding-top: 0.25em;
                }
            }

            &-header {
                padding-bottom: 0.45em;

                small {
                    display: inline-block;
                    width: auto;
                    // border-bottom: 1px solid var(--color-base-3);
                }
            }

            a {
                position: relative;
                display: inline-flex;
                text-decoration: none;
                padding: 0.25em 0;
                color: c('base-0');
                transition: 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);

                &.-active {
                    &::before {
                        content: '';
                        position: absolute;
                        right: 100%;
                        top: 50%;
                        --size: 7px;
                        width: var(--size);
                        height: var(--size);
                        border-radius: 50%;
                        background: c('primary-base');
                        transform: translate(-150%, -100%);
                    }
                }

                &:hover {
                    color: c('primary-base');
                }
            }
        }
    }
}
</style>
