<template>
    <main class="main">
        <Header></Header>
    
        <div class="page-wrapper"
            :class="{
                [globalState.fontStyle]: true, 
                [globalState.fontSize]: true,
                [globalState.pageWidth]: true
            }">
            <div class="page-banner"><img :src="pageBanner"></div>
            <div class="page-content" :id="pageContentID">
                <div class="page-title">
                    <img :src="pageIcon">
                    <span>{{ pageName }}</span>
                </div>
                <slot name="pageSlot"></slot>
                <div style="width: auto; height: 170px;"></div>
            </div>
        </div>

        <footer class="footer">
            <span>Developed by Laura (^.^)</span>
        </footer>
    </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { globalState } from '@/globalState.js'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

const store = useStore() 
const activePage = store.getters.getActivePage

const pageName = activePage.pageName
const pageBanner = activePage.pageBanner
const pageContentID = activePage.pageContentID
const pageIcon = activePage.pageIcon
let fontStyle = ref('')
let fontSize = ref('')
let pageWidth = ref('')

onMounted(() => {
    const pagesInfo = JSON.parse(localStorage.getItem('pagesInfo'))

    if (pagesInfo) {
        Object.keys(pagesInfo).forEach((key) => {
            const page = pagesInfo[key]
            
            if (page.pageName == pageName) {
                fontStyle.value = page.fontStyle
                fontSize.value = page.fontSize
                pageWidth.value = page.pageWidth
            }
        })

        globalState.fontStyle = fontStyle.value
        globalState.fontSize = fontSize.value
        globalState.pageWidth = pageWidth.value
    }
})
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.page-wrapper {
    @include sizing(100%, 100vh);
    overflow-y: auto;
    position: relative;

    .page-banner {
        width: 100%;
        height: 210px;
    
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .page-content {
        @include grid-layout($row-gap: 30px);
        position: absolute;
        top: 135px;
        left: 50%;
        transform: translate(-50%,0%);
        z-index: 1;
        width: 50%;

        .page-title {
            @include flex-layout($row-gap: 25px);
            margin-left: 67px;
            
            img {
                max-width: 5.8rem;
            }
        
            span {
                font-size: 3rem;
                font-weight: $fw-700;
            }
        }

        .page-slot {
            margin: 0 70px;
        }
    }
}

.footer {
    text-align: center;
    font-size: $fs-small;
    @include spacing-2($py: 20px);
    background-color: $gray;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 2;
}

/*configs*/
.font-roboto-mono { font-family: $mono; }

.font-roboto-serif { font-family: $serif; }

.font-size-small {
    p, span, div, h5 {
        font-size: $fs-small;
    }

    .page-title {
        span {
            font-size: 2.5rem;
        }
    }
}

.page-full-width {
    .page-content {
        width: 100%;
        place-items: unset;

        .page-slot {
            max-width: 100%;
        }
    }
}
</style>