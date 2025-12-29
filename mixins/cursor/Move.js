import { gsap } from 'gsap'

export const Move = {
    name: 'Move',
    methods: {
        move(x, y, duration, elem) {
            gsap.to(elem, {
                x: x,
                y: y,
                rotate: '0deg',
                force3D: true,
                overwrite: true,
                duration: duration || 0.15,
            })
        },
    },
}
