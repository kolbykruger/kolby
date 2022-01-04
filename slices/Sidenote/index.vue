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
        width: 100%;
        height: 100%;
        background: c('base-8');
        border-radius: 0.375em;
        opacity: 0.5;
        user-select: none;
        pointer-events: none;
    }

    @include mq('laptop-large') {
        &::after {
            @include image-noise;
            opacity: 0.03;
            mix-blend-mode: unset;
        }
    }

    &-info,
    &-success,
    &-warning,
    &-error {
        &::before {
            opacity: 0.05;
        }
    }

    &-info {
        &::before {
            background: c('quaternary-base');
        }
        .sidenote-icon svg * {
            fill: c('quaternary-base');
        }
        .container::before {
            background: linear-gradient(to bottom, c('quaternary-base'), transparent);
        }
    }

    &-success {
        &::before {
            background: c('secondary-base');
        }
        .sidenote-icon svg * {
            fill: c('secondary-base');
        }
        .container::before {
            background: linear-gradient(to bottom, c('secondary-base') 60%, transparent);
        }
    }

    &-warning {
        &::before {
            background: c('tertiary-base');
        }
        .sidenote-icon svg * {
            fill: c('tertiary-base');
        }
        .container::before {
            background: linear-gradient(to bottom, c('tertiary-base') 60%, transparent);
        }
    }

    &-error {
        &::before {
            background: c('primary-base');
        }
        .sidenote-icon svg * {
            fill: c('primary-base');
        }
        .container::before {
            background: linear-gradient(to bottom, c('primary-base') 60%, transparent);
        }
    }

    .container {
        position: relative;
        margin-top: 3em;
        padding: 2em;
        padding-top: 1em;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 6px;
            height: 100%;
            // opacity: 0.8;

            @include mq('tablet') {
                width: 4px;
                border-radius: 0.125em 0 0 0;
            }
        }

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
