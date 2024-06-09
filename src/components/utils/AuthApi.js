import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://47.129.30.33/api/v1',
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
