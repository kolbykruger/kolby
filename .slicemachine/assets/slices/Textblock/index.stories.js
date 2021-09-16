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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":4541,"Eyebrow":"engineer world-class content","title":[{"type":"heading2","text":"Extend dot-com methodologies","spans":[]}],"description":[{"type":"paragraph","text":"Dolore elit id minim cillum aliquip excepteur laboris esse nisi qui. Minim ullamco cillum do sit magna eu mollit qui anim anim sint quis exercitation in excepteur. Mollit deserunt est aliquip.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"recontextualize synergistic e-services","Outline":"visualize ubiquitous e-services"},{"Name":"matrix revolutionary interfaces","Outline":"expedite proactive applications"},{"Name":"brand viral portals","Outline":"visualize synergistic communities"},{"Name":"exploit next-generation blockchains","Outline":"incentivize proactive markets"}],"primary":{"Index":1209,"Eyebrow":"redefine clicks-and-mortar bandwidth","title":[{"type":"heading2","text":"Architect 24/365 e-services","spans":[]}],"description":[{"type":"paragraph","text":"Non esse labore consequat elit aute est mollit qui veniam officia deserunt tempor ad ea. Exercitation non id reprehenderit proident ullamco proident veniam in nostrud est laboris labore. Ea aute mollit minim labore sint.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
