import MyComponent from '../../../../slices/Embed';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Embed'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"embed","items":[],"primary":{"Embed":{"title":"Introducing Slice Machine","author_name":"Prismic","author_url":"https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/iewZXv94XGY/hqdefault.jpg","html":"<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/iewZXv94XGY?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
