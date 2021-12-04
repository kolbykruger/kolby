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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"scrolly","items":[{"Content":[{"type":"paragraph","text":"Id ad laboris dolor magna. Labore est adipisicing sint irure pariatur aute magna consequat ut laborum excepteur. Irure ipsum ad in pariatur dolore magna et tempor veniam aute eiusmod.","spans":[]}],"Image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=600&h=500&fit=crop"}},{"Content":[{"type":"paragraph","text":"Pariatur pariatur anim nostrud et ipsum amet id tempor amet. Occaecat occaecat incididunt cupidatat deserunt culpa non.","spans":[]}],"Image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=600&h=500&fit=crop"}},{"Content":[{"type":"paragraph","text":"Adipisicing anim ex aliqua ex amet commodo in pariatur laborum.","spans":[]}],"Image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&h=500&fit=crop"}},{"Content":[{"type":"paragraph","text":"Consectetur aute elit velit excepteur irure elit tempor.","spans":[]}],"Image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=600&h=500&fit=crop"}},{"Content":[{"type":"paragraph","text":"Reprehenderit nisi Lorem mollit quis ullamco eu esse incididunt aute laboris elit. Labore excepteur eu pariatur et exercitation consequat mollit eu mollit.","spans":[]}],"Image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=500&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Syndicate granular schemas","spans":[]}],"description":[{"type":"paragraph","text":"Eu quis adipisicing incididunt voluptate deserunt et sunt minim mollit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
