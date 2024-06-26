import { api } from './AuthApi';

export async function getAllDriveTests() {
  try {
    const response = await api.get('/test-drive-registrations');
    return { status: response.status, data: response.data };
  } catch (error) {
    console.error('Error fetching drive tests:', error);
    throw new Error(error.message);
  }
}
export async function deleteDriveTestRegistrationsById(id, accessToken) {
  try {
    const res = await api.delete(`/test-drive-registrations/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function updateStatusDriveTestById(id, status, accessToken) {
  try {
    const res = await api.patch(
      `/test-drive-registrations/${id}`,
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
