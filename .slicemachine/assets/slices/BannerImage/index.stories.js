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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"banner_image","items":[],"primary":{"image":{"dimensions":{"width":2560,"height":1440},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=2560&h=1440&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

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
      mock: {"variation":"bannerImageConfined","name":"BannerImage - Confined","slice_type":"banner_image","items":[],"primary":{"image":{"dimensions":{"width":2560,"height":1440},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=2560&h=1440&fit=crop"}},"id":"_BannerImageConfined"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_BannerImageConfined.storyName = 'BannerImage - Confined'
