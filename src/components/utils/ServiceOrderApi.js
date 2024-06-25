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


