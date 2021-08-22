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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"branding","items":[{"Color":"#25ab6a","ColorName":"e-enable collaborative methodologies"},{"Color":"#399715","ColorName":"scale revolutionary partnerships"}],"primary":{"Typography":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=1024&h=682&fit=crop"},"Logo":{"dimensions":{"width":1024,"height":682},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=1024&h=682&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'