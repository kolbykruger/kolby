export const Serializer = {
    name: 'Serializer',
    methods: {
        htmlSerializer(type, element, content, children) {
            if (type == 'heading2') {
                const id = element.text.replace(/\W+/g, '-').toLowerCase()
                return `<a class="anchor-link" name="${id}" data-type="h2"></a><h2>${children.join('')}</h2>`
            }
            if (type == 'heading3') {
                const id = element.text.replace(/\W+/g, '-').toLowerCase()
                return `<a class="anchor-link" name="${id}" data-type="h3"></a><h3>${children.join('')}</h3>`
            }
        },
    },
}
