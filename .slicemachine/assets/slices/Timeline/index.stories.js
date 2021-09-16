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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"optimize cross-media interfaces","Title":"monetize global partnerships","Summary":[{"type":"paragraph","text":"Enim qui ea nisi commodo aliquip tempor incididunt excepteur.","spans":[]}]},{"Eyebrow":"redefine extensible paradigms","Title":"unleash leading-edge markets","Summary":[{"type":"paragraph","text":"Sit culpa velit est voluptate minim eiusmod sunt in elit quis aliqua eiusmod aliqua. Esse esse minim dolore id amet.","spans":[]}]},{"Eyebrow":"exploit seamless bandwidth","Title":"strategize holistic ROI","Summary":[{"type":"paragraph","text":"Irure dolor veniam eu enim cillum excepteur deserunt proident ad ex. Commodo duis occaecat irure deserunt aliqua.","spans":[]}]},{"Eyebrow":"engineer sexy users","Title":"morph user-centric interfaces","Summary":[{"type":"paragraph","text":"Ut ex ea eiusmod do incididunt enim esse velit. Laborum voluptate dolore proident non ad aute ea occaecat nulla reprehenderit culpa.","spans":[]}]},{"Eyebrow":"morph world-class e-services","Title":"scale distributed e-services","Summary":[{"type":"paragraph","text":"Commodo Lorem fugiat culpa eiusmod in qui. Ea minim commodo esse sunt exercitation consequat.","spans":[]}]},{"Eyebrow":"strategize sexy experiences","Title":"visualize vertical e-commerce","Summary":[{"type":"paragraph","text":"Laborum esse Lorem sunt magna est esse nisi pariatur irure. Veniam id commodo magna ut ea anim sint nisi in id.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"drive efficient convergence","Title":"synergize global interfaces","Summary":[{"type":"paragraph","text":"Exercitation eiusmod culpa voluptate sunt pariatur eu nostrud. Sit consectetur proident commodo est sunt cupidatat cupidatat. Nisi ipsum non minim ullamco non amet aute consequat amet commodo culpa et velit et.","spans":[]}]},{"Eyebrow":"expedite vertical e-tailers","Title":"reintermediate interactive partnerships","Summary":[{"type":"paragraph","text":"Eu labore cupidatat incididunt nostrud duis elit voluptate proident eu non adipisicing cupidatat fugiat deserunt labore. Anim consectetur in sit commodo quis in culpa.","spans":[]}]},{"Eyebrow":"revolutionize strategic initiatives","Title":"revolutionize cutting-edge networks","Summary":[{"type":"paragraph","text":"Fugiat Lorem quis id est do irure nulla labore do est. Consectetur nulla non id in consequat.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineVertical.storyName = 'Timeline - Vertical'
