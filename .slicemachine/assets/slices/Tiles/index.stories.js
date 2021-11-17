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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"tiles","items":[{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=600&h=450&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=600&h=450&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=600&h=450&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":450},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=450&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Productize compelling bandwidth","spans":[]}],"description":[{"type":"paragraph","text":"Nulla anim duis anim incididunt laboris id.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
