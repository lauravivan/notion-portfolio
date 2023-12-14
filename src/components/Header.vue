<template>
<header class="header">
   <div class="header-content">
        <div class="header-page">
            <img :src="pageIcon" style="max-width: 1.1rem; height: auto;">
            <span>{{ pageName }}</span>
        </div>
        <div 
            class="header-btn" 
            role="button" 
            id="header-btn" 
            @click="headerBtnClicked"
        >
            <DotsSvg/>
        </div>
   </div>
</header>
<div class="header-menu-wrapper" id="header-menu-wrapper">
    <div :class="headerMenuClasses">
        <div class="pref-style" id="pref-style">
            <span>Style</span>
            <div class="pref-style__pref-fonts">
                <div 
                    class="pref-style__font-wrapper" 
                    @click="setFontStyle('font-roboto')"
                    :class="{
                        'pref-style__font-wrapper--active': activeFont === 'font-roboto'
                    }"
                >
                    <span class="pref-style__font">Ag</span>
                    <span class="pref-style__font-name">Default</span>
                </div>
                <div 
                    class="pref-style__font-wrapper" 
                    @click="setFontStyle('font-roboto-serif')"
                    :class="{
                        'pref-style__font-wrapper--active': activeFont === 'font-roboto-serif'
                    }"
                >
                    <span class="pref-style__font">Ag</span>
                    <span class="pref-style__font-name">Serif</span>
                </div>
                <div 
                    class="pref-style__font-wrapper" 
                    @click="setFontStyle('font-roboto-mono')"
                    :class="{
                        'pref-style__font-wrapper--active': activeFont === 'font-roboto-mono'
                    }"
                >
                    <span class="pref-style__font">Ag</span>
                    <span class="pref-style__font-name">Mono</span>
                </div>
            </div>
        </div>

        <div class="pref">
            <div>
                <span>Small Text</span>
                <label class="pref__btn-toggle" role="button" @click="toggleFontSize()">
                    <input type="checkbox" v-model="isFontSizeActive">
                </label>
            </div>
            <div>
                <span>Full width</span>
                <label class="pref__btn-toggle" role="button" @click="togglePageWidth()">
                    <input type="checkbox" v-model="isPageWidthActive">
                </label>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DotsSvg from '@/components/icons/Dots.vue'
import { sharedVariables, getNodeClicked } from '@/sharedData.js'
import { updateFontSize, updateFontStyle, updatePageWidth, globalState } from '@/globalState.js'
import store from '@/store/index.js'

const headerMenuHidden = ref(true)
const headerBtn = ref(null)
const aside = ref(null)
const headerMenuWrapper = ref(null)
const { mainContainerOverlay, robotoDefault, robotoSerif, robotoMono, fontSizeSmall, pageFullWidth } = sharedVariables
const activeFont = ref(robotoDefault.value)
const isFontSizeActive = ref(false)
const isPageWidthActive = ref(false)
const activePage = store.getters.getActivePage
const pageName = activePage.pageName
const pageIcon = activePage.pageIcon
const fontStyle = ref(activePage.fontStyle)
const fontSize = ref(activePage.fontSize)
const pageWidth = ref(activePage.pageWidth)

const headerBtnClicked = () => {
    if (headerMenuHidden.value) {
        headerMenuHidden.value = false
    } else {
        headerMenuHidden.value = true
    }
}

const setFontStyle = (font) => {
    activeFont.value = font

    if (font == robotoMono.value) {
        updateFontStyle(robotoMono.value)
    } else if (font == robotoSerif.value) {
        updateFontStyle(robotoSerif.value)
    } else {
        updateFontStyle(robotoDefault.value)
    }
    
    store.commit('storeFontStyle', {
        page: pageName, 
        pagePropertyValue: globalState.fontStyle
    })
}

const toggleFontSize = () => {
    if (isFontSizeActive.value) {
        updateFontSize('')
        isFontSizeActive.value = false
    } else {
        updateFontSize(fontSizeSmall.value)
        isFontSizeActive.value = true
    }

    store.commit('storeFontSize', {
        page: pageName, 
        pagePropertyValue: globalState.fontSize
    })
}

const togglePageWidth = () => {
    if (isPageWidthActive.value) {
        updatePageWidth('')
        isPageWidthActive.value = false
    } else {
        updatePageWidth(pageFullWidth.value)
        isPageWidthActive.value = true
    }

    store.commit('storePageWidth', {
        page: pageName, 
        pagePropertyValue: globalState.pageWidth
    })
}

const headerMenuClasses = computed(() => {
    return {
        'header-menu-hidden': headerMenuHidden.value,
        'header-menu-visible': !headerMenuHidden.value
    }
})

const setConfigs = () => {
    if (fontStyle.value == robotoSerif.value) {
        activeFont.value = robotoSerif.value
    } else if (fontStyle.value == robotoMono.value) {
        activeFont.value = robotoMono.value
    } else {
        activeFont.value = robotoDefault.value
    }

    if (fontSize.value == fontSizeSmall.value) {
        isFontSizeActive.value = true
    } else  {
        isFontSizeActive.value = false
    }

    if (pageWidth.value == pageFullWidth.value) {
        isPageWidthActive.value = true
    } else {
        isPageWidthActive.value = false
    }
}

onMounted(() => {
    headerBtn.value = document.getElementById('header-btn')
    aside.value = document.getElementById('aside')
    headerMenuWrapper.value = document.getElementById('header-menu-wrapper')
    const headerBtnNodeList = headerBtn.value.querySelectorAll('*')
    const headerMenuNodeList = headerMenuWrapper.value.querySelectorAll('*')

    window.addEventListener('click', (e) => {
        const eleClicked = e.target

        if (headerMenuHidden.value === false) {
            if (
                !( ((eleClicked === headerBtn.value) || (getNodeClicked(headerBtnNodeList, eleClicked))) || ((eleClicked === headerMenuWrapper.value) || (getNodeClicked(headerMenuNodeList, eleClicked))) )
            ) {
                headerMenuHidden.value = true
            }
        }

        if (mainContainerOverlay.value === false) {
            if (headerMenuHidden.value === true) {
                aside.value.style.pointerEvents = 'auto'
            } else {
                aside.value.style.pointerEvents = 'none'
            }
        } 
    })

    window.addEventListener('touchstart', (e) => {
        const eleClicked = e.target

        if (
            !( getNodeClicked(headerMenuNodeList, eleClicked) || (eleClicked === headerMenuWrapper.value) )
        ) {
            headerMenuHidden.value = true
        }
    })

    setConfigs()
})
</script>

<style scoped lang="scss">
@import '../assets/scss/main';
.header-content {
    display: flex;
    user-select: none;
    justify-content: space-between;
    background-color: $white;

    .header-page {
        @include flex-layout($flex-direction: row, $column-gap: .4rem);
        align-items: center;
    }

    .header-btn {
        @extend .navbar-btn;
    }
}

.header-menu-hidden {
    display: none;
}

.header-menu-visible {
    display: block;
    position: fixed;
    box-shadow: $box-shadow-1;
    border-radius: 3%;
    outline: none;
    animation: fadeIn .4s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 999;
    background-color: $white;
    top: 38px;
    right: 6px;

    .pref-style {
        border-bottom: 1px solid $black-1;
        padding: 1rem .5rem 1rem;
        @include flex-layout($row-gap: 1rem);

        > span {
            font-size: $fs-small; 
            color: $black-6;
            font-weight: $fw-600;
        }

        &__pref-fonts {
            @include grid-layout(repeat(3, 1fr), $column-gap: .8rem);
        }

        &__font-wrapper {
            @include flex-layout($row-gap: .5rem);
            align-items: center;
            border-radius: 5%;
            padding: .5rem .9rem;
            cursor: pointer;
            transition: background-color .2s;

            &:nth-child(1) {
                font-family: $default;
            }

            &:nth-child(2) {
                font-family: $serif;
            }

            &:nth-child(3) {
                font-family: $mono;
            }

            &:hover {
                background-color: $gray-4;
            }

            &--active {
                animation: blink 1s;
                .pref-style__font {
                    color: $active;
                }
            }
        }

        &__font {
            color: $black-6;
            font-stretch: condensed;
            font-size: $fs-x-large;
        }

        &__font-name {
            color: $black-4;
            font-weight: $fw-600;
            font-size: $fs-x-small;
        }
    }

    .pref {
        padding: 1rem .8rem 1.2rem;
        @include flex-layout($row-gap: 1.2rem);

        & > div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & > span {
                color: $black-7;
                font-size: $fs-small;
            }   
        }

        &__btn-toggle {
            display: inline-block;
            @include sizing(38px, 22px);
            border-radius: 34px;
            background-color: $gray-stroke;
            position: relative;
            cursor: pointer;

            > input {
                @include sizing(0,0);
                position: absolute;
                cursor: pointer;

                &:checked {
                    -webkit-transform: translateX(26px);
                    -ms-transform: translateX(26px);
                    transform: translateX(26px);
                }

                &:not(:checked)::before, 
                &:checked::after {
                    @extend .toggle-btn;
                }

                &:not(:checked)::before {
                    top: -2px;
                    left: -3px;
                }

                &:checked::after {
                    top: -2px;
                    left: -14px;
                }

                &:checked::before {
                    content: "";
                    @include sizing(38px, 22px);
                    background-color: $active;
                    position: absolute;
                    border-radius: 34px;
                    top: -3px;
                    right: -8px;
                }
            }
        }
    }
}
</style>