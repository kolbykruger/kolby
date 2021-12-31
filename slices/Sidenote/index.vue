<template>
    <section class="sidenote" :class="`sidenote-${type}`">
        <div class="container">
            <div class="sidenote-icon">
                <Warning v-if="type == 'warning'" />
                <Success v-if="type == 'success'" />
                <Error v-if="type == 'error'" />
                <Info v-if="type == 'info'" />
            </div>
            <prismic-rich-text class="sidenote-content" :field="slice.primary.Content" />
        </div>
    </section>
</template>

<script>
// Icons
import Warning from '~/assets/svg/status/alert-triangle.svg?inline'
import Success from '~/assets/svg/status/check-circle-2.svg?inline'
import Error from '~/assets/svg/status/cross-octagon.svg?inline'
import Info from '~/assets/svg/status/info.svg?inline'

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
    components: {
        Warning,
        Success,
        Error,
        Info,
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
    --negative-margin: -1.25em;
    position: relative;
    width: initial;
    margin-left: var(--negative-margin);
    margin-right: var(--negative-margin);

    @include mq('phone-small') {
        --negative-margin: -1.875em;
    }
    @include mq('phone-large') {
        --negative-margin: -3em;
    }

    @include mq('tablet') {
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
        width: 6px;
        height: 100%;
        background: c('inflection');
        background: linear-gradient(to bottom, c('inflection') 60%, transparent);
        // opacity: 0.8;

        @include mq('tablet') {
            width: 4px;
            border-radius: 0.125em 0 0 0;
        }
    }

    &::after {
        width: 100%;
        height: 100%;
        background: c('base-8');
        border-radius: 0.375em;
        opacity: 0.5;
        z-index: -1;
        user-select: none;
        pointer-events: none;
    }

    &-info,
    &-success,
    &-warning,
    &-error {
        &::after {
            opacity: 0.05;
        }
    }

    &-info {
        &::before {
            background: linear-gradient(to bottom, c('quaternary-base'), transparent);
        }
        &::after {
            background: c('quaternary-base');
        }
        .sidenote-icon svg * {
            fill: c('quaternary-base');
        }
    }

    &-success {
        &::before {
            background: linear-gradient(to bottom, c('secondary-base') 60%, transparent);
        }
        &::after {
            background: c('secondary-base');
        }
        .sidenote-icon svg * {
            fill: c('secondary-base');
        }
    }

    &-warning {
        &::before {
            background: linear-gradient(to bottom, c('tertiary-base') 60%, transparent);
        }
        &::after {
            background: c('tertiary-base');
        }
        .sidenote-icon svg * {
            fill: c('tertiary-base');
        }
    }

    &-error {
        &::before {
            background: linear-gradient(to bottom, c('primary-base') 60%, transparent);
        }
        &::after {
            background: c('primary-base');
        }
        .sidenote-icon svg * {
            fill: c('primary-base');
        }
    }

    .container {
        margin-top: 3em;
        padding: 2em;
        padding-top: 1em;

        > .sidenote-content {
            > * {
                @include fs-xxs;
            }
        }
    }

    &-icon {
        margin-bottom: 1em;
        transform: translateX(-0.25em);
        color: c('secondary-base');
        transition: 0.3s ease;

        svg {
            --size: 2.5em;
            width: var(--size);
            height: var(--size);
        }
    }
}
</style>
