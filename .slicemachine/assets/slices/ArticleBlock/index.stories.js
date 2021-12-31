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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"article_block","items":[],"primary":{"Content":[{"type":"paragraph","text":"Veniam sint nulla non ipsum in culpa in pariatur minim tempor veniam.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
