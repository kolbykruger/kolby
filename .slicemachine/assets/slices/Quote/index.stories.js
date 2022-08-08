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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tagline":[{"type":"heading4","text":"Truth","spans":[]}],"quote":[{"type":"paragraph","text":"Anim ex irure cupidatat.","spans":[]}],"quotee":"laid","identifier":"silver","cover":{"dimensions":{"width":75,"height":75},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c"}}],"primary":{},"slice_type":"quote","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
