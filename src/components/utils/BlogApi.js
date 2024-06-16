import { data } from 'autoprefixer';
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

export async function getAllBlogs(current, pageSize) {
  try {
    const res = await api.get('/blogs', {
      params: {
        current: current,
        pageSize: pageSize,
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw new Error(err.message);
  }
}

export async function getBlogById(id) {
  try {
    const res = await api.get(`/blogs/${id}`);
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteBlogById(id, accessToken) {
  try {
    const res = await api.delete(`/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
