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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{"Eyebrow":"biggest","Title":"value","Summary":[{"type":"paragraph","text":"Irure et fugiat Lorem nisi aliquip ipsum commodo adipisicing Lorem occaecat Lorem. Fugiat occaecat quis sit aute anim ea occaecat id. Lorem irure qui officia quis voluptate eu consectetur.","spans":[]}]}],"primary":{},"slice_type":"timeline","id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''

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
      mock: {"variation":"timelineVertical","version":"sktwi1xtmkfgx8626","items":[{"Eyebrow":"plant","Title":"unhappy","Summary":[{"type":"paragraph","text":"Deserunt nostrud exercitation quis non exercitation sint aliqua cillum quis sint consectetur cupidatat minim. Incididunt sint incididunt deserunt occaecat dolore officia do ad.","spans":[]}]}],"primary":{},"slice_type":"timeline","id":"_TimelineVertical"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineVertical.storyName = ''

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
      mock: {"variation":"timelineImages","version":"sktwi1xtmkfgx8626","items":[{"Eyebrow":"wooden","Image":{"dimensions":{"width":1066,"height":600},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869"},"Title":"together","Summary":[{"type":"paragraph","text":"Lorem in exercitation elit commodo in deserunt pariatur nulla ad.","spans":[]}]}],"primary":{},"slice_type":"timeline","id":"_TimelineImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineImages.storyName = ''
