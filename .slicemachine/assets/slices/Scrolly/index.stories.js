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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"scrolly","items":[{"Content":[{"type":"paragraph","text":"Exercitation nulla aliqua veniam adipisicing eu ea ut sit nulla eu laboris exercitation adipisicing.","spans":[]}],"Image":{"dimensions":{"width":1024,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=1024&h=500&fit=crop"}},{"Content":[{"type":"paragraph","text":"Eiusmod incididunt id labore enim ad consectetur id fugiat esse consequat cillum et proident. Velit ex voluptate ut nisi. Ipsum sunt excepteur id aliqua nulla excepteur excepteur aliqua consectetur dolore nisi esse.","spans":[]}],"Image":{"dimensions":{"width":1024,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=1024&h=500&fit=crop"}},{"Content":[{"type":"paragraph","text":"Aliquip id enim nisi ea id aliquip proident laborum quis velit magna consequat laborum. Ullamco non deserunt do anim. Consectetur sunt occaecat pariatur sunt dolor non culpa aliquip duis est elit aliquip ad laboris.","spans":[]}],"Image":{"dimensions":{"width":1024,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=1024&h=500&fit=crop"}},{"Content":[{"type":"paragraph","text":"Sunt do voluptate cillum commodo reprehenderit quis laborum sit. Commodo ipsum dolore proident cupidatat laborum. Cillum anim dolore eu fugiat anim laborum ipsum nisi magna ex ut minim.","spans":[]}],"Image":{"dimensions":{"width":1024,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=1024&h=500&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Transform value-added e-markets","spans":[]}],"description":[{"type":"paragraph","text":"Duis consectetur duis labore.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
