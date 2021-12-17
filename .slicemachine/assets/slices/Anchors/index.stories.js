import MyComponent from '../../../../slices/Anchors';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Anchors'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"anchors","items":[{"Index":"incentivize strategic metrics","Name":"enable global platforms","Anchor":"innovate dynamic metrics"},{"Index":"leverage real-time relationships","Name":"leverage holistic initiatives","Anchor":"grow real-time channels"},{"Index":"e-enable best-of-breed channels","Name":"mesh distributed mindshare","Anchor":"whiteboard best-of-breed deliverables"}],"primary":{"Label":"disintermediate robust models","Page":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
