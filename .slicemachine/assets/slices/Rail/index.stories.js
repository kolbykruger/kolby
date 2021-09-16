import MyComponent from '../../../../slices/Rail';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Rail'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"maximize integrated infrastructures","Title":[{"type":"heading3","text":"Aggregate B2C models","spans":[]}],"Summary":[{"type":"paragraph","text":"Nisi officia ut elit ad nostrud voluptate officia eu sint in sunt excepteur ipsum ut proident. Dolore cupidatat laboris incididunt nulla ut pariatur.","spans":[]}]},{"Eyebrow":"monetize B2B mindshare","Title":[{"type":"heading3","text":"Grow holistic content","spans":[]}],"Summary":[{"type":"paragraph","text":"Cillum non nostrud id consectetur elit aliqua ullamco mollit excepteur eiusmod voluptate. Anim laborum dolor et eiusmod esse elit anim.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Syndicate world-class supply-chains","spans":[]}],"Summary":[{"type":"paragraph","text":"Sit ipsum velit consectetur.","spans":[]}],"Background":"Light"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _RailWithDateCompany = () => ({
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2013-01-28","Company":"engineer rich portals","Link":{"link_type":"Web","url":"http://twitter.com"},"Title":[{"type":"heading3","text":"Reintermediate strategic relationships","spans":[]}],"Summary":[{"type":"paragraph","text":"Laboris velit minim et sit et sint commodo enim non nulla proident id dolore. Officia fugiat exercitation exercitation exercitation ipsum aliquip aliqua.","spans":[]}]},{"Date":"2014-05-05","Company":"grow efficient interfaces","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Disintermediate intuitive vortals","spans":[]}],"Summary":[{"type":"paragraph","text":"Esse incididunt magna irure esse non adipisicing minim magna magna enim magna et esse laborum.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Benchmark revolutionary infomediaries","spans":[]}],"Summary":[{"type":"paragraph","text":"Cupidatat proident ut velit magna cillum et est nostrud esse eiusmod minim nostrud nostrud elit ea. Esse esse ad cupidatat consequat irure consequat.","spans":[]}],"Background":"Light"},"id":"_RailWithDateCompany"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithDateCompany.storyName = 'Rail - with Date/Company'

export const _RailWithImages = () => ({
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Innovate 24/365 web services","spans":[]}],"Summary":[{"type":"paragraph","text":"Anim cillum id est amet reprehenderit nostrud anim cillum ea pariatur deserunt adipisicing in aute. Tempor ad id tempor minim.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Grow sticky architectures","spans":[]}],"Summary":[{"type":"paragraph","text":"Amet ipsum labore cupidatat adipisicing aute tempor eiusmod labore sint id.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Harness cross-media e-markets","spans":[]}],"Summary":[{"type":"paragraph","text":"Qui quis eiusmod nisi id sit excepteur anim ea mollit minim amet. Nostrud Lorem tempor id officia amet excepteur consectetur deserunt ullamco enim irure eiusmod proident elit. Lorem voluptate veniam qui amet commodo pariatur tempor.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Visualize impactful mindshare","spans":[]}],"Summary":[{"type":"paragraph","text":"In dolore sit cupidatat esse fugiat velit ex ad aute magna aliquip mollit ad id. Aliquip duis deserunt ea enim qui esse id amet culpa cillum labore ex in aliqua nisi. Aliqua qui veniam velit sint.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Incubate holistic networks","spans":[]}],"Summary":[{"type":"paragraph","text":"Aute aute consequat occaecat est dolore duis velit reprehenderit do aliqua.","spans":[]}],"Background":"Light"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
