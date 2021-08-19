<template>
    <section class="case-study-stats">
        <div class="container">
            <div class="grid grid-col-4 grid-gap-lg">
                <div class="case-study-stats-role">
                    <p class="case-study-stats-label">Role</p>
                    <p class="case-study-stats-role-item" v-if="document.data.Role[0].Design">Design</p>
                    <p class="case-study-stats-role-item" v-if="document.data.Role[0].Development">Development</p>
                    <p class="case-study-stats-role-item" v-if="document.data.Role[0].Branding">Branding</p>
                    <p class="case-study-stats-role-item" v-if="document.data.Role[0].UXUI">UX/UI</p>
                    <p class="case-study-stats-role-item" v-if="document.data.Role[0].Support">Support</p>
                </div>
                <div class="case-study-stats-client">
                    <p class="case-study-stats-label">Client</p>
                    <p class="case-study-client-item" v-if="document.data.Client">{{ document.data.Client }}</p>
                </div>
                <div class="case-study-stats-date">
                    <p class="case-study-stats-label">Date</p>
                    <p class="case-study-stats-date-item" v-if="document.data.Date">{{ document.data.Date }}</p>
                </div>
                <div class="case-study-stats-website">
                    <p class="case-study-stats-website-item" v-if="document.data.Website">
                        <a
                            data-magnetic
                            data-exclusion
                            :href="document.data.Website.url"
                            target="_blank"
                            rel="nofollow norefer"
                            >Visit website</a
                        >
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Stats',
    props: {
        document: Object
    }
}
</script>

<style lang="scss" scoped>
.case-study-stats {
    .container {
        padding-bottom: 10vh;
    }

    p {
        margin: 0.25em 0;
    }

    a {
        text-decoration: none;
        color: currentcolor;
    }

    &-role {
        &-item {
        }
    }

    &-label {
        display: inline-flex;
        padding-right: 2em;
        border-bottom: 1px solid #ddd;
    }
}
</style>
