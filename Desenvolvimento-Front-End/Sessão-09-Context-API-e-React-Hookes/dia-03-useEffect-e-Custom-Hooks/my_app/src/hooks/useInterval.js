import { useEffect } from 'react';

function useInterval(callback, interval) {
  useEffect(() => {
    callback();
    const timer =  setInterval(callback, interval);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
}

export default useInterval;