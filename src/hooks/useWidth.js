import { useRef, useState, useLayoutEffect, useEffect } from "react";

// This method is used to get the width of element
export default function useWidth() {
    const ref = useRef(null);
    // state to keep track of width of ref
    const [width, setWidth] = useState(null);
    // to keep track of window width
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);

    function fetchWidth() {
        if(window) {
            setWindowWidth(window.outerWidth);
        }
    }

    // get the width of ref and set state
    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, [ref, windowWidth]);

    // add event listener to window resize
    useEffect(() => {
        window.addEventListener('resize', fetchWidth, false);

        return () => window.removeEventListener('resize', setWindowWidth, false);
    }, [])

    // returned ref needs to be set to element who width needs to be listened.
    return {ref, width};
}
