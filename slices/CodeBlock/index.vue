<template>
    <section class="code-block" data-cursor="invisible">
        <a :data-figure="slice.primary.Figure || slice.primary.File || 'MISSING FIGURE'" :name="hash"></a>
        <div class="container">
            <prismic-rich-text
                spellcheck="false"
                class="code-block-code"
                :field="slice.primary.Code"
                :htmlSerializer="codeSerializer"
            />
            <textarea class="code-block-raw" ref="codeBlockRaw" v-html="raw"></textarea>
            <div>
                <div class="code-block-toolbar">
                    <div class="code-block-language" :data-lang="slice.primary.Language || 'html'">
                        {{ slice.primary.Language || 'html' }}
                    </div>
                    <button @click="copyRaw" class="code-block-button">Copy</button>
                </div>
                <div class="code-block-file" v-if="slice.primary.File">
                    {{ slice.primary.File }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const PrismicDOM = require('prismic-dom')
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
            },
        },
    },
    computed: {
        raw() {
            let code = PrismicDOM.RichText.asHtml(this.slice.primary.Code)
            code = code.replace(/<pre>/g, '')
            code = code.replace('</pre>', '')

            return code
        },
        hash() {
            const date = new Date(this.slice.primary.Stamp).getTime()
            return date ? date : Math.random().toString(36).substr(2, 9)
        },
    },
    methods: {
        codeSerializer(type, element, content, children) {
            if (type === 'preformatted') {
                const content = element.text
                const lang = this.slice.primary.Language || 'html'

                const highlight = Prism.highlight(content, Prism.languages[lang], lang)

                const template = `<pre class="language-${lang || 'html'}"><code class="language-${lang || 'html'}">${
                    highlight || content
                }</code></pre>`

                return template
            }
            return null
        },
        copyRaw(e) {
            const raw = this.$refs.codeBlockRaw

            raw.focus()
            raw.select()

            try {
                let status = document.execCommand('copy')
                let message = status ? true : false

                const el = e.target
                el.textContent = 'Copied.'
                setTimeout(() => {
                    el.textContent = 'Copy'
                }, 2500)
                // console.log(status, message)
            } catch (err) {
                // console.log(err)
            }
        },
    },
    mounted() {},
}
</script>

<style lang="scss">
.code-block {
    --negative-margin: -1.25em;
    padding-bottom: 4vh;
    margin-left: var(--negative-margin);
    margin-right: var(--negative-margin);
    width: initial;
    outline: none;

    @include mq('phone-small') {
        --negative-margin: -1.875em;
    }
    @include mq('phone-large') {
        --negative-margin: -3em;
    }

    .container {
        position: relative;
        margin-top: 3em;
    }

    &-code {
        pre {
            --negative-margin: 1.25em;
            margin: 0 auto;
            padding-left: var(--negative-margin);
            padding-right: var(--negative-margin);

            @include mq('phone-small') {
                --negative-margin: 1.875em;
            }
            @include mq('phone-large') {
                --negative-margin: 3em;
            }
        }

        &:hover,
        &:focus,
        &:focus-within {
            & ~ * .code-block-toolbar {
                opacity: 1;
            }
        }
    }

    &-raw {
        height: 0px;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
        opacity: 0;
    }

    &-toolbar {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        display: flex;
        align-items: center;
        width: auto;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;

        &:hover,
        &:focus,
        &:focus-within {
            opacity: 1;
        }
    }

    &-language {
        text-transform: capitalize;

        &[data-lang='html'],
        &[data-lang='css'],
        &[data-lang='scss'] {
            text-transform: uppercase;
        }

        small {
            font-size: 1.125rem;
            font-weight: 500;
            color: c('base-6');

            html[theme='dark'] & {
                color: c('base-5');
            }
        }
    }

    &-file {
        position: absolute;
        bottom: 0;
        right: 0.5em;
        @include fs-mini;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.125rem;
        font-weight: 500;
        color: c('base-6');
        height: 34px;
        padding: 0 0.5em;
        border-radius: 4px;

        html[theme='dark'] & {
            color: c('base-5');
        }
    }

    &-button {
        display: inline-block;
        line-height: 1;
        height: 34px;
        font-size: 1.125rem;
        font-weight: 500;
        color: c('base-6');
        margin-left: 1em;
        padding: 0 0.5em;
        border-radius: 4px;
        background: c('base-8');

        html[theme='dark'] & {
            color: c('base-5');
        }
    }
}
</style>
