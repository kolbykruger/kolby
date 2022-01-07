import MyComponent from '../../../../slices/Sidenote';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Sidenote'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"sidenote","items":[],"primary":{"Type":"Success","Content":[{"type":"paragraph","text":"Laboris anim non eu aliquip in. Esse pariatur et nisi labore quis anim non minim dolore incididunt non. Deserunt eiusmod ullamco dolor ut.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
