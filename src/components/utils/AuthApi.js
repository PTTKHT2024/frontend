import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://18.140.54.30/api/v1',
});

export async function register(registeredUser) {
  try {
    const res = await api.post('/auth/register', registeredUser);
    return { status: res.status, data: res.data };
  } catch (err) {
    if (err.response) {
      return { status: err.response.status, data: err.response.data };
    } else {
      throw err;
    }
  }
}

export async function login(loginForm) {
  try {
    const res = await api.post('/auth/login', loginForm);
    return { status: res.status, data: res.data };
  } catch (err) {
    if (err.response) {
      return { status: err.response.status, data: err.response.data };
    } else {
      throw new Error(err.message);
    }
  }
}

export async function checkTokenExpire(accessToken) {
  try {
    const res = await api.get('/auth/account', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function logout(accessToken) {
  try {
    const res = await api.post('/auth/logout', null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateProfile(
  password,
  fullName = null,
  phone = null,
  newPassword = null
) {
  const datas = JSON.parse(localStorage.getItem('data'));
  const accessToken = datas.access_token;

  // Đảm bảo rằng accessToken đã được lấy thành công từ localStorage
  if (!accessToken) {
    throw new Error('Không tìm thấy accessToken trong localStorage');
  }
  // Tạo headers để gửi yêu cầu API
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const data = {
    password: password,
  };
  if (fullName) {
    data.fullName = fullName;
  }
  if (phone) {
    data.phone = phone;
  }
  if (newPassword) {
    data.newPassword = newPassword;
  }
  try {
    const res = await api.patch('/auth/update-profile', data, { headers });
    console.log('Profile updated successfully:', res.data);
    return res.data;
  } catch (error) {
    console.error(
      'Error updating profile:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
