import MyComponent from '../../../../slices/Features';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Features'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"features","items":[{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"empower real-time models","Title":"brand front-end partnerships","Description":[{"type":"paragraph","text":"Duis labore est cupidatat eu amet fugiat velit veniam ipsum enim officia ullamco. Nulla aute ad occaecat culpa.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"integrate world-class functionalities","Title":"harness leading-edge methodologies","Description":[{"type":"paragraph","text":"Duis elit nostrud et est.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"utilize ubiquitous convergence","Title":"strategize wireless e-commerce","Description":[{"type":"paragraph","text":"Tempor mollit fugiat quis ut in qui.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Synthesize holistic solutions","spans":[]}],"description":[{"type":"paragraph","text":"Exercitation incididunt id amet ea fugiat dolor non ut laborum minim. Minim ullamco exercitation dolore pariatur nisi enim mollit velit est pariatur voluptate aliquip.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
