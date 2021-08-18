<template>
    <section class="case-study-stats">
        <div class="container">
            <div class="grid grid-col-4">
                <div class="role">
                    <p class="label">ROLE</p>
                    <p class="role-item" v-if="document.data.Role[0].Design">Design</p>
                    <p class="role-item" v-if="document.data.Role[0].Development">Development</p>
                    <p class="role-item" v-if="document.data.Role[0].Branding">Branding</p>
                    <p class="role-item" v-if="document.data.Role[0].UXUI">UX/UI</p>
                    <p class="role-item" v-if="document.data.Role[0].Support">Support</p>
                </div>
                <div class="client">
                    <p class="label">CLIENT</p>
                    <p class="client-item" v-if="document.data.Client">{{ document.data.Client }}</p>
                </div>
                <div class="date">
                    <p class="label">DATE</p>
                    <p class="date-item" v-if="document.data.Date">{{ document.data.Date }}</p>
                </div>
                <div class="website">
                    <p class="website-item" v-if="document.data.Website">
                        <a data-anchor :href="document.data.Website.url" target="_blank" rel="nofollow norefer"
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
}
</style>
