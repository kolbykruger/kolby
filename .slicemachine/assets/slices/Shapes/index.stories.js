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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"shapes","items":[{"Shape":"optimize ubiquitous niches"},{"Shape":"exploit seamless bandwidth"},{"Shape":"empower collaborative channels"},{"Shape":"cultivate best-of-breed systems"}],"primary":{"Top":"leverage virtual infrastructures","Left":"expedite transparent systems","Right":"cultivate vertical portals","Bottom":"integrate virtual paradigms","Width":"utilize compelling portals","Height":"incubate killer communities"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
