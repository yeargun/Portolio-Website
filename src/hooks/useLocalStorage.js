import { useEffect } from 'react'


const useGetLocalStorage = (key) => {
    useEffect(() => {
        if(typeof window === 'undefined') return undefined;
        const storageListener = window.addEventListener('storage', (event) => {
            if (event.key === key) {
                return event.newValue;
            }
        });

        return window.removeEventListener('storage', storageListener);
    }, [])
    if(typeof window === 'undefined') return undefined;
    return localStorage.getItem(key);
}

const setLocalStorage = (key, value) => {
    if(typeof window === 'undefined') return undefined;
    return localStorage.setItem(key, value);
}

export { useGetLocalStorage, setLocalStorage};