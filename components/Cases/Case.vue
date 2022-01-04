<template>
    <div class="case" ref="case" :style="{ '--accent': item.data.Accent }">
        <span class="case-cover">
            <span class="case-background"></span>
            <Picture
                :field="item.data.Cover"
                :sizes="{
                    'phone-small': '375px',
                    phone: '460px',
                    'phone-large': '600px',
                    tablet: '768px',
                    'laptop-small': '1024px',
                    laptop: '399px',
                    'laptop-large': '449px',
                    'desktop-small': '533px',
                    desktop: '639px',
                    'desktop-large': '853px',
                }"
            />
        </span>

        <div class="case-details">
            <h2 class="case-title">{{ item.data.Name[0].text }}</h2>
            <prismic-rich-text class="case-summary" v-if="item.data.View" :field="item.data.View" />
            <Button :location="'/works/' + item.uid" class="case-link" :magnetic="true">
                Explore
                <template #posticon><ArrowRight /></template>
            </Button>
        </div>
    </div>
</template>

<script>
import ArrowRight from '~/assets/svg/arrows/Arrow-Right.svg?inline'

export default {
    name: 'Case',
    props: {
        item: Object,
    },
    components: {
        ArrowRight,
    },
}
</script>

<style lang="scss">
.case {
    position: relative;
    min-height: 60vh;
    width: 100%;
    overflow: hidden;

    @include mq('laptop') {
        min-height: 80vh;
        width: 33.333%;
    }

    &:not(:last-of-type) {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background: linear-gradient(to bottom, transparent, c('base-4'), transparent);
        }
    }

    &-cover,
    &-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    &-cover {
        figure {
            aspect-ratio: unset;
            width: 100%;
            height: 100%;
            opacity: 0.2;
            background: c('base-9');
            transition: 0.3s ease;

            @include mq('laptop') {
                opacity: 0;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.5;
            // mix-blend-mode: exclusion;
            transition: 0.3s ease;

            @include mq('laptop') {
                opacity: 1;
            }
        }
    }

    &-background {
        background: var(--accent);
        background: linear-gradient(to bottom right, var(--accent) 30%, transparent);
        background: radial-gradient(circle at 0% 0%, var(--accent) 30%, c('background'));
        transition: 0.3s ease;
        opacity: 0.18;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/noise/noise-2.png');
            background-size: auto;
            background-repeat: repeat;
            opacity: 0.18;
            mix-blend-mode: overlay;

            @include mq('laptop-large') {
                // background-image: url('/noise/noise.gif');
            }
        }
    }

    .hover-state {
    }

    @mixin case-active-state {
        .case {
            &-cover {
                figure {
                    opacity: 0.1;

                    img {
                        transform: scale(1.1);
                    }
                }
            }
            &-background {
                opacity: 0.4;
            }
        }

        .button a {
            color: c('base-9');
            border-color: transparent;
            &::before {
                transform: translate(-50%, -100%);
                border-radius: 2em;
            }
        }
    }

    @include mq('laptop', 'max-width') {
        @include case-active-state;
    }

    @include mq('laptop') {
        &:hover,
        &:focus,
        &:focus-within {
            @include case-active-state;
        }
    }

    &-details {
        position: relative;
        height: 100%;
        min-height: 80vh;
        display: grid;
        flex-direction: column;
        grid-template-columns: 1fr;
        grid-auto-columns: 1fr;
        grid-gap: 2em;
        padding: 1.25em;
        z-index: 20;

        @include mq('phone-small') {
            padding: 1.875em;
        }
        @include mq('phone-large') {
            padding: 6.25em;
        }
        @include mq('tablet') {
            min-height: 60vh;
        }
        @include mq('laptop') {
            min-height: 80vh;
        }
    }

    &-title {
        @include fs-xl;
    }
}
</style>
