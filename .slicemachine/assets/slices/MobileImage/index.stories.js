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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"mobile_image","items":[{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=517&h=1099&fit=crop"}},{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=517&h=1099&fit=crop"}},{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=517&h=1099&fit=crop"}},{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=517&h=1099&fit=crop"}},{"Image":{"dimensions":{"width":517,"height":1099},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=517&h=1099&fit=crop"}}],"primary":{"Layout":"Level"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
