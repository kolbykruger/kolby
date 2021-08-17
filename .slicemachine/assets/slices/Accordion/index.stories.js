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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Title":"iterate leading-edge users","Description":[{"type":"paragraph","text":"Quis dolor velit ut anim elit. Excepteur in amet consequat officia officia incididunt consectetur est aliquip nostrud Lorem ea.","spans":[]}]},{"Title":"synergize leading-edge blockchains","Description":[{"type":"paragraph","text":"Minim sint occaecat irure veniam amet sint dolor qui cupidatat ex elit et et.","spans":[]}]},{"Title":"engage plug-and-play niches","Description":[{"type":"paragraph","text":"Mollit qui ullamco deserunt in. Ad ipsum occaecat quis.","spans":[]}]},{"Title":"grow integrated interfaces","Description":[{"type":"paragraph","text":"Eu sit cupidatat tempor sint.","spans":[]}]},{"Title":"enable cutting-edge mindshare","Description":[{"type":"paragraph","text":"Duis fugiat qui nisi ex aute. Enim reprehenderit Lorem sunt enim labore mollit labore consequat fugiat excepteur.","spans":[]}]},{"Title":"strategize mission-critical relationships","Description":[{"type":"paragraph","text":"Et laboris exercitation mollit ad elit dolore eu ad.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Benchmark innovative architectures","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
