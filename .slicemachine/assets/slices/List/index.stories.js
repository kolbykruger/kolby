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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Sit laborum ut cillum est in. Ea eiusmod velit irure consectetur exercitation. Mollit laboris irure commodo nulla ad culpa id amet eiusmod amet proident cupidatat exercitation.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Eu Lorem et cupidatat enim commodo duis reprehenderit irure laborum enim aute amet voluptate.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ex cupidatat deserunt labore ex laboris non commodo do anim proident. Commodo mollit et in enim consectetur culpa. Pariatur mollit nisi adipisicing id voluptate nisi quis amet consectetur fugiat.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Id deserunt occaecat aute ut sunt tempor incididunt culpa. Eu cillum consectetur ea minim cillum non aliqua.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Enim occaecat culpa irure nisi et est nostrud reprehenderit incididunt tempor minim minim eu mollit aliquip. Fugiat cillum ad voluptate mollit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Culpa cupidatat Lorem aliqua fugiat id.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Qui ad consectetur laborum ad incididunt exercitation. Ex laboris eiusmod ad est occaecat cupidatat magna anim sunt aute eu. Sunt exercitation ex sit aute consectetur ullamco et anim nisi commodo velit magna.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ad enim occaecat amet dolore culpa ex eu. Duis deserunt minim nulla enim.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
