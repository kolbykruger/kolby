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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"gallery","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=1024&h=1024&fit=crop"}},"Size":"Small"},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=1024&h=1024&fit=crop"}},"Size":"Small"},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=1024&h=1024&fit=crop"}},"Size":"Small"}],"primary":{"title":[{"type":"heading1","text":"Engage sticky models","spans":[]}],"description":[{"type":"paragraph","text":"Duis irure dolore dolor pariatur deserunt occaecat pariatur ipsum dolor veniam non dolor eu. Incididunt ullamco esse quis irure aute proident magna ipsum Lorem elit in amet ad id mollit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
