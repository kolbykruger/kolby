export const Serializer = {
    name: 'Serializer',
    methods: {
        htmlSerializer(type, element, content, children) {
            if (type == 'heading2') {
                const id = element.text.replace(/\W+/g, '-').toLowerCase()
                return `<a class="anchor-link" name="${id}"></a><h2>${children.join('')}</h2>`
            }
        }
    }
}
