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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"anchors","items":[{"Index":"disintermediate robust metrics","Name":"optimize vertical methodologies","Anchor":"embrace compelling networks"},{"Index":"recontextualize distributed infrastructures","Name":"visualize collaborative mindshare","Anchor":"benchmark cutting-edge e-markets"},{"Index":"mesh seamless systems","Name":"facilitate dynamic markets","Anchor":"synthesize robust applications"}],"primary":{"Label":"integrate 24/365 schemas","Page":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
