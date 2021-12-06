import Vue from 'vue'

var navigation = {
    watch: {
        $route() {
            this.$router.onReady(() => {
                console.log('READY!')
            })
        },
    },
}

Vue.mixin(navigation)
