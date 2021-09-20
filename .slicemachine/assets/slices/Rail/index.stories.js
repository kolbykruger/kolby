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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"exploit innovative channels","Title":[{"type":"heading3","text":"Grow virtual communities","spans":[]}],"Summary":[{"type":"paragraph","text":"Nostrud consectetur commodo voluptate in non commodo veniam voluptate commodo cillum.","spans":[]}]},{"Eyebrow":"integrate bricks-and-clicks e-business","Title":[{"type":"heading3","text":"Scale clicks-and-mortar paradigms","spans":[]}],"Summary":[{"type":"paragraph","text":"Dolor voluptate do nostrud exercitation sit aute nisi sunt mollit occaecat excepteur anim irure. Ut in pariatur pariatur commodo aliquip ex deserunt nisi qui.","spans":[]}]},{"Eyebrow":"grow end-to-end vortals","Title":[{"type":"heading3","text":"Strategize web-enabled experiences","spans":[]}],"Summary":[{"type":"paragraph","text":"Irure aliqua dolor occaecat exercitation excepteur deserunt laboris qui ex tempor officia magna excepteur. Ullamco aliqua magna amet sunt. Exercitation magna dolore aute et.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Evolve cross-media initiatives","spans":[]}],"Summary":[{"type":"paragraph","text":"Voluptate aute nostrud ipsum quis id nulla reprehenderit proident Lorem excepteur aute irure minim voluptate id. Nulla ut sit officia esse exercitation proident dolor proident laboris. Minim qui minim ex veniam do Lorem quis ipsum aute consectetur.","spans":[]}],"Background":"Light"},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2021-03-18","Company":"harness sticky niches","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Iterate web-enabled platforms","spans":[]}],"Summary":[{"type":"paragraph","text":"Ut sint culpa consectetur officia eu est consequat minim irure consequat culpa nulla.","spans":[]}]},{"Date":"2016-10-02","Company":"evolve back-end web services","Link":{"link_type":"Web","url":"http://twitter.com"},"Title":[{"type":"heading3","text":"Monetize 24/365 convergence","spans":[]}],"Summary":[{"type":"paragraph","text":"Dolore excepteur est consequat qui quis eu duis nulla deserunt duis excepteur esse. Pariatur Lorem elit fugiat incididunt laboris esse duis nostrud laborum officia et reprehenderit deserunt ea.","spans":[]}]},{"Date":"2019-07-05","Company":"revolutionize compelling eyeballs","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Drive revolutionary eyeballs","spans":[]}],"Summary":[{"type":"paragraph","text":"Ipsum consectetur reprehenderit cupidatat proident sit anim nulla. Ut incididunt tempor in aliquip dolor. Laboris quis culpa fugiat qui consequat amet fugiat ea ut laborum amet.","spans":[]}]},{"Date":"2014-05-29","Company":"harness B2C web-readiness","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Transform leading-edge web-readiness","spans":[]}],"Summary":[{"type":"paragraph","text":"Ex officia ut voluptate commodo fugiat Lorem sit do. Adipisicing consequat sint dolore id sunt consequat dolore dolor consequat veniam ipsum dolore. Exercitation do exercitation in aliqua.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Matrix plug-and-play experiences","spans":[]}],"Summary":[{"type":"paragraph","text":"Pariatur cupidatat elit ullamco fugiat do tempor sit ea amet excepteur veniam. Nostrud culpa velit quis exercitation. Exercitation officia laboris irure consectetur eu laborum reprehenderit mollit et incididunt.","spans":[]}],"Background":"Light"},"id":"_RailWithDateCompany"}
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Generate one-to-one models","spans":[]}],"Summary":[{"type":"paragraph","text":"Fugiat ipsum non qui irure dolore ex est anim non. Ex veniam eiusmod et esse tempor ad cupidatat ea.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Expedite killer e-markets","spans":[]}],"Summary":[{"type":"paragraph","text":"Cupidatat excepteur nisi ex culpa. Cillum velit officia ullamco nostrud commodo ea voluptate est do ea.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Exploit sexy functionalities","spans":[]}],"Summary":[{"type":"paragraph","text":"Adipisicing anim enim dolore. Deserunt minim ea exercitation consequat non cillum incididunt dolor irure duis cillum ullamco.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Evolve enterprise users","spans":[]}],"Summary":[{"type":"paragraph","text":"Ut pariatur laborum fugiat fugiat voluptate officia ex do reprehenderit commodo exercitation. Dolor labore fugiat quis ullamco mollit nostrud consequat exercitation minim consequat ad ea amet mollit. Quis elit qui officia quis id qui ipsum consectetur.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Target world-class e-services","spans":[]}],"Summary":[{"type":"paragraph","text":"Labore enim aute id reprehenderit veniam laborum non nostrud dolore id incididunt amet ex excepteur.","spans":[]}],"Background":"Light"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
