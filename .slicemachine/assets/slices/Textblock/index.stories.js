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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"aggregate open-source schemas","Eyebrow":"orchestrate real-time e-services","title":[{"type":"heading2","text":"Monetize bricks-and-clicks vortals","spans":[]}],"description":[{"type":"paragraph","text":"Qui sint consequat exercitation in irure ipsum elit magna velit excepteur. Eu proident veniam mollit ipsum est deserunt anim nulla ut esse. Eu incididunt enim pariatur irure magna veniam exercitation eiusmod est exercitation laborum minim.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"deliver virtual content","Outline":"integrate collaborative e-markets"},{"Name":"maximize collaborative e-tailers","Outline":"optimize mission-critical users"},{"Name":"incentivize viral deliverables","Outline":"streamline world-class niches"},{"Name":"redefine innovative platforms","Outline":"orchestrate efficient metrics"}],"primary":{"Index":"empower integrated e-commerce","Eyebrow":"cultivate transparent web-readiness","title":[{"type":"heading2","text":"Engage dot-com functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Lorem velit exercitation irure. Consectetur dolor ipsum non est do non ex amet cupidatat excepteur non magna laborum laborum aliquip. Fugiat nisi sunt deserunt veniam irure in.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
