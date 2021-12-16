import MyComponent from '../../../../slices/Panels';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Panels'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"panels","items":[{"Heading":[{"type":"heading2","text":"Repurpose enterprise architectures","spans":[]}],"Content":[{"type":"paragraph","text":"Occaecat aliquip ex cupidatat fugiat aliquip sint anim et cillum cillum adipisicing reprehenderit laboris ipsum. Labore sunt ut reprehenderit.","spans":[]}]},{"Heading":[{"type":"heading2","text":"Redefine front-end communities","spans":[]}],"Content":[{"type":"paragraph","text":"Officia amet in ullamco reprehenderit laboris magna pariatur pariatur est. Voluptate amet pariatur sint dolor eu ea sit.","spans":[]}]},{"Heading":[{"type":"heading2","text":"Benchmark plug-and-play relationships","spans":[]}],"Content":[{"type":"paragraph","text":"Laboris eu non culpa non culpa occaecat irure exercitation minim commodo sit tempor reprehenderit minim. Voluptate deserunt dolore laboris consectetur mollit excepteur aliquip esse labore magna consectetur in tempor elit. Irure est fugiat proident ad mollit cillum sint officia proident incididunt magna aute.","spans":[]}]},{"Heading":[{"type":"heading2","text":"Drive integrated bandwidth","spans":[]}],"Content":[{"type":"paragraph","text":"Velit ipsum magna cupidatat ullamco cupidatat do laboris aliquip eu velit proident aute voluptate. Elit et incididunt aliqua tempor eu cillum anim magna.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
