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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"engineer bleeding-edge communities","Eyebrow":"syndicate proactive web services","title":[{"type":"heading2","text":"Extend vertical e-markets","spans":[]}],"description":[{"type":"paragraph","text":"Tempor mollit voluptate aute pariatur ex tempor.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"matrix cross-media infrastructures","Outline":"generate transparent mindshare"},{"Name":"syndicate bricks-and-clicks architectures","Outline":"enable virtual infomediaries"},{"Name":"cultivate real-time methodologies","Outline":"morph back-end technologies"},{"Name":"optimize web-enabled interfaces","Outline":"aggregate mission-critical e-business"},{"Name":"monetize distributed functionalities","Outline":"morph granular e-markets"},{"Name":"incentivize robust platforms","Outline":"seize impactful web services"}],"primary":{"Index":"redefine B2B e-tailers","Eyebrow":"engineer mission-critical channels","title":[{"type":"heading2","text":"Expedite plug-and-play technologies","spans":[]}],"description":[{"type":"paragraph","text":"Pariatur anim commodo laborum ex quis magna veniam nulla dolor esse qui amet fugiat occaecat. Lorem anim dolor non laboris minim aute ex Lorem est ea tempor id enim esse incididunt.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
