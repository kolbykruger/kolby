import MyComponent from '../../../../slices/Panels';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Panels'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"panels","items":[{"Icon":"utilize enterprise action-items","Heading":[{"type":"heading2","text":"Empower bleeding-edge channels","spans":[]}],"Content":[{"type":"paragraph","text":"Ad nulla occaecat ex culpa quis laborum elit aliqua aliquip est mollit incididunt. Veniam ipsum sint ex nulla excepteur voluptate do aliqua aliquip. Enim tempor tempor do deserunt in ad est reprehenderit qui.","spans":[]}]},{"Icon":"syndicate cross-media action-items","Heading":[{"type":"heading2","text":"Deploy robust portals","spans":[]}],"Content":[{"type":"paragraph","text":"Officia aute veniam elit id reprehenderit do nostrud amet labore exercitation amet.","spans":[]}]},{"Icon":"transform out-of-the-box methodologies","Heading":[{"type":"heading2","text":"Cultivate revolutionary functionalities","spans":[]}],"Content":[{"type":"paragraph","text":"Commodo aute nostrud adipisicing consectetur non sit sit sunt sunt aliquip tempor. Ipsum culpa nostrud veniam nisi. Minim cupidatat dolore Lorem veniam ex deserunt laborum aute.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
