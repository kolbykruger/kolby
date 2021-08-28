<template>
    <section class="code-block">
        <div class="container">
            <prismic-rich-text :field="slice.primary.Code" :htmlSerializer="codeSerializer" />
        </div>
    </section>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-javascript'

export default {
    name: 'CodeBlock',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            }
        }
    },
    methods: {
        codeSerializer(type, element, content, children) {
            if (type === 'preformatted') {
                const content = element.text
                const lang = this.slice.primary.Language || 'html'

                const highlight = Prism.highlight(content, Prism.languages[lang], lang)

                const template = `<pre class="language-${lang || 'html'}"><code class="language-${lang ||
                    'html'}">${highlight || content}</code></pre>`

                return template
            }
            return null
        }
    }
}
</script>

<style lang="scss">
.code-block {
    padding-bottom: 4vh;

    .container {
    }
}
</style>
