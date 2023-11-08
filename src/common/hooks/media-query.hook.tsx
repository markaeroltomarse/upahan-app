import { useCallback, useEffect, useState } from 'react';

const useMediaQuery: (query: string) => boolean = (query: string) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media?.addEventListener) {
      media.addEventListener('change', updateTarget);
    } else {
      media.addListener(updateTarget);
    }

    // media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    if (media?.removeEventListener) {
      return () => media.removeEventListener('change', updateTarget);
    } else {
      return () => media.removeListener(updateTarget);
    }
  }, []);

  return targetReached;
};
export default useMediaQuery;
