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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"textblock","items":[],"primary":{"Index":"orchestrate sticky niches","Eyebrow":"incentivize efficient portals","title":[{"type":"heading2","text":"Seize B2B e-business","spans":[]}],"description":[{"type":"paragraph","text":"Culpa sunt ullamco tempor dolore elit nostrud. Dolor reprehenderit incididunt magna proident. Ut excepteur minim pariatur consectetur anim.","spans":[]}]},"id":"_DefaultSlice"}
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
      mock: {"variation":"textblockWithGridList","name":"Textblock - with Grid List","slice_type":"textblock","items":[{"Name":"seize out-of-the-box partnerships","Outline":"harness vertical synergies"},{"Name":"transition sticky action-items","Outline":"reintermediate 24/7 solutions"},{"Name":"engage cross-platform systems","Outline":"envisioneer granular technologies"}],"primary":{"Index":"mesh global functionalities","Eyebrow":"cultivate transparent experiences","title":[{"type":"heading2","text":"Mesh proactive blockchains","spans":[]}],"description":[{"type":"paragraph","text":"Minim non id laboris fugiat ea dolore enim officia qui ut. Laboris est fugiat cillum. Ullamco in labore sit voluptate culpa nulla labore aliqua excepteur.","spans":[]}]},"id":"_TextblockWithGridList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TextblockWithGridList.storyName = 'Textblock - with Grid List'
