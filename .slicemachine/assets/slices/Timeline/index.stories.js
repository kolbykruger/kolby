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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"syndicate cross-media methodologies","Title":"generate out-of-the-box metrics","Summary":[{"type":"paragraph","text":"Nulla non labore ut minim consectetur incididunt ea est consectetur ea id voluptate eiusmod laboris. Occaecat enim cillum magna nisi ad. Aute ipsum sint ea nostrud ad aliqua ullamco eiusmod commodo commodo culpa commodo minim.","spans":[]}]},{"Eyebrow":"incentivize dot-com metrics","Title":"reintermediate value-added deliverables","Summary":[{"type":"paragraph","text":"Tempor amet tempor dolor duis. Pariatur occaecat aute Lorem sit Lorem irure nostrud. Aliqua non aliquip in quis ex id do adipisicing.","spans":[]}]},{"Eyebrow":"whiteboard bleeding-edge models","Title":"grow cross-media channels","Summary":[{"type":"paragraph","text":"Magna eu in voluptate sint tempor id occaecat. Proident voluptate nostrud veniam elit enim voluptate excepteur ad culpa magna laboris aliquip fugiat culpa esse. Tempor sunt id magna tempor tempor officia.","spans":[]}]},{"Eyebrow":"streamline 24/7 communities","Title":"reintermediate clicks-and-mortar web-readiness","Summary":[{"type":"paragraph","text":"Ullamco irure eiusmod labore. Est sint aliqua veniam magna minim quis aliquip aliqua dolor sit aliqua. Incididunt enim labore labore deserunt.","spans":[]}]},{"Eyebrow":"productize cutting-edge channels","Title":"leverage cross-media relationships","Summary":[{"type":"paragraph","text":"Id magna consequat pariatur veniam nulla aute. Proident incididunt eiusmod ea excepteur Lorem nostrud exercitation irure velit voluptate quis deserunt fugiat.","spans":[]}]},{"Eyebrow":"architect cutting-edge paradigms","Title":"productize best-of-breed supply-chains","Summary":[{"type":"paragraph","text":"Anim officia ut nostrud labore aute magna nulla excepteur exercitation laborum ipsum laboris cillum. Irure est velit qui est sint. Nostrud aute nulla eu labore fugiat non duis laboris cupidatat Lorem proident mollit ipsum sint.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"implement integrated mindshare","Title":"facilitate wireless ROI","Summary":[{"type":"paragraph","text":"Cupidatat officia qui nisi. Cupidatat aliqua aliquip qui ipsum exercitation in incididunt eiusmod minim commodo Lorem adipisicing nulla id officia. Proident labore deserunt ullamco consequat reprehenderit ea sunt sit deserunt aliquip nostrud quis in.","spans":[]}]},{"Eyebrow":"deploy open-source users","Title":"deploy cross-platform channels","Summary":[{"type":"paragraph","text":"Ut adipisicing labore in minim sint duis. Incididunt labore aute veniam. Aliqua aliqua ipsum et sit duis Lorem magna do cillum in commodo ullamco culpa aliqua.","spans":[]}]},{"Eyebrow":"drive sexy platforms","Title":"strategize frictionless relationships","Summary":[{"type":"paragraph","text":"Adipisicing consequat voluptate dolor nulla exercitation commodo tempor aliquip est ut.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineVertical.storyName = 'Timeline - Vertical'
