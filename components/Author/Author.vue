<template>
    <section class="author">
        <div class="container">
            <div class="author-image">
                <img src="/images/kolby-squircle.png" alt="Kolby Kruger - smiling." />
            </div>
            <div class="author-name">
                <p><small>Kolby Kruger</small></p>
            </div>
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
    margin-bottom: 3vh;

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
        margin-top: 1em;
        margin-bottom: 0;
        color: c('base-5');
        font-weight: 500;

        small {
            color: c('base-5');
            font-weight: 500;
        }
    }
}
</style>
