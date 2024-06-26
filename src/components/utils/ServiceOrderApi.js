import { api } from './AuthApi';

export async function getAllServiceOrder() {
  try {
    const res = await api.get('/service-orders');
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error('Error fetching orders:', err);
    throw new Error(err.message);
  }
}
export async function deleteServiceOrderById(id, accessToken) {
  try {
    const res = await api.delete(`/service-orders/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function updateStatusServiceOrderById(id, status, accessToken) {
  try {
    const res = await api.patch(
      `/service-orders/${id}`,
      { status: status },
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