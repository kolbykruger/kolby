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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"anchors","items":[{"Index":"incentivize compelling content","Name":"target seamless experiences","Anchor":"incubate efficient ROI"},{"Index":"streamline virtual markets","Name":"reinvent 24/7 action-items","Anchor":"incubate 24/7 users"},{"Index":"grow value-added platforms","Name":"scale frictionless functionalities","Anchor":"revolutionize dot-com e-tailers"},{"Index":"empower plug-and-play users","Name":"brand dynamic vortals","Anchor":"enable real-time ROI"},{"Index":"synergize magnetic interfaces","Name":"facilitate intuitive ROI","Anchor":"scale cutting-edge solutions"}],"primary":{"Label":"facilitate viral partnerships","Page":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
