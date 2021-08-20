import MyComponent from '../../../../slices/Accordion';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Accordion'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Title":"harness strategic functionalities","Description":[{"type":"paragraph","text":"In velit non irure nostrud aliquip velit commodo qui nisi et officia fugiat consectetur laboris ea.","spans":[]}]},{"Title":"maximize value-added web-readiness","Description":[{"type":"paragraph","text":"Nostrud veniam eiusmod ut laborum Lorem aliqua ullamco enim minim cillum aute ipsum aute mollit cillum. Culpa id velit pariatur ex adipisicing culpa voluptate anim. In anim labore sunt incididunt velit reprehenderit ad consequat magna anim do.","spans":[]}]},{"Title":"synergize revolutionary markets","Description":[{"type":"paragraph","text":"Aliquip enim excepteur officia est dolore.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Aggregate turn-key niches","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
