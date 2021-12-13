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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"synthesize integrated systems","Title":"cultivate global infrastructures","Summary":[{"type":"paragraph","text":"Fugiat consequat ea tempor. Aliqua laborum labore eiusmod culpa anim sint irure exercitation cillum nostrud.","spans":[]}]},{"Eyebrow":"target visionary deliverables","Title":"mesh mission-critical content","Summary":[{"type":"paragraph","text":"Dolore ea labore commodo qui Lorem est. Adipisicing exercitation sunt ea do consequat enim.","spans":[]}]},{"Eyebrow":"incentivize extensible e-markets","Title":"architect next-generation action-items","Summary":[{"type":"paragraph","text":"Cupidatat proident commodo voluptate voluptate reprehenderit eu eu excepteur dolore nostrud. Pariatur ea in elit ad adipisicing exercitation occaecat reprehenderit amet id nisi. Quis cillum do dolor.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"integrate proactive methodologies","Title":"innovate user-centric e-markets","Summary":[{"type":"paragraph","text":"Aliquip irure sit aliquip eu pariatur anim et Lorem occaecat.","spans":[]}]},{"Eyebrow":"facilitate bleeding-edge content","Title":"expedite vertical systems","Summary":[{"type":"paragraph","text":"Aute aliqua fugiat tempor exercitation ipsum dolore commodo amet quis aute laboris. Sunt commodo laboris ea.","spans":[]}]},{"Eyebrow":"engineer one-to-one experiences","Title":"visualize cross-media portals","Summary":[{"type":"paragraph","text":"Consequat nulla laborum ad consectetur qui ipsum esse amet. Magna pariatur aliqua non. Enim excepteur pariatur ad tempor consectetur eiusmod laborum eiusmod esse adipisicing occaecat pariatur proident.","spans":[]}]},{"Eyebrow":"transition proactive solutions","Title":"embrace back-end e-commerce","Summary":[{"type":"paragraph","text":"Sunt id proident occaecat adipisicing incididunt dolore ut commodo. Incididunt exercitation culpa laborum laboris ad non est.","spans":[]}]},{"Eyebrow":"syndicate intuitive blockchains","Title":"streamline 24/365 metrics","Summary":[{"type":"paragraph","text":"Exercitation nostrud quis cupidatat excepteur labore non duis qui quis dolor laboris deserunt occaecat commodo occaecat. Ex aliquip aliqua laborum irure voluptate. Occaecat ad elit eiusmod do.","spans":[]}]},{"Eyebrow":"envisioneer viral architectures","Title":"incubate world-class platforms","Summary":[{"type":"paragraph","text":"Lorem ut enim enim. Est incididunt exercitation minim laborum cupidatat veniam ea aliqua aliquip pariatur et veniam amet.","spans":[]}]},{"Eyebrow":"envisioneer rich e-business","Title":"drive end-to-end partnerships","Summary":[{"type":"paragraph","text":"Ullamco dolore exercitation dolor excepteur non duis ut nulla. Ipsum ipsum proident sint aute fugiat aliquip laboris elit nostrud occaecat deserunt aute magna voluptate. Tempor tempor esse magna adipisicing ipsum et laboris veniam id qui elit.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
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
      mock: {"variation":"timelineImages","name":"Timeline - Images","slice_type":"timeline","items":[{"Eyebrow":"deploy seamless web services","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=1066&h=600&fit=crop"},"Title":"deploy out-of-the-box ROI","Summary":[{"type":"paragraph","text":"Laborum enim esse duis elit eu qui veniam exercitation adipisicing laborum fugiat cupidatat irure et.","spans":[]}]},{"Eyebrow":"cultivate innovative paradigms","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=1066&h=600&fit=crop"},"Title":"scale open-source initiatives","Summary":[{"type":"paragraph","text":"Anim minim deserunt veniam esse ad nisi ea incididunt qui nisi commodo commodo in magna proident.","spans":[]}]},{"Eyebrow":"synthesize virtual relationships","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=1066&h=600&fit=crop"},"Title":"scale customized applications","Summary":[{"type":"paragraph","text":"Voluptate fugiat quis irure officia cupidatat qui et ullamco ad occaecat ad. Fugiat est ex culpa dolor. Culpa incididunt magna pariatur eu do.","spans":[]}]},{"Eyebrow":"innovate interactive web services","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=1066&h=600&fit=crop"},"Title":"disintermediate bricks-and-clicks communities","Summary":[{"type":"paragraph","text":"Elit dolore laborum duis ex anim veniam sint cillum tempor sunt. Commodo irure sit tempor.","spans":[]}]},{"Eyebrow":"disintermediate holistic ROI","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=1066&h=600&fit=crop"},"Title":"benchmark proactive vortals","Summary":[{"type":"paragraph","text":"Sint ea esse occaecat esse aliquip duis excepteur aliqua mollit sunt amet. Nostrud officia et officia sit est officia velit cupidatat nisi labore Lorem.","spans":[]}]}],"primary":{},"id":"_TimelineImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineImages.storyName = 'Timeline - Images'
