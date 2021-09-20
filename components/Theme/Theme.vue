<template>
    <div class="theme" data-stick>
        <button
            data-stick
            data-magnetic
            data-cursor="xs"
            @click="theme"
            :class="'-' + getTheme"
            aria-label="Toggle between themes"
            ref="theme"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="23" fill="#C4C4C4" />
            </svg>
        </button>
        <span class="visually-hidden">Active: {{ getTheme }} theme.</span>
    </div>
</template>

<script>
export default {
    name: 'Theme',
    computed: {
        getTheme() {
            return this.$store.state.theme.mode
        }
    },
    methods: {
        theme() {
            const mode = this.getTheme == 'light' ? 'dark' : 'light'
            this.$store.commit('theme/setTheme', { mode: mode })
            window.localStorage.setItem('theme', mode)
            document.querySelector('HTML').setAttribute('theme', mode)
        }
    },
    beforeMount() {
        let colorSetting = window.localStorage.getItem('theme')
        if (!colorSetting) {
            window.localStorage.setItem('theme', 'light')
            colorSetting = 'light'
        } else {
            window.localStorage.setItem('theme', colorSetting)
        }
        document.querySelector('HTML').setAttribute('theme', colorSetting)
        this.$store.commit('theme/setTheme', { mode: colorSetting })
    },
    mounted() {
        const colorSetting = window.localStorage.getItem('theme')
        this.$store.commit('theme/setTheme', { mode: colorSetting })
    }
}
</script>

<style lang="scss">
.theme {
    display: flex;
    flex-direction: column;
    --size: 2em;
    height: var(--size);
    width: var(--size);
    transform: translateY(-0.15em);
    overflow: hidden;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        --size: 2em;
        height: var(--size);
        min-height: var(--size);
        width: var(--size);
        color: c('menu-color');
        transition: opacity 200ms ease;
        outline: none;

        svg {
            --size: 0.875em;
            width: var(--size);
            height: var(--size);

            circle {
                stroke-width: 4px;
                fill: c('menu-color');
                stroke: c('menu-color');
                transition: 0.92s cubic-bezier(0.075, 0.82, 0.165, 1);
            }
        }

        &.-dark {
            svg {
                circle {
                    fill: transparent;
                }
            }
        }

        &:hover,
        &:focus {
            opacity: 1;
        }
    }
}
</style>
