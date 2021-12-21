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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"shapes","items":[{"Shape":"recontextualize seamless deliverables"},{"Shape":"expedite compelling metrics"},{"Shape":"reinvent robust initiatives"},{"Shape":"seize cross-media convergence"}],"primary":{"Top":"integrate impactful e-markets","Left":"visualize wireless experiences","Right":"matrix sexy architectures","Bottom":"expedite e-business systems","Width":"streamline back-end metrics","Height":"target dot-com e-tailers"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
