import MyComponent from '../../../../slices/Textblock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Textblock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":3242,"Eyebrow":"benchmark innovative e-markets","title":[{"type":"heading2","text":"Embrace compelling blockchains","spans":[]}],"description":[{"type":"paragraph","text":"Ad dolore occaecat ad aute officia dolor ea magna sit. Pariatur aliquip voluptate dolore ullamco incididunt proident deserunt consequat duis nisi cupidatat eiusmod.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TextblockWithGridList = () => ({
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"exploit transparent eyeballs","Outline":"seize rich convergence"},{"Name":"visualize one-to-one methodologies","Outline":"enable web-enabled solutions"},{"Name":"innovate integrated communities","Outline":"optimize viral ROI"},{"Name":"integrate dot-com experiences","Outline":"enhance impactful blockchains"},{"Name":"extend distributed e-markets","Outline":"grow robust portals"}],"primary":{"Index":7891,"Eyebrow":"productize visionary eyeballs","title":[{"type":"heading2","text":"Monetize proactive niches","spans":[]}],"description":[{"type":"paragraph","text":"Ullamco nulla in ipsum ad consequat do amet quis in mollit sunt voluptate nostrud cupidatat nisi. Magna tempor et excepteur amet anim minim id nisi velit consequat irure sint. Labore irure officia elit incididunt qui dolore enim tempor esse id consectetur ad aute ex.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
