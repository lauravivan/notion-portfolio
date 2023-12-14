import { createStore } from 'vuex'

const randomId = () => {
    return Math.random().toString(36).substring(2,9)
}

const aboutName = 'About'
const aboutIcon = '/notion-portfolio/about.png'
const aboutBanner = '/notion-portfolio/banner/about.jpg'

const contactName = 'Contact'
const contactIcon = '/notion-portfolio/contact.png'
const contactBanner = '/notion-portfolio/banner/contact.jpg'

const githubName = 'Github'
const githubIcon = '/notion-portfolio/github.png'
const githubBanner = '/notion-portfolio/banner/github.jpg'

const referenceName = 'Reference'
const referenceIcon = '/notion-portfolio/reference.png'
const referenceBanner = '/notion-portfolio/banner/reference.jpg'

const ourPetStoreName = 'OurPetStore'
const ourPetStoreIcon = '/notion-portfolio/our-pet-store.png'
const ourPetStoreBanner = '/notion-portfolio/banner/our-pet-store.jpg'

const pagesInfoLocalStore = JSON.parse(localStorage.getItem('pagesInfo')) || {}

const pagesInfo = {
    'About': {
        pageName: aboutName,
        pageIcon: aboutIcon,
        pageBanner: aboutBanner,
        pageContentID: 'about-page',
        fontStyle: pagesInfoLocalStore['About'] ? pagesInfoLocalStore['About'].fontStyle || '' : '',
        fontSize: pagesInfoLocalStore['About'] ? pagesInfoLocalStore['About'].fontSize || '' : '',
        pageWidth: pagesInfoLocalStore['About'] ? pagesInfoLocalStore['About'].pageWidth || '' : ''
    },
    'Contact': {
        pageName: contactName,
        pageIcon: contactIcon,
        pageBanner: contactBanner,
        pageContentID: 'contact-page',
        fontStyle: pagesInfoLocalStore['Contact'] ? pagesInfoLocalStore['Contact'].fontStyle || '' : '',
        fontSize: pagesInfoLocalStore['Contact'] ? pagesInfoLocalStore['Contact'].fontSize || '' : '',
        pageWidth: pagesInfoLocalStore['Contact'] ? pagesInfoLocalStore['Contact'].pageWidth || '' : ''
    },
    'Github': {
        pageName: githubName,
        pageIcon: githubIcon,
        pageBanner: githubBanner,
        pageContentID: 'github-page',
        fontStyle: pagesInfoLocalStore['Github'] ? pagesInfoLocalStore['Github'].fontStyle || '' : '',
        fontSize: pagesInfoLocalStore['Github'] ? pagesInfoLocalStore['Github'].fontSize || '' : '',
        pageWidth: pagesInfoLocalStore['Github'] ? pagesInfoLocalStore['Github'].pageWidth || '' : ''
    },
    'Reference': {
        pageName: referenceName,
        pageIcon: referenceIcon,
        pageBanner: referenceBanner,
        pageContentID: 'reference-page',
        fontStyle: pagesInfoLocalStore['Reference'] ? pagesInfoLocalStore['Reference'].fontStyle || '' : '',
        fontSize: pagesInfoLocalStore['Reference'] ? pagesInfoLocalStore['Reference'].fontSize || '' : '',
        pageWidth: pagesInfoLocalStore['Reference'] ? pagesInfoLocalStore['Reference'].pageWidth || '' : ''
    },
    'OurPetStore': {
        pageName: ourPetStoreName,
        pageIcon: ourPetStoreIcon,
        pageBanner: ourPetStoreBanner,
        pageContentID: 'our-pet-store-page',
        fontStyle: pagesInfoLocalStore['OurPetStore'] ? pagesInfoLocalStore['OurPetStore'].fontStyle || '' : '',
        fontSize: pagesInfoLocalStore['OurPetStore'] ? pagesInfoLocalStore['OurPetStore'].fontSize || '' : '',
        pageWidth: pagesInfoLocalStore['OurPetStore'] ? pagesInfoLocalStore['OurPetStore'].pageWidth || '' : '',
        projectUrl: 'https://lauravivan.github.io/TrabalhoFinal-IDW/trabalho-final/'
    }
}

localStorage.setItem('pagesInfo', JSON.stringify(pagesInfo))

const store = createStore({
    state: {
        pagesInfo: JSON.parse(localStorage.getItem('pagesInfo')) || {},
        activePage: null,
        navItems: {
            favorites: [
                {
                    id: randomId(),
                    icon: aboutIcon,
                    pageName: aboutName.toUpperCase(),
                    routeName: 'Home'
                },
                {
                    id: randomId(),
                    icon: contactIcon,
                    pageName: contactName.toUpperCase(),
                    routeName: contactName
                },
                {
                    id: randomId(),
                    icon: githubIcon,
                    pageName: githubName.toUpperCase(),
                    routeName: githubName
                },
                {
                    id: randomId(),
                    icon: referenceIcon,
                    pageName: referenceName.toUpperCase(),
                    routeName: referenceName
                }
            ],
            projects: [
                {
                    id: randomId(),
                    icon: ourPetStoreIcon,
                    pageName: ourPetStoreName,
                    routeName: ourPetStoreName
                }
            ]
        },
        projectAuthor: `Laura Vivan's Portfolio`,
        authorSocialMedia: '@lauravivan',
        referenceInfo: {
            aboutPage: {
                name: 'About page',
                banner: 'Photo by <a href="https://unsplash.com/@jasebloor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jase Bloor</a> on <a href="https://unsplash.com/photos/japanese-lantern-over-city-bike-at-nighttime-oCZHIa1D4EU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
                icon: '<a href="https://www.flaticon.com/free-icons/info" title="info icons">Info icons created by Freepik - Flaticon</a>'
            },
            contactPage: {
                name: 'Contact page',
                banner: 'Photo by Satoshi Hirayama: <a href="https://www.pexels.com/photo/crowd-surrounded-by-buildings-during-night-time-2070033/">Access here</a>',
                icon: 'From <a href="https://www.svgrepo.com/">Svg Repo</a>'
            },
            githubPage: {
                name: 'Github page',
                banner: 'Photo by <a href="https://unsplash.com/@ajny?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">AJ</a> on <a href="https://unsplash.com/photos/pink-flowers-McsNra2VRQQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
                icon: 'From <a href="https://www.svgrepo.com/">Svg Repo</a>'
            },
            referencePage: {
                name: 'Reference page',
                banner: 'Photo by <a href="https://unsplash.com/@agk42?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alex Knight</a> on <a href="https://unsplash.com/photos/empty-pathway-in-between-stores-wfwUpfVqrKU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
                icon: '<a href="https://www.flaticon.com/free-icons/reference" title="reference icons">Reference icons created by Dwi ridwanto - Flaticon</a>'
            },
            ourPetStorePage: {
                name: 'Our Pet Store page',
                banner: 'Photo by <a href="https://unsplash.com/@agapetrn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Agape Trn</a> on <a href="https://unsplash.com/photos/black-cat-sitting-on-rock-during-day-H-XOmJhbM3s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
                icon: ''
            }
        }
    },
    mutations: {
        storeFontStyle(state, { page, pagePropertyValue }) {
            state.pagesInfo[page].fontStyle = pagePropertyValue
            localStorage.setItem('pagesInfo', JSON.stringify(state.pagesInfo))
        },
        storeFontSize(state, { page, pagePropertyValue }) {
            state.pagesInfo[page].fontSize = pagePropertyValue
            localStorage.setItem('pagesInfo', JSON.stringify(state.pagesInfo))
        },
        storePageWidth(state, { page, pagePropertyValue }) {
            state.pagesInfo[page].pageWidth = pagePropertyValue
            localStorage.setItem('pagesInfo', JSON.stringify(state.pagesInfo))
        },
        storeActivePage(state, activePage) {
            state.activePage = activePage
        }
    },
    getters: {
        getAboutPage: (state) => state.pagesInfo['About'],
        getContactPage: (state) => state.pagesInfo['Contact'],
        getGithubPage: (state) => state.pagesInfo['Github'],
        getReferencePage: (state) => state.pagesInfo['Reference'],
        getOurPetStorePage: (state) => state.pagesInfo['OurPetStore'],
        getActivePage: (state) => state.activePage,
        getNavItems: (state) => state.navItems,
        getProjectAuthor: (state) => state.projectAuthor,
        getAuthorSocialMedia: (state) => state.authorSocialMedia,
        getReferenceInfo: (state) => state.referenceInfo
    }
})

export default store