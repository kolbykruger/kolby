import MyComponent from '../../../../slices/MobileImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MobileImage'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"mobile_image","items":[{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=517&h=1099&fit=crop"}},{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=517&h=1099&fit=crop"}}],"primary":{"Layout":"Level"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
