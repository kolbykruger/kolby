import MyComponent from '../../../../slices/Timeline';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Timeline'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"engineer back-end e-business","Title":"enhance cross-platform networks","Summary":[{"type":"paragraph","text":"Excepteur et sit quis veniam consectetur minim laboris fugiat laboris irure est non magna deserunt.","spans":[]}]},{"Eyebrow":"optimize front-end experiences","Title":"transition out-of-the-box e-tailers","Summary":[{"type":"paragraph","text":"Amet laborum ullamco culpa velit non ex. Duis anim veniam ea adipisicing. Deserunt laborum aliquip magna officia minim ad quis exercitation dolor.","spans":[]}]},{"Eyebrow":"utilize sticky models","Title":"embrace user-centric experiences","Summary":[{"type":"paragraph","text":"Occaecat quis officia sunt anim cillum duis.","spans":[]}]},{"Eyebrow":"engage enterprise paradigms","Title":"cultivate dot-com interfaces","Summary":[{"type":"paragraph","text":"Dolore duis laboris sunt occaecat occaecat mollit consequat dolore elit. Deserunt reprehenderit dolore nulla pariatur magna aliqua ex enim eu velit duis. Velit cupidatat anim aute elit voluptate minim proident duis labore ut officia do.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TimelineVertical = () => ({
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"matrix turn-key metrics","Title":"unleash rich metrics","Summary":[{"type":"paragraph","text":"Aliqua fugiat elit laboris qui voluptate aute ullamco qui velit mollit duis.","spans":[]}]},{"Eyebrow":"generate magnetic channels","Title":"optimize visionary applications","Summary":[{"type":"paragraph","text":"Ut cupidatat consectetur ullamco non nulla anim veniam culpa amet esse. Duis reprehenderit amet dolor ullamco tempor sunt velit culpa.","spans":[]}]},{"Eyebrow":"incentivize rich infrastructures","Title":"synthesize compelling users","Summary":[{"type":"paragraph","text":"Id commodo excepteur Lorem aliqua cillum aliquip do amet irure nulla cupidatat consectetur ut deserunt. Non officia sint irure elit.","spans":[]}]},{"Eyebrow":"engineer global bandwidth","Title":"synergize clicks-and-mortar architectures","Summary":[{"type":"paragraph","text":"Minim eu nostrud excepteur et ad ea incididunt nulla cillum ipsum consequat dolore veniam excepteur do.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineVertical.storyName = 'Timeline - Vertical'

export const _TimelineImages = () => ({
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
      mock: {"variation":"timelineImages","name":"Timeline - Images","slice_type":"timeline","items":[{"Eyebrow":"matrix seamless supply-chains","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=1066&h=600&fit=crop"},"Title":"deliver visionary niches","Summary":[{"type":"paragraph","text":"Sint labore sunt ipsum pariatur velit do sint nulla tempor. Qui velit sit do sit ea in anim. Et minim veniam anim magna amet.","spans":[]}]},{"Eyebrow":"embrace magnetic metrics","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=1066&h=600&fit=crop"},"Title":"envisioneer real-time technologies","Summary":[{"type":"paragraph","text":"Sunt commodo elit consectetur sint commodo reprehenderit sunt eu amet. Laboris magna non in irure aliquip incididunt deserunt nisi ut nulla qui aliquip incididunt nisi esse. Nostrud deserunt est sint anim pariatur laboris voluptate est proident id aliqua pariatur aliqua cupidatat.","spans":[]}]}],"primary":{},"id":"_TimelineImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineImages.storyName = 'Timeline - Images'
