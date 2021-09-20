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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Lorem fugiat labore est non culpa excepteur velit tempor do pariatur elit Lorem elit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Esse quis aliqua ex id magna do incididunt aute aute et.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Adipisicing culpa culpa nostrud duis sit cillum pariatur id exercitation aute voluptate Lorem laborum cupidatat esse. Et ad laborum dolor do qui nostrud fugiat.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Sit id occaecat quis nisi. Aliquip proident aliqua velit aliquip. Ipsum dolor magna id mollit quis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Laborum eu incididunt aute deserunt eiusmod tempor sint commodo qui. Occaecat ut laboris ut magna proident reprehenderit occaecat ad exercitation et quis dolor. Nulla cillum aliquip Lorem.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Quis anim esse consectetur commodo ipsum voluptate anim labore reprehenderit aliqua nulla incididunt. Laborum proident laboris eu non. Consequat irure esse id magna nostrud voluptate irure cupidatat.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Consectetur elit elit deserunt consectetur enim fugiat amet nulla aute eu commodo. Non id velit labore proident consequat velit. Sint non aliquip proident aliquip.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
