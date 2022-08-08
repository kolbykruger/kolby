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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"Index":"stared","Eyebrow":"attack","title":[{"type":"heading2","text":"Terrible","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit cupidatat excepteur cupidatat minim ut elit quis consequat commodo et magna adipisicing.","spans":[]}]},"slice_type":"textblock","id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","version":"sktwi1xtmkfgx8626","items":[{"Name":"as","Outline":"help","summary":[{"type":"paragraph","text":"Duis laboris cupidatat ea est aute in occaecat eiusmod nisi ullamco elit. Esse magna labore sint. Sunt cupidatat excepteur laborum labore voluptate eiusmod eu cupidatat velit elit cupidatat mollit.","spans":[]}]}],"primary":{"Index":"loose","Eyebrow":"effect","title":[{"type":"heading2","text":"About","spans":[]}],"description":[{"type":"paragraph","text":"Velit in eiusmod eu culpa occaecat est eu consequat irure in commodo magna aliquip. Occaecat id proident amet labore ex duis ad deserunt consequat eiusmod. Labore irure mollit consequat cillum sunt.","spans":[]}]},"slice_type":"textblock","id":"_TextblockWithGridList"}
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
      mock: {"variation":"textblockWithGridButton","version":"sktwi1xtmkfgx8626","items":[{"Name":"parent","Outline":"tribe","summary":[{"type":"paragraph","text":"Labore consectetur magna esse in ex ullamco tempor. Officia enim officia eiusmod est dolore excepteur ipsum ea velit.","spans":[]}],"button":{"link_type":"Web","url":"http://google.com"},"button_text":"send"}],"primary":{"Index":"usual","Eyebrow":"twelve","title":[{"type":"heading2","text":"Unhappy","spans":[]}],"description":[{"type":"paragraph","text":"Non ex fugiat ipsum elit id voluptate veniam elit ullamco duis incididunt voluptate ut. Labore officia incididunt adipisicing nisi eu culpa consectetur.","spans":[]}]},"slice_type":"textblock","id":"_TextblockWithGridButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridButton.storyName = ''
