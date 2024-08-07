import { api } from './AuthApi';

export async function createANewUser(user, accessToken) {
  try {
    const res = await api.post('/users', user, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error(
      'Lỗi khi tạo người dùng:',
      err.response ? err.response.data : err.message
    );
    throw new Error(err.response ? err.response.data.message : err.message);
  }
}

export async function getUserById(id, accessToken) {
  try {
    const res = await api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.response ? err.response.data.message : err.message);
  }
}

export async function updateUserById(id, user, accessToken) {
  try {
    const res = await api.patch(`/users/${id}`, user, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.response ? err.response.data.message : err.message);
  }
}

// export async function getAllUsers() {
//   try {
//     // Lấy dữ liệu từ localStorage và parse để lấy accessToken
//     const data = JSON.parse(localStorage.getItem('data'));
//     const accessToken = data.access_token;

//     // Đảm bảo rằng accessToken đã được lấy thành công từ localStorage
//     if (!accessToken) {
//       throw new Error('Không tìm thấy accessToken trong localStorage');
//     }

//     // Tạo headers để gửi yêu cầu API
//     const headers = {
//       Authorization: `Bearer ${accessToken}`,
//       'Content-Type': 'application/json',
//     };

//     // Gọi API để lấy danh sách người dùng
//     const res = await api.get('/users', { headers });

//     // Trả về kết quả
//     return { status: res.status, data: res.data };
//   } catch (err) {
//     console.error('Lỗi khi lấy danh sách người dùng:', err);
//     throw new Error(err.message);
//   }
// }

export async function getAllUsers(currentPage, pageSize) {
  try {
    // Lấy dữ liệu từ localStorage và parse để lấy accessToken
    const data = JSON.parse(localStorage.getItem('data'));
    const accessToken = data.access_token;

    // Đảm bảo rằng accessToken đã được lấy thành công từ localStorage
    if (!accessToken) {
      throw new Error('Không tìm thấy accessToken trong localStorage');
    }

    // Tạo headers để gửi yêu cầu API
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    // Tạo các tham số cho phân trang
    const params = {
      params: {
        current: currentPage,
        pageSize: pageSize,
      },
      headers: headers,
    };

    // Gọi API để lấy danh sách người dùng với phân trang
    const res = await api.get('/users', params);

    // Trả về kết quả
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error('Lỗi khi lấy danh sách người dùng:', err);
    throw new Error(err.message);
  }
}

export async function deleteUserById(id, accessToken) {
  try {
    const res = await api.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}
