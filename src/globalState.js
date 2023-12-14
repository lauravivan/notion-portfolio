import { reactive } from 'vue'

export const globalState = reactive({
    fontStyle: '',
    fontSize: '',
    pageWidth: ''
})

export const updateFontStyle = (fontStyle) => { globalState.fontStyle = fontStyle }

export const updateFontSize = (fontSize) => { globalState.fontSize = fontSize }

export const updatePageWidth = (pageWidth) => { globalState.pageWidth = pageWidth }