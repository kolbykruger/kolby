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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_block","items":[],"primary":{"Language":"css","File":"orchestrate collaborative bandwidth","Code":[{"type":"paragraph","text":"Aliquip incididunt velit incididunt pariatur velit do nostrud veniam amet ea amet nostrud dolor laboris. Deserunt aliquip nulla incididunt nostrud consequat ut adipisicing aliquip mollit ea ullamco adipisicing.","spans":[]}],"Figure":"brand plug-and-play e-commerce","Stamp":"2016-12-29T12:53:11.500Z"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
