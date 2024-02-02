import { useEffect } from "react";

const ClientHandlers = () => {

    const handleCtrlS = (callback) => {
        useEffect(() => {
            const handleKeyDown = (event) => {
                if (event.ctrlKey && event.key === 's') {
                    event.preventDefault()
                    callback();
                }
            };

            window.addEventListener('keydown', handleKeyDown);

            return () => window.removeEventListener('keydown', handleKeyDown);
        }, [callback]);
    }

    const clientHandlers = {
        handleCtrlS
    }

    return clientHandlers
}

export default ClientHandlers