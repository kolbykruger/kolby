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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"embrace innovative technologies","Title":[{"type":"heading3","text":"Incubate back-end systems","spans":[]}],"Summary":[{"type":"paragraph","text":"Lorem ullamco esse deserunt sunt enim exercitation id. Dolore aliqua elit consectetur. Commodo proident do irure eu.","spans":[]}]},{"Eyebrow":"synergize vertical ROI","Title":[{"type":"heading3","text":"E-enable e-business e-tailers","spans":[]}],"Summary":[{"type":"paragraph","text":"Tempor cupidatat minim elit laboris anim reprehenderit aute minim sit reprehenderit sunt officia. Non occaecat sint culpa eiusmod excepteur culpa ad eu pariatur non.","spans":[]}]},{"Eyebrow":"iterate revolutionary experiences","Title":[{"type":"heading3","text":"Grow integrated supply-chains","spans":[]}],"Summary":[{"type":"paragraph","text":"Cillum aute ullamco dolor ex aliquip in mollit mollit adipisicing.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Optimize customized infrastructures","spans":[]}],"Summary":[{"type":"paragraph","text":"Esse voluptate exercitation incididunt magna minim pariatur excepteur veniam dolor officia eu occaecat incididunt. Aliquip ullamco irure id eu aute id.","spans":[]}],"Background":"Light"},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2017-02-01","Company":"reintermediate next-generation paradigms","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Extend proactive blockchains","spans":[]}],"Summary":[{"type":"paragraph","text":"Nulla irure fugiat consequat magna laborum tempor officia. Nisi dolore officia sit elit laboris in irure fugiat eu consequat incididunt quis. Occaecat mollit adipisicing aute qui commodo ex velit aliquip sit aliquip officia ullamco.","spans":[]}]},{"Date":"2013-06-03","Company":"iterate mission-critical e-business","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Generate granular web-readiness","spans":[]}],"Summary":[{"type":"paragraph","text":"Nulla mollit esse nisi. Voluptate amet culpa enim quis duis veniam officia exercitation.","spans":[]}]},{"Date":"2016-10-07","Company":"e-enable real-time bandwidth","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Maximize plug-and-play methodologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Anim reprehenderit proident pariatur et tempor Lorem velit elit. Sit eu aliquip nisi ex eu pariatur excepteur consequat qui voluptate veniam cupidatat velit est anim. Cillum excepteur in ad aliqua dolor Lorem deserunt pariatur eu velit excepteur do officia officia.","spans":[]}]},{"Date":"2020-03-07","Company":"redefine value-added experiences","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Transition frictionless blockchains","spans":[]}],"Summary":[{"type":"paragraph","text":"Tempor ut deserunt laboris excepteur proident ea sint proident nisi. Ad deserunt magna duis quis minim ea deserunt tempor.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Cultivate front-end applications","spans":[]}],"Summary":[{"type":"paragraph","text":"Non sint duis ullamco nisi velit ad ea excepteur Lorem do voluptate sit aute reprehenderit. Proident et eiusmod magna quis. Commodo esse excepteur voluptate laborum exercitation duis voluptate reprehenderit labore ex enim.","spans":[]}],"Background":"Light"},"id":"_RailWithDateCompany"}
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Incentivize enterprise mindshare","spans":[]}],"Summary":[{"type":"paragraph","text":"Nisi reprehenderit nisi voluptate dolore laborum mollit. Ea nostrud reprehenderit magna sunt.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Transition real-time eyeballs","spans":[]}],"Summary":[{"type":"paragraph","text":"Duis cillum deserunt labore ullamco excepteur sint elit id officia eu. Tempor nostrud magna occaecat eu officia irure enim sit tempor sunt labore anim sunt voluptate.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Matrix leading-edge e-services","spans":[]}],"Summary":[{"type":"paragraph","text":"Quis incididunt velit labore. Enim quis sunt nulla tempor elit. Adipisicing minim voluptate ea voluptate ullamco nisi aliqua incididunt pariatur officia quis eiusmod.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Visualize clicks-and-mortar bandwidth","spans":[]}],"Summary":[{"type":"paragraph","text":"Laboris proident anim elit incididunt sit officia amet. Reprehenderit proident reprehenderit in.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Seize scalable action-items","spans":[]}],"Summary":[{"type":"paragraph","text":"Duis laboris aute laborum cupidatat dolore enim ullamco esse est tempor dolore eu aute ut anim.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Envisioneer viral content","spans":[]}],"Summary":[{"type":"paragraph","text":"Consequat do id aliquip voluptate nisi elit sint. Veniam excepteur sunt ullamco laborum. Aliqua est magna consequat commodo sunt esse incididunt laborum culpa ea dolor amet amet.","spans":[]}],"Background":"Dark"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
