<template>
    <main class="page" id="content">
        <div class="page-contents">
            <!-- <Introduction /> -->
            <!-- <slice-zone type="page" uid="home" /> -->
        </div>
    </main>
</template>

<script>
// import Introduction from '@/components/Introduction/Introduction.vue'
import { Animations } from '~/mixins/animations/Animations.js'
// import SliceZone from 'vue-slicezone'

export default {
    components: {
        // Introduction
        // SliceZone
    },
    mixins: [Animations],
}
</script>
