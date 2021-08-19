<template>
    <div class="mark">
        <p>
            <nuxt-link to="/" class="mark-brain" :class="{ '-exclusion': menuStatus, '-visible': visibility }">
                <span>kolby.</span>
            </nuxt-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Mark',
    data() {
        return {
            visibility: true
        }
    },
    computed: {
        menuStatus() {
            return this.$store.state.menu.open
        }
    },
    methods: {
        setVisibility(loc) {
            this.visibility = loc == 'index' ? false : true
        }
    },
    mounted() {
        this.setVisibility(this.$route.name)
    },
    watch: {
        $route(to) {
            this.setVisibility(to.name)
        }
    }
}
</script>

<style lang="scss" scoped>
.mark {
    &-brain {
        text-decoration: none;
        transition: 0.3s ease;
        color: #000;
        font-weight: 500;
        opacity: 0;

        &.-exclusion {
            color: #fff;
            opacity: 1;
        }

        &.-visible {
            opacity: 1;
        }
    }
}
</style>
