import { api } from './AuthApi';
import { preparePayload } from './UtilsFunction';

export async function getCarList(currentPage, pageSize) {
  try {
    const res = await api.get('/cars', {
      params: {
        page: currentPage,
        size: pageSize,
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    if (err.response) {
      return { status: err.response.status, data: err.response.data };
    } else {
      throw err;
    }
  }
}

export async function createCar(car, accessToken) {
  try {
    const res = await api.post('/cars', preparePayload(car), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
