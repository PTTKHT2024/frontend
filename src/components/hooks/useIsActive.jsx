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
      console.log(data);

      try {
        const res = await checkTokenExpire(accessToken);
        setIsActive(res.status === 200);
        console.log(res);
      } catch (error) {
        setIsActive(false);
      }
    };

    checkActiveStatus();

    window.addEventListener('storage', checkActiveStatus);
    return () => {
      window.removeEventListener('storage', checkActiveStatus);
    };
  }, []);

  return isActive;
};

export default useIsActive;
