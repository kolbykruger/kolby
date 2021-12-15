import MyComponent from '../../../../slices/Features';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Features'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"features","items":[{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"transform sexy interfaces","Title":"synthesize cross-platform initiatives","Description":[{"type":"paragraph","text":"Esse irure non sit. Aliquip mollit tempor fugiat mollit veniam exercitation velit deserunt elit.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"productize bleeding-edge platforms","Title":"envisioneer integrated vortals","Description":[{"type":"paragraph","text":"Cupidatat in mollit duis laborum cupidatat anim ex. In sint ea nulla consequat anim esse sunt deserunt excepteur aliquip ex. Cillum consequat minim tempor minim elit ipsum dolore officia esse fugiat id labore.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"mesh impactful bandwidth","Title":"target scalable schemas","Description":[{"type":"paragraph","text":"Est aliquip minim exercitation non nostrud ad culpa aute enim. Velit reprehenderit ipsum sunt id Lorem non. Lorem mollit qui eiusmod eiusmod aliqua quis do exercitation voluptate.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"utilize efficient networks","Title":"incentivize integrated schemas","Description":[{"type":"paragraph","text":"Laboris pariatur cillum amet minim aliqua nisi aliquip qui. Duis tempor dolore incididunt fugiat irure anim adipisicing cillum laboris excepteur mollit laboris adipisicing irure. Cillum ad occaecat laboris voluptate.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"extend value-added paradigms","Title":"implement vertical interfaces","Description":[{"type":"paragraph","text":"Elit ex commodo velit veniam nostrud Lorem duis ut Lorem duis dolor adipisicing mollit et aute.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"deliver dynamic platforms","Title":"grow enterprise vortals","Description":[{"type":"paragraph","text":"Laboris ex adipisicing ullamco id. Amet aliquip commodo sunt consectetur quis reprehenderit cillum labore in duis sint. Mollit deserunt Lorem labore reprehenderit eiusmod excepteur nisi elit fugiat exercitation aliqua velit.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"extend cross-media models","Title":"generate revolutionary relationships","Description":[{"type":"paragraph","text":"Cupidatat incididunt ea elit ad consequat veniam pariatur.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Synthesize robust schemas","spans":[]}],"description":[{"type":"paragraph","text":"Proident enim dolor velit nisi aute est exercitation nostrud.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
