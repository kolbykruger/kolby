<template>
    <main class="page">
        <Introduction />
        <Career />
        <slice-zone type="page" uid="home" />
    </main>
</template>

<script>
import Introduction from '@/components/Introduction/Introduction.vue'
import Career from '@/components/Career/Career.vue'
import SliceZone from 'vue-slicezone'

export default {
    components: {
        Introduction,
        Career,
        SliceZone
    }
}
</script>
