<template>
    <section class="author">
        <div class="container">
            <div class="author-image">
                <img src="/images/kolby-squircle.png" alt="Kolby Kruger" />
            </div>
            <p class="author-name">Kolby Kruger</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Author',
}
</script>

<style lang="scss">
.author {
    margin-bottom: 0;

    @include mq('laptop-small') {
        margin-bottom: 3vh;
    }

    .container {
        display: flex;
        align-items: center;
        flex-flow: row wrap;

        @include mq('laptop-small') {
            display: block;
        }
    }

    &-image {
        --size: 40px;
        width: var(--size);
        height: var(--size);
        overflow: hidden;

        @include mq('laptop-small') {
            --size: 60px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-name {
        margin-left: 1em;
        margin-bottom: 0;
        color: c('base-5');
        font-weight: 500;
        @include fs-sm;

        @include mq('laptop-small') {
            @include fs-xxs;
            margin-top: 0.75em;
            margin-left: 0;
        }
    }
}
</style>
