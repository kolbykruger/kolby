import MyComponent from '../../../../slices/BannerImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BannerImage'
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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":2560,"height":1440},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482"},"noise":"Yes","alignment":"Center"},"slice_type":"banner_image","id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''

export const _BannerImageConfined = () => ({
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
      mock: {"variation":"bannerImageConfined","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":2560,"height":1440},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"}},"slice_type":"banner_image","id":"_BannerImageConfined"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_BannerImageConfined.storyName = ''
