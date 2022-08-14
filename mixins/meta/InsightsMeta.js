export const InsightsMeta = {
    name: 'InsightsMeta',
    computed: {
        title() {
            return 'Insights — Kolby Kruger'
        },
        description() {
            return 'Stories & insights from the mind of Kolby Kruger.'
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
            ],
        }
    },
}
