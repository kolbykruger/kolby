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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"incentivize value-added methodologies","Title":[{"type":"heading3","text":"Incubate best-of-breed vortals","spans":[]}],"Summary":[{"type":"paragraph","text":"Ullamco cillum quis elit voluptate eu officia aliquip ut elit laboris nulla duis esse consectetur irure. Excepteur minim cillum veniam cupidatat dolor eu. Cillum consectetur dolor nostrud labore Lorem anim qui ullamco mollit sit dolor.","spans":[]}]},{"Eyebrow":"reinvent 24/365 content","Title":[{"type":"heading3","text":"Productize rich platforms","spans":[]}],"Summary":[{"type":"paragraph","text":"Cillum quis do consectetur ut dolore dolore id. Exercitation consequat non exercitation voluptate sit adipisicing do.","spans":[]}]},{"Eyebrow":"enhance synergistic markets","Title":[{"type":"heading3","text":"Recontextualize front-end synergies","spans":[]}],"Summary":[{"type":"paragraph","text":"Duis veniam eu ex amet esse laboris quis. Minim et velit elit irure. Fugiat do exercitation reprehenderit eiusmod culpa consectetur voluptate in dolor deserunt.","spans":[]}]},{"Eyebrow":"harness interactive models","Title":[{"type":"heading3","text":"Deploy visionary paradigms","spans":[]}],"Summary":[{"type":"paragraph","text":"Proident do nostrud ad anim commodo cillum quis Lorem ea cupidatat pariatur dolor do nulla. Mollit nostrud ipsum laborum quis.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Repurpose compelling users","spans":[]}],"Summary":[{"type":"paragraph","text":"Exercitation et voluptate sit ipsum consectetur ipsum pariatur. Elit dolore exercitation velit anim ullamco dolor veniam minim elit occaecat consectetur in veniam Lorem excepteur.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2018-09-11","Company":"integrate dynamic bandwidth","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Transition viral relationships","spans":[]}],"Summary":[{"type":"paragraph","text":"Irure dolor dolore ea esse occaecat. Sunt veniam nisi qui velit ut labore.","spans":[]}]},{"Date":"2016-07-09","Company":"incubate distributed markets","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Orchestrate bricks-and-clicks infrastructures","spans":[]}],"Summary":[{"type":"paragraph","text":"Mollit reprehenderit nostrud in commodo sunt eiusmod proident ut anim esse amet anim. Lorem Lorem ut laborum pariatur culpa. Est Lorem culpa consectetur laborum in irure Lorem voluptate laborum consequat veniam.","spans":[]}]},{"Date":"2013-05-04","Company":"engineer sexy initiatives","Link":{"link_type":"Web","url":"http://twitter.com"},"Title":[{"type":"heading3","text":"Deploy bleeding-edge mindshare","spans":[]}],"Summary":[{"type":"paragraph","text":"Minim incididunt ex incididunt pariatur fugiat est cillum consequat Lorem labore adipisicing.","spans":[]}]},{"Date":"2012-01-21","Company":"repurpose open-source models","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Engineer holistic synergies","spans":[]}],"Summary":[{"type":"paragraph","text":"Nisi aliqua qui pariatur tempor excepteur adipisicing est adipisicing quis.","spans":[]}]},{"Date":"2020-01-21","Company":"facilitate magnetic action-items","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Strategize compelling action-items","spans":[]}],"Summary":[{"type":"paragraph","text":"Enim pariatur culpa sunt nostrud sunt culpa aliquip proident. In velit pariatur ut anim quis aliqua deserunt non Lorem eu.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Repurpose sticky niches","spans":[]}],"Summary":[{"type":"paragraph","text":"Sint cupidatat est sint pariatur esse sit proident minim nulla. Sunt duis consequat eiusmod ipsum eiusmod est. Exercitation reprehenderit ea nisi deserunt ex laboris.","spans":[]}]},"id":"_RailWithDateCompany"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithDateCompany.storyName = 'Rail - with Date/Company'
