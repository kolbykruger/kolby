<template>
    <main class="page case-study">
        <Pageheading :name="document.data.Name" :capital="true" />

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
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.64997 6.00002C7.64997 5.5858 7.98576 5.25002 8.39997 5.25002H18C18.4142 5.25002 18.75 5.5858 18.75 6.00002V15.6C18.75 16.0142 18.4142 16.35 18 16.35C17.5858 16.35 17.25 16.0142 17.25 15.6V7.81068L6.53033 18.5303C6.23744 18.8232 5.76257 18.8232 5.46967 18.5303C5.17678 18.2375 5.17678 17.7626 5.46967 17.4697L16.1893 6.75002H8.39997C7.98576 6.75002 7.64997 6.41423 7.64997 6.00002Z"
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
        <slice-zone type="case-study" :uid="$route.params.uid" />

        <Neighbor :document="document" />

        <div class="cs-return">
            <nuxt-link to="/work">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12.4569 4.02802C12.281 3.63211 11.7191 3.63211 11.5431 4.02802L4.48451 19.9099C4.30442 20.3151 4.70178 20.7368 5.11698 20.5811L11.8245 18.0658C11.9377 18.0234 12.0624 18.0234 12.1756 18.0658L18.8831 20.5811C19.2983 20.7368 19.6956 20.3151 19.5155 19.9099L12.4569 4.02802Z"
                        fill="#22282F"
                    />
                </svg>
                <span>Projects</span>
            </nuxt-link>
        </div>
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
            display: inline-flex;
            align-items: center;
            height: 64px;

            svg {
                margin-left: 0.4em;
                margin-bottom: 0.2em;
                width: 32px;
                height: 32px;
            }
        }
    }

    &-stats {
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

    &-return {
        position: fixed;
        bottom: 2em;
        left: 4em;
        transform: rotate(-90deg);
        transform-origin: bottom left;
        opacity: 0.125;

        a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: #000;
            font-size: 1.5rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            font-weight: 500;

            svg {
                margin-right: 0.4em;
                margin-bottom: 0.2em;
            }
        }
    }
}
</style>
