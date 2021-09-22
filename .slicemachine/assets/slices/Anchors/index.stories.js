import MyComponent from '../../../../slices/Anchors';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Anchors'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"anchors","items":[{"Index":"e-enable mission-critical e-business","Name":"scale real-time functionalities","Anchor":"benchmark bricks-and-clicks methodologies"},{"Index":"exploit innovative channels","Name":"benchmark scalable ROI","Anchor":"aggregate bricks-and-clicks functionalities"},{"Index":"repurpose robust e-services","Name":"transform turn-key ROI","Anchor":"architect back-end infomediaries"}],"primary":{"Label":"embrace turn-key users","Page":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
