import MyComponent from '../../../../slices/Timeline';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Timeline'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"repurpose dot-com solutions","Title":"embrace strategic convergence","Summary":[{"type":"paragraph","text":"Anim aute proident cillum occaecat proident fugiat in eu. Nostrud voluptate laboris ea reprehenderit officia nisi. Sunt consectetur in esse nisi laboris deserunt ad aliqua nostrud eu duis anim nostrud reprehenderit proident.","spans":[]}]},{"Eyebrow":"visualize distributed methodologies","Title":"incubate compelling supply-chains","Summary":[{"type":"paragraph","text":"Ea incididunt do ipsum incididunt culpa commodo.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TimelineVertical = () => ({
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"brand one-to-one experiences","Title":"benchmark wireless convergence","Summary":[{"type":"paragraph","text":"Sint Lorem consectetur do proident in.","spans":[]}]},{"Eyebrow":"repurpose 24/365 bandwidth","Title":"harness compelling solutions","Summary":[{"type":"paragraph","text":"Eu nostrud ad nisi eu excepteur non ullamco velit exercitation ad minim cillum est velit pariatur. Tempor cillum dolor in voluptate nulla Lorem veniam in dolor incididunt officia est ex excepteur velit.","spans":[]}]},{"Eyebrow":"exploit 24/365 metrics","Title":"unleash distributed partnerships","Summary":[{"type":"paragraph","text":"Voluptate ad officia consectetur officia. Fugiat eiusmod sit eiusmod occaecat esse deserunt incididunt laborum est minim enim id. Minim quis laborum reprehenderit incididunt elit ullamco cupidatat laborum.","spans":[]}]},{"Eyebrow":"cultivate back-end e-commerce","Title":"deploy world-class markets","Summary":[{"type":"paragraph","text":"Quis anim velit est aute laborum culpa sit enim magna. Adipisicing eu dolore velit laboris reprehenderit excepteur anim velit reprehenderit anim ea reprehenderit et adipisicing esse. Consequat veniam sit esse Lorem sit exercitation anim.","spans":[]}]},{"Eyebrow":"grow best-of-breed partnerships","Title":"expedite mission-critical niches","Summary":[{"type":"paragraph","text":"Amet aute ut ea ad.","spans":[]}]},{"Eyebrow":"leverage back-end metrics","Title":"expedite transparent platforms","Summary":[{"type":"paragraph","text":"Sit velit sunt id sit pariatur deserunt laboris proident ipsum et labore tempor in et sint. Id consequat duis anim id ex et excepteur do consequat nulla duis sunt sit ut sint.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineVertical.storyName = 'Timeline - Vertical'

export const _TimelineImages = () => ({
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
      mock: {"variation":"timelineImages","name":"Timeline - Images","slice_type":"timeline","items":[{"Eyebrow":"mesh bleeding-edge synergies","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1066&h=600&fit=crop"},"Title":"e-enable back-end portals","Summary":[{"type":"paragraph","text":"Dolore exercitation voluptate commodo dolore ex magna irure sit laborum nisi ex mollit ea eu. Incididunt amet dolore irure. Sit nulla exercitation laborum fugiat sint nostrud tempor sit in sit consequat ut.","spans":[]}]},{"Eyebrow":"cultivate world-class infomediaries","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=1066&h=600&fit=crop"},"Title":"utilize holistic solutions","Summary":[{"type":"paragraph","text":"Ad cupidatat ea fugiat non duis. Culpa consectetur proident amet velit officia. In ullamco ipsum commodo quis cillum reprehenderit ut commodo voluptate eu qui.","spans":[]}]}],"primary":{},"id":"_TimelineImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineImages.storyName = 'Timeline - Images'
