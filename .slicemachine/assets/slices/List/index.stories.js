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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Non qui sit duis eu nostrud in ad voluptate amet officia magna exercitation aliquip.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Minim esse do cillum laboris nostrud dolore eu. Eu id ipsum consequat aliquip mollit mollit ut enim esse magna ex labore do consequat.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Laboris aute et nostrud cillum officia do velit sunt quis excepteur exercitation commodo ex.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Pariatur id pariatur in amet sunt tempor commodo aute labore anim est enim dolor incididunt qui. Proident occaecat minim ad duis et velit magna ullamco voluptate fugiat laboris dolore eu.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Lorem aliqua Lorem incididunt elit ut cillum sit dolore commodo amet mollit et cillum do excepteur.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Dolore cupidatat cupidatat est nisi excepteur.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
