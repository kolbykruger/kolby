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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"disintermediate 24/7 technologies","Title":[{"type":"heading3","text":"Transform clicks-and-mortar e-business","spans":[]}],"Summary":[{"type":"paragraph","text":"Duis minim ipsum nisi Lorem non proident qui ullamco ad cillum Lorem culpa.","spans":[]}]},{"Eyebrow":"drive robust deliverables","Title":[{"type":"heading3","text":"Synergize viral technologies","spans":[]}],"Summary":[{"type":"paragraph","text":"Commodo Lorem est Lorem commodo ad nisi officia. Ad commodo deserunt enim irure irure voluptate. Quis aliquip laborum eu.","spans":[]}]},{"Eyebrow":"implement revolutionary e-commerce","Title":[{"type":"heading3","text":"Iterate B2C networks","spans":[]}],"Summary":[{"type":"paragraph","text":"Lorem cillum eu laborum ea aute ex laboris ea proident proident dolor incididunt culpa. Non adipisicing adipisicing esse ea tempor reprehenderit.","spans":[]}]},{"Eyebrow":"visualize frictionless experiences","Title":[{"type":"heading3","text":"Cultivate integrated experiences","spans":[]}],"Summary":[{"type":"paragraph","text":"Qui enim ut ullamco ex ut ullamco labore quis quis labore in elit sint.","spans":[]}]},{"Eyebrow":"repurpose integrated technologies","Title":[{"type":"heading3","text":"Iterate compelling portals","spans":[]}],"Summary":[{"type":"paragraph","text":"Qui laboris irure do ut minim id proident excepteur anim duis. Deserunt laborum sit officia fugiat laboris.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Matrix ubiquitous infomediaries","spans":[]}],"Summary":[{"type":"paragraph","text":"Reprehenderit mollit cillum ullamco reprehenderit dolore cupidatat reprehenderit sit dolore anim ipsum nulla. Ut fugiat laboris elit nulla ullamco aliquip labore irure pariatur anim aliqua deserunt ex. Anim excepteur magna occaecat esse minim qui anim exercitation qui proident anim aute non.","spans":[]}],"Background":"Light"},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2017-05-25","Company":"target cross-platform relationships","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Synergize vertical relationships","spans":[]}],"Summary":[{"type":"paragraph","text":"Id minim commodo ex voluptate esse id et aliqua. Ut cillum ipsum reprehenderit enim quis sint ut deserunt nostrud.","spans":[]}]},{"Date":"2018-01-30","Company":"incubate front-end blockchains","Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading3","text":"Generate wireless eyeballs","spans":[]}],"Summary":[{"type":"paragraph","text":"Ipsum ea nulla cupidatat enim adipisicing anim culpa nulla sint sit ex proident.","spans":[]}]},{"Date":"2016-11-27","Company":"monetize distributed models","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Deploy impactful channels","spans":[]}],"Summary":[{"type":"paragraph","text":"Quis consequat proident laboris cillum sint veniam enim esse consectetur. Sint adipisicing esse ea esse excepteur cillum aute duis fugiat culpa aliqua. Ipsum et occaecat voluptate nostrud cupidatat laboris.","spans":[]}]},{"Date":"2012-06-14","Company":"brand viral synergies","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Transition end-to-end platforms","spans":[]}],"Summary":[{"type":"paragraph","text":"Labore quis nostrud pariatur commodo deserunt. Velit non labore duis nisi commodo in.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Unleash synergistic architectures","spans":[]}],"Summary":[{"type":"paragraph","text":"Id nisi amet elit enim elit aliqua ipsum fugiat Lorem duis laboris id laborum nulla. Adipisicing proident aute ea excepteur ea qui esse esse mollit dolore reprehenderit.","spans":[]}],"Background":"Light"},"id":"_RailWithDateCompany"}
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Unleash cross-platform networks","spans":[]}],"Summary":[{"type":"paragraph","text":"Excepteur sit cupidatat minim elit esse culpa. Sint veniam mollit amet ut laborum culpa occaecat. Excepteur ut occaecat quis ea officia aute qui adipisicing nostrud nisi minim non minim.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Leverage vertical web-readiness","spans":[]}],"Summary":[{"type":"paragraph","text":"Commodo dolore cupidatat do mollit.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Transition turn-key functionalities","spans":[]}],"Summary":[{"type":"paragraph","text":"Esse nulla incididunt est.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Implement sticky niches","spans":[]}],"Summary":[{"type":"paragraph","text":"Consectetur ea aute aliqua.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Reinvent dynamic initiatives","spans":[]}],"Summary":[{"type":"paragraph","text":"Exercitation minim voluptate id sint elit adipisicing.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Orchestrate next-generation users","spans":[]}],"Summary":[{"type":"paragraph","text":"Officia dolor incididunt ad pariatur. Labore aliqua officia consectetur. Enim magna eiusmod mollit sit nulla laboris veniam.","spans":[]}],"Background":"Light"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
