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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"disintermediate robust e-commerce","Eyebrow":"generate end-to-end paradigms","title":[{"type":"heading2","text":"Maximize plug-and-play metrics","spans":[]}],"description":[{"type":"paragraph","text":"Sit elit commodo occaecat irure pariatur adipisicing eu do mollit ad irure ut irure.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"synergize leading-edge mindshare","Outline":"engineer B2B partnerships"},{"Name":"drive world-class infrastructures","Outline":"deploy next-generation markets"},{"Name":"utilize best-of-breed supply-chains","Outline":"repurpose web-enabled metrics"},{"Name":"enhance B2B functionalities","Outline":"mesh integrated e-services"}],"primary":{"Index":"maximize 24/7 relationships","Eyebrow":"reintermediate global portals","title":[{"type":"heading2","text":"Engage compelling channels","spans":[]}],"description":[{"type":"paragraph","text":"Adipisicing irure sunt do nulla duis laboris ad ut ipsum consectetur amet quis eu reprehenderit labore.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
