<template>
    <section class="pageheading">
        <div class="container" :data-type="type">
            <prismic-rich-text class="pageheading-name" v-if="typeof name == 'object'" :field="name" />
            <div class="pageheading-name" v-else>
                <h1>{{ name || 'Pageheading' }}</h1>
            </div>
            <span v-if="capital" ref="capital" class="pageheading-capital">{{ letter }}</span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'pageheading',
    props: {
        name: [String, Object, Array],
        capital: Boolean
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

    &-capital {
        position: absolute;
        top: 32px;
        left: 32px;
        font-size: 145ch;
        line-height: 1ch;
        font-family: 'Ogg', serif;
        opacity: 0.03;
        user-select: none;
        pointer-events: none;
    }
}
</style>
