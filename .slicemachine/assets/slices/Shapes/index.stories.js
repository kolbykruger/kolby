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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"shapes","items":[{"Shape":"repurpose leading-edge ROI"},{"Shape":"deliver rich ROI"},{"Shape":"evolve B2C applications"},{"Shape":"integrate out-of-the-box models"},{"Shape":"strategize collaborative markets"}],"primary":{"Top":"whiteboard magnetic mindshare","Left":"drive seamless platforms","Right":"benchmark rich relationships","Bottom":"expedite value-added schemas","Width":"embrace web-enabled technologies","Height":"visualize cross-platform channels"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
