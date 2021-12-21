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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"article_block","items":[],"primary":{"Content":[{"type":"paragraph","text":"Dolore proident mollit non mollit aliqua tempor exercitation sint esse sit. Sunt ipsum ut proident voluptate.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
