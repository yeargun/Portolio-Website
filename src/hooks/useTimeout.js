import { useEffect, useRef } from 'react'


export function useTimeout(callback, delay) {
    const savedCallback = useRef(callback)

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        if (!delay && delay !== 0) {
            return
        }

        const id = setTimeout(() => savedCallback.current(), delay)

        return () => clearTimeout(id)
    }, [delay])
}