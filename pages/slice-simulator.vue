<template>
    <SliceSimulator :state="state" #default="props">
        <SliceZone v-bind="props" />
    </SliceSimulator>
</template>

<script>
import { SliceSimulator } from '@prismicio/slice-simulator-vue'
import SliceZone from 'vue-slicezone'

import state from '~/.slicemachine/libraries-state.json'

export default {
    components: {
        SliceSimulator,
        SliceZone,
    },
    data() {
        return { state }
    },
    mounted() {
        document.body.id = 'simulating'
    },
}
</script>

<style lang="scss">
#simulating {
    .slice-simulator {
        background: c('background') !important;
    }

    .header,
    .footer,
    .splash {
        opacity: 0 !important;
    }
}
</style>
