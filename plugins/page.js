import Vue from 'vue'

var page = {
    methods: {
        getLinks() {
            // const links = document.querySelectorAll('[data-magnetic]')
            // console.log(links)
        }
    },
    mounted() {
        //this.getLinks()
    },
    watch: {
        $route() {
            //this.getLinks()
        }
    }
}

Vue.mixin(page)
