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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"integrate 24/365 supply-chains","Title":[{"type":"heading3","text":"Productize B2C portals","spans":[]}],"Summary":[{"type":"paragraph","text":"Velit officia nisi aliquip ex culpa est consectetur ex aute duis. Mollit officia ullamco commodo esse laborum Lorem mollit pariatur duis.","spans":[]}]},{"Eyebrow":"aggregate seamless interfaces","Title":[{"type":"heading3","text":"Engineer cross-platform experiences","spans":[]}],"Summary":[{"type":"paragraph","text":"Sunt cillum velit consequat ipsum tempor. Pariatur consequat commodo exercitation.","spans":[]}]},{"Eyebrow":"innovate killer e-tailers","Title":[{"type":"heading3","text":"Grow front-end communities","spans":[]}],"Summary":[{"type":"paragraph","text":"Ipsum proident et laboris nostrud esse aliquip amet mollit Lorem id fugiat sunt ex. Aliquip dolor qui deserunt magna non exercitation id adipisicing velit proident non ut proident.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Orchestrate customized solutions","spans":[]}],"Summary":[{"type":"paragraph","text":"Exercitation ea sunt non est anim ea consequat dolore commodo amet id eu ipsum. Nisi commodo deserunt id. Consectetur aute eiusmod excepteur velit esse dolore consequat sint cillum.","spans":[]}],"Background":"Dark"},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2020-06-23","Company":"recontextualize plug-and-play technologies","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Streamline virtual e-services","spans":[]}],"Summary":[{"type":"paragraph","text":"Dolor quis duis eu est incididunt fugiat.","spans":[]}]},{"Date":"2015-11-06","Company":"evolve front-end infrastructures","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Grow world-class synergies","spans":[]}],"Summary":[{"type":"paragraph","text":"Sit nisi consequat nostrud nostrud veniam proident ex duis consectetur deserunt pariatur minim ut consequat. Excepteur aliqua exercitation et irure occaecat irure ea labore reprehenderit amet id. Consequat dolore voluptate quis aute in mollit nulla elit reprehenderit.","spans":[]}]},{"Date":"2020-02-14","Company":"exploit real-time convergence","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Visualize value-added paradigms","spans":[]}],"Summary":[{"type":"paragraph","text":"Incididunt consectetur proident qui enim consectetur.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Synergize real-time systems","spans":[]}],"Summary":[{"type":"paragraph","text":"Lorem ad aliquip quis nisi Lorem enim esse eiusmod amet sint dolor quis officia elit.","spans":[]}],"Background":"Light"},"id":"_RailWithDateCompany"}
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Facilitate distributed initiatives","spans":[]}],"Summary":[{"type":"paragraph","text":"Proident ex id nisi voluptate mollit eiusmod ad proident deserunt dolore eu.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Strategize scalable convergence","spans":[]}],"Summary":[{"type":"paragraph","text":"Dolor excepteur Lorem dolore laboris dolore velit reprehenderit sunt et duis minim esse eiusmod quis. Tempor tempor velit Lorem officia dolore enim fugiat ullamco tempor cupidatat laborum. Non quis nisi non exercitation occaecat elit.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Grow out-of-the-box e-markets","spans":[]}],"Summary":[{"type":"paragraph","text":"Occaecat cupidatat aliquip nulla officia nulla reprehenderit excepteur do pariatur commodo eu quis laborum est labore.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Benchmark impactful ROI","spans":[]}],"Summary":[{"type":"paragraph","text":"Ipsum magna ex nostrud minim dolore nulla ad cillum amet commodo labore ex minim laboris. Sunt nostrud sunt ipsum. Ea proident veniam aliqua ut ipsum quis laborum.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Generate synergistic platforms","spans":[]}],"Summary":[{"type":"paragraph","text":"Dolore excepteur ullamco ullamco duis cillum esse cillum ut anim adipisicing et aliqua nulla non. Occaecat id fugiat laborum fugiat exercitation anim ut qui ad. Veniam aliquip qui laborum cupidatat amet culpa ea enim et amet non cillum.","spans":[]}],"Background":"Light"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
