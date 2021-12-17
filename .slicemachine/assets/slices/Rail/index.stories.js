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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"scale ubiquitous supply-chains","Title":[{"type":"heading3","text":"Whiteboard B2C applications","spans":[]}],"Summary":[{"type":"paragraph","text":"Et nostrud ipsum elit adipisicing enim excepteur laborum aliqua cupidatat dolore commodo non est. Enim incididunt occaecat ipsum tempor Lorem nulla occaecat aute aute aute cupidatat sit.","spans":[]}]},{"Eyebrow":"leverage visionary infrastructures","Title":[{"type":"heading3","text":"Brand customized bandwidth","spans":[]}],"Summary":[{"type":"paragraph","text":"Aliqua reprehenderit culpa officia laborum ad adipisicing deserunt velit.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Generate B2C e-commerce","spans":[]}],"Summary":[{"type":"paragraph","text":"Enim ex aliquip sunt adipisicing labore velit duis excepteur. Qui fugiat aliqua laboris enim aliquip elit culpa veniam eiusmod ullamco consectetur exercitation est ex in.","spans":[]}],"Background":"Light"},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2013-09-30","Company":"orchestrate extensible e-business","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Incubate intuitive channels","spans":[]}],"Summary":[{"type":"paragraph","text":"Non nostrud sint cillum eiusmod cupidatat aliqua sit nulla sit esse voluptate id. Nulla veniam Lorem in est in quis. Irure nulla id elit consectetur mollit exercitation qui.","spans":[]}]},{"Date":"2016-06-21","Company":"reinvent transparent functionalities","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Synergize impactful platforms","spans":[]}],"Summary":[{"type":"paragraph","text":"Laboris consectetur excepteur ipsum quis minim. Velit proident occaecat consequat amet sint consequat aliquip anim sunt.","spans":[]}]},{"Date":"2015-09-12","Company":"disintermediate mission-critical portals","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Cultivate mission-critical eyeballs","spans":[]}],"Summary":[{"type":"paragraph","text":"Tempor adipisicing occaecat sint cupidatat reprehenderit. Magna non esse ipsum eiusmod eu.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"E-enable dot-com relationships","spans":[]}],"Summary":[{"type":"paragraph","text":"Ea proident sint sint irure incididunt tempor Lorem est. Culpa magna ut dolor ex reprehenderit. Enim excepteur labore adipisicing do culpa est eu occaecat aliquip sit minim duis enim.","spans":[]}],"Background":"Dark"},"id":"_RailWithDateCompany"}
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Transform integrated networks","spans":[]}],"Summary":[{"type":"paragraph","text":"Amet esse eiusmod labore laborum velit esse et proident esse ullamco reprehenderit labore velit id.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Whiteboard distributed convergence","spans":[]}],"Summary":[{"type":"paragraph","text":"Officia irure proident aliquip laboris cupidatat. Qui labore duis pariatur deserunt do voluptate enim exercitation dolor incididunt exercitation nulla commodo cupidatat aliquip. Aute tempor qui ut culpa ex voluptate aliquip elit cupidatat elit sit aliquip enim est.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Transform granular functionalities","spans":[]}],"Summary":[{"type":"paragraph","text":"Proident aute amet reprehenderit. Adipisicing pariatur exercitation adipisicing aliqua deserunt aute adipisicing adipisicing sunt excepteur elit. Velit esse amet aliquip consectetur esse occaecat adipisicing.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Redefine extensible infrastructures","spans":[]}],"Summary":[{"type":"paragraph","text":"Proident sunt cupidatat elit sit ut cillum. Id irure irure proident aliquip nulla veniam ut culpa ullamco enim deserunt proident velit quis.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Iterate leading-edge markets","spans":[]}],"Summary":[{"type":"paragraph","text":"Aliquip et nostrud ad fugiat nostrud excepteur deserunt eu voluptate. Consequat pariatur laborum ea consequat occaecat sint sint sint officia dolore nulla aute dolor. Deserunt minim minim Lorem consequat non officia ea Lorem velit.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Harness e-business infomediaries","spans":[]}],"Summary":[{"type":"paragraph","text":"Occaecat eu proident proident id exercitation aute aliqua adipisicing irure mollit magna. Lorem enim veniam cupidatat quis est proident eu Lorem. Magna et exercitation excepteur sit eu labore culpa aliquip anim dolor aute.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Utilize sexy initiatives","spans":[]}],"Summary":[{"type":"paragraph","text":"Elit voluptate commodo ex proident reprehenderit. Sit incididunt incididunt enim incididunt adipisicing ea irure aute sint consectetur.","spans":[]}],"Background":"Light"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
