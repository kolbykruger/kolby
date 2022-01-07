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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_block","items":[],"primary":{"Language":"html","File":"enhance seamless models","Code":[{"type":"paragraph","text":"Elit tempor aliquip officia irure eu ut. Sunt irure veniam consequat veniam sunt sit laborum Lorem sit voluptate.","spans":[]}],"Figure":"e-enable dot-com applications","Stamp":"2017-12-07T12:40:48.851Z"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
