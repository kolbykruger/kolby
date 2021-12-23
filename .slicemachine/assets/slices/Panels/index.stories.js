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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"panels","items":[{"Icon":"transition wireless web services","Heading":[{"type":"heading2","text":"Facilitate synergistic ROI","spans":[]}],"Content":[{"type":"paragraph","text":"Quis esse culpa occaecat officia. Reprehenderit Lorem sit proident enim ullamco eu est eiusmod pariatur.","spans":[]}]},{"Icon":"benchmark customized initiatives","Heading":[{"type":"heading2","text":"Repurpose killer niches","spans":[]}],"Content":[{"type":"paragraph","text":"In non aliquip deserunt Lorem cupidatat duis qui sint proident cupidatat occaecat Lorem non. Laborum velit laborum dolore nulla est pariatur. In sint sunt magna incididunt ex.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
