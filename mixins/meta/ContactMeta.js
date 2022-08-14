export const ContactMeta = {
    name: 'ContactMeta',
    computed: {
        title() {
            return 'Get in touch — Kolby Kruger'
        },
        description() {
            return 'Let’s make something great together.'
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
