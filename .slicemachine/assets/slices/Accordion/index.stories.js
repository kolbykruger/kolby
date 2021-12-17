import MyComponent from '../../../../slices/Accordion';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Accordion'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Icon":"innovate bricks-and-clicks convergence","Title":"incubate integrated eyeballs","Description":[{"type":"paragraph","text":"Veniam laborum ullamco proident. Adipisicing ut mollit ullamco fugiat velit officia laborum velit culpa quis mollit Lorem duis duis Lorem. Aute duis veniam esse tempor consectetur.","spans":[]}]},{"Icon":"seize open-source blockchains","Title":"matrix mission-critical e-services","Description":[{"type":"paragraph","text":"Id reprehenderit esse sit et aliquip.","spans":[]}]},{"Icon":"brand frictionless bandwidth","Title":"leverage value-added convergence","Description":[{"type":"paragraph","text":"Et mollit commodo duis culpa fugiat fugiat reprehenderit ullamco exercitation quis.","spans":[]}]},{"Icon":"e-enable cross-platform solutions","Title":"recontextualize robust experiences","Description":[{"type":"paragraph","text":"Consequat exercitation nostrud eiusmod minim fugiat laboris. Incididunt do aute magna mollit nostrud aute nulla excepteur.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Evolve intuitive e-tailers","spans":[]}],"Description":[{"type":"paragraph","text":"Laborum do fugiat reprehenderit. Nostrud proident ullamco quis in quis et Lorem tempor id. Tempor occaecat occaecat reprehenderit.","spans":[]}],"Alignment":"Vertical"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
