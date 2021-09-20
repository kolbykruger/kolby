import MyComponent from '../../../../slices/Gallery';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Gallery'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"gallery","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1024&h=1024&fit=crop"}}}],"primary":{"title":[{"type":"heading1","text":"Orchestrate virtual users","spans":[]}],"description":[{"type":"paragraph","text":"Proident amet consequat quis exercitation consectetur eu dolore enim tempor sint esse qui dolore excepteur irure. Aliqua officia laboris ex proident occaecat sint irure cillum minim nisi eu.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
