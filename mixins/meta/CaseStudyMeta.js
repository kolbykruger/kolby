export const CaseStudyMeta = {
    name: 'CaseStudyMeta',
    computed: {
        title() {
            //return document.data.Name
            return this.document.data.Name[0].text + ' // Kolby Kruger'
        },
        description() {
            return this.$prismic.asText(this.document.data.Summary)
        },
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.description,
                },
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex',
                },
            ],
        }
    },
}
