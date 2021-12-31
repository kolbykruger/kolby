export const Serializer = {
    name: 'Serializer',
    methods: {
        htmlSerializer(type, element, content, children) {
            // Format heading 2 for anchor link and anchor indicator
            if (type == 'heading2') {
                const id = element.text.replace(/\W+/g, '-').toLowerCase()
                return `
                <h2>
                    ${children.join('')}
                    <a class="anchor-link-indicator" aria-hidden="true" tabindex="-1" data-type="h2" href="#${id}" name="${id}">
                        <span>#</span>
                    </a>
                </h2>
                `
            }

            // Format heading 3 for anchor link and anchor indicator
            if (type == 'heading3') {
                const id = element.text.replace(/\W+/g, '-').toLowerCase()
                return `
                <h3>
                    ${children.join('')}
                    <a class="anchor-link-indicator" aria-hidden="true" tabindex="-1" data-type="h3" href="#${id}" name="${id}">
                        <span>#</span>
                    </a>
                </h3>
                `
            }
            if (type == 'image') {
                // Break the url on the predefined width
                const img = element.url.split('&w')[0]
                // Get file type
                const type = element.url.substring(element.url.lastIndexOf('.') + 1, element.url.length) || 'png'
                const extension = type.split('?')[0]
                // Append the url with the format and clip
                const imgix = '&fm=webp&fit=clip'
                // Define the breakpoints for the image
                const breakpoints = [
                    {
                        dimension: 320,
                        format: 207,
                    },
                    {
                        dimension: 375,
                        format: 262,
                    },
                    {
                        dimension: 460,
                        format: 347,
                    },
                    {
                        dimension: 600,
                        format: 487,
                    },
                    {
                        dimension: 640,
                        format: 527,
                    },
                    {
                        dimension: 768,
                        format: 655,
                    },
                    {
                        dimension: 1024,
                        format: 570,
                    },
                    {
                        dimension: 1200,
                        format: 739,
                    },
                    {
                        dimension: 1280,
                        format: 800,
                    },
                    {
                        dimension: 1350,
                        format: 800,
                    },
                    {
                        dimension: 2560,
                        format: 800,
                    },
                ]

                let sizes = []
                let sets = []

                // Loop through the breakpoints and format srcset and sizes for picture
                breakpoints.forEach((size, i) => {
                    const src = `${img}&w=${size.format}${imgix}`
                    const isLastItem = i + 1 == breakpoints.length ? true : false
                    sizes.push(
                        isLastItem ? `${size.dimension}px` : `(max-width: ${size.dimension}px) ${size.dimension}px`
                    )
                    sets.push(`${src} ${size.dimension}w`)
                })

                // Return the formatted figure with picture
                return `
                <figure class="picture" style="aspect-ratio: ${element.dimensions.width} / ${
                    element.dimensions.height
                }" type="${extension}">
                    <picture class>
                        <source type="image/webp"
                            srcset="${sets.join(', ')}"
                            sizes="${sizes.join(', ')}"
                        >
                        <img src="${element.url}${imgix}"
                            srcset="${sets.join(',')}"
                            sizes="${sizes.join(', ')}"
                            loading="lazy"
                        >
                    </picture>
                </figure>
                `
            }
        },
    },
}
