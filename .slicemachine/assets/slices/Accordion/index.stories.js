import MyComponent from '../../../../slices/Accordion';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Accordion'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Title":"facilitate web-enabled initiatives","Description":[{"type":"paragraph","text":"Magna in in adipisicing eu irure ex officia. Dolore labore enim culpa adipisicing esse laboris. Eu tempor laborum deserunt do.","spans":[]}]},{"Title":"implement frictionless platforms","Description":[{"type":"paragraph","text":"Deserunt aliqua ea ex incididunt esse nostrud veniam minim et aliqua dolor.","spans":[]}]},{"Title":"extend front-end infomediaries","Description":[{"type":"paragraph","text":"Qui duis officia adipisicing ut nostrud tempor qui et mollit.","spans":[]}]},{"Title":"productize cutting-edge convergence","Description":[{"type":"paragraph","text":"Culpa pariatur nostrud commodo exercitation minim ipsum pariatur occaecat culpa cupidatat.","spans":[]}]},{"Title":"repurpose open-source platforms","Description":[{"type":"paragraph","text":"Occaecat nulla voluptate adipisicing nulla incididunt consequat veniam officia. Ea reprehenderit dolor minim nostrud enim proident nostrud consequat non.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Expedite clicks-and-mortar e-business","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
