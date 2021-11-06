<template>
    <div class="socials">
        <ul class="socials-list">
            <li class="socials-item">
                <a data-stick class="socials-link" href="#" target="_blank" rel="noopener norefer">
                    <span class="socials-item-icon">GH</span>
                </a>
            </li>
            <li class="socials-item">
                <a data-stick class="socials-link" href="#" target="_blank" rel="noopener norefer">
                    <span class="socials-item-icon">LI</span>
                </a>
            </li>
            <li class="socials-item">
                <a data-stick class="socials-link" href="#" target="_blank" rel="noopener norefer">
                    <span class="socials-item-icon">FI</span>
                </a>
            </li>
            <li class="socials-item">
                <a data-stick class="socials-link" href="#" target="_blank" rel="noopener norefer">
                    <span class="socials-item-icon">SP</span>
                </a>
            </li>
            <li class="socials-item">
                <a data-stick class="socials-link" href="#" target="_blank" rel="noopener norefer">
                    <span class="socials-item-icon">CV</span>
                </a>
            </li>
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
    margin-top: 6vh;

    &-list {
        display: flex;
        align-items: flex-start;
        margin-left: -2rem;
    }

    &-item {
        margin: 0.75em;
    }

    &-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        padding: 0.25em;
        color: c('base-0');
        text-decoration: none;
        transition: 520ms cubic-bezier(0.075, 0.82, 0.165, 1);
        opacity: 0.7;

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
