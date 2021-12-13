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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"anchors","items":[{"Index":"monetize leading-edge metrics","Name":"syndicate impactful models","Anchor":"target magnetic convergence"},{"Index":"strategize viral ROI","Name":"grow sexy portals","Anchor":"aggregate real-time methodologies"},{"Index":"redefine bricks-and-clicks action-items","Name":"implement plug-and-play synergies","Anchor":"whiteboard visionary systems"},{"Index":"leverage wireless convergence","Name":"productize one-to-one technologies","Anchor":"evolve sticky experiences"}],"primary":{"Label":"productize 24/365 web-readiness","Page":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
