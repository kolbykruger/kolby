export const ThankYouMeta = {
    name: 'ThankYouMeta',
    computed: {
        title() {
            return 'Thank You — Kolby Kruger'
        },
        description() {
            return 'Thank you for reaching out. I will be in touch soon!'
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
