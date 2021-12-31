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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"sidenote","items":[],"primary":{"Type":"Info","Content":[{"type":"paragraph","text":"Cillum anim deserunt fugiat ex. Excepteur officia dolore incididunt commodo quis dolor reprehenderit veniam labore in reprehenderit sunt id mollit nulla. Occaecat deserunt ex do esse fugiat est mollit occaecat dolor pariatur ea voluptate.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
