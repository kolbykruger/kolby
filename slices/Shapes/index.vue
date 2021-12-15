<template>
    <div v-if="slice">
        <!-- <ShapeCollection :collection="collection" :shapes="shapes" /> -->
        <pre><code>{{ collection }}</code></pre>
        <pre><code>{{ shapes }}</code></pre>
        <pre><code>{{ slice }}</code></pre>
        <!-- <pre><code>{{ shapes }}</code></pre> -->
    </div>
</template>

<script>
const PrismicDOM = require('prismic-dom')
import ShapeCollection from '@/components/Shapes/ShapeCollection.vue'

export default {
    name: 'Shapes',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    components: {
        ShapeCollection,
    },
    computed: {
        collection() {
            return {
                top: this.slice.primary.Top || null,
                left: this.slice.primary.Left || null,
                right: this.slice.primary.Right || null,
                bottom: this.slice.primary.Bottom || null,
                width: this.slice.primary.Width,
                height: this.slice.primary.Height,
            }
        },
        shapes() {
            const shapes = this.slice.items
            const output = []
            shapes.forEach(shape => {
                console.log(shape.Shape)
                // let obj = JSON.parse(str)
                // output.push(obj)
            })
            return output
        },
    },
    methods: {
        replacify(str) {
            str = str.replace(/<pre>/g, '')
            str = str.replace('</pre>', '')
            return str
        },
        stringify(str) {
            const json = JSON.stringify(str)
            return json
        },
        decodeHtml(html) {
            const txt = document.createElement('textarea')
            txt.innerHTML = html
            return txt.value
        },
    },
    mounted() {
        // let collection = PrismicDOM.RichText.asHtml(this.slice.primary.Collection)
        // let shapes = PrismicDOM.RichText.asHtml(this.slice.primary.Shapes)
        // collection = this.replacify(collection)
        // shapes = this.replacify(shapes)
        // collection = this.decodeHtml(collection)
        // shapes = this.decodeHtml(shapes)
        // collection = JSON.parse(collection)
        // this.collection = collection
        // this.shapes = shapes
    },
}
</script>
