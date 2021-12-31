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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"sidenote","items":[],"primary":{"Type":"Info","Content":[{"type":"paragraph","text":"Voluptate sunt ipsum consequat ullamco aute velit quis veniam. Nostrud tempor amet officia velit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
