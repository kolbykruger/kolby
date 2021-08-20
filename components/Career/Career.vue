<template>
    <section class="career">
        <div class="container">
            <Flickity ref="flickity" class="career-slider" :options="flickityOptions">
                <div class="career-item">
                    <p class="career-year">— 2020</p>
                    <h3>Senior Designer + Developer at <a href="#">Eternity</a></h3>
                    <div class="career-summary">
                        <p>
                            While working with clients on their websites, I advanced Eternity's tech stack, helping to
                            bring a better client experience, and a more agile developer experience to our workplace. I
                            continue to work at Eternity today.
                        </p>
                    </div>
                </div>
                <div class="career-item">
                    <p class="career-year">2019</p>
                    <h3>Project Manager, Designer + Developer at <a href="#">Eternity</a></h3>
                    <div class="career-summary">
                        <p>
                            I provided a full-class experience, working with clients from the moment they were brought
                            on, through the design and development process, to launching and supporting their website.
                        </p>
                    </div>
                </div>

                <div class="career-item">
                    <p class="career-year">2018</p>
                    <h3>Intermediate Developer at <a href="#">Eternity</a></h3>
                    <div class="career-summary">
                        <p>
                            My initial success as a developer lead me to be a full time developer at Eternity. During
                            that time I helped revolutionize our web process, and spent my time crafting websites and
                            innovating on the side.
                        </p>
                    </div>
                </div>

                <div class="career-item">
                    <p class="career-year">2017</p>
                    <h3>Junior Developer at <a href="#">Eternity</a></h3>
                    <div class="career-summary">
                        <p>
                            After my internship with Eternity, I was asked to come on as a part time developer. I
                            started taking on my own projects, and even released a few websites entirely self
                            programmed.
                        </p>
                    </div>
                </div>

                <div class="career-item">
                    <p class="career-year">2016</p>
                    <h3>Intern at <a href="#">Eternity</a></h3>
                    <div class="career-summary">
                        <p>
                            During college, I had the privelage of joining the team at Eternity as an intern for 4
                            months. I spent the duration of my internship absorbing as much as I could, and taking
                            advantage of every opportunity.
                        </p>
                    </div>
                </div>
            </Flickity>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Career',
    data() {
        return {
            flickityOptions: {
                cellSelector: '.career-item',
                cellAlign: 'left',
                contain: true,
                freeScroll: true,
                prevNextButtons: false,
                pageDots: false,
                selectedAttraction: 0.01,
                friction: 0.2
            }
        }
    }
}
</script>

<style lang="scss">
.career {
    background: tomato;

    &:hover,
    &:focus {
        cursor: none;
    }

    .container {
        padding-top: 10vh;
        padding-bottom: 10vh;
        padding-left: 0;
        padding-right: 0;
    }

    .flickity {
        &-enabled {
            &.is-draggable {
                .flickity-viewport {
                    cursor: default;
                }
            }
        }
        &-slider {
            position: relative;
            max-width: 1480px;
            margin: 0 auto;
        }
    }

    &-item {
        min-width: 980px;
        min-height: 600px;
        margin-right: 100px;
        width: 86%;
        color: #fff;
        opacity: 0.5;
        transition: opacity 0.4s ease;
        user-select: none;

        &.is-selected {
            opacity: 1;
        }

        h3 {
            margin-top: 0.8em;
            font-size: 2vw;
            font-weight: 400;
            max-width: 500px;

            a {
                color: inherit;
                text-decoration: none;
                transition: 0.4s ease;

                &:hover {
                    //opacity: 0.7;
                    color: #ef4538;
                }
            }
        }
    }

    &-year {
        font-size: 1.4rem;
        font-weight: 300;
        opacity: 0.35;
    }

    &-summary {
        font-size: 1.65rem;
        margin-top: 1.5em;
        font-weight: 300;
        opacity: 0.6;
        line-height: 1.6;
        width: 50%;
    }
}
</style>
