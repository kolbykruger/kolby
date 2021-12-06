<template>
    <component :is="tag" ref="title" class="name-title" data-anim>
        <span class="name-title-text"> Kolby </span>
        <span class="name-title-star">
            <svg
                enable-background="new 0 0 14.4 14.5"
                version="1.1"
                viewBox="0 0 14.4 14.5"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon
                    points="7.2 1.3 8.4 4.5 11.4 3 10 6.1 13.2 7.2 10 8.4 11.4 11.5 8.4 10 7.2 13.2 6.1 10 3 11.5 4.5 8.4 1.2 7.2 4.5 6.1 3 3 6.1 4.5"
                />

                <path
                    d="m6.5 1.5c0.4 1.1 0.8 2.1 1.1 3.2 0.1 0.4 0.7 0.4 1 0.2 1-0.5 2.1-1 3.1-1.5-0.3-0.2-0.7-0.3-1-0.5-0.4 1.1-0.9 2.1-1.4 3.1-0.1 0.2 0 0.5 0.3 0.6 1.1 0.4 2.1 0.8 3.2 1.1 0.1-0.3 0.2-0.7 0.3-1-1.1 0.4-2.2 0.8-3.3 1.2-0.2 0.1-0.7 0.3-0.6 0.7 0.5 1 1 2.1 1.5 3.1 0.4-0.2 0.8-0.5 1.1-0.7-1-0.5-2.1-1-3.1-1.5-0.3-0.2-1 0-1.1 0.4-0.3 1.1-0.7 2.1-1.1 3.2 0.5 0 1-0.1 1.4-0.1-0.4-1.1-0.8-2.1-1.1-3.2-0.1-0.4-0.7-0.4-1-0.2-1 0.5-2.1 1-3.1 1.5 0.3 0.2 0.7 0.3 1 0.5 0.5-1 1-2.1 1.5-3.1 0.1-0.2 0-0.5-0.3-0.6-1.1-0.4-2.2-0.8-3.2-1.2-0.1 0.3-0.2 0.7-0.3 1 1.1-0.3 2.1-0.7 3.2-1.1 0.2-0.1 0.8-0.4 0.6-0.7-0.5-1-1-2.1-1.5-3.1-0.4 0.3-0.7 0.5-1.1 0.7 1 0.5 2.1 1 3.1 1.5 0.3 0.2 1 0 1.1-0.4 0.4-1.1 0.8-2.1 1.1-3.2 0.3-0.8-1.2-0.8-1.4-0.2-0.4 1.1-0.7 2.1-1.1 3.2 0.3-0.1 0.7-0.3 1.1-0.4-1-0.5-2.1-1-3.1-1.5-0.3-0.1-1.4 0.2-1.1 0.7 0.5 1 1 2.1 1.5 3.1 0.2-0.2 0.4-0.5 0.6-0.7-1.1 0.4-2.2 0.7-3.3 1.1-0.4 0.1-0.9 0.8-0.3 1 1.1 0.4 2.2 0.8 3.2 1.2-0.1-0.2-0.1-0.4-0.2-0.6-0.5 1-1 2.1-1.5 3.1-0.3 0.6 0.7 0.7 1 0.5 1-0.5 2.1-1 3.1-1.5-0.3-0.1-0.7-0.2-1-0.2 0.4 1.1 0.8 2.1 1.1 3.2 0.2 0.6 1.2 0.4 1.4-0.1 0.4-1.1 0.8-2.1 1.1-3.2-0.4 0.1-0.7 0.3-1.1 0.4 1 0.5 2.1 1 3.1 1.5 0.3 0.2 1.4-0.2 1.1-0.7-0.5-1-1-2.1-1.5-3.1-0.2 0.2-0.4 0.5-0.6 0.7 1.1-0.4 2.1-0.8 3.2-1.1 0.4-0.1 0.9-0.8 0.3-1-1.1-0.4-2.1-0.8-3.2-1.1l0.3 0.6c0.5-1 1-2.1 1.5-3.1 0.3-0.6-0.7-0.7-1-0.5-1 0.5-2.1 1-3.1 1.5 0.3 0.1 0.7 0.2 1 0.2-0.3-1.2-0.7-2.3-1.1-3.3-0.2-0.7-1.6-0.3-1.4 0.4z"
                />
            </svg>
        </span>
        <span class="name-title-text"> Kruger </span>
    </component>
</template>

<script>
export default {
    name: 'NameTitle',
    props: {
        tag: {
            type: String,
            default: 'h1',
        },
    },
}
</script>

<style lang="scss">
.name-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 6.25vw;
    font-size: clamp(3.815rem, -0.875rem + 8.333vw, 11.642rem);
    width: 100%;

    &-text {
        flex: 1;

        &:first-of-type {
            text-align: right;

            .pageheading-line {
                text-align: right !important;
            }
        }

        &:last-of-type {
            text-align: left;

            .pageheading-line {
                text-align: left !important;
            }
        }
    }

    &-star {
        max-width: 50px;
        max-width: clamp(20px, -0.875rem + 3.333vw, 50px);
        width: 100%;
        margin: 0 2.5vw;

        svg {
            width: 100%;
            max-width: 50px;
            animation: star 6s linear infinite;

            @keyframes star {
                to {
                    transform: rotate(360deg);
                }
            }

            path,
            polygon {
                fill: c('base-0');
            }
        }
    }
}
</style>
