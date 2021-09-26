export async function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }

    const findElem = async (hash, x) => {
        const elem = document.querySelector(`a[name="${hash.slice(1)}"]`)
            ? document.querySelector(`a[name="${hash.slice(1)}"]`)
            : document.querySelector(hash)
        return elem || null
    }

    if (to.hash) {
        let el = await findElem(to.hash)

        if ('scrollBehavior' in document.documentElement.style) {
            const offset = el.getBoundingClientRect().top + window.scrollY - 32
            return window.scrollTo({ top: offset, behavior: 'smooth' })
        } else {
            return window.scrollTo(0, el.offsetTop)
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ x: 0, y: 0 })
        }, 1000)
    })
}
