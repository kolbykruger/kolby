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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"article_block","items":[],"primary":{"Content":[{"type":"paragraph","text":"Velit nisi aliquip ullamco qui. Amet Lorem incididunt deserunt irure non dolore mollit amet amet laborum qui sunt eiusmod eu. Sint ullamco occaecat id mollit enim sunt et magna anim nostrud culpa magna amet.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
