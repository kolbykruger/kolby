import MyComponent from '../../../../slices/List';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/List'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Anim ut nulla sint adipisicing officia est dolore. Aute velit anim nisi incididunt tempor veniam ex exercitation Lorem ea.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ex mollit eu Lorem deserunt quis magna aliquip voluptate anim. Anim velit tempor aute commodo aliquip.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _OrderedList = () => ({
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Ex irure pariatur nisi anim. Consectetur id veniam irure. Occaecat est consectetur dolor et eiusmod occaecat ipsum do.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Elit incididunt ea pariatur ipsum ut.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
