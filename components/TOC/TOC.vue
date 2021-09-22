<template>
    <div class="toc">
        <ul>
            <li v-for="(link, index) in links" :key="index">
                <nuxt-link :to="{ path: path, hash: hash(link.id) }">
                    <small
                        ><span>0{{ index }}.</span></small
                    >
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TOC',
    data() {
        return {
            links: []
        }
    },
    computed: {
        path() {
            return this.$route.path
        }
    },
    methods: {
        hash(str) {
            return str.replace(/\W+/g, '-').toLowerCase()
        },
        getAnchorLinks() {
            const anchors = document.querySelectorAll('h2')
            anchors.forEach(item => {
                const id = item.id
                const name = item.textContent
                this.links.push({
                    id,
                    name
                })
            })
        }
    },
    mounted() {
        this.getAnchorLinks()
    }
}
</script>

<style lang="scss">
.toc {
}
</style>
