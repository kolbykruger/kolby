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
            <span class="navicon-icon" :class="{ 'navicon-icon-open': status }">
                <span class="navicon-icon-line"></span>
                <span class="navicon-icon-line"></span>
            </span>
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
    margin-right: 1em;
    margin-bottom: 0.25em;
    color: c('menu-navicon');

    @include mq('tablet') {
        margin-right: 0;
        margin-bottom: 0;
    }

    &.-open {
        button,
        small {
            color: c('menu-color');
        }

        .navicon-button {
            &:hover {
                .navicon {
                    &-icon {
                        &-line {
                            transform: rotate(45deg) scale(1.1);

                            &:nth-of-type(2) {
                                transform: rotate(-45deg) scale(1.1);
                            }
                        }
                    }
                }
            }
        }
    }

    &-button {
        --size: 64px;
        position: relative;
        width: var(--size);
        height: var(--size);
        display: grid;
        place-content: center;
        color: c('base-0');
        padding: 0;
        font-size: 1.22rem;
        overflow: hidden;
        outline: none;

        @include mq('tablet') {
            --size: 96px;
            font-size: 1.616rem;
            border-radius: 50%;
        }

        &:hover {
            .navicon-icon {
                &-line {
                    transform: translate(0, -2px);

                    &:nth-of-type(2) {
                        transform: translate(0, 2px);
                    }
                }
            }
        }
    }

    &-icon {
        position: relative;
        display: block;
        height: 100%;
        --size: 1.5em;
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

        // @include mq('tablet') {
        //     display: none;
        // }
    }
}
</style>
