import React, { useState, useEffect } from 'react';
import { checkTokenExpire } from '../utils/AuthApi';

const useCheckRole = () => {
  const [role, setRole] = useState(null);

  // useEffect(() => {
  //   const dataJSON = localStorage.getItem('data');

  //   if (!dataJSON) {
  //     setRole('ANONYMOUS');
  //     return;
  //   }

  //   const data = JSON.parse(dataJSON);
  //   const accessToken = data.access_token;

  //   const checkRole = async () => {
  //     try {
  //       const res = await checkTokenExpire(accessToken);
  //       setRole(res.data.data.user.role.name);
  //     } catch (err) {
  //       console.log(err);
  //       setRole('ANONYMOUS');
  //     }
  //   };

  //   checkRole();
  // }, []);

  // return role;
  return 'ADMIN';
};

export default useCheckRole;
