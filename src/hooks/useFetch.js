import { useState, useEffect } from "react";


export default function useFetch(url, options) {
    // use state for response from fetch call
    const [response, setResponse] = useState(null);
    // state to handle any error
    const [error, setError] = useState(null);

    useEffect(() => {
        (async() => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch(err) {
                // set error if there was any error
                setError(err);
            }
        })();
    }, [url, options]); // will be called if url or options changes.

    // loading state is active until response is set or error is set
    // loading state can be used to display a loader.
    return {response, error, isLoading: error === null && response === null};
}
