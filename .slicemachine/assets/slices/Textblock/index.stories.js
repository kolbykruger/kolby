import MyComponent from '../../../../slices/Textblock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Textblock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"synergize bricks-and-clicks content","Eyebrow":"deliver intuitive portals","title":[{"type":"heading2","text":"Disintermediate plug-and-play infrastructures","spans":[]}],"description":[{"type":"paragraph","text":"Est incididunt excepteur exercitation.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TextblockWithGridList = () => ({
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"benchmark world-class infrastructures","Outline":"iterate wireless ROI"},{"Name":"synergize dynamic web-readiness","Outline":"innovate efficient infrastructures"},{"Name":"exploit 24/365 schemas","Outline":"enable front-end niches"},{"Name":"unleash innovative infrastructures","Outline":"enhance bricks-and-clicks ROI"}],"primary":{"Index":"recontextualize compelling interfaces","Eyebrow":"harness impactful systems","title":[{"type":"heading2","text":"Cultivate distributed solutions","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit exercitation ad mollit veniam duis adipisicing ipsum reprehenderit magna duis duis elit.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
