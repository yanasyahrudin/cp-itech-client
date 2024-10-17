// src/useGaTracker.js
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';

const useGaTracker = () => {
    const history = createBrowserHistory();

    useEffect(() => {
        // Track the initial page load
        window.gtag('config', 'G-8DKRRDCPWP', {
            page_path: window.location.pathname + window.location.search,
        });

        // Set up a listener for future page changes
        const unlisten = history.listen((location) => {
            window.gtag('config', 'G-8DKRRDCPWP', {
                page_path: location.pathname + location.search,
            });
        });

        // Clean up the listener on component unmount
        return () => {
            unlisten();
        };
    }, [history]);

    
};

export default useGaTracker;
