<template>
    <section class="gallery">
        <div class="container">
            <prismic-rich-text :field="slice.primary.title" class="title" />
            <prismic-rich-text :field="slice.primary.description" />

            <div class="gallery-items grid grid-col-4 grid-gap-lg">
                <div class="gallery-item" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
                    <div
                        class="gallery-img"
                        :style="{
                            'aspect-ratio': item.Image.crop.dimensions.width / item.Image.crop.dimensions.height
                        }"
                    >
                        <a @click.prevent="expandImage(item.Image)" data-cursor="lg">
                            <prismic-image :field="item.Image.crop" />
                            <span class="gallery-expand-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="149"
                                    height="149"
                                    viewBox="0 0 149 149"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M64.3788 18.448C76.2543 29.1423 93.8691 31.572 110.841 28.2683L97.1381 41.9709L41.9711 97.1379L28.2685 110.841C31.5722 93.8689 29.1425 76.2546 18.4487 64.3787C17.7094 63.5579 16.4365 63.5588 15.6552 64.3401L9.35101 70.6443C8.56976 71.4255 8.57709 72.6877 9.29339 73.5286C22.8491 89.4382 16.1889 121.421 0.937926 138.107C0.192809 138.923 0.190368 140.185 0.971618 140.967L7.47699 147.472L7.50384 147.498L7.61859 147.613C8.39984 148.394 9.66205 148.392 10.4775 147.647C27.166 132.401 59.2026 125.802 75.0561 139.292C75.8974 140.008 77.1596 140.014 77.9404 139.234L84.2451 132.929C85.0258 132.148 85.0268 130.875 84.206 130.136C72.3305 119.442 54.7158 117.012 37.7441 120.316L51.4467 106.613L106.614 51.446L120.316 37.7434C117.013 54.7151 119.442 72.3293 130.136 84.2053C130.875 85.0261 132.148 85.0251 132.93 84.2439L139.234 77.9397C140.015 77.1584 140.008 75.8962 139.291 75.0554C125.736 59.1458 132.396 27.1633 147.647 10.4768C148.392 9.66138 148.394 8.39868 147.613 7.61743L141.108 1.11206L141.081 1.08569L140.966 0.970948C140.185 0.190186 138.923 0.19214 138.107 0.937257C121.419 16.1829 89.3823 22.782 73.5287 9.29224C72.6874 8.57642 71.4252 8.56958 70.6445 9.35034L64.3398 15.655C63.559 16.4358 63.558 17.7087 64.3788 18.448Z"
                                        fill="#0B0E11"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="gallery-expanded" ref="galleryExpanded" v-show="expanded" :class="{ '-active': expanded }">
                <div class="gallery-expanded-container" v-if="expanded">
                    <span class="gallery-expanded-loading" aria-label="loading image...">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 10.4448 2.61468 8.97258 3.26388 7.66623C3.44822 7.29529 3.89836 7.14403 4.26929 7.32836C4.64023 7.5127 4.79149 7.96284 4.60716 8.33377C4.05873 9.43734 3.75 10.6815 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                                fill="#22282F"
                            />
                        </svg>
                    </span>
                    <a class="gallery-expanded-background" @click.prevent="closeExpandedImage"></a>
                    <prismic-image :field="expanded" />
                    {{ focus }}
                    <a class="gallery-expanded-exit" @click.prevent="closeExpandedImage">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="174"
                            height="174"
                            viewBox="0 0 174 174"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M172.446 66.3774C160.57 55.683 142.956 53.2534 125.984 56.5573L167.224 15.3172C168.005 14.5361 168.005 13.2698 167.224 12.4888L160.577 5.84196C159.796 5.06091 158.53 5.06091 157.749 5.84196L116.509 47.0818C119.812 30.1103 117.383 12.4958 106.689 0.620188C105.949 -0.200622 104.677 -0.199675 103.895 0.581375L97.5911 6.88579C96.81 7.66684 96.8172 8.92904 97.5335 9.76981C111.089 25.6797 104.429 57.662 89.1781 74.3488C88.4329 75.1641 88.4306 76.4267 89.2117 77.2077L95.7171 83.7131C95.7211 83.7171 95.7252 83.7212 95.7292 83.7252C95.7342 83.73 95.7392 83.7349 95.7441 83.7397L95.8587 83.8543C96.6398 84.6353 97.9024 84.6331 98.7179 83.8881C115.406 68.6425 147.443 62.0435 163.296 75.533C164.137 76.2488 165.4 76.256 166.181 75.4749L172.485 69.1705C173.266 68.3894 173.267 67.1165 172.446 66.3774ZM0.620187 106.687C12.496 117.381 30.1107 119.811 47.0824 116.507L5.53423 158.055C4.75319 158.836 4.75319 160.102 5.53423 160.883L12.181 167.53C12.9621 168.311 14.2284 168.311 15.0095 167.53L56.5577 125.982C53.254 142.954 55.6836 160.568 66.3779 172.444C67.117 173.265 68.3899 173.264 69.171 172.483L75.4754 166.178C76.2565 165.397 76.2493 164.135 75.533 163.294C61.9775 147.384 68.6372 115.402 83.8884 98.7153C84.6336 97.9 84.6358 96.6374 83.8548 95.8564L77.3494 89.351C77.3404 89.342 77.3314 89.3332 77.3223 89.3244L77.2077 89.2098C76.4267 88.4288 75.1641 88.431 74.3486 89.176C57.6605 104.422 25.6235 111.021 9.77024 97.5311C8.929 96.8153 7.66684 96.8081 6.8858 97.5892L0.581375 103.894C-0.199673 104.675 -0.200624 105.948 0.620187 106.687Z"
                                fill="#0B0E11"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Gallery',
    props: {
        slice: {
            type: Object,
            required: true,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            expanded: null,
            focus: null
        }
    },
    methods: {
        expandImage(img) {
            this.expanded = img
            const exp = this.$refs.galleryExpanded
            console.log(exp)
            exp.focus()
        },
        closeExpandedImage() {
            this.expanded = null
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery {
    .container {
        padding-bottom: 10vh;
    }

    &-items {
        margin-top: 5vh;
    }

    &-item {
        position: relative;

        a {
            display: block;
            width: 100%;
            height: 100%;
            cursor: pointer;
            transition: 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);

            &:hover,
            &:focus {
                transform: scale(0.96);

                .gallery-expand-icon {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }

    &-expand-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        --size: 5em;
        width: var(--size);
        height: var(--size);
        padding: 0.5em;
        opacity: 0;
        visibility: hidden;
        mix-blend-mode: exclusion;
        transform: translate(-50%, -50%);
        transition: 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);

        svg {
            --size: 4em;
            width: var(--size);
            height: var(--size);

            path {
                fill: #fff;
            }
        }
    }

    &-expanded {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 3em;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        animation: gallery-expanded-image-exit 0.66s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

        &.-active {
            animation: gallery-expanded-image-enter 0.66s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

            @keyframes gallery-expanded-image-enter {
                from {
                    transform: scale(0.98);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        }

        @keyframes gallery-expanded-image-exit {
            from {
                transform: scale(1);
                opacity: 1;
            }
            to {
                transform: scale(0.98);
                opacity: 0;
            }
        }

        &-container {
            position: relative;
            width: 100%;
            height: 100%;
        }

        img {
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: contain;
            z-index: 2;
            transition: 5s ease;
        }

        &-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 3;
            cursor: pointer;
        }

        &-exit {
            position: absolute;
            top: 0;
            right: 0;
            --size: 4em;
            width: var(--size);
            height: var(--size);
            padding: 0.5em;
            mix-blend-mode: color-burn;
            transition: 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);

            svg {
                --size: 3em;
                width: var(--size);
                height: var(--size);
            }
        }

        &-loading {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: grid;
            place-content: center;
            z-index: 1;

            svg {
                --size: 10vw;
                width: var(--size);
                height: var(--size);
                animation: expanded-loading 0.96s linear infinite;

                path {
                    fill: c('background');
                }

                @keyframes expanded-loading {
                    to {
                        transform: rotate(360deg);
                    }
                }
            }
        }
    }
}
</style>
