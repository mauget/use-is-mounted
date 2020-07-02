import { useRef, useEffect } from 'react';

// Called after every render. Indicates if caller is mounted as well as when becomes unmounted
export default function useIsMounted() {
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => isMounted.current = false;
    });
    return isMounted;
}
