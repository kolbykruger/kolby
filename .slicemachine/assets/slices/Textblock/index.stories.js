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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":3600,"Eyebrow":"facilitate virtual synergies","title":[{"type":"heading2","text":"Architect robust e-tailers","spans":[]}],"description":[{"type":"paragraph","text":"Anim veniam enim nulla Lorem occaecat cupidatat aute reprehenderit dolore reprehenderit occaecat ut excepteur do et.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"incubate synergistic e-commerce","Outline":"enable robust content"},{"Name":"generate magnetic technologies","Outline":"brand synergistic technologies"},{"Name":"engage one-to-one web services","Outline":"benchmark synergistic portals"},{"Name":"seize innovative content","Outline":"brand impactful bandwidth"}],"primary":{"Index":5896,"Eyebrow":"aggregate value-added portals","title":[{"type":"heading2","text":"Reinvent synergistic mindshare","spans":[]}],"description":[{"type":"paragraph","text":"Sunt aliquip minim commodo Lorem exercitation ut eiusmod consequat. Ipsum aute aliquip id anim voluptate occaecat non pariatur ullamco enim Lorem cupidatat fugiat dolore culpa.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
