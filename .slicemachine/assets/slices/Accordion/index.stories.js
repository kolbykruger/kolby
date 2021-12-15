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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Icon":"whiteboard dynamic markets","Title":"grow e-business web-readiness","Description":[{"type":"paragraph","text":"Enim sunt culpa voluptate.","spans":[]}]},{"Icon":"envisioneer next-generation web-readiness","Title":"synthesize revolutionary convergence","Description":[{"type":"paragraph","text":"Veniam sint aliqua aute dolore proident aute aliquip reprehenderit laboris velit eiusmod exercitation. Magna ea pariatur labore cillum.","spans":[]}]},{"Icon":"visualize seamless action-items","Title":"whiteboard clicks-and-mortar eyeballs","Description":[{"type":"paragraph","text":"Culpa aute minim enim sit ullamco fugiat dolore occaecat voluptate incididunt ad.","spans":[]}]},{"Icon":"disintermediate bleeding-edge infomediaries","Title":"synergize B2B e-markets","Description":[{"type":"paragraph","text":"Elit ea exercitation eu in. Aliquip irure do amet anim pariatur aliquip minim sunt ad. Adipisicing eiusmod est nostrud id magna commodo labore ipsum amet incididunt sit ut cillum do consectetur.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Reintermediate collaborative experiences","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
