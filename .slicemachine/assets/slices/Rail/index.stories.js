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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rail","items":[{"Eyebrow":"leverage dot-com infomediaries","Title":[{"type":"heading3","text":"Morph visionary networks","spans":[]}],"Summary":[{"type":"paragraph","text":"Ad nisi nostrud ipsum.","spans":[]}]},{"Eyebrow":"whiteboard one-to-one systems","Title":[{"type":"heading3","text":"Transform turn-key applications","spans":[]}],"Summary":[{"type":"paragraph","text":"Esse cillum et labore anim commodo nostrud. Labore eiusmod irure est.","spans":[]}]},{"Eyebrow":"facilitate innovative interfaces","Title":[{"type":"heading3","text":"Revolutionize value-added channels","spans":[]}],"Summary":[{"type":"paragraph","text":"Aute minim duis nisi qui in excepteur ex amet in sint. Commodo cupidatat excepteur labore aute ex non labore cillum labore est esse elit do. Lorem elit ut aliquip fugiat do aliquip laboris.","spans":[]}]},{"Eyebrow":"monetize visionary infomediaries","Title":[{"type":"heading3","text":"Strategize magnetic partnerships","spans":[]}],"Summary":[{"type":"paragraph","text":"Nulla consequat mollit nisi. Exercitation qui incididunt pariatur irure non laboris officia velit enim. Ipsum sint sit ullamco dolore excepteur.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Implement magnetic vortals","spans":[]}],"Summary":[{"type":"paragraph","text":"Mollit aute id ipsum nulla dolore deserunt nostrud nostrud fugiat est sint. Ut ex proident ea eiusmod commodo minim non voluptate officia in eiusmod ad esse reprehenderit.","spans":[]}],"Background":"Dark"},"id":"_DefaultSlice"}
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
      mock: {"variation":"railWithDateCompany","name":"Rail - with Date/Company","slice_type":"rail","items":[{"Date":"2014-09-21","Company":"leverage best-of-breed systems","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Matrix wireless eyeballs","spans":[]}],"Summary":[{"type":"paragraph","text":"Reprehenderit est laborum magna est officia laborum laborum occaecat. Aliquip sit irure non velit quis deserunt labore minim officia. Esse cillum ut non ea dolore cupidatat voluptate magna anim enim magna.","spans":[]}]},{"Date":"2012-08-15","Company":"integrate one-to-one ROI","Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading3","text":"Iterate world-class e-services","spans":[]}],"Summary":[{"type":"paragraph","text":"Dolor culpa culpa in dolor amet consequat culpa proident cillum. Tempor minim aliquip laborum do occaecat ad sunt sunt minim reprehenderit consequat cillum nulla voluptate incididunt.","spans":[]}]},{"Date":"2014-02-06","Company":"target global e-markets","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Reinvent collaborative e-markets","spans":[]}],"Summary":[{"type":"paragraph","text":"Commodo elit do velit labore in consectetur proident ex eu in do ut.","spans":[]}]},{"Date":"2016-11-21","Company":"engineer real-time e-business","Link":{"link_type":"Web","url":"http://twitter.com"},"Title":[{"type":"heading3","text":"Reinvent killer metrics","spans":[]}],"Summary":[{"type":"paragraph","text":"Consequat in mollit ea ea ea incididunt velit id aliquip nulla sunt id.","spans":[]}]},{"Date":"2013-08-02","Company":"whiteboard out-of-the-box action-items","Link":{"link_type":"Web","url":"http://twitter.com"},"Title":[{"type":"heading3","text":"Syndicate distributed markets","spans":[]}],"Summary":[{"type":"paragraph","text":"Aute do adipisicing anim consectetur. Id aute ea occaecat. Minim officia est qui sint.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Deploy world-class mindshare","spans":[]}],"Summary":[{"type":"paragraph","text":"Fugiat aliqua irure qui id elit aute laboris qui deserunt velit incididunt proident aute qui. Exercitation id sunt laboris.","spans":[]}],"Background":"Dark"},"id":"_RailWithDateCompany"}
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
      mock: {"variation":"railWithImages","name":"Rail - with Images","slice_type":"rail","items":[{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Deliver interactive web-readiness","spans":[]}],"Summary":[{"type":"paragraph","text":"Deserunt ullamco excepteur deserunt id Lorem ex veniam. Exercitation elit culpa aliqua minim ex.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Mesh innovative action-items","spans":[]}],"Summary":[{"type":"paragraph","text":"Nulla magna ipsum ullamco dolor et tempor nostrud duis adipisicing aliquip do.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Architect wireless metrics","spans":[]}],"Summary":[{"type":"paragraph","text":"Enim ut nostrud anim labore cupidatat voluptate ullamco. Anim Lorem laboris elit.","spans":[]}]},{"Image":{"dimensions":{"width":null,"height":null},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=null&h=null&fit=crop"},"Title":[{"type":"heading3","text":"Utilize back-end eyeballs","spans":[]}],"Summary":[{"type":"paragraph","text":"Laborum anim minim cillum enim voluptate. Ea ad sit magna elit exercitation ut.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Extend clicks-and-mortar mindshare","spans":[]}],"Summary":[{"type":"paragraph","text":"Cillum tempor veniam non proident est ipsum amet consequat incididunt velit nulla pariatur. Excepteur nostrud nisi ex nisi tempor sit minim deserunt non aliquip excepteur. Tempor culpa fugiat cupidatat dolore sint aliquip.","spans":[]}],"Background":"Light"},"id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = 'Rail - with Images'
