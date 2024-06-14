import { api } from './AuthApi';

export async function createANewBlog(blog, accessToken) {
  try {
    const res = await api.post('/blogs', blog, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
