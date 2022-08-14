export const ArticleMeta = {
    name: 'ArticleMeta',
    computed: {
        title() {
            const title = this.document.data.Name[0].text
            const metaTitle = this.document.data.meta_title
            return metaTitle ? metaTitle : title + ' — Kolby Kruger'
        },
        description() {
            const summary = this.$prismic.asText(this.document.data.Summary)
            const metaSummary = this.document.data.meta_description
            return metaSummary ? metaSummary : summary
        },
        url() {
            return this.$route.path
        },
        image() {
            const image = this.document.data.social_cards[0].social_card_image
            const backup = {
                url: '123',
                alt: '123',
                dimensions: {
                    width: 0,
                    height: 0,
                },
            }
            return image ? image : backup
        },
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    name: 'canonical',
                    content: this.description,
                },
                {
                    name: 'description',
                    content: this.description,
                },
                {
                    name: 'og:title',
                    content: this.title,
                },
                {
                    name: 'og:description',
                    content: this.description,
                },
                {
                    name: 'og:type',
                    content: 'article',
                },
                {
                    name: 'og:url',
                    content: this.url,
                },
                {
                    name: 'og:image',
                    content: this.image.url,
                },
                {
                    name: 'og:image:alt',
                    content: this.image.alt,
                },
                // {
                //     name: 'og:image:width',
                //     content: this.image.dimensions.width,
                // },
                // {
                //     name: 'og:image:height',
                //     content: this.image.dimensions.height,
                // },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    name: 'twitter:creator',
                    content: '@kolby.kruger',
                },
                {
                    name: 'twitter:title',
                    content: this.title,
                },
                {
                    name: 'twitter:description',
                    content: this.description,
                },
                {
                    name: 'twitter:image',
                    content: this.image.url,
                },
            ],
        }
    },
}
