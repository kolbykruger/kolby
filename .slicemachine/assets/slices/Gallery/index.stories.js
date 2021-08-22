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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"gallery","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1024&h=1024&fit=crop"}}}],"primary":{"title":[{"type":"heading1","text":"Embrace cross-platform infrastructures","spans":[]}],"description":[{"type":"paragraph","text":"Aliqua sunt aliquip mollit culpa dolor exercitation in ipsum aute ullamco fugiat consectetur voluptate officia.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
