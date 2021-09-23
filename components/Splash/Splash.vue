<template>
    <div class="splash splash-loading" ref="splash" aria-hidden="true" :data-state="state">
        <div class="splash-fade"></div>
        <div class="splash-swipe" data-exclusion>
            <span class="splash-strap"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Splash',
    methods: {
        splash() {
            const splash = this.$refs.splash
            setTimeout(() => {
                splash.classList.remove('splash-loading')
            }, 2500)
        }
    },
    computed: {
        state(value) {
            return this.$store.state.loading.loading
        }
    },
    mounted() {
        this.splash()
    },
    watch: {
        state: function(value) {
            if (!value) {
                this.splash()
            }
        }
    }
}
</script>

<style lang="scss">
.page-leave-active {
    animation: fade-out 0s ease forwards;
    animation-delay: 1s;

    .page-contents {
        animation: fade-out 0.92s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        animation-delay: 0s;
    }

    ~ .splash {
        animation: swipe-in 0s forwards;

        .splash-swipe {
            animation: swipe-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            animation-delay: 0s;
        }
    }
}

.page-enter-active {
    animation: fade-in 0s ease forwards;
    animation-delay: 0.8s;

    .page-contents {
        opacity: 0;
        animation: fade-in-up 0.16s ease forwards;
        animation-delay: 0.38s;
    }

    ~ .splash {
        animation: swipe-in 0s forwards;

        .splash-swipe {
            animation: swipe-out 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            animation-delay: 0s;
        }
    }
}

.splash {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 199;
    user-select: none;
    animation: swipe-out 0s forwards;

    &-loading {
        animation: swipe-in 0s forwards;

        .splash {
            &-fade {
                display: block;
                animation: fade-out 0.5s ease forwards;
                animation-delay: 2s;
            }
            &-swipe {
                animation: swipe-out 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                animation-delay: 1s;
            }
        }
    }

    &-fade {
        position: fixed;
        display: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: c('background');
        z-index: 1;
    }

    &-swipe {
        position: fixed;
        top: 0;
        right: 0;
        height: 110vh;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: c('splash-background');
        color: c('background');
        z-index: 2;
    }

    &-strap {
        font-size: 10vw;
    }
}

@keyframes swipe-in {
    0% {
        transform: translateY(100%);
        clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
    }
    to {
        transform: translateY(0%);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
}

@keyframes swipe-out {
    0% {
        transform: translateY(0);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
    }
    to {
        transform: translateY(-100%);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
        visibility: hidden;
    }
    to {
        opacity: 1;
        visibility: visible;
    }
}

@keyframes fade-out {
    0% {
        opacity: 1;
        visibility: visible;
    }
    to {
        opacity: 0;
        visibility: hidden;
    }
}

@keyframes fade-in-up {
    0% {
        opacity: 0;
        visibility: hidden;
    }
    to {
        opacity: 1;
        visibility: visible;
    }
}
</style>
