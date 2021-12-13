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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"maximize seamless web-readiness","Title":[{"type":"heading3","text":"Unleash open-source supply-chains","spans":[]}],"Summary":[{"type":"paragraph","text":"Culpa Lorem officia sint aliqua amet ipsum deserunt veniam. Ut excepteur nisi ipsum. Aute culpa cupidatat labore aliqua anim anim magna velit pariatur labore.","spans":[]}]},{"Eyebrow":"streamline frictionless paradigms","Title":[{"type":"heading3","text":"Matrix transparent metrics","spans":[]}],"Summary":[{"type":"paragraph","text":"Do aliquip consequat labore sit occaecat elit culpa. Magna velit cillum duis laborum quis exercitation irure ut aliquip velit do ut est ullamco. Ipsum tempor ad laborum irure laboris.","spans":[]}]},{"Eyebrow":"visualize killer e-markets","Title":[{"type":"heading3","text":"Facilitate bleeding-edge synergies","spans":[]}],"Summary":[{"type":"paragraph","text":"Et Lorem anim commodo adipisicing sunt. Aute eiusmod laboris aliquip. Veniam excepteur dolore veniam cupidatat ut.","spans":[]}]},{"Eyebrow":"architect world-class schemas","Title":[{"type":"heading3","text":"Engineer virtual portals","spans":[]}],"Summary":[{"type":"paragraph","text":"Eiusmod eiusmod commodo aute non irure elit cupidatat do commodo culpa magna consectetur excepteur ut. Id veniam adipisicing ullamco excepteur nisi dolore sunt non magna non. Laborum cupidatat sit quis eiusmod.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Optimize compelling e-tailers","spans":[]}],"Summary":[{"type":"paragraph","text":"Id pariatur et culpa aliquip in sunt culpa. Deserunt irure eu deserunt aute. Culpa cillum reprehenderit proident ipsum non commodo.","spans":[]}],"Background":"Light"},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2013-06-26","Company":"whiteboard B2B communities","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Productize vertical methodologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Ut enim sit do occaecat. Nulla deserunt laborum dolor Lorem fugiat id laboris pariatur ipsum culpa reprehenderit qui labore fugiat laboris.","spans":[]}]},{"Date":"2021-08-13","Company":"deliver plug-and-play solutions","Link":{"link_type":"Web","url":"http://twitter.com"},"Title":[{"type":"heading3","text":"Brand sexy bandwidth","spans":[]}],"Summary":[{"type":"paragraph","text":"Incididunt eiusmod excepteur elit eu.","spans":[]}]},{"Date":"2020-04-29","Company":"reintermediate innovative e-business","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Integrate open-source technologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Lorem sunt voluptate do ipsum eiusmod dolore consectetur sint occaecat ut commodo tempor. Adipisicing id reprehenderit reprehenderit eiusmod eiusmod consequat culpa eiusmod commodo do magna minim pariatur pariatur adipisicing.","spans":[]}]},{"Date":"2016-04-11","Company":"incentivize real-time applications","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Strategize virtual methodologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Non voluptate eiusmod deserunt irure nostrud dolore occaecat excepteur id fugiat minim dolore enim.","spans":[]}]},{"Date":"2014-06-30","Company":"architect transparent niches","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Redefine dot-com channels","spans":[]}],"Summary":[{"type":"paragraph","text":"Occaecat amet irure ullamco et occaecat. Laborum cupidatat esse non quis laborum quis reprehenderit incididunt veniam cupidatat.","spans":[]}]},{"Date":"2013-10-31","Company":"incentivize cutting-edge infrastructures","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Transition strategic technologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Reprehenderit anim quis nulla tempor anim sit do reprehenderit. Minim nostrud ad minim. Magna esse aute amet nisi ex eiusmod ea sit nostrud.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Enhance integrated communities","spans":[]}],"Summary":[{"type":"paragraph","text":"Pariatur esse dolore culpa enim ipsum nisi veniam aliqua eiusmod. Laboris esse minim incididunt anim qui culpa Lorem. Ipsum amet adipisicing id dolor commodo velit voluptate veniam.","spans":[]}],"Background":"Light"},"id":"_RailWithDateCompany"}
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Morph e-business communities","spans":[]}],"Summary":[{"type":"paragraph","text":"Adipisicing amet tempor pariatur occaecat anim. Nulla dolor nisi consectetur cillum et.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Strategize mission-critical initiatives","spans":[]}],"Summary":[{"type":"paragraph","text":"Est esse consectetur magna aliqua occaecat mollit amet aliquip commodo.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Enable innovative supply-chains","spans":[]}],"Summary":[{"type":"paragraph","text":"Pariatur laboris nulla excepteur mollit eiusmod. Veniam labore qui commodo. Magna elit deserunt nisi irure ad.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Disintermediate B2C methodologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Nisi id non id ad deserunt fugiat in duis dolore est mollit do nostrud.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Visualize end-to-end schemas","spans":[]}],"Summary":[{"type":"paragraph","text":"Fugiat eiusmod cillum nostrud mollit sint sint reprehenderit ullamco excepteur nulla. Sit consectetur sunt proident nostrud anim pariatur ea culpa eu sint qui minim labore eu. Sunt ullamco velit ullamco aute ea proident laborum duis exercitation qui.","spans":[]}],"Background":"Light"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
