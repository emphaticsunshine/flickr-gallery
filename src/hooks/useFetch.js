import { useState, useEffect } from "react";


export default function useFetch(url, options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async() => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch(err) {
                setError(err);
            }
        })();
    }, [url, options]);
    return {response, error, isLoading: error === null && response === null};
}
