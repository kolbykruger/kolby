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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"redefine synergistic infomediaries","Title":"empower virtual supply-chains","Summary":[{"type":"paragraph","text":"Eu adipisicing minim Lorem. Laboris exercitation in ullamco nisi eiusmod. Esse et minim aliquip Lorem.","spans":[]}]},{"Eyebrow":"unleash interactive e-business","Title":"transform holistic paradigms","Summary":[{"type":"paragraph","text":"Proident in cillum deserunt irure exercitation. Amet amet officia eiusmod irure quis tempor ea aute dolor.","spans":[]}]},{"Eyebrow":"harness compelling portals","Title":"empower cutting-edge mindshare","Summary":[{"type":"paragraph","text":"Sint dolore magna proident laborum sint ut ullamco irure occaecat ut.","spans":[]}]},{"Eyebrow":"embrace mission-critical blockchains","Title":"empower leading-edge convergence","Summary":[{"type":"paragraph","text":"In velit labore esse ad ut laboris mollit veniam. Mollit anim culpa sint labore magna esse nostrud. Qui nulla mollit ut nulla culpa ullamco laborum aute in quis id eiusmod.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"transition leading-edge mindshare","Title":"transition 24/365 niches","Summary":[{"type":"paragraph","text":"Commodo aliquip aliquip nulla excepteur quis laboris.","spans":[]}]},{"Eyebrow":"evolve ubiquitous e-commerce","Title":"visualize customized action-items","Summary":[{"type":"paragraph","text":"Et culpa eu occaecat id ullamco. Magna incididunt nulla adipisicing ipsum ea sunt anim aute officia do. Qui ipsum sunt sunt aliquip anim.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
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
      mock: {"variation":"timelineImages","name":"Timeline - Images","slice_type":"timeline","items":[{"Eyebrow":"mesh viral methodologies","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=1066&h=600&fit=crop"},"Title":"architect sexy models","Summary":[{"type":"paragraph","text":"Nisi nisi ut consectetur elit. Minim anim dolore tempor deserunt non esse irure magna minim. Veniam occaecat dolor dolore nisi aliqua dolor non velit laborum quis mollit culpa minim fugiat ad.","spans":[]}]},{"Eyebrow":"envisioneer dot-com platforms","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1066&h=600&fit=crop"},"Title":"harness leading-edge content","Summary":[{"type":"paragraph","text":"Deserunt Lorem veniam minim adipisicing. Ad occaecat commodo non est culpa tempor Lorem amet reprehenderit occaecat.","spans":[]}]},{"Eyebrow":"harness open-source e-markets","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=1066&h=600&fit=crop"},"Title":"extend interactive web-readiness","Summary":[{"type":"paragraph","text":"Anim consectetur ad fugiat labore qui officia cillum consectetur.","spans":[]}]},{"Eyebrow":"matrix transparent web services","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=1066&h=600&fit=crop"},"Title":"incentivize frictionless networks","Summary":[{"type":"paragraph","text":"Proident anim adipisicing ex nisi sint laboris dolore eiusmod consectetur ad in nisi. Culpa occaecat nulla sunt cupidatat incididunt elit.","spans":[]}]},{"Eyebrow":"redefine synergistic niches","Image":{"dimensions":{"width":1066,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=1066&h=600&fit=crop"},"Title":"e-enable killer schemas","Summary":[{"type":"paragraph","text":"Lorem et et consequat tempor magna amet sit exercitation Lorem ullamco in exercitation magna adipisicing. Sint Lorem eiusmod aliqua mollit veniam sint qui exercitation pariatur. Mollit duis est Lorem consequat esse dolor laborum nulla do dolore reprehenderit et dolor.","spans":[]}]}],"primary":{},"id":"_TimelineImages"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineImages.storyName = 'Timeline - Images'
