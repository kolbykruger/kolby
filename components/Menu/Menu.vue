<template>
    <div class="menu">
        <div class="menu-container">
            <nav class="navigation">
                <ul class="navigation-list">
                    <li class="navigation-item">
                        <nuxt-link class="navigation-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="navigation-item">
                        <nuxt-link class="navigation-link" to="/work">Work</nuxt-link>
                    </li>
                    <li class="navigation-item">
                        <nuxt-link class="navigation-link" to="/process">Process</nuxt-link>
                    </li>
                    <li class="navigation-item">
                        <nuxt-link class="navigation-link" to="/about">About</nuxt-link>
                    </li>
                    <li class="navigation-item">
                        <nuxt-link class="navigation-link" to="/blog">Blog</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style lang="scss" scoped>
.menu {
}
</style>
