<template>
    <div class="overlay" id="overlay"></div>
    <div class="modal" id="modal">
        <div class="modal-content">
            <span class="modal-title">Choose your theme</span>
            <div class="themes-wrapper">
                <div class="themes">
                    <span class="themes__title">Light</span>
                    <div class="themes__theme-wrapper">
                        <div class="
                                themes__theme 
                                themes__theme--light
                            " 
                            @click="lightClicked"
                        >
                            <span class="
                                themes__theme-name 
                                themes__theme-name--light
                            ">Default</span>
                        </div>
                        <div class="
                                themes__theme 
                                themes__theme--catppuccin-latte
                            " 
                            @click="setBodyTheme('cat-latte')"
                        >
                            <span class="
                                themes__theme-name
                                themes__theme-name--catppuccin-latte
                            ">Catppuccin Latte</span>
                        </div>
                    </div>
                </div>
                <div class="themes">
                    <span class="themes__title">Dark</span>
                    <div class="themes__theme-wrapper">
                        <div class="
                                themes__theme 
                                themes__theme--dark
                            " 
                            @click="setBodyTheme('dark-theme')"
                        >
                            <span class="
                                themes__theme-name
                                themes__theme-name--dark
                            ">Default</span>
                        </div>
                        <div class="
                                themes__theme 
                                themes__theme--catppuccin-mocha
                            " 
                            @click="setBodyTheme('cat-mocha')"
                        >
                            <span class="
                                themes__theme-name
                                themes__theme-name--catppuccin-mocha
                            ">Catppuccin Mocha</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

let theme = localStorage.getItem('pageTheme')
const body = document.body

const lightClicked = () => {
    body.className = 'default-theme'
    if (theme) { localStorage.removeItem('pageTheme') }
}

const setBodyTheme = (theme) => {
    body.className = ''
    body.classList.add(theme)
    localStorage.setItem('pageTheme', theme)
}

onMounted(() => {
    body.className = ''
    body.classList.add(theme)
    localStorage.setItem('pageTheme', theme)
})
</script>

<style scoped lang="scss">
@import '../assets/scss/main';

.overlay, 
.modal {
    display: none;
    position: fixed;
}

.overlay {
    z-index: 1000;
    inset: 0;
    background-color: $gray-2;
    @include sizing(100%, 100%);
}

.modal {
    right: 0;
    bottom: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include sizing(90%, 90%);
    z-index: 2000;
    box-shadow: $box-shadow-1;
    background-color: $white;
    border-radius: 5px;
    animation: fadeIn 1s;
    transition: width .3s;
    user-select: none;
    height: max-content;
}

.modal-content {
    padding: 2rem 1.9rem;
    @include flex-layout($row-gap: 3rem);

    .modal-title {
        font-size: $fs-small; 
    }

    .themes-wrapper {
        @include grid-layout($grid-template-columns: repeat(2, 1fr), $column-gap: 4rem);
    }
    .themes {
        @include flex-layout($row-gap: 2rem);

        &__title {
            padding-bottom: 3px;
            border-bottom: 1px solid $black;
            width: 2rem;
            font-size: $fs-x-small; 
        }

        &__theme-wrapper {
            @include grid-layout($grid-template-columns: repeat(2, 1fr));
        }

        &__theme {
            @include flex-layout($row-gap: 6px);
            border-radius: 10px;
            @include sizing(6rem, 5rem);
            cursor: pointer;
            transition: opacity .5s;
            border: none;
            outline: none;
            justify-content: center;
            color: $white;

            &--dark {
                background-color: $dark;
            }

            &--catppuccin-mocha {
                background-color: $mocha-base;
            }

            &--light {
                background-color: $white;
            }

            &--catppuccin-latte {
                background-color: $latte-mantle;
            }

            &--light, &--catppuccin-latte {
                border: 1px solid $dark;
                color: $black;
            }

            &:hover {
                opacity: .81;
            }
        }

        &__theme-name {
            text-align: center;
            font-size: $fs-x-small;
        }
    }
}

@import '@/assets/scss/_responsive.scss';
</style>