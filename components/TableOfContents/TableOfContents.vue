<template>
    <div class="toc" v-if="document" :data-uid="uid" ref="toc">
        <div class="toc-container" v-if="links.length > 0">
            <p class="toc-label">Table of contents</p>
            <ul class="toc-list">
                <li class="toc-list-item" v-for="(link, index) in links" :key="index" :data-type="link.type">
                    <nuxt-link class="toc-list-item-link" :to="{ path: path, hash: hash(link.id) }">
                        {{ link.name ? link.name : link.id }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableOfContents',
    props: {
        document: Object,
    },
    data() {
        return {
            links: [],
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

            const anchors = document.querySelectorAll('a[name]')

            anchors.forEach(item => {
                const id = item.getAttribute('name')
                const name = item.nextElementSibling.textContent
                const type = item.getAttribute('data-type')
                const offset = item.getBoundingClientRect().top - 1
                this.links.push({
                    id,
                    name,
                    type,
                    offset,
                })
            })

            if (this.links.length > 0) {
                this.links.unshift({
                    id: 'content',
                    name: 'Introduction',
                    offset: 0,
                })
                this.$refs.toc.classList.add('-active')
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
    opacity: 0;
    visibility: hidden;
    transform: translate(0, 3em);

    &.-active {
        animation: toc-enter 0.92s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
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

            &[data-type='h3'] {
                font-size: 1rem;
                padding-left: 1em;
                color: var(--color-base-6);
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
