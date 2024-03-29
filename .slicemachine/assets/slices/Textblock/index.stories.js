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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"Index":"ask","Eyebrow":"dozen","title":[{"type":"heading2","text":"Carried","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit ipsum quis nulla. In aliqua labore in dolor minim et ea. Et esse irure labore.","spans":[]}]},"slice_type":"textblock","id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''

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
      mock: {"variation":"textblockWithGridList","version":"sktwi1xtmkfgx8626","items":[{"Name":"bag","Outline":"repeat","summary":[{"type":"paragraph","text":"Fugiat esse ipsum laboris est non.","spans":[]}]}],"primary":{"Index":"particularly","Eyebrow":"ocean","title":[{"type":"heading2","text":"Public","spans":[]}],"description":[{"type":"paragraph","text":"Nulla labore sunt aliquip id Lorem ullamco veniam incididunt.","spans":[]}]},"slice_type":"textblock","id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = ''

export const _TextblockWithGridButton = () => ({
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
      mock: {"variation":"textblockWithGridButton","version":"sktwi1xtmkfgx8626","items":[{"Name":"public","Outline":"experiment","summary":[{"type":"paragraph","text":"Cupidatat non nulla aliqua et proident aute. Ad do nulla ex voluptate proident ullamco fugiat id dolore laboris.","spans":[]}],"button":{"link_type":"Web","url":"https://slicemachine.dev"},"button_text":"hall"}],"primary":{"Index":"guess","Eyebrow":"steam","title":[{"type":"heading2","text":"Picture","spans":[]}],"description":[{"type":"paragraph","text":"Ad deserunt nulla quis. Id excepteur consectetur laborum ut non incididunt veniam aute laborum proident anim qui consequat commodo dolore. Consectetur nostrud consequat excepteur tempor dolor laboris incididunt reprehenderit est minim eiusmod excepteur reprehenderit magna.","spans":[]}]},"slice_type":"textblock","id":"_TextblockWithGridButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridButton.storyName = ''
