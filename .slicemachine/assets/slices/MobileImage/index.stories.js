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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"mobile_image","items":[{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=517&h=1099&fit=crop"}},{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=517&h=1099&fit=crop"}},{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=517&h=1099&fit=crop"}},{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=517&h=1099&fit=crop"}}],"primary":{"Layout":"Level"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
