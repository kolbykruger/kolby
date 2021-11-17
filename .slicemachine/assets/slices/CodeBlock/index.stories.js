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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_block","items":[],"primary":{"Language":"html","File":"incubate scalable e-business","Code":[{"type":"paragraph","text":"Ex esse duis non aliqua ex adipisicing quis elit dolor magna cillum eu. Occaecat sint veniam culpa. Labore mollit culpa deserunt pariatur incididunt incididunt duis eiusmod voluptate incididunt enim do.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
