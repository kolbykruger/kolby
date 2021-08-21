<template>
    <section class="pageheading">
        <div class="container" :data-type="type">
            <prismic-rich-text class="pageheading-name" v-if="typeof name == 'object'" :field="name" />
            <div class="pageheading-name" v-else>
                <h1>{{ name || 'Pageheading' }}</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'pageheading',
    props: {
        name: [String, Object, Array]
    },
    computed: {
        type() {
            return typeof this.name
        },
        letter() {
            const type = this.type
            return type == 'object' ? this.name[0].text.charAt(0) : this.name.charAt(0)
        }
    }
}
</script>

<style lang="scss">
.pageheading {
    position: relative;

    .container {
        padding-top: 10vh;
    }
}
</style>
