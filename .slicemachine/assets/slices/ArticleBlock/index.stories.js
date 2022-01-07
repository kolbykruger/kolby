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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"article_block","items":[],"primary":{"Content":[{"type":"paragraph","text":"Irure eu duis consequat nostrud nulla cillum ipsum magna minim laborum ipsum culpa velit cupidatat culpa. Ex fugiat id occaecat tempor anim ad reprehenderit minim exercitation veniam dolor id id elit. Amet eiusmod amet minim minim voluptate ut pariatur pariatur in cupidatat exercitation pariatur irure cupidatat eiusmod.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
