import MyComponent from '../../../../slices/Scrolly';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Scrolly'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"scrolly","items":[{"Content":[{"type":"paragraph","text":"Dolore excepteur cillum incididunt aliqua in adipisicing eu est esse minim eu enim voluptate nostrud. Veniam qui commodo adipisicing sunt qui sint sint ea laborum. Ipsum ex irure in aliquip.","spans":[]}],"Image":{"dimensions":{"width":1024,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=1024&h=500&fit=crop"}},{"Content":[{"type":"paragraph","text":"Elit consectetur velit elit. Qui do veniam occaecat aute labore labore pariatur do non sunt.","spans":[]}],"Image":{"dimensions":{"width":1024,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=1024&h=500&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Orchestrate customized methodologies","spans":[]}],"description":[{"type":"paragraph","text":"Amet ea sint sunt ad enim ut et Lorem cillum eu reprehenderit in esse cillum reprehenderit. Culpa aliquip reprehenderit anim ullamco laboris.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
