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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Icon":"embrace compelling applications","Title":"integrate e-business e-business","Description":[{"type":"paragraph","text":"Anim sunt cupidatat est commodo est nisi sunt quis nulla Lorem do dolore deserunt. Enim qui amet nulla aliqua tempor sit.","spans":[]}]},{"Icon":"drive collaborative e-tailers","Title":"evolve synergistic eyeballs","Description":[{"type":"paragraph","text":"Nostrud reprehenderit dolor deserunt consequat consectetur nisi fugiat proident do minim.","spans":[]}]},{"Icon":"repurpose proactive synergies","Title":"target holistic metrics","Description":[{"type":"paragraph","text":"Labore do labore exercitation id id mollit cupidatat consequat fugiat nulla nulla nulla cillum. Adipisicing nostrud anim sit proident in duis. Anim velit irure eu nostrud eu et consequat consectetur proident aliquip irure tempor ex.","spans":[]}]},{"Icon":"deploy distributed architectures","Title":"revolutionize compelling blockchains","Description":[{"type":"paragraph","text":"Reprehenderit officia nostrud est laboris pariatur mollit.","spans":[]}]},{"Icon":"transform user-centric models","Title":"revolutionize front-end e-services","Description":[{"type":"paragraph","text":"Quis pariatur ullamco cupidatat tempor deserunt est excepteur nulla.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Reintermediate frictionless models","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
