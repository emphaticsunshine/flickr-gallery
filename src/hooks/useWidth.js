import { useRef, useState, useLayoutEffect, useEffect } from "react";

export default function useWidth() {
    const ref = useRef(null);
    const [width, setWidth] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);

    function fetchWidth() {
        setWindowWidth(window.outerWidth);
    }

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, [ref, windowWidth]);

    useEffect(() => {
        window.addEventListener('resize', fetchWidth, false);

        return () => window.removeEventListener('resize', setWindowWidth, false);
    }, [])

    return {ref, width};
}
