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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Title":"streamline B2C communities","Description":[{"type":"paragraph","text":"Enim do nulla culpa ullamco velit veniam laborum elit ullamco. Ipsum esse aute enim quis. Qui exercitation non excepteur ut fugiat sit est est adipisicing irure.","spans":[]}]},{"Title":"harness 24/365 architectures","Description":[{"type":"paragraph","text":"Nostrud veniam aliqua minim consectetur. Enim irure qui aute. In eu eu mollit elit nulla officia ad id sint anim nulla Lorem deserunt deserunt culpa.","spans":[]}]},{"Title":"disintermediate ubiquitous infrastructures","Description":[{"type":"paragraph","text":"Quis sint qui sint excepteur esse cillum qui sint sint irure labore anim exercitation.","spans":[]}]},{"Title":"scale out-of-the-box methodologies","Description":[{"type":"paragraph","text":"Lorem exercitation elit duis anim aute ut incididunt sit duis dolor cupidatat commodo aliqua ullamco. Nisi laboris ipsum reprehenderit mollit tempor do. Esse eu laboris magna quis esse elit.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Facilitate granular channels","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
