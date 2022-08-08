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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"tiles","items":[{"Image":{"dimensions":{"width":600,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=600&h=600&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=600&fit=crop"}},{"Image":{"dimensions":{"width":600,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=600&h=600&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Redefine plug-and-play networks","spans":[]}],"description":[{"type":"paragraph","text":"Consectetur quis commodo commodo ad culpa esse laborum eiusmod proident. Tempor consequat ea nisi labore aute reprehenderit irure in non sint adipisicing et enim aliquip tempor. Nisi sint veniam ullamco est fugiat ullamco excepteur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
