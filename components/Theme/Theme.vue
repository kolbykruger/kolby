<template>
    <div class="theme" data-stick>
        <div class="theme__switch" :class="'theme__switch--' + mode">
            <button
                @click="theme('dark')"
                aria-label="Activate the dark color theme"
                :class="{ active: mode == 'light' }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V21ZM3.51311 3.51311C3.90363 3.12258 4.5368 3.12258 4.92732 3.51311L6.34732 4.93311C6.73785 5.32363 6.73785 5.9568 6.34732 6.34732C5.9568 6.73785 5.32363 6.73785 4.93311 6.34732L3.51311 4.92732C3.12258 4.5368 3.12258 3.90363 3.51311 3.51311ZM19.067 17.6528C18.6764 17.2622 18.0433 17.2622 17.6528 17.6528C17.2622 18.0433 17.2622 18.6764 17.6528 19.067L19.0728 20.487C19.4633 20.8775 20.0964 20.8775 20.487 20.487C20.8775 20.0964 20.8775 19.4633 20.487 19.0728L19.067 17.6528ZM0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12ZM21 11C20.4477 11 20 11.4477 20 12C20 12.5523 20.4477 13 21 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H21ZM6.34732 17.6528C6.73785 18.0433 6.73785 18.6764 6.34732 19.067L4.92732 20.487C4.5368 20.8775 3.90363 20.8775 3.51311 20.487C3.12258 20.0964 3.12258 19.4633 3.51311 19.0728L4.93311 17.6528C5.32363 17.2622 5.9568 17.2622 6.34732 17.6528ZM20.487 4.92732C20.8775 4.5368 20.8775 3.90363 20.487 3.51311C20.0964 3.12258 19.4633 3.12258 19.0728 3.51311L17.6528 4.93311C17.2622 5.32363 17.2622 5.9568 17.6528 6.34732C18.0433 6.73785 18.6764 6.73785 19.067 6.34732L20.487 4.92732Z"
                        fill="#f4f1ee"
                    />
                </svg>
            </button>
            <button
                @click="theme('light')"
                aria-label="Activate the light color theme"
                :class="{ active: mode == 'dark' }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M18.9999 10.79C18.8426 12.4922 18.2038 14.1144 17.1581 15.4668C16.1125 16.8192 14.7034 17.8458 13.0956 18.4265C11.4878 19.0073 9.74789 19.1181 8.0794 18.7461C6.41092 18.3741 4.8829 17.5345 3.67413 16.3258C2.46536 15.117 1.62584 13.589 1.25381 11.9205C0.881777 10.252 0.992617 8.51208 1.57336 6.9043C2.15411 5.29651 3.18073 3.88737 4.53311 2.84175C5.8855 1.79614 7.5077 1.15731 9.2099 1C8.21331 2.34827 7.73375 4.00945 7.85843 5.68141C7.98312 7.35338 8.70376 8.92506 9.8893 10.1106C11.0748 11.2961 12.6465 12.0168 14.3185 12.1415C15.9905 12.2662 17.6516 11.7866 18.9999 10.79Z"
                        stroke="#f4f1ee"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Theme',
    data() {
        return {
            mode: 'light'
        }
    },
    methods: {
        theme(mode) {
            this.mode = mode
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
    },
    mounted() {
        const colorSetting = window.localStorage.getItem('theme')
        this.mode = colorSetting
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

    &__switch {
        transition: 500ms ease;

        &--dark {
            transform: translate(0, -2em);
        }
    }

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
        }

        &:hover,
        &:focus {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        bottom: 0.5em;
        right: 0.5em;
    }
}
</style>
