import MyComponent from '../../../../slices/Branding';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Branding'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"branding","items":[{"Color":"#596d03","ColorName":"expedite turn-key communities"},{"Color":"#6f8a79","ColorName":"integrate sexy e-markets"},{"Color":"#cf8f71","ColorName":"generate next-generation supply-chains"},{"Color":"#55a2fd","ColorName":"synergize one-to-one systems"}],"primary":{"Typography":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=1024&h=682&fit=crop"},"Logo":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=1024&h=682&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
