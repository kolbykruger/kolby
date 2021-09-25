<template>
    <div class="toc" data-sticky v-if="document" :data-uid="uid" ref="toc">
        <div class="toc-container" v-if="links.length > 0">
            <span class="article-aside-background">
                <div class="article-aside-border"></div>
            </span>
            <ul class="toc-list">
                <li class="toc-list-item toc-list-item-header">
                    <small>Table of contents</small>
                </li>
                <li class="toc-list-item" v-for="(link, index) in links" :key="index">
                    <nuxt-link :to="{ path: path, hash: hash(link.id) }" :class="{ '-active': checkActive(link) }">
                        {{ link.name ? link.name : link.id }}
                    </nuxt-link>
                </li>
            </ul>
            <pre><code>{{ activeItem }}</code></pre>
            <pre><code>{{ links[1] }}</code></pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableOfContents',
    props: {
        document: Object
    },
    data() {
        return {
            links: [],
            activeItem: null
        }
    },
    computed: {
        path() {
            return this.$route.path
        },
        uid() {
            return this.document ? this.document.uid : null
        }
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
                const offset = item.getBoundingClientRect().top - 10
                this.links.push({
                    id,
                    name,
                    offset
                })
            })

            if (this.links.length > 0) {
                this.links.unshift({
                    id: 'content',
                    name: 'Top',
                    offset: 0
                })
                this.$refs.toc.classList.add('-active')
            }

            window.addEventListener('scroll', event => {
                const arr = this.links.filter(item => {
                    return item.offset <= window.scrollY
                })
                const [activeItem] = arr.slice(-1)
                this.activeItem = [activeItem]
            })
        },
        checkActive(item) {
            if (this.activeItem) {
                const name = item.name ? item.name : item.id
                const ai = item.name ? this.activeItem[0].name : this.activeItem[0].id
                if (name == ai) {
                    return true
                }
                return false
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.getAnchorLinks()
            }, 500)
        })
    },
    updated() {
        //this.getAnchorLinks()
    },
    watch: {
        $route() {
            console.log(this.$route)
        }
    }
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

    &-list {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        list-style-type: none;

        &-item {
            padding-left: 0;
            margin-bottom: 0;
            font-size: 1.25rem;

            &-header {
                padding-bottom: 0.5em;

                small {
                    display: inline-block;
                    width: auto;
                    border-bottom: 1px solid var(--color-base-3);
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
