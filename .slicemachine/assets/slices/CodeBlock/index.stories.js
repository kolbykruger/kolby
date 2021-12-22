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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_block","items":[],"primary":{"Language":"html","File":"mesh synergistic deliverables","Code":[{"type":"paragraph","text":"Esse quis mollit dolore sunt. Ea dolore aliqua ex non labore in id.","spans":[]}],"Figure":3849},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
