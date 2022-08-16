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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{"Image":{"dimensions":{"width":600,"height":450},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6"}}],"primary":{"title":[{"type":"heading1","text":"Exchange","spans":[]}],"description":[{"type":"paragraph","text":"Officia elit exercitation tempor eiusmod. Labore velit incididunt ullamco dolor non exercitation ipsum in id duis exercitation voluptate.","spans":[]}]},"slice_type":"tiles","id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
