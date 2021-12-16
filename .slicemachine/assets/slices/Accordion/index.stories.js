import MyComponent from '../../../../slices/Accordion';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Accordion'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Icon":"matrix 24/365 systems","Title":"utilize bricks-and-clicks vortals","Description":[{"type":"paragraph","text":"Est veniam ut incididunt qui occaecat minim nisi nostrud laborum.","spans":[]}]},{"Icon":"deliver interactive methodologies","Title":"deploy scalable action-items","Description":[{"type":"paragraph","text":"Consequat officia commodo cupidatat nisi proident laborum consectetur sit. Eiusmod ut quis minim Lorem velit cupidatat.","spans":[]}]},{"Icon":"unleash end-to-end methodologies","Title":"drive 24/7 functionalities","Description":[{"type":"paragraph","text":"Esse dolore eiusmod culpa. Veniam aliqua et occaecat.","spans":[]}]},{"Icon":"unleash compelling e-business","Title":"implement user-centric niches","Description":[{"type":"paragraph","text":"Pariatur commodo non esse deserunt quis labore eiusmod in cupidatat aliquip exercitation reprehenderit. Ipsum excepteur laborum aliqua exercitation anim et adipisicing et.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Empower efficient e-markets","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
