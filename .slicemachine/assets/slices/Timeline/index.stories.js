import MyComponent from '../../../../slices/Timeline';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Timeline'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"envisioneer best-of-breed architectures","Title":"embrace holistic solutions","Summary":[{"type":"paragraph","text":"Id nulla elit est velit cupidatat adipisicing pariatur est in adipisicing. Lorem eu veniam tempor ea ea consectetur ex consequat culpa anim ipsum. Lorem eu consequat sunt adipisicing eu eiusmod consectetur fugiat.","spans":[]}]},{"Eyebrow":"expedite extensible models","Title":"innovate visionary blockchains","Summary":[{"type":"paragraph","text":"Adipisicing ullamco adipisicing occaecat ut eiusmod fugiat duis id id do laborum duis adipisicing incididunt. Tempor incididunt mollit sint velit quis nulla do nostrud adipisicing dolore aute mollit. Irure velit deserunt irure elit tempor sit fugiat non sit ex.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
