<template>
    <section class="cases">
        <div class="container">
            {{ checkForAwkwardAmount }}
            <div class="cases-group">
                <Case v-for="(study, index) in cases" :index="index" :key="study.id" :item="study" />
            </div>
            <div class="actions actions-center" v-if="button">
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
import ArrowRight from '~/assets/svg/arrows/Arrow-Right.svg?inline'

export default {
    name: 'Cases',
    props: {
        cases: Array,
        button: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        Case,
        ArrowRight,
    },
    data() {
        return {
            isMobile: false,
        }
    },
    computed: {
        checkForAwkwardAmount() {
            const divisByThree = this.cases.length % 3 == 0 ? true : false
            const divisByFive = this.cases.length % 5 == 0 ? true : false

            if (divisByThree || divisByFive) {
                return true
            } else {
                return false
            }
        },
    },
    methods: {},
    mounted() {},
}
</script>

<style lang="scss">
.cases {
    margin-bottom: 3em;

    .container {
    }

    &-group {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3vh;

        @include mq('laptop-large') {
            grid-template-columns: repeat(2, 1fr);
        }
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
