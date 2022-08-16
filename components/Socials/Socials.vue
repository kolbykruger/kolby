<template>
    <div class="socials" data-anim data-anim-elements=".socials-item">
        <ul class="socials-list">
            <li class="socials-item">
                <a
                    data-stick
                    class="socials-link"
                    :href="$store.state.contact.socials.github"
                    target="_blank"
                    rel="noopener norefer"
                >
                    <span class="socials-icon">
                        <GithubIcon />
                    </span>
                </a>
            </li>
            <li class="socials-item">
                <a
                    data-stick
                    class="socials-link"
                    :href="$store.state.contact.socials.linkedin"
                    target="_blank"
                    rel="noopener norefer"
                >
                    <span class="socials-icon">
                        <LinkedInIcon />
                    </span>
                </a>
            </li>
            <li class="socials-item">
                <a data-stick class="socials-link" :href="`mailto:hi@kolby.dev`">
                    <span class="socials-icon">
                        <EmailIcon />
                    </span>
                </a>
            </li>
            <!-- <li class="socials-item">
                <a data-stick class="socials-link" href="#" target="_blank" rel="noopener norefer">
                    <span class="socials-item-icon">CV</span>
                </a>
            </li> -->
            <li class="socials-item">
                <Theme />
            </li>
        </ul>
    </div>
</template>

<script>
import GithubIcon from '@/assets/svg/brands/github-brands.svg?inline'
import LinkedInIcon from '@/assets/svg/brands/linkedin-in-brands.svg?inline'
import EmailIcon from '@/assets/svg/duotone/email.svg?inline'

export default {
    name: 'Socials',
    components: {
        GithubIcon,
        LinkedInIcon,
        EmailIcon,
    },
}
</script>

<style lang="scss">
.socials {
    @include mq('tablet') {
        margin-top: 6vh;
    }

    &-list {
        display: flex;
        align-items: flex-start;
        flex-flow: row wrap;
        justify-content: center;

        @include mq('tablet') {
            margin-left: -2rem;
            justify-content: flex-start;
        }
    }

    &-item {
        &:last-of-type {
            width: 100%;

            .theme {
                margin: 0 auto;
            }

            @include mq('tablet') {
                width: auto;
            }
        }

        @include mq('tablet') {
            margin: 0.75em;
        }
    }

    &-link {
        display: flex;
        align-items: center;
        justify-content: center;
        --size: 3em;
        width: var(--size);
        height: var(--size);
        padding: 0.25em;
        color: c('base-0');
        text-decoration: none;
        transition: 520ms cubic-bezier(0.075, 0.82, 0.165, 1);
        opacity: 0.7;

        @include mq('tablet') {
            --size: 2em;
        }

        &:hover,
        &:focus {
            opacity: 1;
        }
    }

    &-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        --size: 1.5em;
        width: var(--size);
        height: var(--size);

        @include mq('tablet') {
            --size: 1em;
        }

        svg {
            width: 100%;
            height: 100%;

            path {
                fill: c('base-0');
            }
        }
    }

    .theme {
        opacity: 0.7;

        &:hover,
        &:focus {
            opacity: 1;
        }

        svg {
            circle {
                fill: transparent;
                stroke: c('base-0');
            }
            path {
                fill: c('base-0');
            }
        }
    }
}
</style>
