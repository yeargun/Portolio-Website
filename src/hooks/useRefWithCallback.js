import {useRef, useCallback} from "react";

export default function useRefWithCallback(onMount, onUnmount) {
    const nodeRef = useRef(null);
    const setRef = useCallback(
        (node) => {
            if (nodeRef.current) {
                onUnmount(nodeRef.current);
            }

            nodeRef.current = node;

            if (nodeRef.current) {
                onMount(nodeRef.current);
            }
        },
        [onMount, onUnmount]
    );

    return setRef;
}