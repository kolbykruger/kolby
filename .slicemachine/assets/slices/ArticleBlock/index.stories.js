import MyComponent from '../../../../slices/ArticleBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ArticleBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"article_block","items":[],"primary":{"Content":[{"type":"paragraph","text":"Minim amet quis fugiat voluptate id velit consectetur commodo velit amet sint magna non anim eiusmod.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
