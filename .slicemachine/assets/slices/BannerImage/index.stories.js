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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":2560,"height":1440},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"},"noise":"Yes"},"slice_type":"banner_image","id":"_DefaultSlice"}
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
      mock: {"variation":"bannerImageConfined","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":2560,"height":1440},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"}},"slice_type":"banner_image","id":"_BannerImageConfined"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_BannerImageConfined.storyName = ''
