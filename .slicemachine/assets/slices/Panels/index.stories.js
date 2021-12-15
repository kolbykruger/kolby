import MyComponent from '../../../../slices/Panels';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Panels'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"panels","items":[{"Heading":[{"type":"heading2","text":"Mesh transparent methodologies","spans":[]}],"Content":[{"type":"paragraph","text":"Voluptate occaecat est duis aliqua ex excepteur occaecat quis exercitation voluptate consequat ipsum. Veniam laborum elit elit non aliquip officia pariatur pariatur fugiat tempor. Fugiat excepteur eiusmod veniam.","spans":[]}]},{"Heading":[{"type":"heading2","text":"Reintermediate web-enabled convergence","spans":[]}],"Content":[{"type":"paragraph","text":"Adipisicing deserunt quis aliquip veniam ipsum amet deserunt.","spans":[]}]},{"Heading":[{"type":"heading2","text":"Reintermediate front-end models","spans":[]}],"Content":[{"type":"paragraph","text":"Velit laborum qui deserunt nisi dolor esse esse aute commodo nisi deserunt. Fugiat tempor pariatur sit non laboris.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
