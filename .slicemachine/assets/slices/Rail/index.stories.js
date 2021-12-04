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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"benchmark holistic models","Title":[{"type":"heading3","text":"E-enable turn-key deliverables","spans":[]}],"Summary":[{"type":"paragraph","text":"Do magna in minim adipisicing ipsum.","spans":[]}]},{"Eyebrow":"monetize extensible infomediaries","Title":[{"type":"heading3","text":"Synthesize rich ROI","spans":[]}],"Summary":[{"type":"paragraph","text":"Ut anim voluptate ad. Magna dolore magna tempor voluptate nisi eiusmod Lorem anim culpa commodo ut cillum amet enim.","spans":[]}]},{"Eyebrow":"empower value-added deliverables","Title":[{"type":"heading3","text":"Exploit ubiquitous interfaces","spans":[]}],"Summary":[{"type":"paragraph","text":"Ex adipisicing consectetur ex fugiat laboris. Aliquip aliquip elit nostrud id dolor deserunt do minim ex labore ad nulla.","spans":[]}]},{"Eyebrow":"maximize sexy paradigms","Title":[{"type":"heading3","text":"Utilize mission-critical technologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Ullamco cillum reprehenderit incididunt cillum. Laboris eu commodo sit tempor magna est pariatur. Dolor adipisicing reprehenderit amet.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"E-enable best-of-breed mindshare","spans":[]}],"Summary":[{"type":"paragraph","text":"Culpa laborum proident dolore commodo magna quis ad mollit dolore est ipsum. Pariatur reprehenderit enim enim adipisicing nostrud reprehenderit nisi nisi ut excepteur.","spans":[]}],"Background":"Light"},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2018-07-27","Company":"visualize transparent e-tailers","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Generate interactive partnerships","spans":[]}],"Summary":[{"type":"paragraph","text":"Et nostrud sunt elit esse culpa irure ex ad consectetur amet. Ex cupidatat ullamco esse est aliqua ut duis voluptate. Incididunt dolor aliqua laborum officia.","spans":[]}]},{"Date":"2018-07-25","Company":"utilize killer e-markets","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Grow frictionless networks","spans":[]}],"Summary":[{"type":"paragraph","text":"Esse cillum laborum dolore ea magna cillum excepteur consectetur ea ipsum officia. Qui et occaecat commodo cupidatat incididunt reprehenderit et.","spans":[]}]},{"Date":"2018-06-22","Company":"deliver back-end niches","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Recontextualize scalable platforms","spans":[]}],"Summary":[{"type":"paragraph","text":"Elit duis ex dolor proident Lorem aliqua occaecat anim nulla ea deserunt et laborum. Ipsum tempor velit tempor irure do veniam cillum excepteur anim commodo. Ullamco proident et laboris nulla Lorem quis anim aliqua.","spans":[]}]},{"Date":"2012-05-14","Company":"enhance magnetic paradigms","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Synergize robust paradigms","spans":[]}],"Summary":[{"type":"paragraph","text":"Labore anim nostrud magna. Veniam cupidatat aute commodo tempor.","spans":[]}]},{"Date":"2014-04-16","Company":"matrix synergistic e-commerce","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Productize 24/7 deliverables","spans":[]}],"Summary":[{"type":"paragraph","text":"Dolore fugiat ipsum irure nisi adipisicing excepteur duis Lorem laborum qui. Occaecat adipisicing mollit nostrud in in mollit ad consectetur commodo sit adipisicing id cillum. Deserunt id sunt id labore minim enim nisi mollit aute Lorem adipisicing esse Lorem fugiat.","spans":[]}]},{"Date":"2012-08-16","Company":"utilize user-centric metrics","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Facilitate mission-critical mindshare","spans":[]}],"Summary":[{"type":"paragraph","text":"Eiusmod cillum cupidatat voluptate laborum sunt consectetur occaecat cillum proident nisi tempor cupidatat duis non ullamco. Labore excepteur mollit laborum est nostrud excepteur mollit.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Whiteboard e-business systems","spans":[]}],"Summary":[{"type":"paragraph","text":"Laborum ipsum officia consectetur sint laboris mollit sint velit ut duis non ipsum excepteur sunt tempor. In eu eiusmod pariatur dolor excepteur do adipisicing nulla mollit dolore. Qui ex excepteur mollit laborum enim.","spans":[]}],"Background":"Dark"},"id":"_RailWithDateCompany"}
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Facilitate viral experiences","spans":[]}],"Summary":[{"type":"paragraph","text":"Amet occaecat sint dolore voluptate id.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Brand dynamic platforms","spans":[]}],"Summary":[{"type":"paragraph","text":"Culpa excepteur quis consequat in cupidatat eu mollit ex voluptate veniam dolor laboris nisi. Proident magna eu ad.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Cultivate plug-and-play paradigms","spans":[]}],"Summary":[{"type":"paragraph","text":"Proident quis consectetur anim ut aliquip pariatur aliquip cillum proident dolor incididunt exercitation irure deserunt mollit.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Extend synergistic communities","spans":[]}],"Summary":[{"type":"paragraph","text":"Ut aliqua quis esse ad sint excepteur nisi adipisicing minim deserunt Lorem. Ipsum veniam nostrud amet incididunt adipisicing nisi eu incididunt officia ex qui labore aute.","spans":[]}],"Background":"Dark"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
