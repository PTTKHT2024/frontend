import { api } from './AuthApi';

export async function submitForm(
  endPoint,
  form,
  accessToken
) {
  try {
    const res = await api.post(
      `/${endPoint}`,
        form, // Dữ liệu gửi phải là một object
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
    throw new Error(err.response ? err.response.data.message : err.message);
  }
}


export async function getFormById(endPoint ,id, accessToken) {
  try {
    const res = await api.get(`/${endPoint}/${id}`, {
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

export async function updateFormById(endPoint, id, form, accessToken) {
  try {
    const res = await api.patch(`/${endPoint}/${id}`, form, {
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

export async function getAllForms(endPoint, currentPage, pageSize) {
  try {
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
    // Gọi API để lấy danh sách form với phân trang
    const res = await api.get(`/${endPoint}`, params);
    // Trả về kết quả
    return { status: res.status, data: res.data };
  } catch (err) {
    console.error('Lỗi khi lấy dữ liệu', err);
    throw new Error(err.message);
  }
}

export async function deleteFormById(endPoint, id, accessToken) {
  try {
    const res = await api.delete(`/${endPoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status };
  } catch (err) {
    throw new Error(err.message);
  }
}


