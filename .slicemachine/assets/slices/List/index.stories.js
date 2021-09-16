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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Et sit laboris sint. Excepteur do nostrud dolor est qui ullamco elit deserunt duis fugiat. Eiusmod in occaecat tempor.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Minim sunt qui magna reprehenderit exercitation dolor.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ad non non esse ut qui adipisicing. Laborum consequat laborum cupidatat do sit aute est magna.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Aliquip laborum ex reprehenderit do tempor deserunt occaecat sunt duis tempor laborum laborum dolore sint nulla.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Consectetur deserunt consectetur adipisicing sunt anim minim culpa ut officia aute ullamco laboris. Sit eu Lorem et adipisicing elit eu exercitation eu culpa amet id sunt voluptate eiusmod dolor. Dolore et occaecat proident.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Nostrud sint velit eu amet excepteur deserunt tempor ea ad adipisicing.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Incididunt voluptate voluptate cillum aute excepteur fugiat officia sunt in id aliquip eu. Esse fugiat ad et nostrud consequat aliquip.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Velit esse do magna tempor sint nostrud ullamco dolor veniam. Proident dolore cillum incididunt magna magna mollit officia laboris cupidatat labore nostrud fugiat Lorem duis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Irure deserunt non laboris mollit et voluptate deserunt nulla culpa. Amet nostrud incididunt dolore consequat aliqua. Ullamco eu magna mollit consectetur est.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
