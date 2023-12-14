<template>
<aside :class="asideClasses" id="aside">
    <div class="nav-wrapper" @mouseleave="hideNavList">
        <nav :class="navClasses">
            <div 
                class="nav-btn" 
                role="button" 
                id="nav-btn" 
                @click="navBtnClicked" 
                @mouseenter="showNavList" 
                @mouseleave="hideNavList">
                <nav-btn-icon :is="navBtnIcon"></nav-btn-icon>
            </div>
            <div class="nav-list-wrapper" @mouseover="showNavList">
                <ul class="nav-list">
                    <li class="nav-list__nav-item"><span>{{ author }}</span> {{ authorSocialMedia }}</li>
                    <li class="nav-list__nav-item">
                        <div role="button">
                            <SearchSvg/>
                            <span>Search</span>
                        </div>
                        <div role="button" id="settings-btn">
                            <SettingsSvg/>
                            <span>Settings</span>
                        </div>
                    </li>
                    <li class="nav-list__nav-item">
                        <div>
                            <h3 class="nav-list__category">Favorites</h3>
                            <div class="nav-list__category-items" id="favorites">
                                <div v-for="item in navItems.favorites" :key="item.id">
                                    <router-link :to="{ name: item.routeName }">
                                        <div>
                                            <arrow-icon :is="arrowIcon"></arrow-icon>
                                            <div style="max-width: 1.1rem; height: auto;">
                                                <img :src="item.icon" style="width: 100%; height: auto;">
                                            </div>
                                            <span>{{ item.pageName }}</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="nav-list__category">My Projects</h3>
                            <div class="nav-list__category-items" id="projects">
                                <div v-for="item in navItems.projects" :key="item.id">
                                    <router-link :to="{ name: item.routeName }">
                                        <div>
                                            <arrow-icon :is="arrowIcon"></arrow-icon>
                                            <div style="max-width: 1.1rem; height: auto;">
                                                <img :src="item.icon" style="width: 100%; height: auto;">
                                            </div>
                                            <span>{{ item.pageName }}</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div style="width: 25px; height: 100%;" @mouseleave="hideNavList"></div>
</aside>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { sharedVariables, getNodeClicked } from '@/sharedData.js'
import store from '@/store/index.js'
import SandwichSvg from '@/components/icons/Sandwich.vue'
import DChevronRightSvg from '@/components/icons/DChevronRight.vue'
import DChevronLeftSvg from '@/components/icons/DChevronLeft.vue'
import ChevronRightSvg from '@/components/icons/ChevronRight.vue'
import SearchSvg from '@/components/icons/Search.vue'
import SettingsSvg from '@/components/icons/Settings.vue'

const asideDefault = ref(true)
const navDefault = ref(true)
const navHover = ref(false)
const navClick = ref(false)
const { mainContainerDefault, mainContentDefault, mainContainerOverlay } = sharedVariables
const settingsBtn = ref(null)
const aside = ref(null)
const overlay = ref(null)
const modal = ref(null)
const navBtnIcon = ref(SandwichSvg)
const arrowIcon = ChevronRightSvg
const navItems = store.getters.getNavItems
const author = store.getters.getProjectAuthor
const authorSocialMedia = store.getters.getAuthorSocialMedia

const showNavList = () => {
    if (navClick.value === false) {
        navDefault.value = false
        navHover.value = true
    }
}

const hideNavList = () => {
    if (navClick.value === false) {
        navDefault.value = true
        navHover.value = false
    }
}

const navBtnClicked = () => {
    if (navHover.value === true) {
        navDefault.value = false
        navHover.value = false
        navClick.value = true
        asideDefault.value = false
        mainContainerDefault.value = false
        mainContentDefault.value = false
    } else {
        navDefault.value = false
        navHover.value = true
        navClick.value = false
        asideDefault.value = true
        mainContainerDefault.value = true
        mainContentDefault.value = true
    }
}

const asideClasses = computed(() => {
  return {
    'aside-default': asideDefault.value,
    'aside-click': !asideDefault.value,
  }
})

const navClasses = computed(() => {
    return {
        'nav-default': navDefault.value,
        'nav-hover': navHover.value,
        'nav-click': navClick.value
    }
})

onMounted(() => {
    settingsBtn.value = document.getElementById('settings-btn')
    aside.value = document.getElementById('aside')
    overlay.value = document.getElementById('overlay')
    modal.value = document.getElementById('modal')
    const modalNodeList = modal.value.querySelectorAll('*')

    window.addEventListener('click', (e) => {
        const eleClicked = e.target
        const settingsBtnNodeList = settingsBtn.value.querySelectorAll('*')

        if (mainContainerOverlay.value === true) {
            if (
                !( getNodeClicked(modalNodeList, eleClicked) || (eleClicked === modal.value) )
            ) {
                mainContainerOverlay.value = false
                overlay.value.style.display = 'none'
                modal.value.style.display = 'none'
                aside.value.style.pointerEvents = 'auto'
            }
        } else {
            if (
                (getNodeClicked(settingsBtnNodeList, eleClicked)) || (eleClicked === settingsBtn.value)
            ) {
                mainContainerOverlay.value = true
                overlay.value.style.display = 'block'
                modal.value.style.display = 'block'
                aside.value.style.pointerEvents = 'none'
            }
        }
    })

    window.addEventListener('touchstart', (e) => {
        const eleClicked = e.target
        const asideNodeList = aside.value.querySelectorAll('*')

        if (
            !( getNodeClicked(asideNodeList, eleClicked) || (eleClicked === aside.value) )
        ) {
            navDefault.value = true
            navHover.value = false
        }

        if (
            !( getNodeClicked(modalNodeList, eleClicked) || (eleClicked === modal.value) )
        ) {
            modal.value.style.display = 'none'
        }
    })
})

watch(navClasses, (currentClass) => {
    if (currentClass['nav-default']) {
        navBtnIcon.value = SandwichSvg
    } else if (currentClass['nav-hover']) {
        navBtnIcon.value = DChevronRightSvg
    } else if (currentClass['nav-click']) {
        navBtnIcon.value = DChevronLeftSvg
    }
})
</script>

<style scoped lang="scss">
@import '../assets/scss/main';

.nav-wrapper,
.nav-default, 
.nav-hover, 
.nav-click,
.nav-list-wrapper {
    height: 100%;
}

.nav-wrapper {
    color: $black-6;
    user-select: none;
    .nav-btn {
        @extend .navbar-btn;
    }

    .nav-default .nav-list {
        display: none;
    }

    .nav-hover {
        @include flex-layout($row-gap: 2rem);

        .nav-list {
            box-shadow: $box-shadow-1;
            @include spacing($mt: .1rem, $pb: .6rem);
            transform: translateX(-100%);
            animation: slideIn .4s ease-in-out;
            animation-fill-mode: forwards;
            padding-right: 1rem;
            background-color: $white;

            &__nav-item {
                width: 100%;
            }
        }
    }

    .nav-click {
        @include flex-layout($flex-direction: row-reverse, $row-gap: 2rem);

        &:hover {
            .nav-btn {
                visibility: visible;
            }
        }

        .nav-btn {
            visibility: hidden;
            position: absolute;
            left: 78%;
            z-index: 2;
            margin: .7rem .9rem 0;
        }
        .nav-list {
            box-sizing: border-box;
            position: absolute;
            inset: 0;
            z-index: 1;
        }
    }

    .nav-hover, .nav-click {
        .nav-list {
            @include flex-layout($row-gap: 1.5rem);
            font-size: $fs-small;

            &__nav-item:nth-child(1) {
                @include flex-layout($row-gap: .3rem);
                font-size: $fs-x-small;
                @include spacing($ml: .8rem, $pt: .9rem);
        
                span {
                    color: $black;
                    font-size: $fs-medium;
                }
            }
        
            &__nav-item:nth-child(2) {
                @include flex-layout($row-gap: .2rem);
                @include spacing-2($my: 10px, $mx: .6rem);
        
                & > div {
                    @include flex-layout($flex-direction: row, $column-gap: .4rem);
                    align-items: center;
                    cursor: pointer; 
                    border-radius: 3%;
                    padding: .28rem;
                    transition: background-color .1s;
        
                    &:hover {
                        background-color: $gray-4;
                    }

                    &:active {
                        background-color: $gray;
                    }
                }
            }

            &__nav-item:nth-child(3) {
                @include flex-layout($row-gap: 1.7rem);
                @include spacing-2($my: 10px, $mx: .7rem);
        
                .nav-list__category {
                    font-size: $fs-medium;
                    margin-bottom: .6rem;
                    font-weight: $fw-600;
                }
        
                .nav-list__category-items {
                    & > div > a {
                        all: unset;
                        display: block; 
                        cursor: pointer; 
                        border-radius: 3%;
                        transition: background-color .1s;
        
                        &:hover {
                            background-color: $gray-4;
                        }
    
                        &:active {
                            background-color: $gray;
                        }
                    }
        
                    a > div {
                        @include flex-layout($flex-direction: row, $column-gap: .4rem);
                        margin-bottom: .1rem;
                        align-items: center;
                        width: 100%;
                        padding: .28rem;
                        border-radius: 3%;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>