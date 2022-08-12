import MyComponent from '../../../../slices/Quote';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Quote'
}


export const _Default = () => ({
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tagline":[{"type":"heading4","text":"Became","spans":[]}],"quote":[{"type":"paragraph","text":"Fugiat culpa et elit esse cupidatat.","spans":[]}],"quotee":"church","identifier":"prevent","cover":{"dimensions":{"width":75,"height":75},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"},"website":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{},"slice_type":"quote","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
