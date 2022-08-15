export const IndexMeta = {
    name: 'IndexMeta',
    computed: {
        title() {
            return 'Kolby Kruger  — Web designer and developer in Vermont'
        },
        description() {
            return 'The portfolio of a Web Designer and Developer from Vermont, who designs creative and high impact websites.'
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
