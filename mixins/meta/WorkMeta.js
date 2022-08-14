export const WorkMeta = {
    name: 'WorkMeta',
    computed: {
        title() {
            return 'Work — Kolby Kruger'
        },
        description() {
            return 'I express my creativity through web design and development. With years of experience, I work with people from all walks of life and in a wide range of industries & markets.'
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
