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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"branding","items":[{"Color":"#dc42d2","ColorName":"empower best-of-breed users"},{"Color":"#ff11de","ColorName":"strategize 24/7 synergies"}],"primary":{"Typography":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=1024&h=682&fit=crop"},"Logo":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=1024&h=682&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
