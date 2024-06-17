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
