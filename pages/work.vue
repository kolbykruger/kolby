<template>
    <main class="page" id="content">
        <div class="page-contents">
            <Pageheading name="Work" />

            <section class="work-intro">
                <div class="container">
                    <div class="work-intro-details">
                        <p>
                            I've had the opportunity to work on some amazing projects with some marvelous people. I'm
                            lucky enough to have been part of over
                            <span style="color: var(--color-primary-base);">{{ projectsCount + 14 }}</span> creative
                            experiences & products.
                        </p>
                    </div>
                </div>
            </section>
            <Scroller />

            <section class="case-studies" v-if="cases">
                <div class="container">
                    <!-- <ul>
                    <li >
                        <nuxt-link :to="'/works/' + study.uid">{{ study.data.Name[0].text }}</nuxt-link>
                    </li>
                </ul> -->

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
                            <p class="projects-list-item-index">#{{ project.index }}</p>
                            <p class="projects-list-item-company">{{ project.company }}</p>
                            <p class="projects-list-item-date">{{ project.date }}</p>
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

export default {
    components: {
        Pageheading,
        CaseStudyItem
    },
    mixins: [Animations],
    async asyncData({ $prismic, params, error }) {
        const cases = await $prismic.api.query($prismic.predicates.at('document.type', 'case-study'), {
            orderings: '[document.first_publication_date ]'
        })
        const document = await $prismic.api.query($prismic.predicates.at('document.type', 'work'))
        const projectsList = await $prismic.api.query($prismic.predicates.at('document.type', 'projects'))

        if (cases && document && projectsList) {
            let organizedProjects = projectsList.results[0].data.Projects.map((item, index) => {
                const d = new Date(item.Date)
                const o = {
                    year: 'numeric',
                    month: 'long'
                }
                const date = d.toLocaleDateString('en-us', o)
                return {
                    index: index + 1,
                    company: item.Company,
                    date: date
                }
            })

            const projects = organizedProjects.sort(() => Math.random() - 0.5)

            return { cases, document, projects }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
    computed: {
        projectsCount() {
            const projects = this.projects
            return projects ? projects.length : null
        }
    }
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
        grid-gap: 3.5em;
        list-style-type: none;
        margin-top: 0;
        margin-bottom: 0;
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
            width: 58px;
            height: 1px;
            margin-left: 0.75em;
            margin-right: 0.75em;
            margin-bottom: 0.125em;
            background: c('base-7');
            left: 100%;
            top: calc(50% + 0.125em);
        }

        &-index,
        &-company,
        &-date {
            margin-top: 0;
            transition: 0.66s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &-index {
            font-family: $font-2;
            font-weight: 500;
            font-size: 1rem;
            padding: 0.35em 0.5em;
            background: c('base-9');
            display: inline-flex;
            border-radius: 0.35em;
            line-height: 1;
            opacity: 0;
            visibility: hidden;
        }

        &-company {
            color: c('base-0');
            margin-bottom: 0;
        }

        &-date {
            font-size: 1.25rem;
            color: c('base-5');
            opacity: 0;
            visibility: hidden;
        }

        &:hover,
        &:focus {
            .projects-list-item-index,
            .projects-list-item-date {
                opacity: 1;
                visibility: visible;
            }
        }
    }
}
</style>
