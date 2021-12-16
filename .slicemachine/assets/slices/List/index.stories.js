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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Labore dolor Lorem sunt veniam exercitation ad elit dolor adipisicing sint ex est eu. Qui cillum esse quis exercitation.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Proident labore laborum aliquip consequat deserunt non ad adipisicing eiusmod qui. Nisi excepteur pariatur labore adipisicing exercitation amet consequat labore anim elit quis est. Proident labore non commodo et veniam dolor id.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Fugiat exercitation esse nulla ad anim minim deserunt irure elit qui. Sit fugiat ut et qui ullamco duis sint ut aliquip minim mollit commodo nisi pariatur nisi.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Aute duis officia mollit excepteur reprehenderit deserunt sit labore minim minim duis pariatur.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Officia dolor non Lorem proident consectetur veniam. Ipsum commodo amet exercitation occaecat.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Eiusmod labore pariatur labore veniam ullamco culpa enim proident in irure et esse pariatur laborum est. Ad cupidatat et in proident esse aute nostrud Lorem id deserunt eiusmod. Do esse do commodo et aliqua.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Dolor amet anim elit elit mollit cillum. In aliqua duis dolore reprehenderit velit dolore. Cillum in quis in veniam aute amet.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Enim qui anim ad non mollit ut. Exercitation occaecat ea voluptate labore esse tempor incididunt. Culpa pariatur ea eiusmod aute velit dolore cillum nulla cupidatat cupidatat do quis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Voluptate aliqua minim reprehenderit do laboris eu. Est aliquip incididunt ex laboris enim ut laborum duis non excepteur eiusmod nostrud ut quis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Aute mollit consequat laborum ex proident velit qui qui in adipisicing voluptate. Exercitation sit deserunt reprehenderit mollit duis nostrud ex aliquip consectetur do velit anim anim.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
