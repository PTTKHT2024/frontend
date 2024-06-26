import { data } from 'autoprefixer';
import { api } from './AuthApi';

export async function createANewTestDrive(testDrive, accessToken) {
  try {
    const response = await api.post('/test-drive-registrations', testDrive, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: response.status, data: response.data };
  } catch (err) {
    if (err.response) {
      console.error('API Error:', err.response.data);
      throw new Error(`API Error: ${err.response.data.message}`);
    } else if (err.request) {
      console.error('Network Error:', err.request);
      throw new Error('Network Error: Could not connect to the API');
    } else {
      console.error('Unknown Error:', err.message);
      throw new Error('Unknown Error: Unable to create test drive');
    }
  }
}

export async function changeANewTestDrive(testDrive, accessToken) {
  try {
    const response = await api.patch('/test-drive-registrations', testDrive, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: response.status, data: response.data };
  } catch (err) {
    if (err.response) {
      console.error('API Error:', err.response.data);
      throw new Error(`API Error: ${err.response.data.message}`);
    } else if (err.request) {
      console.error('Network Error:', err.request);
      throw new Error('Network Error: Could not connect to the API');
    } else {
      console.error('Unknown Error:', err.message);
      throw new Error('Unknown Error: Unable to create test drive');
    }
  }
}

// export async function changeANewTestDrive(id, testDrive) {
//   try {
//     const validStatuses = ['pending', 'approved', 'rejected'];
//     if (!validStatuses.includes(testDrive.status)) {
//       throw new Error(`Invalid status value: ${testDrive.status}`);
//     }
//     const dataJSON = localStorage.getItem('data');
//     const { access_token } = JSON.parse(dataJSON);

//     console.log(`Sending PATCH request to: /test-drive-registrations/${id}`);
//     console.log('Request body:', testDrive);
//     console.log('Authorization token:', access_token);
//     const response = await api.patch(
//       `/test-drive-registrations/${id}`,
//       testDrive,
//       {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       }
//     );
//     console.log(`Response status: ${response.status} for test drive ID ${id}`);
//     console.log(`Response data: ${JSON.stringify(response.data)}`);

//     return { status: response.status, data: response.data };
//   } catch (err) {
//     let errorMessage;
//     if (err.response) {
//       errorMessage = `API Error for test drive ID ${id}: ${err.response.data.message}`;
//     } else if (err.request) {
//       errorMessage = `Network Error: Could not connect to the API for test drive ID ${id}`;
//     } else {
//       errorMessage = `Unknown Error: Unable to update test drive ID ${id}`;
//     }
//     console.error('Error updating test drive:', errorMessage);
//     throw new Error(errorMessage);
//   }
// }

export async function getAllTestDrives(current, pageSize) {
  try {
    const res = await api.get('/test-drive-registrations', {
      params: {
        current: current,
        pageSize: pageSize,
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error('Error fetching TestDrives:', err);
    throw new Error(err.message);
  }
}

export async function getTestDriveById(id) {
  try {
    const res = await api.get(`/test-drive-registrations/${id}`);
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteTestDriveById(id, accessToken) {
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
