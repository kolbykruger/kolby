import MyComponent from '../../../../slices/Tiles';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Tiles'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"tiles","items":[{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=450&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=450&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=600&h=450&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Maximize transparent portals","spans":[]}],"description":[{"type":"paragraph","text":"Aliquip id laborum excepteur aute ut esse. Eu qui dolor tempor aute ullamco amet est qui dolore aliquip non labore sint ipsum. Eu quis mollit ex ut nisi aliqua.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
