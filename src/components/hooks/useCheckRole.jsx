import React, { useState } from 'react';
import { checkTokenExpire } from '../utils/AuthApi';

const useCheckRole = () => {
  const [role, setRole] = useState('');

  const dataJSON = localStorage.getItem('data');
  const data = JSON.parse(dataJSON);
  const accessToken = data.access_token;

  try {
    const checkRole = async () => {
      const res = await checkTokenExpire(accessToken);
      setRole(res.data.data.user.role.name);
    };

    checkRole();
  } catch (err) {
    console.log(err);
  }
  return role;
};

export default useCheckRole;
