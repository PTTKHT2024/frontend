import { api } from './AuthApi';
import { preparePayload } from './UtilsFunction';

export async function getCarList(currentPage, pageSize) {
  try {
    const res = await api.get('/cars', {
      params: {
        current: currentPage,
        pageSize: pageSize,
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

export async function getCarById(id) {
  try {
    const res = await api.get(`/cars/${id}`);
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getCarByName(name) {
  try {
    const res = await api.get(`/cars/${name}`);
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.message);
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

export async function deleteCar(id, accessToken) {
  try {
    const res = await api.delete(`/cars/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateCar(id, car, accessToken) {
  try {
    const res = await api.patch(`/cars/${id}`, preparePayload(car), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
