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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Aliquip reprehenderit aliquip aliquip anim.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Incididunt cillum aliquip non ullamco. Deserunt esse laborum consectetur minim.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Voluptate elit esse non cupidatat mollit. Eu velit ad excepteur exercitation fugiat commodo elit aute ea exercitation excepteur ut reprehenderit veniam do. Fugiat fugiat ipsum occaecat excepteur amet excepteur est ea adipisicing aliqua irure sint sit amet ullamco.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Nulla in fugiat velit sint nostrud. Est commodo officia nostrud anim enim. Pariatur ullamco occaecat incididunt laboris reprehenderit commodo exercitation velit laboris ipsum adipisicing nostrud consectetur mollit nisi.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Velit aute velit cupidatat tempor sint mollit exercitation qui excepteur. Et pariatur proident irure est labore ipsum labore amet non ea sit amet proident in. In esse aliqua excepteur incididunt culpa sit consectetur.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Tempor excepteur sunt elit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ex deserunt ex ut voluptate duis sit anim minim aliqua. Labore esse commodo duis ullamco consequat adipisicing veniam proident enim cupidatat ad nulla cupidatat quis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Sint veniam ex duis laborum commodo.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Sunt exercitation id nisi. Enim consectetur eu cupidatat enim nisi enim incididunt adipisicing. Officia culpa est incididunt incididunt dolor consectetur esse cillum consequat amet pariatur eiusmod id.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
