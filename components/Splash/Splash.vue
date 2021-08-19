<template>
    <div class="splash splash-loading" ref="splash" aria-hidden="true">
        <div class="splash-fade"></div>
        <div class="splash-swipe" data-exclusion>
            <span class="splash-strap"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Splash',
    mounted() {
        const splash = this.$refs.splash
        setTimeout(() => {
            splash.classList.remove('splash-loading')
        }, 2500)
    }
}
</script>

<style lang="scss">
.page-leave-active {
    animation: fade-out 0s ease forwards;
    animation-delay: 1s;

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
    pointer-events: none;
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
        background-color: #fff;
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
        background-color: #000;
        color: #fff;
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
</style>
