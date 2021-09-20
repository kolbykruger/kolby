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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Title":"streamline dot-com bandwidth","Description":[{"type":"paragraph","text":"Deserunt id officia adipisicing esse incididunt fugiat aliquip eiusmod. Amet fugiat culpa cupidatat elit dolor do qui est officia ullamco.","spans":[]}]},{"Title":"expedite virtual portals","Description":[{"type":"paragraph","text":"Non nulla amet non deserunt eu officia. Mollit labore eu tempor.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"E-enable granular e-commerce","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
