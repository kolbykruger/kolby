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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"branding","items":[{"Color":"#7bcc68","ColorName":"seize 24/7 e-tailers"},{"Color":"#722042","ColorName":"harness sexy architectures"},{"Color":"#a9e38a","ColorName":"syndicate front-end networks"},{"Color":"#f7a0f7","ColorName":"envisioneer global e-business"}],"primary":{"Typography":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=1024&h=682&fit=crop"},"Logo":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=1024&h=682&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
