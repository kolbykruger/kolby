<template>
    <section class="sidenote" :class="`sidenote-${type}`">
        <div class="container">
            <div class="sidenote-icon"></div>
            <prismic-rich-text class="sidenote-content" :field="slice.primary.Content" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Sidenote',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    computed: {
        type() {
            return this.slice.Type ? this.slice.Type : 'info'
        },
    },
}
</script>

<style lang="scss">
.sidenote {
    position: relative;
    width: initial;
    margin-top: 3em;
    margin-left: calc(#{flow('max')} * -1);
    margin-right: calc(#{flow('max')} * -1);
    padding: 2em;

    overflow: hidden;

    @include mq('tablet') {
        margin-left: calc(#{flow('xxxl')} * -1);
        margin-right: calc(#{flow('xxxl')} * -1);
        border-radius: 0.125rem 0.375rem 0.376rem 0.125rem;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
    }

    &::before {
        width: 5px;
        height: 100%;
        background: c('inflection');

        @include mq('tablet') {
            width: 4px;
        }
    }

    &::after {
        width: 100%;
        height: 100%;
        background: c('base-8');
        border-radius: 0.375em;
        opacity: 0.4;
        z-index: -1;
        user-select: none;
        pointer-events: none;
    }

    &-info,
    &-success,
    &-warning {
        &::after {
            opacity: 0.05;
        }
    }

    &-info {
        &::before,
        &::after {
            background: c('secondary-base');
        }
    }

    &-success {
        &::before,
        &::after {
            background: c('tertiary-base');
        }
    }

    &-warning {
        &::before,
        &::after {
            background: c('primary-base');
        }
    }

    .container {
        position: relative;

        > .sidenote-content {
            > * {
                @include fs-xxs;
            }
        }
    }
}
</style>
