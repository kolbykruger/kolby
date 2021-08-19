<template>
    <header class="header">
        <div class="container">
            <div class="grid grid-col-2 grid-gap-lg">
                <Mark />
                <Navicon />
            </div>
        </div>
    </header>
</template>

<script>
import Mark from '~/components/Header/Mark'
import Navicon from '~/components/Header/Navicon'

export default {
    name: 'Header',
    components: {
        Mark,
        Navicon
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    z-index: 150;

    .container {
        padding-top: 2em;
        padding-bottom: 2em;
    }
}
</style>
