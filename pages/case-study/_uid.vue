<template>
    <main class="page case-study">
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
                                data-exclusion
                                :href="document.data.Website.url"
                                target="_blank"
                                rel="nofollow norefer"
                                :style="{ color: document.data.Accent ? document.data.Accent : '#000' }"
                                >Visit website -></a
                            >
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
        <slice-zone type="case-study" :uid="$route.params.uid" />

        <Neighbor :document="document" />
    </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
// import Stats from '@/components/CaseStudy/Stats.vue'
import Neighbor from '@/components/CaseStudy/Neighbor.vue'

export default {
    components: {
        SliceZone,
        Pageheading,
        // Stats,
        Neighbor
    },
    computed: {
        formatDate() {
            const date = new Date(this.document.data.Date)
            const options = {
                year: 'numeric',
                month: 'long'
            }
            return date.toLocaleDateString('en-us', options)
        },
        roles() {
            const roles = this.document.data.Role
            return roles.split(',')
        }
    },
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getByUID('case-study', params.uid)
        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    }
}
</script>

<style lang="scss">
.case-study {
}

.cs {
    &-intro {
        padding-bottom: 4vh;
    }

    &-grid {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 10vw;
        margin-top: 8vh;
    }

    &-tagline {
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
        }
    }

    &-stats {
        &-container {
            position: sticky;
            top: 10vh;
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
