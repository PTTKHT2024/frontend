// Agency.js
import { api } from './AuthApi';

export async function getAllAgencies() {
  try {
    const data = JSON.parse(localStorage.getItem('data'));
    const accessToken = data.access_token;

    if (!accessToken) {
      throw new Error('Không tìm thấy accessToken trong localStorage');
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    const res = await api.get('/agencies', { headers });

    return { status: res.status, data: res.data };
  } catch (err) {
    console.error('Lỗi khi lấy danh sách đại lý:', err);
    throw new Error(err.message);
  }
}

export async function getAgencyById(id) {
  try {
    const data = JSON.parse(localStorage.getItem('data'));
    const accessToken = data.access_token;

    if (!accessToken) {
      throw new Error('Không tìm thấy accessToken trong localStorage');
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    const res = await api.get(`/agencies/${id}`, { headers });

    return { status: res.status, data: res.data };
  } catch (err) {
    console.error(`Lỗi khi lấy thông tin đại lý với ID ${id}:`, err);
    throw new Error(err.message);
  }
}