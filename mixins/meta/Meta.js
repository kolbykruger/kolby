export const Meta = {
    name: 'Meta',
    computed: {
        title() {
            //return document.data.Name
            const metaTitle = this.document.data.Name[0].text ? this.document.data.Name[0].text : 'Page'
            return metaTitle + ' — Kolby Kruger'
        },
        description() {
            return this.document.data.meta_description
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
