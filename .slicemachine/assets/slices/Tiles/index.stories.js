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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"tiles","items":[{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=600&h=450&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=600&h=450&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=600&h=450&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=450&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Matrix innovative users","spans":[]}],"description":[{"type":"paragraph","text":"Sunt qui eu consectetur. Pariatur labore aliquip ad laborum et amet aliquip qui quis exercitation.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
