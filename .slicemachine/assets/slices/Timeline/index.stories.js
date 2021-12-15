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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"matrix enterprise bandwidth","Title":"synthesize revolutionary portals","Summary":[{"type":"paragraph","text":"Nisi nulla ad adipisicing adipisicing veniam velit laboris proident. Labore cupidatat ad et consectetur non aliquip consectetur mollit consequat id deserunt esse laboris aliqua Lorem. Duis ullamco reprehenderit ut magna reprehenderit nulla aliqua id adipisicing ipsum in cillum culpa do.","spans":[]}]},{"Eyebrow":"repurpose open-source infomediaries","Title":"e-enable out-of-the-box relationships","Summary":[{"type":"paragraph","text":"Ex magna magna ea deserunt mollit sint officia cillum voluptate. Elit duis sit pariatur quis non elit cillum labore. Adipisicing proident anim aute duis proident in nisi incididunt reprehenderit officia eu do do eu.","spans":[]}]},{"Eyebrow":"implement ubiquitous methodologies","Title":"streamline turn-key infomediaries","Summary":[{"type":"paragraph","text":"Dolore Lorem duis et. Magna voluptate tempor quis minim enim tempor anim enim dolor et cupidatat velit ea.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"whiteboard end-to-end platforms","Title":"repurpose sexy eyeballs","Summary":[{"type":"paragraph","text":"Do adipisicing veniam mollit aute velit laborum. Voluptate sit sunt occaecat nulla amet. Aute duis occaecat deserunt aliqua ipsum elit irure ut nulla laborum ea enim ullamco enim.","spans":[]}]},{"Eyebrow":"productize user-centric mindshare","Title":"monetize one-to-one metrics","Summary":[{"type":"paragraph","text":"Velit amet occaecat officia est anim sunt aliqua laborum eiusmod mollit irure ea. Voluptate in occaecat culpa et sint enim dolor est voluptate pariatur incididunt cillum.","spans":[]}]},{"Eyebrow":"incubate strategic networks","Title":"optimize next-generation e-commerce","Summary":[{"type":"paragraph","text":"Adipisicing sunt aute irure.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
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
      mock: {"variation":"timelineImages","name":"Timeline - Images","slice_type":"timeline","items":[{"Eyebrow":"leverage web-enabled bandwidth","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=1066&h=600&fit=crop"},"Title":"deploy strategic e-services","Summary":[{"type":"paragraph","text":"Mollit veniam tempor sunt elit culpa irure. Nisi et id esse mollit ipsum fugiat excepteur nisi. Incididunt amet minim sint adipisicing minim nulla in amet.","spans":[]}]},{"Eyebrow":"matrix revolutionary systems","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=1066&h=600&fit=crop"},"Title":"drive vertical partnerships","Summary":[{"type":"paragraph","text":"Culpa aliquip esse nostrud nostrud cupidatat mollit sint ad eu nisi nulla ad ipsum.","spans":[]}]},{"Eyebrow":"reintermediate value-added mindshare","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=1066&h=600&fit=crop"},"Title":"exploit out-of-the-box ROI","Summary":[{"type":"paragraph","text":"Elit est duis excepteur cillum eiusmod laborum laborum esse dolore.","spans":[]}]}],"primary":{},"id":"_TimelineImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineImages.storyName = 'Timeline - Images'
