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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"brand B2C content","Title":"incubate open-source content","Summary":[{"type":"paragraph","text":"Quis quis eu pariatur aute sint. Consectetur aute ad enim elit. Incididunt labore sit id minim officia eiusmod.","spans":[]}]},{"Eyebrow":"syndicate B2C bandwidth","Title":"syndicate wireless portals","Summary":[{"type":"paragraph","text":"Non minim cillum est veniam voluptate commodo duis. Mollit cupidatat duis elit sint consequat sunt quis. Do cillum nostrud officia fugiat magna eiusmod amet et.","spans":[]}]},{"Eyebrow":"maximize visionary web services","Title":"expedite cross-platform experiences","Summary":[{"type":"paragraph","text":"Exercitation excepteur ad ullamco dolor eu id sunt.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"extend killer relationships","Title":"architect 24/7 mindshare","Summary":[{"type":"paragraph","text":"Consectetur sunt minim magna cupidatat magna sint proident eu duis excepteur eiusmod consequat dolore officia.","spans":[]}]},{"Eyebrow":"repurpose next-generation web services","Title":"embrace magnetic blockchains","Summary":[{"type":"paragraph","text":"Elit cupidatat minim reprehenderit adipisicing tempor consectetur et in excepteur voluptate excepteur quis sit eiusmod.","spans":[]}]},{"Eyebrow":"incentivize synergistic experiences","Title":"evolve bricks-and-clicks web-readiness","Summary":[{"type":"paragraph","text":"Commodo irure sit dolor ad Lorem. Excepteur consectetur in minim fugiat excepteur ut ipsum ad cillum sit esse. Nostrud eiusmod dolore proident ipsum proident consectetur ullamco culpa culpa nulla eu.","spans":[]}]},{"Eyebrow":"enhance sexy models","Title":"unleash best-of-breed ROI","Summary":[{"type":"paragraph","text":"Aliquip ex et pariatur et officia nulla reprehenderit sit irure. Officia dolor Lorem ullamco veniam dolor aliquip fugiat nulla. Anim incididunt excepteur magna.","spans":[]}]},{"Eyebrow":"target world-class infomediaries","Title":"streamline extensible e-business","Summary":[{"type":"paragraph","text":"Cillum irure Lorem irure esse in.","spans":[]}]},{"Eyebrow":"visualize 24/7 vortals","Title":"envisioneer user-centric web-readiness","Summary":[{"type":"paragraph","text":"Ut eu cupidatat ea dolore dolore amet nostrud exercitation cillum veniam aliqua nulla laboris do commodo. Veniam exercitation pariatur exercitation et cillum. Proident proident eu irure ad mollit cupidatat aute.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
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
      mock: {"variation":"timelineImages","name":"Timeline - Images","slice_type":"timeline","items":[{"Eyebrow":"harness plug-and-play communities","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=1066&h=600&fit=crop"},"Title":"visualize one-to-one ROI","Summary":[{"type":"paragraph","text":"Nisi deserunt eiusmod ex Lorem. Irure nisi nostrud veniam fugiat reprehenderit fugiat non aliquip velit ut Lorem velit.","spans":[]}]},{"Eyebrow":"scale wireless networks","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=1066&h=600&fit=crop"},"Title":"evolve 24/365 deliverables","Summary":[{"type":"paragraph","text":"Ad laboris anim nulla consectetur eu laboris aliquip cillum ut ad anim ex aliqua reprehenderit ut. Reprehenderit exercitation sint sit proident.","spans":[]}]},{"Eyebrow":"empower value-added convergence","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=1066&h=600&fit=crop"},"Title":"evolve sexy technologies","Summary":[{"type":"paragraph","text":"Ad voluptate nostrud culpa est id minim minim quis cillum non eu tempor id velit Lorem. Sunt duis consectetur nisi veniam reprehenderit cupidatat laboris.","spans":[]}]}],"primary":{},"id":"_TimelineImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineImages.storyName = 'Timeline - Images'
