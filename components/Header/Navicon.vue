<template>
    <div class="navicon" :class="{ '-open': status }">
        <button
            data-magnetic="0.3, 0.3, 0.18"
            data-stick
            data-cursor="lg"
            class="navicon-button"
            id="navigation"
            @click="toggleMenu"
        >
            <div class="navicon-track">
                <span
                    class="navicon-text navicon-text-close"
                    :aria-hidden="!status"
                    :style="{ visibility: !status ? 'hidden' : 'visible' }"
                    >Close</span
                >
                <span
                    class="navicon-text navicon-text-open"
                    :aria-hidden="status"
                    :style="{ visibility: status ? 'hidden' : 'visible' }"
                    >Menu</span
                >

                <span class="navicon-icon" :class="{ 'navicon-icon-open': status }">
                    <span class="navicon-icon-line"></span>
                    <span class="navicon-icon-line"></span>
                </span>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Navicon',
    computed: {
        status() {
            return this.$store.state.menu.open
        },
    },
    methods: {
        toggleMenu() {
            this.$store.commit('menu/toggle')
        },
    },
}
</script>

<style lang="scss" scoped>
.navicon {
    position: relative;
    justify-self: end;
    color: c('menu-navicon');

    &.-open {
        button,
        small {
            color: c('menu-color');
        }

        .navicon-track {
            @include mq('tablet') {
                transform: translateY(50%);
            }
        }
    }

    &-button {
        position: relative;
        --size: 64px;
        font-size: 1.22rem;
        width: var(--size);
        height: var(--size);
        color: c('base-0');
        padding: 0;
        overflow: hidden;
        outline: none;

        @include mq('tablet') {
            --size: 96px;
            font-size: 1.616rem;
            border-radius: 50%;
        }
    }

    &-track {
        display: grid;
        place-content: center;
        text-align: center;
        height: 100%;
        transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1);

        @include mq('tablet') {
            transform: translateY(-50%);
        }
    }

    &-text {
        display: none;
        place-content: center;
        text-align: center;
        --size: 64px;
        font-weight: 500;
        width: var(--size);
        height: var(--size);
        line-height: 1;

        @include mq('tablet') {
            display: grid;
            --size: 96px;
        }

        &-close {
            position: relative;
        }

        &-open {
        }
    }

    &-icon {
        position: relative;
        display: block;
        height: 100%;
        margin-right: 1.25em;
        margin-bottom: 0.5em;
        --size: 1.25em;
        width: var(--size);
        height: var(--size);

        &-open {
            .navicon-icon {
                &-line {
                    top: 50%;
                    transform: rotate(45deg);
                    background: c('menu-color');

                    &:nth-of-type(2) {
                        top: 50%;
                        transform: rotate(-45deg);
                    }
                }
            }
        }

        &-line {
            position: absolute;
            top: 32%;
            right: 0;
            display: block;
            width: 100%;
            height: 2px;
            background: c('base-0');
            transition: all 0.45s cubic-bezier(0.34, 2, 0.64, 1);

            &:nth-of-type(2) {
                top: 68%;
            }
        }

        @include mq('tablet') {
            display: none;
        }
    }
}
</style>
