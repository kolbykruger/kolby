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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"monetize B2C communities","Eyebrow":"drive B2C solutions","title":[{"type":"heading2","text":"Leverage innovative platforms","spans":[]}],"description":[{"type":"paragraph","text":"Qui pariatur esse Lorem dolor cupidatat eu. Nulla amet elit mollit ad ad nulla deserunt sunt dolor. Sint Lorem consectetur duis mollit enim anim ex pariatur laboris excepteur ullamco aute eiusmod nostrud occaecat.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"cultivate global interfaces","Outline":"streamline global initiatives"},{"Name":"redefine turn-key experiences","Outline":"target best-of-breed action-items"},{"Name":"synthesize rich systems","Outline":"evolve plug-and-play channels"},{"Name":"monetize distributed content","Outline":"architect visionary blockchains"},{"Name":"generate integrated architectures","Outline":"transform interactive metrics"},{"Name":"synthesize best-of-breed channels","Outline":"leverage integrated experiences"}],"primary":{"Index":"brand innovative supply-chains","Eyebrow":"embrace extensible e-services","title":[{"type":"heading2","text":"Cultivate synergistic e-commerce","spans":[]}],"description":[{"type":"paragraph","text":"Minim deserunt reprehenderit irure.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
