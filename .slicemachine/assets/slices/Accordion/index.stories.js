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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Title":"matrix end-to-end paradigms","Description":[{"type":"paragraph","text":"Eu labore minim exercitation aliqua sunt occaecat officia fugiat. Deserunt ut quis culpa veniam officia velit do. Mollit consectetur consectetur aliquip excepteur commodo elit aliquip incididunt est officia dolore ut do.","spans":[]}]},{"Title":"matrix turn-key ROI","Description":[{"type":"paragraph","text":"Labore adipisicing pariatur laboris. Magna cupidatat quis duis laboris deserunt nulla reprehenderit magna et laborum magna sunt elit duis ullamco. Lorem do enim adipisicing in mollit exercitation mollit do.","spans":[]}]},{"Title":"monetize bricks-and-clicks blockchains","Description":[{"type":"paragraph","text":"Laboris incididunt quis pariatur. Commodo qui mollit tempor labore veniam labore est irure tempor.","spans":[]}]},{"Title":"envisioneer seamless e-markets","Description":[{"type":"paragraph","text":"Duis et elit ad deserunt officia cillum. Officia ut eiusmod exercitation occaecat quis laboris adipisicing eu nulla ad.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Generate back-end portals","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'