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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"monetize extensible e-commerce","Eyebrow":"deploy impactful deliverables","title":[{"type":"heading2","text":"Cultivate integrated e-business","spans":[]}],"description":[{"type":"paragraph","text":"Enim ullamco aliquip eiusmod occaecat ut nisi sint mollit laboris.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"incentivize interactive web-readiness","Outline":"maximize 24/7 portals"},{"Name":"matrix distributed interfaces","Outline":"evolve extensible platforms"},{"Name":"maximize innovative functionalities","Outline":"leverage extensible applications"},{"Name":"transform customized platforms","Outline":"whiteboard synergistic action-items"}],"primary":{"Index":"reintermediate value-added users","Eyebrow":"incubate dot-com bandwidth","title":[{"type":"heading2","text":"Integrate efficient blockchains","spans":[]}],"description":[{"type":"paragraph","text":"Cupidatat incididunt veniam elit adipisicing cupidatat.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
