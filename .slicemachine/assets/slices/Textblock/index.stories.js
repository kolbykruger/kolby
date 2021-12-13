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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"e-enable dynamic niches","Eyebrow":"optimize user-centric web-readiness","title":[{"type":"heading2","text":"Monetize ubiquitous schemas","spans":[]}],"description":[{"type":"paragraph","text":"Sunt elit proident qui in ut in dolore. Commodo eu ullamco amet amet.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"maximize cutting-edge e-commerce","Outline":"leverage clicks-and-mortar functionalities"},{"Name":"matrix collaborative channels","Outline":"exploit transparent markets"},{"Name":"transition B2C e-markets","Outline":"target cross-platform blockchains"}],"primary":{"Index":"seize frictionless ROI","Eyebrow":"iterate killer vortals","title":[{"type":"heading2","text":"Expedite front-end systems","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat nulla proident excepteur ea. Labore cupidatat ullamco proident sit irure nulla. Tempor consequat ut eiusmod amet aliqua nulla commodo nisi.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
