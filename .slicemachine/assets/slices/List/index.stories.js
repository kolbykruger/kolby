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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Magna excepteur duis sit nostrud voluptate.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Eiusmod Lorem consequat dolore non nulla. Id fugiat eiusmod in commodo esse nostrud velit Lorem duis. Eiusmod sit Lorem quis ut.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Commodo adipisicing occaecat id mollit cillum id culpa voluptate elit officia elit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ea laboris eiusmod qui est excepteur cupidatat minim exercitation ad amet deserunt. Nulla consequat deserunt consequat culpa occaecat duis pariatur. Sint et elit excepteur ullamco nulla consequat sit id veniam sunt laboris Lorem ut laborum.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Consectetur commodo dolore ad labore ullamco nisi duis Lorem.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Deserunt esse reprehenderit ad laboris cillum aliqua tempor adipisicing ullamco. Quis duis pariatur occaecat sunt reprehenderit occaecat minim aute est consectetur elit labore do do.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Veniam exercitation dolore consectetur ad. Dolor amet ut pariatur duis culpa nulla irure in.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Sit deserunt duis in eiusmod pariatur.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Incididunt non aute cupidatat proident officia cillum do. Exercitation reprehenderit cupidatat et ad aute sit velit fugiat labore elit amet.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
