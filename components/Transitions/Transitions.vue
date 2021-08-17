<template>
    <div class="transitions" aria-hidden="false">
        <div class="transitions-background"></div>
    </div>
</template>

<script>
export default {
    name: 'Transitions'
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
    transition: transform 0.35s cubic-bezier(0.67, 0.31, 0.25, 0.79);
}

.transitions-background {
    transition: transform 0.55s cubic-bezier(0.25, 0.75, 0.5, 1.25);
}

.page-leave-active {
    ~ .transitions {
        opacity: 1;
        visibility: visible;

        .transitions-background {
            transform-origin: 0 100%;
            transform: scale(1, 1);
        }
    }
}

.page-enter-active {
    ~ .transitions {
        opacity: 1;
        visibility: visible;

        .transitions-background {
            transform-origin: 0 0;
            transform: scale(1, 0);
        }
    }
}
.page-enter {
    transform: translateY(8vh);
}

.transitions {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    user-select: none;
    z-index: 99;

    &-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        transform-origin: 0 0;
        transform: scale(1, 0);

        // Enter
        // transform-origin: 0 100%;
        // transform: scale(0, 1);

        // Exit
        // transform-origin: 0 0;
        // transform: scale(1, 0);
    }
}
</style>
