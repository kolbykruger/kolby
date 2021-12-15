export const ArticleShapes = {
    name: 'ArticleShapes',
    data() {
        return {
            shapes: [
                {
                    geometry: 'square',
                    style: {
                        top: '36px',
                        left: '49px',
                        width: '26px',
                        height: '26px',
                        transform: 'rotate(-8deg)',
                        background: 'var(--color-base-5)',
                        border: '1px solid var(--color-base-5)',
                    },
                    animation: {
                        duration: 4000,
                        delay: 1250,
                        keyframes: [{ transform: 'translate(28px, 9px) rotate(0)' }, { transform: 'translate(0,0)' }],
                    },
                },
                {
                    geometry: 'circle',
                    style: {
                        top: '24px',
                        left: '140px',
                        width: '9px',
                        height: '9px',
                        background: 'var(--color-base-5)',
                    },
                    animation: {
                        duration: 4000,
                        delay: 530,
                        keyframes: [{ transform: 'translate(-2px,7px) rotate(0)' }, { transform: 'translate(0,0)' }],
                    },
                },
                {
                    geometry: 'circle',
                    style: {
                        top: '192px',
                        left: '130px',
                        width: '9px',
                        height: '9px',
                        background: 'var(--color-base-5)',
                    },
                    animation: {
                        duration: 4000,
                        delay: 1740,
                        keyframes: [{ transform: 'translate(-9px,-2px) rotate(0)' }, { transform: 'translate(0,0)' }],
                    },
                },
                {
                    geometry: 'circle',
                    style: {
                        top: '87px',
                        left: '19px',
                        width: '22px',
                        height: '22px',
                        border: '1px solid var(--color-base-5)',
                    },
                    animation: {
                        duration: 4000,
                        delay: 780,
                        keyframes: [{ transform: 'translate(12px,24px) rotate(0)' }, { transform: 'translate(0,0)' }],
                    },
                },
                {
                    geometry: 'sqaure',
                    style: {
                        top: '102px',
                        left: '151px',
                        width: '26px',
                        height: '26px',
                        background: 'var(--color-base-5)',
                    },
                    animation: {
                        duration: 4000,
                        delay: 1020,
                        keyframes: [
                            { transform: 'translate(-4px,23px) rotate(-10deg)' },
                            { transform: 'translate(0,0)' },
                        ],
                    },
                },
                {
                    geometry: 'circle',
                    style: {
                        top: '149px',
                        left: '93px',
                        width: '6px',
                        height: '6px',
                        border: '1px solid var(--color-base-5)',
                    },
                    animation: {
                        duration: 4000,
                        delay: 620,
                        keyframes: [{ transform: 'translate(6px,1px) rotate(0)' }, { transform: 'translate(0,0)' }],
                    },
                },
                {
                    geometry: 'circle',
                    style: {
                        top: '110px',
                        left: '109px',
                        width: '14px',
                        height: '14px',
                        border: '1px solid var(--color-base-5)',
                    },
                    animation: {
                        duration: 4000,
                        delay: 340,
                        keyframes: [{ transform: 'translate(9px,-6px) rotate(0)' }, { transform: 'translate(0,0)' }],
                    },
                },
            ],
        }
    },
}
