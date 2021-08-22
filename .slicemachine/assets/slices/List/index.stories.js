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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Aliquip dolore dolor consequat aliqua magna nulla laborum magna eiusmod magna cupidatat ex sunt.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Irure anim voluptate irure nulla nisi exercitation irure. Aliquip in adipisicing veniam nulla eu aliquip id ut pariatur. Ea nostrud in consectetur proident proident qui adipisicing quis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ut dolor sit cillum labore deserunt sint esse ut amet cupidatat commodo et excepteur anim.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Dolore non incididunt nisi cillum velit do duis culpa qui veniam tempor. Exercitation id commodo officia aliquip do exercitation ut fugiat proident voluptate consequat ut minim sunt. Et eiusmod dolor nulla pariatur dolor.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Esse quis laboris ullamco minim ex ex magna quis laborum adipisicing tempor eiusmod fugiat id. Nostrud dolor amet cillum. Occaecat fugiat ullamco exercitation irure aliqua velit proident veniam excepteur elit ad veniam reprehenderit deserunt dolore.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Tempor deserunt adipisicing sint voluptate et labore consectetur duis. Do ipsum reprehenderit pariatur dolore enim adipisicing esse eiusmod tempor incididunt voluptate. Occaecat veniam id mollit veniam id.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ex id incididunt dolore veniam minim et adipisicing duis consectetur occaecat cillum in sit voluptate irure. Proident ut aliqua ea qui magna est anim aute anim incididunt occaecat elit. Incididunt exercitation deserunt esse nulla et ex id id elit ut in labore velit quis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Exercitation irure dolore officia voluptate. Aliqua sunt velit amet nulla dolor dolore quis ex ipsum officia dolore non Lorem esse.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Ad qui id anim voluptate irure. Consequat veniam excepteur ut nostrud ut.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
