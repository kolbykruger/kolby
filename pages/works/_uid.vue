<template>
    <main class="page case-study" id="content" :data-traveler="document.data.Accent">
        <div class="page-contents">
            <div class="case-study-magic">
                <span
                    class="case-study-magic-artwork"
                    :style="{ background: document.data.Accent ? document.data.Accent : '#000' }"
                ></span>
            </div>

            <Pageheading :name="document.data.Name" />

            <section class="cs-intro">
                <div class="container">
                    <h2 class="cs-tagline">{{ document.data.Tagline }}</h2>

                    <div class="cs-grid grid">
                        <div>
                            <prismic-rich-text class="cs-summary" :field="document.data.Summary" />
                            <p class="cs-website" v-if="document.data.Website">
                                <a
                                    data-magnetic
                                    :href="document.data.Website.url"
                                    target="_blank"
                                    rel="nofollow norefer"
                                    :style="{ color: document.data.Accent ? document.data.Accent : '#000' }"
                                >
                                    <span>Visit website </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="168"
                                        height="169"
                                        viewBox="0 0 168 169"
                                        fill="none"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M99.841 58.9134C82.8693 62.2172 65.2546 59.7876 53.3788 49.0933 52.558 48.3541 52.5589 47.0812 53.34 46.3001L59.6444 39.9957C60.4255 39.2147 61.6876 39.2218 62.5289 39.9376 78.3822 53.4271 110.419 46.8282 127.107 31.5825 127.923 30.8375 129.185 30.8353 129.966 31.6163L130.081 31.731C130.09 31.7397 130.099 31.7486 130.108 31.7575L136.613 38.2629C137.394 39.044 137.392 40.3065 136.647 41.1219 121.396 57.8086 114.736 89.791 128.292 105.701 129.008 106.542 129.015 107.804 128.234 108.585L121.93 114.889C121.149 115.67 119.876 115.671 119.136 114.85 108.442 102.975 106.013 85.3602 109.316 68.3885L40.4466 137.258C39.6655 138.039 38.3992 138.039 37.6181 137.258L30.9713 130.611C30.1903 129.83 30.1903 128.564 30.9713 127.783L99.841 58.9134z"
                                            :style="{ fill: document.data.Accent ? document.data.Accent : '#000' }"
                                        />
                                    </svg>
                                </a>
                            </p>
                        </div>

                        <div class="cs-stats">
                            <div class="cs-stats-container">
                                <ul class="cs-stats-group">
                                    <li class="cs-stats-label">Role</li>
                                    <li class="cs-stats-item" v-for="(role, index) in roles" :key="index">
                                        <span>{{ role }}</span>
                                    </li>
                                </ul>

                                <ul class="cs-stats-group">
                                    <li class="cs-stats-label">Client</li>
                                    <li class="cs-stats-item">
                                        <span>{{ document.data.Client || 'Client name' }}</span>
                                    </li>
                                </ul>

                                <ul class="cs-stats-group">
                                    <li class="cs-stats-label">Date</li>
                                    <li class="cs-stats-item">
                                        <span>{{ formatDate }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- <Stats :document="document" /> -->
            <slice-zone class="slices" type="case-study" :uid="$route.params.uid" />

            <Neighbor :page="nextCaseStudy" />
        </div>
    </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import Neighbor from '@/components/Neighbor/Neighbor.vue'
import { CaseStudyMeta } from '@/mixins/meta/CaseStudyMeta.js'
import { Animations } from '~/mixins/animations/Animations.js'

export default {
    mixins: [CaseStudyMeta],
    components: {
        SliceZone,
        Pageheading,
        Neighbor,
    },
    mixins: [Animations],
    computed: {
        formatDate() {
            const date = new Date(this.document.data.Date)
            const options = {
                year: 'numeric',
                month: 'long',
            }
            return date.toLocaleDateString('en-us', options)
        },
        roles() {
            const roles = this.document.data.Role
            return roles.split(',')
        },
    },
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getByUID('case-study', params.uid)

        let nextCaseStudy = (
            await $prismic.api.query($prismic.predicates.at('document.type', 'case-study'), {
                pageSize: 3,
                after: `${document.id}`,
                orderings: '[my.post.date]',
            })
        ).results[0]

        let firstCaseStudy = (
            await $prismic.api.query($prismic.predicates.at('document.type', 'case-study'), {
                orderings: '[document.first_publication_date ]',
            })
        ).results[0]

        // Fallback to first case study if there isn't a next case
        nextCaseStudy = !nextCaseStudy ? firstCaseStudy : nextCaseStudy

        if (document) {
            return { document, nextCaseStudy }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
}
</script>

<style lang="scss">
.case-study {
    &-magic {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        &-artwork {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            --size: 60vw;
            width: var(--size);
            height: var(--size);
            z-index: 2;
            filter: blur(var(--size));
            border-radius: 50%;
            transform: translate(-25%, -25%);
            opacity: 0.2;
            transition: background 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);

            html[theme='dark'] & {
                background: c('primary-base');
            }
        }
    }
}

.cs {
    &-intro {
        padding-bottom: 4vh;
    }

    &-grid {
        display: grid;
        margin-top: 8vh;

        @include mq('tablet') {
            grid-template-columns: 3fr 1fr;
            grid-gap: 10vw;
        }
    }

    &-tagline {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 10vw;
        margin-top: 0;
    }

    &-tagline,
    &-summary {
        max-width: 64em;
    }

    &-website {
        margin-top: 4vh;

        a {
            color: currentColor;
            display: inline-flex;
            align-items: center;
            height: 64px;

            svg {
                margin-left: 0.4em;
                margin-bottom: 0.25em;
                --size: 28px;
                width: var(--size);
                height: var(--size);
            }
        }
    }

    &-stats {
        margin-top: 4vh;

        @include mq('tablet') {
            margin-top: 0;
        }

        &-container {
        }

        &-group {
            margin-bottom: 3vh;
        }

        &-label {
            font-weight: 500;
        }

        &-item {
            opacity: 0.75;
        }

        &-label,
        &-item {
            font-size: clamp(1.25rem, -0.875rem + 8.333vw, 1.414rem);
        }
    }
}
</style>
