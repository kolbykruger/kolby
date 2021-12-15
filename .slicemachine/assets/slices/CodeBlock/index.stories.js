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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_block","items":[],"primary":{"Language":"scss","File":"strategize bricks-and-clicks action-items","Code":[{"type":"paragraph","text":"Veniam culpa occaecat ad aliqua veniam veniam excepteur ullamco aliquip anim elit aute et. Eiusmod elit voluptate dolore sit duis aliqua cillum do nulla. Ipsum adipisicing Lorem eiusmod laborum consectetur qui ex pariatur deserunt.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
