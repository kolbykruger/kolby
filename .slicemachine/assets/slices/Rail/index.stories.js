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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{"Eyebrow":"couple","Title":[{"type":"heading3","text":"Everywhere","spans":[]}],"Summary":[{"type":"paragraph","text":"Officia nulla dolore et. Exercitation exercitation ut duis occaecat nisi cupidatat irure veniam aute tempor exercitation exercitation do. Tempor consectetur nulla ad non dolore laborum cillum duis nulla eu.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Dinner","spans":[]}],"Summary":[{"type":"paragraph","text":"Ullamco incididunt in ut velit pariatur et deserunt ad consequat. In elit labore pariatur ea ea dolore adipisicing ex elit laborum.","spans":[]}],"Background":"Dark"},"slice_type":"rail","id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''

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
      mock: {"variation":"railWithDateCompany","version":"sktwi1xtmkfgx8626","items":[{"Date":"2012-01-29","end_date":"2016-04-12","Company":"zulu","Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading3","text":"Elephant","spans":[]}],"Summary":[{"type":"paragraph","text":"In id non consequat et sint deserunt in esse eu ullamco consectetur. Culpa ut enim pariatur adipisicing. Et irure aute laboris.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Shaking","spans":[]}],"Summary":[{"type":"paragraph","text":"Eu Lorem irure proident fugiat sunt aliqua eu fugiat. Sint ex ullamco minim incididunt consequat duis nostrud ad et.","spans":[]}],"Background":"Dark"},"slice_type":"rail","id":"_RailWithDateCompany"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithDateCompany.storyName = ''

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
      mock: {"variation":"railWithImages","version":"sktwi1xtmkfgx8626","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04"},"Title":[{"type":"heading3","text":"Ancient","spans":[]}],"Summary":[{"type":"paragraph","text":"Est ad nisi dolore voluptate pariatur dolore magna qui aliqua exercitation enim. Sint consectetur consectetur do eu officia cupidatat quis cillum aliquip fugiat irure mollit minim excepteur officia.","spans":[]}]}],"primary":{"Title":[{"type":"heading2","text":"Inside","spans":[]}],"Summary":[{"type":"paragraph","text":"Voluptate Lorem adipisicing nulla culpa commodo irure enim sint excepteur laborum aliqua ullamco dolore ea. Mollit cupidatat dolore pariatur voluptate nostrud mollit aliqua excepteur cillum adipisicing consectetur aliquip proident tempor. Culpa magna nisi deserunt.","spans":[]}],"Background":"Light"},"slice_type":"rail","id":"_RailWithImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RailWithImages.storyName = ''
