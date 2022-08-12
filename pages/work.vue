<template>
    <main class="page" id="content">
        <div class="page-contents">
            <Pageheading name="Work" />

            <!-- <canvas id="canvas" ref="canvas" /> -->

            <section class="work-intro">
                <div class="container">
                    <div class="work-intro-details">
                        <p>
                            I ventured into design and development to express my creativity;
                            {{ careerDurationInYears }} years and a couple hundred energy drinks later, there's nowhere
                            else I'd rather be. I've had the opportunity to work on over
                            <span style="color: var(--color-primary-base)">{{ projectsCount + 14 }} ~</span> projects,
                            and collaborated with some extraordinary people.
                        </p>
                    </div>
                </div>
            </section>

            <section class="case-studies" v-if="cases">
                <div class="container">
                    <CaseStudyItem v-for="study in cases.results" :key="study.id" :item="study" />
                </div>
            </section>

            <section class="projects-list" v-if="projects">
                <div class="container">
                    <ul
                        class="projects-group"
                        :style="{ '--speed': projectsCount ? projectsCount * 2 + 's' : null, '--count': projectsCount }"
                    >
                        <li class="projects-list-item" v-for="project in projects" :key="project.index">
                            <p class="projects-list-item-company">{{ project.company }}</p>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- <slice-zone type="work" uid="work" /> -->
        </div>
    </main>
</template>

<script>
// import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import CaseStudyItem from '~/components/CaseStudyItem/CaseStudyItem.vue'
import { Animations } from '~/mixins/animations/Animations.js'
// import { CaseStudies } from '@/mixins/webgl/CaseStudies'

export default {
    components: {
        Pageheading,
        CaseStudyItem,
        // SliceZone,
    },
    mixins: [Animations],
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.query($prismic.predicates.at('document.type', 'work'))

        const caseStudyIds = document.results[0].data.CaseStudies.map(i => {
            return i.CaseStudy.id
        })

        const cases = await $prismic.api.getByIDs(caseStudyIds)

        //Get projects list for project scroller
        const projectsList = await $prismic.api.query($prismic.predicates.at('document.type', 'projects'))

        if (cases && document && projectsList) {
            let organizedProjects = projectsList.results[0].data.Projects.map((item, index) => {
                const d = new Date(item.Date)
                const o = {
                    year: 'numeric',
                    month: 'long',
                }
                const date = d.toLocaleDateString('en-us', o)
                return {
                    index: index + 1,
                    company: item.Company,
                    date: date,
                }
            })

            const projects = organizedProjects.sort(() => Math.random() - 0.5)

            return { document, projects, cases }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
    computed: {
        projectsCount() {
            const projects = this.projects
            return projects ? projects.length : null
        },
        careerDurationInYears() {
            const startDate = new Date('June 1, 2016')
            const todayDate = new Date()
            const difference = todayDate.getTime() - startDate.getTime()
            const years = difference / (1000 * 60 * 60 * 24 * 365)
            return Math.ceil(years)
        },
    },
}
</script>

<style lang="scss">
.work-intro {
    margin-bottom: 6vh;

    .container {
    }

    &-details {
        max-width: 50em;
    }
}

.case-studies {
    .container {
    }

    ul {
    }

    li {
    }
}

.projects-list {
    min-height: 30vh;
    max-width: 100%;
    overflow: hidden;

    .container {
        position: relative;
        padding: 0;
    }

    ul {
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(var(--count), 1fr);
        grid-gap: 8vw;
        list-style-type: none;
        margin-top: 6em;
        margin-bottom: 3em;
        padding-left: 0;
        padding-right: 0;
        white-space: nowrap;
        animation: scroll-projects-list var(--speed) linear infinite;

        // &::before {
        //     content: '';
        //     position: absolute;
        //     top: calc(50% + 0.125em);
        //     left: 0;
        //     width: 100%;
        //     height: 1px;
        //     background: ;
        //     opacity: 0.1;
        // }

        &:hover,
        &:focus,
        &:focus-within {
            animation-play-state: paused;
        }

        @keyframes scroll-projects-list {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(calc(-100% + 100vw));
            }
        }
    }

    &-item {
        position: relative;
        margin-bottom: 0;
        padding-left: 0;

        &::after {
            position: absolute;
            content: '';
            display: block;
            width: 6vw;
            height: 2px;
            margin-left: 1vw;
            margin-right: 1vw;
            background: c('base-4');
            background: linear-gradient(to right, c('base-7') 65%, transparent);
            left: 100%;
            top: calc(50% - 2px);

            html[theme='dark'] & {
                background: linear-gradient(to right, c('base-4') 65%, transparent);
            }
        }

        &-company {
            @include fs-lg;
            color: c('base-0');
            margin-bottom: 0;
        }
    }
}

#canvas {
    position: fixed;
}
</style>
