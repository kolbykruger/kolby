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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Anim id enim nulla culpa id sunt dolore nulla non anim velit nostrud ipsum duis occaecat.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Dolore consectetur consectetur duis do consectetur dolor exercitation labore occaecat.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Consectetur velit proident mollit officia ullamco et laborum fugiat pariatur aliquip incididunt nisi. Proident in adipisicing ea ipsum ullamco minim.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Quis in duis ea irure aute minim cupidatat enim adipisicing nisi sit proident laborum officia fugiat.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Velit aliquip dolore sit eu consequat incididunt adipisicing id. Et exercitation cillum non deserunt esse quis anim quis velit non. Veniam sit veniam elit incididunt.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Nostrud ad voluptate esse magna. Cupidatat qui velit velit tempor amet.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Elit ea nisi nulla cupidatat adipisicing officia magna eiusmod ipsum ut fugiat. Proident aute aliqua proident.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Sint ad officia deserunt dolore magna eu aliqua laborum cupidatat tempor eiusmod sint. Occaecat fugiat et nostrud.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
