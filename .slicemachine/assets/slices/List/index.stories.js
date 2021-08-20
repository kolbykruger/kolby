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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Laboris consequat dolore nisi nostrud fugiat eu id exercitation dolor proident qui qui adipisicing eiusmod cillum. Sit voluptate magna aliquip nisi laborum.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Amet sunt sint labore qui veniam tempor aute minim officia veniam deserunt.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Minim anim adipisicing enim excepteur cillum. Dolore aliqua culpa duis cupidatat tempor proident non aliqua. Qui non aute elit fugiat eu do anim ex sit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ex eu in Lorem adipisicing incididunt ad incididunt eu. Consectetur pariatur quis aliquip nostrud non ea exercitation. Irure exercitation duis in aliquip id.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Aute est excepteur laborum sunt do occaecat.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Exercitation dolore in eu duis ex nostrud. Dolor veniam excepteur culpa ipsum excepteur mollit non cillum magna cillum sit aute laboris duis aliquip.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Laboris do amet deserunt ullamco. Et cupidatat qui consequat magna in irure ipsum. Aute ut aliqua anim eiusmod.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Incididunt consectetur eu minim exercitation esse enim.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Anim velit reprehenderit eu quis qui ipsum ullamco non ut excepteur quis nulla. Nostrud do dolore occaecat laborum dolor deserunt.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Id occaecat elit in duis laborum anim ut et officia sunt do veniam. Reprehenderit enim exercitation mollit est ullamco cupidatat sit aliquip laboris dolor consequat laboris id.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
