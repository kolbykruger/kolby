import MyComponent from '../../../../slices/Timeline';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Timeline'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"timeline","items":[{"Eyebrow":"leverage plug-and-play supply-chains","Title":"implement impactful channels","Summary":[{"type":"paragraph","text":"Voluptate consectetur consequat veniam in consequat cillum pariatur aute aliquip et. Amet laborum adipisicing reprehenderit occaecat cupidatat aute eu nostrud mollit mollit tempor cupidatat ad. Esse duis incididunt consequat Lorem do.","spans":[]}]},{"Eyebrow":"facilitate collaborative methodologies","Title":"seize out-of-the-box platforms","Summary":[{"type":"paragraph","text":"Occaecat velit fugiat aute magna aliquip. Dolor reprehenderit do incididunt anim laboris incididunt duis ex excepteur et sint ex aliqua sint ea.","spans":[]}]},{"Eyebrow":"target enterprise infomediaries","Title":"reintermediate vertical e-business","Summary":[{"type":"paragraph","text":"Laborum deserunt Lorem esse cillum dolore adipisicing.","spans":[]}]},{"Eyebrow":"synthesize extensible networks","Title":"redefine collaborative content","Summary":[{"type":"paragraph","text":"Id minim nisi elit ipsum tempor. Est pariatur consequat adipisicing consectetur voluptate ex excepteur.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TimelineVertical = () => ({
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
      mock: {"variation":"timelineVertical","name":"Timeline - Vertical","slice_type":"timeline","items":[{"Eyebrow":"synergize back-end initiatives","Title":"repurpose 24/7 applications","Summary":[{"type":"paragraph","text":"Mollit velit mollit nulla sint quis do irure consectetur anim commodo adipisicing magna amet ea proident.","spans":[]}]},{"Eyebrow":"matrix turn-key deliverables","Title":"architect granular e-commerce","Summary":[{"type":"paragraph","text":"Ad excepteur commodo velit qui ad enim anim aliquip cupidatat reprehenderit do culpa fugiat quis. Eiusmod incididunt id tempor deserunt excepteur ea excepteur culpa et. Qui veniam sint occaecat est irure nostrud veniam eiusmod culpa quis eu culpa et.","spans":[]}]}],"primary":{},"id":"_TimelineVertical"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TimelineVertical.storyName = 'Timeline - Vertical'
