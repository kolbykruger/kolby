<template>
    <main class="page article-content" id="content">
        <div class="page-contents">
            <article class="article">
                <section class="article-header">
                    <div class="container">
                        <p class="article-header-date" ref="articleDate">
                            <nuxt-link
                                data-stick
                                data-cursor="lg"
                                data-progress="4"
                                data-callback="route"
                                data-callback-location="/articles"
                                to="/articles"
                                >Articles</nuxt-link
                            >
                            <span>— {{ formatDate }}</span>
                        </p>

                        <Pageheading :name="document.data.Name" size="small" />

                        <prismic-rich-text
                            class="article-header-lead"
                            v-if="document.data.Summary"
                            :field="document.data.Summary"
                            ref="articleSummary"
                        />
                    </div>
                </section>

                <main class="article-content">
                    <slice-zone class="slices" type="article" :uid="$route.params.uid" />
                </main>

                <aside class="article-track">
                    <Author />

                    <div data-sticky>
                        <section v-if="document.data.Narration.url">
                            <div class="container">
                                <Button type="text" size="small" @clicked="listenToArticle">
                                    <template #preicon
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                opacity="0.12"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M2.15224 14.2346C2 14.6022 2 15.0681 2 16V19C2 19.9319 2 20.3978 2.15224 20.7654C2.35523 21.2554 2.74458 21.6448 3.23463 21.8478C3.60218 22 4.06812 22 5 22C5.93188 22 6.39782 22 6.76537 21.8478C7.25542 21.6448 7.64477 21.2554 7.84776 20.7654C8 20.3978 8 19.9319 8 19V16C8 15.0681 8 14.6022 7.84776 14.2346C7.64477 13.7446 7.25542 13.3552 6.76537 13.1522C6.39782 13 5.93188 13 5 13C4.06812 13 3.60218 13 3.23463 13.1522C2.74458 13.3552 2.35523 13.7446 2.15224 14.2346ZM16.1522 14.2346C16 14.6022 16 15.0681 16 16V19C16 19.9319 16 20.3978 16.1522 20.7654C16.3552 21.2554 16.7446 21.6448 17.2346 21.8478C17.6022 22 18.0681 22 19 22C19.9319 22 20.3978 22 20.7654 21.8478C21.2554 21.6448 21.6448 21.2554 21.8478 20.7654C22 20.3978 22 19.9319 22 19V16C22 15.0681 22 14.6022 21.8478 14.2346C21.6448 13.7446 21.2554 13.3552 20.7654 13.1522C20.3978 13 19.9319 13 19 13C18.0681 13 17.6022 13 17.2346 13.1522C16.7446 13.3552 16.3552 13.7446 16.1522 14.2346Z"
                                                fill="#22272F"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12V15.9324C1.25 15.9464 1.25 15.9606 1.25 15.9747V15.9747V16V17V19V19.0252C1.24999 19.4697 1.24999 19.8408 1.27077 20.1454C1.29241 20.4625 1.33905 20.762 1.45933 21.0524C1.73844 21.7262 2.27379 22.2616 2.94762 22.5407C3.23801 22.661 3.53754 22.7076 3.85464 22.7292C4.15925 22.75 4.53028 22.75 4.97474 22.75H5H5.02526C5.46972 22.75 5.84075 22.75 6.14537 22.7292C6.46247 22.7076 6.76199 22.661 7.05238 22.5407C7.72621 22.2616 8.26156 21.7262 8.54067 21.0524C8.66095 20.762 8.7076 20.4625 8.72923 20.1454C8.75001 19.8408 8.75001 19.4697 8.75 19.0253V19V16V15.9747C8.75001 15.5303 8.75001 15.1592 8.72923 14.8546C8.7076 14.5375 8.66095 14.238 8.54067 13.9476C8.26156 13.2738 7.72621 12.7384 7.05238 12.4593C6.76199 12.339 6.46247 12.2924 6.14537 12.2708C5.84075 12.25 5.46971 12.25 5.02525 12.25H5H4.97475C4.53029 12.25 4.15925 12.25 3.85464 12.2708C3.53754 12.2924 3.23801 12.339 2.94762 12.4593C2.88033 12.4872 2.81441 12.5176 2.75 12.5505V12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12V12.5505C21.1856 12.5176 21.1197 12.4872 21.0524 12.4593C20.762 12.339 20.4625 12.2924 20.1454 12.2708C19.8408 12.25 19.4697 12.25 19.0253 12.25H19H18.9748C18.5303 12.25 18.1592 12.25 17.8546 12.2708C17.5375 12.2924 17.238 12.339 16.9476 12.4593C16.2738 12.7384 15.7384 13.2738 15.4593 13.9476C15.339 14.238 15.2924 14.5375 15.2708 14.8546C15.25 15.1592 15.25 15.5303 15.25 15.9747V16V19V19.0252C15.25 19.4697 15.25 19.8408 15.2708 20.1454C15.2924 20.4625 15.339 20.762 15.4593 21.0524C15.7384 21.7262 16.2738 22.2616 16.9476 22.5407C17.238 22.661 17.5375 22.7076 17.8546 22.7292C18.1592 22.75 18.5303 22.75 18.9747 22.75H19H19.0253C19.4697 22.75 19.8408 22.75 20.1454 22.7292C20.4625 22.7076 20.762 22.661 21.0524 22.5407C21.7262 22.2616 22.2616 21.7262 22.5407 21.0524C22.661 20.762 22.7076 20.4625 22.7292 20.1454C22.75 19.8408 22.75 19.4698 22.75 19.0253V19.0253V19V17V16V15.9747V15.9747C22.75 15.96 22.75 15.9454 22.75 15.9308V12C22.75 6.06294 17.9371 1.25 12 1.25ZM21.25 16C21.25 15.5238 21.2496 15.2042 21.2327 14.9567C21.2163 14.716 21.1868 14.5988 21.1549 14.5216C21.028 14.2154 20.7846 13.972 20.4784 13.8452C20.4012 13.8132 20.284 13.7837 20.0433 13.7673C19.7958 13.7504 19.4762 13.75 19 13.75C18.5238 13.75 18.2042 13.7504 17.9567 13.7673C17.716 13.7837 17.5988 13.8132 17.5216 13.8452C17.2154 13.972 16.972 14.2154 16.8452 14.5216C16.8132 14.5988 16.7837 14.716 16.7673 14.9567C16.7504 15.2042 16.75 15.5238 16.75 16V19C16.75 19.4762 16.7504 19.7958 16.7673 20.0433C16.7837 20.284 16.8132 20.4012 16.8452 20.4784C16.972 20.7846 17.2154 21.028 17.5216 21.1549C17.5988 21.1868 17.716 21.2163 17.9567 21.2327C18.2042 21.2496 18.5238 21.25 19 21.25C19.4762 21.25 19.7958 21.2496 20.0433 21.2327C20.284 21.2163 20.4012 21.1868 20.4784 21.1549C20.7846 21.028 21.028 20.7846 21.1549 20.4784C21.1868 20.4012 21.2163 20.284 21.2327 20.0433C21.2496 19.7958 21.25 19.4762 21.25 19V17V16ZM2.75 16V17V19C2.75 19.4762 2.75041 19.7958 2.76729 20.0433C2.78372 20.284 2.81319 20.4012 2.84515 20.4784C2.97202 20.7846 3.21536 21.028 3.52165 21.1549C3.5988 21.1868 3.71602 21.2163 3.95674 21.2327C4.20421 21.2496 4.5238 21.25 5 21.25C5.4762 21.25 5.7958 21.2496 6.04326 21.2327C6.28399 21.2163 6.4012 21.1868 6.47836 21.1549C6.78464 21.028 7.02798 20.7846 7.15485 20.4784C7.18681 20.4012 7.21629 20.284 7.23271 20.0433C7.24959 19.7958 7.25 19.4762 7.25 19V16C7.25 15.5238 7.24959 15.2042 7.23271 14.9567C7.21629 14.716 7.18681 14.5988 7.15485 14.5216C7.02798 14.2154 6.78464 13.972 6.47836 13.8452C6.4012 13.8132 6.28399 13.7837 6.04326 13.7673C5.7958 13.7504 5.4762 13.75 5 13.75C4.5238 13.75 4.20421 13.7504 3.95674 13.7673C3.71602 13.7837 3.5988 13.8132 3.52165 13.8452C3.21536 13.972 2.97202 14.2154 2.84515 14.5216C2.81319 14.5988 2.78372 14.716 2.76729 14.9567C2.75041 15.2042 2.75 15.5238 2.75 16Z"
                                                fill="#22272F"
                                            /></svg
                                    ></template>
                                    Listen to this article
                                </Button>
                                <Button type="text" size="small" @clicked="toggleCodeSections">
                                    <template #preicon
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <rect
                                                opacity="0.12"
                                                x="2"
                                                y="2"
                                                width="20"
                                                height="20"
                                                rx="6"
                                                fill="#22272F"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.5661 1.25L11.6 1.25L12.4 1.25L12.4339 1.25L12.434 1.25C14.0854 1.25 15.3708 1.25 16.4019 1.33424C17.4488 1.41977 18.2993 1.59588 19.0644 1.98571C20.3345 2.63285 21.3671 3.66547 22.0143 4.93557C22.4041 5.70065 22.5802 6.55125 22.6658 7.59814C22.75 8.6292 22.75 9.91457 22.75 11.5659L22.75 11.566L22.75 11.6L22.75 12.4L22.75 12.434L22.75 12.434C22.75 14.0854 22.75 15.3708 22.6658 16.4019C22.5802 17.4488 22.4041 18.2994 22.0143 19.0644C21.3671 20.3345 20.3345 21.3672 19.0644 22.0143C18.2993 22.4041 17.4488 22.5802 16.4019 22.6658C15.3708 22.75 14.0854 22.75 12.434 22.75L12.434 22.75L12.4 22.75L11.6 22.75L11.566 22.75L11.566 22.75C9.91458 22.75 8.6292 22.75 7.59814 22.6658C6.55124 22.5802 5.70065 22.4041 4.93556 22.0143C3.66547 21.3672 2.63285 20.3345 1.9857 19.0644C1.59587 18.2994 1.41977 17.4488 1.33423 16.4019C1.24999 15.3708 1.24999 14.0854 1.25 12.4339L1.25 12.4L1.25 11.6L1.25 11.5661C1.24999 9.91462 1.24999 8.62922 1.33423 7.59814C1.41977 6.55125 1.59587 5.70065 1.9857 4.93557C2.63285 3.66547 3.66547 2.63285 4.93556 1.98571C5.70065 1.59588 6.55124 1.41977 7.59814 1.33424C8.62922 1.24999 9.91462 1.25 11.5661 1.25ZM7.72028 2.82926C6.76615 2.90721 6.13493 3.05809 5.61655 3.32222C4.6287 3.82555 3.82555 4.6287 3.32221 5.61655C3.05808 6.13494 2.90721 6.76616 2.82925 7.72029C2.75058 8.68318 2.75 9.90747 2.75 11.6L2.75 12.4C2.75 14.0925 2.75058 15.3168 2.82925 16.2797C2.90721 17.2338 3.05808 17.8651 3.32221 18.3835C3.82555 19.3713 4.6287 20.1745 5.61655 20.6778C6.13493 20.9419 6.76615 21.0928 7.72028 21.1707C8.68317 21.2494 9.90747 21.25 11.6 21.25L12.4 21.25C14.0925 21.25 15.3168 21.2494 16.2797 21.1707C17.2338 21.0928 17.8651 20.9419 18.3834 20.6778C19.3713 20.1745 20.1744 19.3713 20.6778 18.3835C20.9419 17.8651 21.0928 17.2338 21.1707 16.2797C21.2494 15.3168 21.25 14.0925 21.25 12.4L21.25 11.6C21.25 9.90747 21.2494 8.68318 21.1707 7.72029C21.0928 6.76616 20.9419 6.13494 20.6778 5.61655C20.1744 4.6287 19.3713 3.82555 18.3834 3.32222C17.8651 3.05809 17.2338 2.90721 16.2797 2.82926C15.3168 2.75059 14.0925 2.75 12.4 2.75L11.6 2.75C9.90746 2.75 8.68317 2.75058 7.72028 2.82926ZM6.46967 9.46967C6.76256 9.17678 7.23744 9.17678 7.53033 9.46967L10.5304 12.4697C10.671 12.6104 10.7501 12.8012 10.7501 13.0001C10.7501 13.199 10.671 13.3897 10.5304 13.5304L7.53026 16.5305C7.23737 16.8234 6.76249 16.8233 6.4696 16.5304C6.17671 16.2376 6.17672 15.7627 6.46961 15.4698L8.93939 13.0001L6.46967 10.5303C6.17678 10.2374 6.17678 9.76257 6.46967 9.46967ZM13 15.25C12.5858 15.25 12.25 15.5858 12.25 16C12.25 16.4142 12.5858 16.75 13 16.75L17 16.75C17.4142 16.75 17.75 16.4142 17.75 16C17.75 15.5858 17.4142 15.25 17 15.25L13 15.25Z"
                                                fill="#22272F"
                                            /></svg
                                    ></template>
                                    {{ showCode ? 'Show entire article' : 'Show code snippets' }}
                                </Button>
                            </div>
                        </section>
                        <section>
                            <div class="container">
                                <TableOfContents :document="document" />
                            </div>
                        </section>
                    </div>

                    <!-- <div data-sticky>
                        <ShapeCollection
                            :collection="{
                                top: '0',
                                transform: 'translate(0px, -40%)',
                                left: '60%',
                                width: '177px',
                                height: '201px',
                            }"
                            :shapes="shapes"
                        />
                        <TableOfContents :document="document" />

                        <div class="article-code-sections" data-sticky v-if="containsCodeBlock">
                            <Button size="small" @clicked="toggleCodeSections">
                                {{ showCode ? 'Show entire article' : 'Show code snippets' }}
                            </Button>
                        </div>
                    </div> -->
                </aside>
            </article>
        </div>
        <Audio
            v-if="document.data.Narration.url"
            :isShowing="showAudio"
            :source="document.data.Narration.url"
            :title="document.data.Name[0].text"
        />
    </main>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { CustomEase } from 'gsap/dist/CustomEase'

import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import Audio from '~/components/Audio/Audio.vue'
import TableOfContents from '~/components/TableOfContents/TableOfContents.vue'
import ShapeCollection from '~/components/Shapes/ShapeCollection.vue'
import { ArticleShapes } from '~/mixins/shapes/ArticleShapes.js'

export default {
    components: {
        SliceZone,
        Pageheading,
        Audio,
        TableOfContents,
        ShapeCollection,
    },
    mixins: [ArticleShapes],
    data() {
        return {
            showCode: false,
            showAudio: false,
        }
    },
    computed: {
        formatDate() {
            const d = this.document.last_publication_date
            const date = new Date(d)
            const options = {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }
            return date.toLocaleString('en-us', options)
        },
        containsCodeBlock() {
            const slices = this.document.data.slices
            if (!slices) {
                return
            }

            const cb = slices.filter(slice => {
                return slice.slice_type == 'code_block'
            })

            return cb ? true : false
        },
        initialLoad() {
            return this.$store.state.loading.initial
        },
    },
    methods: {
        toggleCodeSections() {
            this.showCode = !this.showCode
            const sections = document.querySelectorAll('article main section')
            sections.forEach(section => {
                const status = section.classList.contains('code-block') ? true : false
                if (!status) {
                    //section.style.display = this.showCode ? 'none' : null
                    this.showCode ? section.classList.add('-hidden') : section.classList.remove('-hidden')
                }
            })
        },
        listenToArticle() {
            this.showAudio = !this.showAudio
        },
    },
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getByUID('article', params.uid)
        // const nextArticle = (
        //     await $prismic.api.query($prismic.predicates.at('document.type', 'case-study'), {
        //         pageSize: 3,
        //         after: `${document.id}`,
        //         orderings: '[my.post.date]'
        //     })
        // ).results[0]
        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
    mounted() {
        gsap.registerPlugin(SplitText)
        gsap.registerPlugin(CustomEase)

        const ease = CustomEase.create('custom', 'M0,0 C0.215,0.61 0.355,1 1,1 ')
        const tl = gsap.timeline()

        const date = new SplitText(this.$refs.articleDate, {
            type: 'lines,words,chars',
            charsClass: 'pageheading-char',
            wordsClass: 'pageheading-word',
            linesClass: 'pageheading-line',
        })

        const summary = new SplitText(this.$refs.articleSummary, {
            type: 'lines,words,chars',
            charsClass: 'pageheading-char',
            wordsClass: 'pageheading-word',
            linesClass: 'pageheading-line',
        })

        gsap.set(date.chars, {
            yPercent: 100,
            rotateX: 110,
            d: 1300,
        })

        gsap.set(summary.chars, {
            yPercent: 100,
            rotateX: 110,
            d: 1300,
        })

        this.$router.onReady(() => {
            this.$nextTick(() => {
                setTimeout(
                    () => {
                        gsap.to(date.chars, {
                            yPercent: 0,
                            rotateX: 0,
                            d: 0,
                            ease: ease,
                            stagger: 0.02,
                            delay: this.initialLoad ? 0.16 : 0.5,
                        })
                        gsap.to(summary.chars, {
                            yPercent: 0,
                            rotateX: 0,
                            d: 0,
                            ease: ease,
                            stagger: 0.01,
                            delay: this.initialLoad ? 0.56 : 1.1,
                        })
                    },
                    this.initialLoad ? 2000 : 1000
                ) // page animation transition length
            })
        })
    },
}
</script>

<style lang="scss">
.article {
    max-width: calc(1280px + 4vw);
    padding: 0 48px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    margin-bottom: 3rem;
    counter-reset: sidenotes markers;

    .container {
        padding: 0;
    }

    main {
    }

    aside {
        position: relative;

        section {
            position: relative;
            padding-top: 1em;
            margin-bottom: 1em;
        }
    }

    &-header {
        padding-top: 6vh;
        margin-bottom: 8vh;

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: c('base-4');
            background: linear-gradient(to right, c('base-4') 65%, transparent);
        }

        .pageheading {
            .container {
                padding: 0;
            }
        }

        &-date {
            display: flex;
            align-items: center;
            flex-flow: row wrap;
            padding-bottom: 4vh;

            a {
                text-decoration: none;
            }

            span {
                margin: 0 0.25em;
                opacity: 0.25;
            }
        }

        &-lead {
            padding-bottom: 6vh;

            &:empty {
                padding-bottom: 2vh;
            }
        }
    }

    .article-track {
        > [data-sticky] {
            position: sticky;
            top: 6vh;
        }
    }

    .article-content {
        padding-top: 0;

        section:first-of-type {
            *:is(p):first-child,
            *:is(a):first-child + h2,
            *:is(a):first-child + h3 {
                margin-top: 0;
            }
        }

        h2 {
            font-family: $font-1;
            font-size: clamp(1.999rem, -0.875rem + 8.333vw, 3.998rem);
            font-weight: 600;
        }

        h3 {
            font-size: clamp(1.699rem, -0.875rem + 8.333vw, 2.827rem);
        }

        h4 {
            font-size: clamp(1.563rem, -0.875rem + 8.333vw, 1.999rem);
        }

        h5 {
            font-size: clamp(1.414rem, -0.875rem + 8.333vw, 1.414rem);
        }
    }

    .art {
        &-line {
            // overflow: hidden;
        }

        &-char-parent {
            overflow: hidden;
            perspective: 1000px;
            transform-style: preserve-3d;
        }
    }
}
</style>
