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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"unleash impactful bandwidth","Eyebrow":"empower synergistic systems","title":[{"type":"heading2","text":"Mesh vertical e-business","spans":[]}],"description":[{"type":"paragraph","text":"Consequat commodo eu aute non duis deserunt laboris ad et voluptate proident laborum.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"architect turn-key platforms","Outline":"harness cross-media web services"},{"Name":"brand B2C paradigms","Outline":"utilize web-enabled supply-chains"},{"Name":"architect B2C niches","Outline":"harness innovative infrastructures"},{"Name":"reinvent end-to-end methodologies","Outline":"architect strategic schemas"}],"primary":{"Index":"utilize plug-and-play markets","Eyebrow":"e-enable killer users","title":[{"type":"heading2","text":"Revolutionize strategic initiatives","spans":[]}],"description":[{"type":"paragraph","text":"Non laborum occaecat aliqua dolor labore labore deserunt reprehenderit laborum mollit est dolore veniam occaecat. Cupidatat aliqua consequat qui nisi mollit sit eiusmod qui voluptate irure in consequat sit amet aliqua.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
