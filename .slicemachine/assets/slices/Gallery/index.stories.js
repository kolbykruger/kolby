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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"gallery","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=1024&h=1024&fit=crop"}}},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=null&h=null&fit=crop","crop":{"dimensions":{"width":1024,"height":1024},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=1024&h=1024&fit=crop"}}}],"primary":{"title":[{"type":"heading1","text":"E-enable revolutionary channels","spans":[]}],"description":[{"type":"paragraph","text":"Sunt nisi laborum incididunt veniam cupidatat laborum quis mollit. Incididunt excepteur id eiusmod laborum sunt laborum eiusmod labore deserunt. Et pariatur laboris labore eiusmod quis voluptate non eiusmod aliquip consectetur dolore officia.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
