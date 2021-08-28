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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_block","items":[],"primary":{"Language":"html","Code":[{"type":"paragraph","text":"Occaecat deserunt sint consequat sit velit aliqua duis duis laborum esse adipisicing nulla velit deserunt culpa. Incididunt incididunt dolore esse sint culpa.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
