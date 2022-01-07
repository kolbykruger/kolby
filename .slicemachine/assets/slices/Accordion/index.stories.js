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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion","items":[{"Icon":"engage cross-platform synergies","Title":"disintermediate visionary platforms","Description":[{"type":"paragraph","text":"Velit laborum exercitation pariatur ut nulla pariatur ullamco consequat. Minim irure ut esse officia voluptate veniam aute anim excepteur anim velit tempor.","spans":[]}]},{"Icon":"harness viral communities","Title":"redefine impactful solutions","Description":[{"type":"paragraph","text":"Ullamco sunt occaecat nostrud adipisicing voluptate nisi nostrud.","spans":[]}]},{"Icon":"deliver 24/365 communities","Title":"matrix efficient synergies","Description":[{"type":"paragraph","text":"Excepteur exercitation cillum ut culpa Lorem nostrud excepteur eiusmod aliqua incididunt. Anim dolor velit nisi non proident esse irure id nostrud quis tempor in.","spans":[]}]},{"Icon":"grow proactive methodologies","Title":"matrix bleeding-edge ROI","Description":[{"type":"paragraph","text":"Do ut esse consectetur veniam elit aliquip irure labore commodo aliqua excepteur.","spans":[]}]},{"Icon":"transition robust deliverables","Title":"deliver seamless convergence","Description":[{"type":"paragraph","text":"In anim sunt dolor cillum incididunt sunt occaecat adipisicing aliqua elit ea sit.","spans":[]}]},{"Icon":"reintermediate transparent ROI","Title":"utilize world-class content","Description":[{"type":"paragraph","text":"Ut consectetur non do aliqua eiusmod amet cupidatat velit velit. Id sit ipsum nulla anim cupidatat quis.","spans":[]}]},{"Icon":"recontextualize 24/365 e-markets","Title":"target sexy bandwidth","Description":[{"type":"paragraph","text":"Eu culpa Lorem elit fugiat. Ut aliquip aliquip ea.","spans":[]}]}],"primary":{"heading":[{"type":"heading2","text":"Envisioneer plug-and-play solutions","spans":[]}],"Description":[{"type":"paragraph","text":"Duis ea minim deserunt incididunt proident sint cillum nulla sit aliquip adipisicing velit. Exercitation proident in cupidatat id in ad reprehenderit qui minim ex laborum quis do. Sit eiusmod incididunt ut irure.","spans":[]}],"Alignment":"Vertical","Color":"Primary"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
