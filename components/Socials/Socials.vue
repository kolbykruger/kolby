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
                    <span class="socials-item-icon">GH</span>
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
                    <span class="socials-item-icon">LI</span>
                </a>
            </li>
            <li class="socials-item">
                <a
                    data-stick
                    class="socials-link"
                    :href="$store.state.contact.socials.figma"
                    target="_blank"
                    rel="noopener norefer"
                >
                    <span class="socials-item-icon">FI</span>
                </a>
            </li>
            <li class="socials-item">
                <a
                    data-stick
                    class="socials-link"
                    :href="$store.state.contact.socials.spotify"
                    target="_blank"
                    rel="noopener norefer"
                >
                    <span class="socials-item-icon">SP</span>
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
export default {
    name: 'Socials',
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

        @include mq('tablet') {
            margin-left: -2rem;
        }
    }

    &-item {
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
