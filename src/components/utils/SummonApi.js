import { api } from './AuthApi';

export async function createSummon(summonBlog, accessToken) {
  try {
    const res = await api.post('/services', summonBlog, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getAllSummons(current, pageSize) {
  try {
    const res = await api.get('/services', {
      params: {
        current: current,
        pageSize: pageSize,
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error('Error fetching services:', err);
    throw new Error(err.message);
  }
}
export async function deleteSummonyId(id, accessToken) {
  try {
    const res = await api.delete(`/services/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
