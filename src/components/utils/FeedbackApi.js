import { api } from './AuthApi';

export async function getAllFeedbacks(current, pageSize, accessToken) {
  try {
    const res = await api.get('/feedbacks', {
      params: {
        current: current,
        pageSize: pageSize,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error('Error fetching feedbacks:', err);
    throw new Error(err.message);
  }
}

export async function updateFeedback(
  id,
  status,
  responseContent = '',
  accessToken
) {
  try {
    const res = await api.patch(
      `/feedbacks/${id}`,
      {
        status: status,
        responseContent: responseContent,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
