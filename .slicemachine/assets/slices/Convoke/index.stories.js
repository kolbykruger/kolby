import MyComponent from '../../../../slices/Convoke';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Convoke'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"convoke","items":[],"primary":{"title":[{"type":"heading2","text":"Brand dot-com supply-chains","spans":[]}],"description":[{"type":"paragraph","text":"Commodo fugiat excepteur nostrud nostrud mollit do elit pariatur consequat aliqua voluptate ad dolore. Ipsum ipsum anim laborum ad eiusmod qui id non dolore occaecat reprehenderit. Cillum nostrud dolor laboris mollit consectetur est culpa qui proident et veniam consequat nisi.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
