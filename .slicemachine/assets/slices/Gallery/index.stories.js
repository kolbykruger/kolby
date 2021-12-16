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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"gallery","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=1024&h=1024&fit=crop"}},"Size":"Small"},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1024&h=1024&fit=crop"}},"Size":"Small"},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=1024&h=1024&fit=crop"}},"Size":"Small"},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=1024&h=1024&fit=crop"}},"Size":"Small"}],"primary":{"title":[{"type":"heading1","text":"Integrate end-to-end platforms","spans":[]}],"description":[{"type":"paragraph","text":"Nisi mollit proident sunt non ad commodo mollit eu. Enim occaecat aliqua eu aliquip ad ullamco ullamco id amet. Velit proident enim sit tempor est proident commodo minim nulla laboris.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
