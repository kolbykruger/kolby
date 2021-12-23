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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Ut ullamco mollit commodo laboris ea esse.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Dolore laborum officia laborum do elit cupidatat occaecat magna eu voluptate. Nulla fugiat ad sit nulla veniam incididunt reprehenderit Lorem.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Dolor dolor sit irure nulla officia aute sunt irure elit eu.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Adipisicing mollit ullamco sunt ad qui do in velit. Ullamco ad aliqua ipsum minim cupidatat in.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ipsum irure nisi duis sint aliquip est. Dolore velit mollit esse duis incididunt veniam eiusmod mollit culpa irure quis. Nulla eiusmod laboris dolor consequat reprehenderit amet Lorem veniam culpa deserunt ullamco duis culpa voluptate esse.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Consequat aute irure esse Lorem mollit irure in pariatur incididunt.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Eu nostrud eu voluptate consequat eiusmod culpa eiusmod. Do nisi proident voluptate ea excepteur. Cillum et sunt enim do sunt ullamco.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
