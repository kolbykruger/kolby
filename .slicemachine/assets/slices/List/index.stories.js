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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Et ea Lorem consectetur sit voluptate duis ut non.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Consectetur cupidatat ad pariatur sunt deserunt officia. Lorem irure aute tempor. Ipsum consequat deserunt est amet.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Sit ullamco ullamco sint duis duis culpa sit officia velit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Dolor nostrud enim deserunt non sit proident eiusmod voluptate. Dolor veniam est adipisicing. Lorem ex officia dolor quis consectetur do esse.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Enim esse elit occaecat officia excepteur mollit exercitation fugiat magna adipisicing dolore do laboris. Commodo excepteur excepteur sunt eiusmod elit sunt sint velit ea culpa Lorem ad commodo.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Laborum proident consectetur excepteur amet nisi deserunt et incididunt nulla pariatur excepteur.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Laborum tempor velit ullamco aliqua pariatur consequat duis non velit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Dolor ipsum do eiusmod incididunt sint duis elit in ea incididunt aute elit in.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
