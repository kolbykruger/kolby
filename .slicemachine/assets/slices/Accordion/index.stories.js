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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Title":"innovate transparent methodologies","Description":[{"type":"paragraph","text":"Quis non minim reprehenderit ex cupidatat consectetur ex duis ullamco exercitation.","spans":[]}]},{"Title":"brand compelling e-commerce","Description":[{"type":"paragraph","text":"Quis eiusmod irure do elit adipisicing consectetur tempor laboris anim sint ipsum eu. Dolor consequat sunt officia. Cillum velit cillum quis cupidatat laboris dolore velit aliquip.","spans":[]}]},{"Title":"streamline efficient methodologies","Description":[{"type":"paragraph","text":"Consectetur excepteur in ullamco exercitation excepteur proident Lorem elit deserunt ad occaecat qui laborum deserunt irure. Qui amet mollit minim occaecat officia.","spans":[]}]},{"Title":"implement wireless users","Description":[{"type":"paragraph","text":"Non cupidatat enim ut.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Visualize best-of-breed initiatives","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
