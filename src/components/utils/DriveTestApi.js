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
