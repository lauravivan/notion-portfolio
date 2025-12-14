import { LOCAL_STORAGE_ASIDE } from "../constants";

const setAsideOpen = (isOpen: boolean) => {
    localStorage.setItem(LOCAL_STORAGE_ASIDE, JSON.stringify(isOpen))
}

export default setAsideOpen;