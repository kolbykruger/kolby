<template>
    <div class="case-study-card" ref="caseStudy" :data-traveler="item.data.Accent">
        <div class="case-study-card-cover">
            <nuxt-link data-knob data-cursor="md" :to="'/works/' + item.uid">
                <prismic-image data-exclusion :field="item.data.Cover" v-if="item.data.Cover" />
            </nuxt-link>
        </div>

        <div class="case-study-card-details">
            <nuxt-link class="case-study-card-title" data-cursor="xl" :to="'/works/' + item.uid">
                <h2>{{ item.data.Name[0].text }}</h2>
            </nuxt-link>
            <prismic-rich-text class="case-study-card-summary" v-if="item.data.View" :field="item.data.View" />
            <p>
                <nuxt-link
                    class="case-study-card-link"
                    data-stick
                    data-magnetic
                    data-cursor="xl"
                    :to="'/works/' + item.uid"
                    :style="{ color: item.data.Accent ? item.data.Accent : '#000' }"
                >
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="195" height="97" viewBox="0 0 195 97" fill="none">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M154.131 41.7998C139.701 32.1351 128.894 17.9618 128.053 2.00247C127.995 0.899431 128.896 0 130 0H139C140.105 0 140.992 0.897571 141.081 1.99853C142.764 22.751 170.272 40.7413 193.003 41.755C194.106 41.8042 195 42.6954 195 43.8V44V53V53.2C195 54.3046 194.106 55.1958 193.002 55.2448C170.269 56.2536 142.757 74.1622 141.081 95.0014C140.992 96.1024 140.105 97 139 97H130C128.896 97 127.995 96.1006 128.053 94.9975C128.894 79.038 139.701 64.8645 154.132 55.1998H2C0.89543 55.1998 0 54.3044 0 53.1998V43.7998C0 42.6952 0.895431 41.7998 2 41.7998H154.131Z"
                            fill="#0B0E11"
                            :style="{ fill: item.data.Accent ? item.data.Accent : '#000' }"
                        />
                    </svg>
                </nuxt-link>
            </p>
        </div>

        <!-- <pre><code>{{ item }}</code></pre> -->
    </div>
</template>

<script>
export default {
    name: 'CaseStudyCard',
    props: {
        item: Object,
    },
    mounted() {
        const caseStudy = this.$refs.caseStudy
        //gsap
    },
}
</script>

<style lang="scss" scoped>
.case-study-card {
    position: relative;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    gap: 3em;
    min-height: 100vh;

    &-cover {
        position: relative;
        aspect-ratio: 3 / 2;

        @include mq('desktop-small') {
            flex: 3;
            order: 1;
        }

        a {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &-details {
        position: relative;

        @include mq('desktop-small') {
            flex: 2;
            max-width: 50%;
        }
    }
    &-title {
        text-decoration: none;
        color: inherit;

        h2 {
            margin-top: 0;
        }

        @include mq('desktop-small') {
            max-width: 80%;
        }
    }
    &-summary {
        @include mq('desktop-small') {
            margin-bottom: 1.5em;
        }
    }
    &-link {
        color: currentColor;
        display: inline-flex;
        align-items: center;
        height: 64px;
        text-decoration: none;
        color: c('base-0');

        svg {
            margin-left: 0.4em;
            margin-bottom: 0.25em;
            --size: 32px;
            width: var(--size);
            height: var(--size);
            path {
                fill: c('base-0');
            }
        }
    }
}
</style>
