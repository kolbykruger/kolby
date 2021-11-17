import MyComponent from '../../../../slices/CodeBlock'
import SliceZone from 'vue-slicezone'

export default {
    title: 'slices/CodeBlock',
}

export const _DefaultSlice = () => ({
    components: {
        MyComponent,
        SliceZone,
    },
    methods: {
        resolve() {
            return MyComponent
        },
    },
    data() {
        return {
            mock: {
                variation: 'default-slice',
                name: 'Default slice',
                slice_type: 'code_block',
                items: [],
                primary: {
                    Language: 'css',
                    File: 'index.js',
                    Code: [
                        {
                            type: 'preformatted',
                            text: 'div {\n  display: flex;\n  color: red;\n  background: green;\n}',
                            spans: [],
                        },
                    ],
                },
            },
        }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
})
_DefaultSlice.storyName = 'Default slice'
