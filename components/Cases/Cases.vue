<template>
    <section class="cases">
        <div class="cases-container">
            <div class="cases-list" data-cursor="invisible">
                <client-only>
                    <Flickity ref="flickity" class="cases-slider" :options="flickityOptions" @init="onInit">
                        <Case v-for="study in reducedCases" :key="study.id" :item="study" />
                    </Flickity>
                    <!-- <div class="flickity-indicator" ref="indicator">
                        <span
                            class="flickity-indicator-thumb"
                            :style="{ '--progress': thumbProgress + 'px', '--width': thumbWidth + 'px' }"
                        ></span>
                    </div> -->
                    <Swiper v-if="isMobile" :count="reducedCases.length" :progress="progress" />
                </client-only>
            </div>
            <div class="actions actions-center">
                <Button location="/work">
                    Explore more work
                    <template #posticon><ArrowRight /></template>
                </Button>
            </div>
        </div>
    </section>
</template>

<script>
import Case from '~/components/Cases/Case.vue'
import Swiper from '~/components/Swiper/Swiper.vue'
import ArrowRight from '~/assets/svg/arrows/Arrow-Right.svg?inline'

export default {
    name: 'Cases',
    props: {
        cases: Array,
    },
    components: {
        Case,
        Swiper,
        ArrowRight,
    },
    data() {
        return {
            selectedIndex: 0,
            progress: 0,
            isMobile: false,
        }
    },
    computed: {
        flickityOptions() {
            return {
                cellSelector: '.case',
                cellAlign: 'left',
                contain: true,
                imagesLoaded: true,
                adaptiveHeight: false,
                setGallerySize: true,
                prevNextButtons: false,
                freeScroll: true,
                selectedAttraction: 0.01,
                friction: 0.18,
                groupCells: this.groupCells(),
                initialIndex: 0,
                pageDots: false,
            }
        },
        size() {
            const count = this.cases.length
            return count > 3 ? true : false
        },
        indicator() {
            const count = this.cases.length
            const index = this.selectedIndex
        },
        reducedCases() {
            return this.isMobile ? this.cases : this.cases.slice(0, 3)
        },
    },
    methods: {
        groupCells() {
            return this.isMobile ? 1 : this.cases.length
        },
        onInit(evt) {
            this.selectedIndex = evt.selectedIndex
            evt.on('change', event => {
                this.selectedIndex = event
            })
            evt.on('scroll', progress => {
                this.progress = progress
            })
        },
    },
    mounted() {
        this.isMobile = screen.width <= 768 ? true : false

        window.addEventListener('resize', () => {
            this.isMobile = screen.width <= 768 ? true : false
        })
    },
}
</script>

<style lang="scss">
.cases {
    .container {
    }

    &-list {
        position: relative;

        &::before,
        &::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(to right, transparent, c('base-4'), transparent);
        }

        &::before {
            top: 0;
        }

        &::after {
            bottom: 0;
        }
    }

    .actions {
        margin-top: 5vh;
    }
}
</style>
