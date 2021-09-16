<template>
    <div class="mark">
        <p>
            <nuxt-link
                data-stick
                data-cursor="mark"
                to="/"
                class="mark-brain"
                :class="{ '-exclusion': menuStatus, '-visible': visibility }"
            >
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
        display: inline-flex;
        padding: 1em;
        text-decoration: none;
        transition: opacity 0.3s ease;
        color: c('menu-navicon');
        font-family: $font-1;
        font-weight: 600;
        font-kerning: none;
        letter-spacing: 0.025em;
        opacity: 0;
        visibility: hidden;

        &.-exclusion {
            color: c('menu-color');
            opacity: 1;
            visibility: visible;
        }

        &.-visible {
            opacity: 1;
            visibility: visible;
        }
    }
}
</style>
