<template>
    <section class="case-study-neighbor" v-if="page" data-anim>
        <div class="container">
            <style>
                .case-study-neighbor a::after {
                    background: {{accent}};
                }
            </style>
            <p>Next</p>
            <nuxt-link
                class="case-study-neighbor--link"
                data-magnetic="0.1, 0.1, 0.1"
                data-cursor="lg"
                :to="'/works/' + page.uid"
            >
                <h2>{{ page.data.Name[0].text }}</h2>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Neighbor',
    props: {
        page: {
            type: Object,
            default: () => ({
                uid: '',
                data: {
                    Name: [
                        {
                            text: 'Project Name',
                        },
                    ],
                    Accent: 'red',
                },
            }),
        },
    },
    computed: {
        accent() {
            const accent = this.page.data.Accent
            return accent ? accent : 'var(--color-primary-base)'
        },
    },
}
</script>

<style lang="scss" scoped>
.case-study-neighbor {
    text-align: center;

    .container {
        padding-top: 18vh;
        padding-bottom: 18vh;
    }

    a {
        display: inline-grid;
        place-content: center;
        color: c('base-0');
        text-decoration: none;
        padding: 1em;

        &:after {
            content: '';
            position: absolute;
            bottom: 12%;
            left: -0.125em;
            right: -0.125em;
            height: 2.5em;
            //background: attr(data-accent);
            transform: scaleX(0);
            opacity: 0;
            transform-origin: 0 50%;
            transition: transform 0.66s cubic-bezier(0.42, 0.39, 0.17, 1), opacity 0.66s ease;
            z-index: -1;
        }
        &:hover,
        &:focus {
            &::after {
                transform: scaleX(1);
                opacity: 0.5;
                transition: transform 0.92s cubic-bezier(0.42, 0.39, 0.17, 1);
            }
        }
    }

    h2 {
        @include fs-lg;
        margin-top: 0.125em;
        margin-bottom: 0;

        @include mq('tablet') {
            @include fs-xxl;
        }
    }
}
</style>
