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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"monetize dynamic experiences","Eyebrow":"revolutionize ubiquitous supply-chains","title":[{"type":"heading2","text":"Seize collaborative niches","spans":[]}],"description":[{"type":"paragraph","text":"Enim mollit ipsum amet magna incididunt consequat officia culpa cupidatat eiusmod do fugiat. Aute id elit Lorem officia qui.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"enable wireless communities","Outline":"synergize 24/365 models"},{"Name":"integrate next-generation content","Outline":"strategize wireless ROI"},{"Name":"brand extensible action-items","Outline":"target next-generation synergies"},{"Name":"scale scalable networks","Outline":"repurpose world-class metrics"}],"primary":{"Index":"synergize dynamic action-items","Eyebrow":"disintermediate user-centric technologies","title":[{"type":"heading2","text":"Engage intuitive synergies","spans":[]}],"description":[{"type":"paragraph","text":"Nulla elit ipsum labore duis. Sit amet consequat enim proident eu consectetur aliqua qui ipsum.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
