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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"expedite wireless solutions","Eyebrow":"orchestrate compelling e-tailers","title":[{"type":"heading2","text":"Iterate enterprise initiatives","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat ad cupidatat ullamco anim ex ad amet nisi aliquip sint aliqua nisi et ex quis. Incididunt tempor consectetur ad fugiat ea ex sunt fugiat enim proident aute ipsum.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"benchmark front-end niches","Outline":"brand enterprise models"},{"Name":"repurpose efficient e-markets","Outline":"scale granular e-markets"},{"Name":"evolve killer users","Outline":"engineer customized functionalities"}],"primary":{"Index":9942,"Eyebrow":"transition enterprise deliverables","title":[{"type":"heading2","text":"Implement distributed users","spans":[]}],"description":[{"type":"paragraph","text":"Labore ea qui velit eiusmod nisi pariatur adipisicing dolor excepteur. Do dolor voluptate cupidatat ea.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
