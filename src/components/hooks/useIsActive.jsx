import { useState, useEffect } from 'react';
import { checkTokenExpire } from '../utils/AuthApi';

const useIsActive = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkActiveStatus = async () => {
      const data = localStorage.getItem('data');
      if (!data) {
        setIsActive(false);
        return;
      }

      const parsedData = JSON.parse(data);
      const accessToken = parsedData.access_token;

      if (!accessToken) {
        setIsActive(false);
        return;
      }

      try {
        const res = await checkTokenExpire(accessToken);
        setIsActive(res.status === 200);
      } catch (error) {
        setIsActive(false);
      }
    };

    checkActiveStatus();

    window.addEventListener('storage', checkActiveStatus);
    window.addEventListener('localStorageChanged', checkActiveStatus);
    return () => {
      window.removeEventListener('storage', checkActiveStatus);
      window.removeEventListener('localStorageChanged', checkActiveStatus);
    };
  }, []);

  return isActive;
};

export default useIsActive;
