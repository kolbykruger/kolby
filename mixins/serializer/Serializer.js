export const Serializer = {
    name: 'Serializer',
    methods: {
        htmlSerializer(type, element, content, children) {
            if (type == 'heading2') {
                const id = element.text.replace(/\W+/g, '-').toLowerCase()
                return '<h2 id="' + id + '">' + children.join('') + '</h2>'
            }
        }
    }
}
