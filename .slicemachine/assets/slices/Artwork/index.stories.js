import MyComponent from '../../../../slices/Artwork';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Artwork'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"artwork","items":[],"primary":{"Type":"Conic Gradient 1"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
