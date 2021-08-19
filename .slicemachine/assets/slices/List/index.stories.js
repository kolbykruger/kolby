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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Voluptate duis id Lorem ut dolore nulla velit velit. In quis sunt occaecat reprehenderit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Cillum sint aute in cillum esse reprehenderit excepteur est ad Lorem elit labore tempor do. Quis nulla do irure ex aute esse labore nisi minim ad.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Eu id sunt laboris sit anim duis duis duis proident irure culpa incididunt velit ut mollit. Lorem voluptate dolore pariatur ut esse. Consequat mollit ea pariatur deserunt elit excepteur laboris laboris et laboris commodo dolor minim labore incididunt.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Proident amet dolor ex exercitation cupidatat ad nulla adipisicing in sunt exercitation. Incididunt elit tempor sit. Amet laborum amet dolore sit aliquip deserunt cupidatat veniam veniam non.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Occaecat dolore occaecat ex nostrud laborum irure esse.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Excepteur consectetur ex aliqua laboris eu tempor cillum pariatur et aliqua velit veniam. Fugiat ut ullamco occaecat occaecat in incididunt exercitation ex ipsum sint officia ut mollit non. Et ut velit esse excepteur velit Lorem ipsum esse amet est magna eiusmod.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Labore dolor enim exercitation occaecat aute ullamco fugiat. Sit nulla sint aliqua do excepteur labore occaecat. In excepteur voluptate proident mollit Lorem non nostrud.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ea esse tempor est sunt. Elit aliqua veniam dolor cillum eu.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
