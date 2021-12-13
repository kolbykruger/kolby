import MyComponent from '../../../../slices/List';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/List'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Minim adipisicing ex enim minim veniam commodo sunt consequat aliquip consectetur duis. Enim eiusmod eiusmod aute tempor occaecat eu voluptate non cupidatat.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Quis eu duis irure consectetur aute est laborum commodo. Pariatur id duis sint adipisicing ullamco aliquip. Labore velit adipisicing eiusmod duis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Enim veniam ad commodo do nostrud in aliqua. Qui consectetur laboris et cupidatat quis excepteur adipisicing nulla. Eiusmod officia minim eu qui exercitation incididunt sint Lorem culpa in est voluptate officia magna quis.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Enim aliquip cillum do velit magna pariatur ullamco minim pariatur incididunt aliqua aliqua culpa. Qui consequat nisi laboris proident eu adipisicing in nulla occaecat. Et fugiat deserunt est amet laboris quis occaecat minim occaecat ipsum duis et consectetur anim cupidatat.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _OrderedList = () => ({
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
      mock: {"variation":"orderedList","name":"Ordered List","slice_type":"list","items":[{"Item":[{"type":"paragraph","text":"Adipisicing et velit ullamco veniam sunt eu cillum in nisi. Anim tempor pariatur aliqua dolor eiusmod et occaecat Lorem esse eu.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Culpa nostrud quis adipisicing nulla sunt duis proident officia qui deserunt officia ullamco. Minim labore cillum exercitation nulla. Qui adipisicing non nulla eu anim dolore eu labore minim reprehenderit.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Cupidatat Lorem adipisicing occaecat cillum anim esse exercitation sint voluptate voluptate.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Do tempor tempor ullamco dolor elit reprehenderit et. Labore nisi minim excepteur irure officia sunt occaecat ullamco laborum. Ex ut ad velit quis qui duis ipsum duis magna irure est mollit ex.","spans":[]}]},{"Item":[{"type":"paragraph","text":"Veniam aliqua exercitation officia aliqua laboris incididunt in velit magna elit laborum quis culpa ad magna. Exercitation cillum exercitation voluptate quis fugiat enim nisi ad pariatur ullamco pariatur.","spans":[]}]}],"primary":{},"id":"_OrderedList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OrderedList.storyName = 'Ordered List'
