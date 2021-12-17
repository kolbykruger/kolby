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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"recontextualize compelling ROI","Eyebrow":"aggregate out-of-the-box e-business","title":[{"type":"heading2","text":"Grow impactful markets","spans":[]}],"description":[{"type":"paragraph","text":"Sit minim aute velit sunt. Eu minim ad aute veniam cillum minim ut sit cillum labore dolore ex laborum quis veniam. Fugiat aute sit qui exercitation eiusmod dolore veniam exercitation magna qui consectetur adipisicing labore proident.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"iterate revolutionary applications","Outline":"unleash impactful users"},{"Name":"maximize leading-edge eyeballs","Outline":"deliver distributed metrics"},{"Name":"aggregate back-end bandwidth","Outline":"integrate seamless users"},{"Name":"synergize efficient blockchains","Outline":"synthesize magnetic technologies"}],"primary":{"Index":"aggregate strategic portals","Eyebrow":"envisioneer enterprise blockchains","title":[{"type":"heading2","text":"Leverage robust supply-chains","spans":[]}],"description":[{"type":"paragraph","text":"Voluptate sint qui consectetur aute.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
