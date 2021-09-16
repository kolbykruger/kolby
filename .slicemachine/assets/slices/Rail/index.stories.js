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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"repurpose strategic communities","Title":[{"type":"heading3","text":"Matrix rich solutions","spans":[]}],"Summary":[{"type":"paragraph","text":"Sint quis ut enim ullamco et nostrud duis ullamco quis reprehenderit deserunt. Et ea tempor est magna eiusmod labore ullamco velit proident.","spans":[]}]},{"Eyebrow":"deliver distributed paradigms","Title":[{"type":"heading3","text":"Whiteboard web-enabled models","spans":[]}],"Summary":[{"type":"paragraph","text":"Amet tempor labore nisi voluptate. Lorem ex nisi consequat adipisicing id. Proident fugiat voluptate adipisicing reprehenderit ullamco elit laborum exercitation cupidatat ad consequat amet pariatur aliqua.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Morph proactive portals","spans":[]}],"Summary":[{"type":"paragraph","text":"Veniam nostrud sit eiusmod ullamco. Ea dolore ipsum minim. Elit minim tempor consequat et esse id ipsum mollit irure irure.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2021-01-02","Company":"utilize world-class vortals","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Monetize revolutionary convergence","spans":[]}],"Summary":[{"type":"paragraph","text":"Laboris ad nulla incididunt cillum consequat amet sit fugiat. Sit aliquip ut sit officia Lorem est. Enim cillum est culpa qui exercitation cillum irure magna non excepteur ea ut consequat duis non.","spans":[]}]},{"Date":"2012-09-24","Company":"extend B2B supply-chains","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Redefine frictionless relationships","spans":[]}],"Summary":[{"type":"paragraph","text":"Consequat reprehenderit ipsum aute tempor nulla culpa ex laboris. Labore adipisicing eu sint proident reprehenderit sit incididunt eiusmod.","spans":[]}]},{"Date":"2015-07-12","Company":"productize interactive interfaces","Link":{"link_type":"Web","url":"http://twitter.com"},"Title":[{"type":"heading3","text":"Target open-source technologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Ipsum veniam enim incididunt adipisicing non sit amet officia pariatur. Ex nisi duis sunt quis do enim eiusmod ex proident commodo.","spans":[]}]},{"Date":"2012-04-02","Company":"innovate strategic infomediaries","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Enable distributed e-services","spans":[]}],"Summary":[{"type":"paragraph","text":"Velit nisi dolore id consectetur enim quis reprehenderit elit aliqua velit. Mollit id excepteur id proident aute aute magna dolor exercitation deserunt ut qui nisi mollit.","spans":[]}]},{"Date":"2013-05-18","Company":"implement magnetic partnerships","Link":{"link_type":"Web","url":"http://twitter.com"},"Title":[{"type":"heading3","text":"Utilize synergistic e-commerce","spans":[]}],"Summary":[{"type":"paragraph","text":"Incididunt amet velit dolore tempor duis consequat magna. Elit aute officia ex enim sint.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Facilitate enterprise interfaces","spans":[]}],"Summary":[{"type":"paragraph","text":"Pariatur reprehenderit culpa consectetur ipsum exercitation anim Lorem esse nisi commodo laborum. Commodo voluptate nisi minim tempor nulla. Nostrud id laboris occaecat laborum eiusmod dolor ullamco labore.","spans":[]}]},"id":"_RailWithDateCompany"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithDateCompany.storyName = 'Rail - with Date/Company'
