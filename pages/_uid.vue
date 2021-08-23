<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
    <main class="page">
        <Pageheading :name="$route.params.uid" />
        <slice-zone type="page" :uid="$route.params.uid" />
    </main>
</template>

<script>
import Pageheading from '@/components/pageheading/Pageheading'
import SliceZone from 'vue-slicezone'

export default {
    components: {
        Pageheading,
        SliceZone
    }
}
</script>
