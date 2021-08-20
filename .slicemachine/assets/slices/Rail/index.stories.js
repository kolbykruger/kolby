import MyComponent from '../../../../slices/Rail';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Rail'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Date":"2016-06-29T10:08:20.241Z","Title":[{"type":"heading3","text":"Matrix front-end functionalities","spans":[]}],"Summary":[{"type":"paragraph","text":"Irure dolor pariatur Lorem aliqua tempor dolor. Pariatur occaecat consectetur duis exercitation.","spans":[]}]},{"Date":"2013-02-01T08:11:14.354Z","Title":[{"type":"heading3","text":"E-enable turn-key deliverables","spans":[]}],"Summary":[{"type":"paragraph","text":"Laboris quis elit qui magna ad nulla Lorem mollit dolore nulla est laboris.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Mesh vertical e-tailers","spans":[]}],"Summary":[{"type":"paragraph","text":"Incididunt ipsum qui eiusmod ut velit. Nulla occaecat fugiat magna minim magna. Elit exercitation est ad adipisicing.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
