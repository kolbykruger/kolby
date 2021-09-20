<template>
    <section class="code-block">
        <div class="container">
            <prismic-rich-text :field="slice.primary.Code" :htmlSerializer="codeSerializer" />
            <div>
                <p class="code-block-language">
                    <small>{{ slice.primary.Language || 'html' }}</small>
                </p>
            </div>
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
        position: relative;
    }

    &-language {
        position: absolute;
        bottom: 1.25em;
        right: 0.75em;
        font-family: $font-2;
        text-transform: uppercase;
        opacity: 0.5;

        small {
            font-size: 1.125rem;
            font-weight: 500;
            color: c('base-6');

            html[theme='dark'] & {
                color: c('base-5');
            }
        }
    }
}
</style>
