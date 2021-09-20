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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"branding","items":[{"Color":"#194568","ColorName":"implement sexy content"},{"Color":"#99c3ca","ColorName":"synthesize proactive systems"},{"Color":"#bd1018","ColorName":"grow synergistic ROI"}],"primary":{"Typography":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1024&h=682&fit=crop"},"Logo":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=1024&h=682&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
