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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"brand clicks-and-mortar eyeballs","Title":"envisioneer dynamic experiences","Summary":[{"type":"paragraph","text":"Est dolor nostrud cupidatat quis laboris cupidatat ex fugiat enim tempor laborum amet consectetur est ipsum. Eu enim eu nostrud. Ex fugiat Lorem excepteur ex culpa veniam dolore reprehenderit est exercitation.","spans":[]}]},{"Eyebrow":"innovate integrated functionalities","Title":"matrix e-business infomediaries","Summary":[{"type":"paragraph","text":"Irure sit ea amet cillum commodo anim. Dolor eu dolore sint laborum non ullamco in dolore. Excepteur sunt elit mollit in labore.","spans":[]}]},{"Eyebrow":"expedite viral solutions","Title":"strategize cross-platform channels","Summary":[{"type":"paragraph","text":"Elit aute in sint officia amet nostrud incididunt in.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"optimize visionary architectures","Title":"leverage web-enabled deliverables","Summary":[{"type":"paragraph","text":"Voluptate veniam veniam id cillum laborum et cillum ea minim nisi occaecat magna occaecat cupidatat. Lorem qui enim anim esse duis.","spans":[]}]},{"Eyebrow":"enhance compelling vortals","Title":"disintermediate sticky partnerships","Summary":[{"type":"paragraph","text":"Labore culpa deserunt dolor ad quis reprehenderit. Irure incididunt incididunt id incididunt velit.","spans":[]}]},{"Eyebrow":"harness customized infomediaries","Title":"visualize proactive web services","Summary":[{"type":"paragraph","text":"Occaecat dolor eiusmod velit eiusmod veniam amet laboris proident fugiat cillum dolore fugiat ad eu fugiat. Commodo labore cillum occaecat non ipsum amet duis eiusmod consectetur enim do mollit exercitation nisi.","spans":[]}]},{"Eyebrow":"repurpose cross-media applications","Title":"deliver visionary experiences","Summary":[{"type":"paragraph","text":"Irure ullamco veniam est. Fugiat velit do eiusmod ea officia duis qui. Fugiat sit sunt tempor Lorem labore anim quis Lorem labore.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
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
      mock: {"variation":"timelineImages","name":"Timeline - Images","slice_type":"timeline","items":[{"Eyebrow":"iterate open-source e-services","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=1066&h=600&fit=crop"},"Title":"orchestrate wireless web services","Summary":[{"type":"paragraph","text":"Non fugiat culpa nulla amet ex cupidatat pariatur Lorem consectetur eiusmod minim non aute.","spans":[]}]},{"Eyebrow":"transform mission-critical e-markets","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1066&h=600&fit=crop"},"Title":"redefine distributed web-readiness","Summary":[{"type":"paragraph","text":"Qui consectetur adipisicing eu reprehenderit sit labore fugiat officia eiusmod cupidatat anim aliqua nulla est.","spans":[]}]},{"Eyebrow":"strategize leading-edge mindshare","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=1066&h=600&fit=crop"},"Title":"repurpose best-of-breed content","Summary":[{"type":"paragraph","text":"Quis sint aliquip amet enim. Reprehenderit magna nisi irure pariatur consequat proident ad ipsum aliquip nostrud cillum deserunt aute.","spans":[]}]},{"Eyebrow":"incubate open-source e-commerce","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=1066&h=600&fit=crop"},"Title":"synthesize scalable mindshare","Summary":[{"type":"paragraph","text":"Ullamco ea officia minim incididunt occaecat.","spans":[]}]}],"primary":{},"id":"_TimelineImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineImages.storyName = 'Timeline - Images'
