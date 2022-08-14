export const AboutMeta = {
    name: 'AboutMeta',
    computed: {
        title() {
            //return document.data.Name
            const metaTitle = this.document.data.Name[0].text ? this.document.data.Name[0].text : 'Page'
            return metaTitle + ' — Kolby Kruger'
        },
        description() {
            return 'Hi, I am Kolby Kruger! I currently live in Burlington Vermont. Ever since I was little, I have had a passion for creativity. Designing and developing websites is one of my favorite ways to express myself creatively.'
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
