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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"features","items":[{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"orchestrate scalable metrics","Title":"leverage frictionless web services","Description":[{"type":"paragraph","text":"Labore consequat adipisicing eiusmod et deserunt et ut excepteur.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"brand virtual channels","Title":"mesh seamless supply-chains","Description":[{"type":"paragraph","text":"Mollit nostrud nulla occaecat officia proident officia aliqua excepteur occaecat nisi eu consectetur cillum Lorem eiusmod. Laboris ullamco duis tempor nostrud sunt nulla.","spans":[]}]},{"Video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Icon":"harness wireless eyeballs","Title":"repurpose mission-critical ROI","Description":[{"type":"paragraph","text":"Aute ipsum dolore ipsum officia elit exercitation pariatur consectetur. Nisi voluptate nulla duis enim excepteur.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Seize e-business blockchains","spans":[]}],"description":[{"type":"paragraph","text":"Lorem nostrud nostrud fugiat adipisicing veniam quis labore labore. Tempor elit laborum ut laborum minim enim nulla id do pariatur ex est ullamco ad mollit. Eu Lorem ea duis fugiat amet sint voluptate.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
