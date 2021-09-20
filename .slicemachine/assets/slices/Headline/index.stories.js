import MyComponent from '../../../../slices/Headline';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Headline'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"headline","items":[],"primary":{"title":[{"type":"heading1","text":"Streamline world-class methodologies","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
