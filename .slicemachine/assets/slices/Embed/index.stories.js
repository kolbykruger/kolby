import MyComponent from '../../../../slices/Embed';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Embed'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"embed","items":[],"primary":{"Embed":{"url":"https://twitter.com/prismicio/status/1354835716430319617","author_name":"Prismic","author_url":"https://twitter.com/prismicio","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Does anyone want to create a wildly popular website for discussing &#39;Wall Street Bets&#39; using Prismic?<br><br>It may or may not have to look a lot like <a href=\"https://twitter.com/hashtag/reddit?src=hash&amp;ref_src=twsrc%5Etfw\">#reddit</a> and we won&#39;t make it private.<br><br>Just asking for some friends...</p>&mdash; Prismic (@prismicio) <a href=\"https://twitter.com/prismicio/status/1354835716430319617?ref_src=twsrc%5Etfw\">January 28, 2021</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
