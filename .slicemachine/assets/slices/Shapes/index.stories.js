import MyComponent from '../../../../slices/Shapes';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Shapes'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"shapes","items":[{"Shape":"morph plug-and-play solutions"},{"Shape":"strategize turn-key architectures"},{"Shape":"implement front-end architectures"}],"primary":{"Top":"exploit cross-media partnerships","Left":"grow ubiquitous vortals","Right":"synthesize web-enabled web services","Bottom":"deploy best-of-breed networks","Width":"benchmark B2B infrastructures","Height":"implement seamless relationships"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
