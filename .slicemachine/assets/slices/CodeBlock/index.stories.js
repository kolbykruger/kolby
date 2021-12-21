import MyComponent from '../../../../slices/CodeBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CodeBlock'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_block","items":[],"primary":{"Language":"javascript","File":"disintermediate extensible paradigms","Code":[{"type":"paragraph","text":"Sint sint nulla irure ea Lorem nulla nostrud non eiusmod duis elit. Veniam officia cupidatat est.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
