<template>
    <section class="author">
        <div class="container">
            <div class="author-image">
                <img src="/images/kolby-squircle.png" alt="Kolby Kruger" />
            </div>
            <p class="author-name">Kolby Kruger</p>
            <p class="author-date">{{ formatDate }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Author',
    props: {
        document: Object,
    },
    computed: {
        formatDate() {
            const d = this.document.last_publication_date
            const date = new Date(d)
            const options = {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }
            return date.toLocaleString('en-us', options)
        },
    },
}
</script>

<style lang="scss">
.author {
    position: relative;
    margin-bottom: 3vh;

    @include mq('laptop-small') {
        padding: 2em;
        margin-left: -2em;
        margin-right: -2em;
        margin-bottom: 3em;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: c('base-9');
            border-radius: 0.375em;
            opacity: 0.4;
            z-index: -1;
            pointer-events: none;
        }
    }

    .container {
        display: flex;
        align-items: center;
        flex-flow: row wrap;

        p + p {
            margin-top: 0;
            margin-left: 1.5em;

            @include mq('laptop-small') {
                margin-left: 0;
                margin-top: 0.25em;
                opacity: 0.75;
            }
        }

        @include mq('laptop-small') {
            display: block;
        }
    }

    &-image {
        --size: 60px;
        width: var(--size);
        height: var(--size);
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-name {
        color: c('base-5');
        font-weight: 500;
        @include fs-sm;
        margin-left: 1em;
        margin-bottom: 0;

        @include mq('laptop-small') {
            @include fs-xxs;
            margin-top: 0.75em;
            margin-left: 0;
        }
    }

    &-date {
        margin-top: 0.125em;
        @include fs-xxs;
    }
}
</style>
