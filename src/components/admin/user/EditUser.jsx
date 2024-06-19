import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUserById } from '../../utils/UserAPi';

const EditUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
    email: '',
    role: '',
  });
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const dataJSON = localStorage.getItem('data');
        const data = JSON.parse(dataJSON);
        const accessToken = data.access_token;

        const res = await getUserById(id, accessToken);
        if (res.status === 200 && res.data) {
          const { fullName, phone, email, role } = res.data.data;
          setUserData({ fullName, phone, email, role: role.name });
        } else {
          setMessage('Không thể tải thông tin người dùng');
          setStatus('danger');
          setUserData({
            fullName: '',
            phone: '',
            email: '',
            role: '',
          });
        }
      } catch (error) {
        setMessage('Lỗi khi tải thông tin người dùng');
        setStatus('danger');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const dataJSON = localStorage.getItem('data');
      const data = JSON.parse(dataJSON);
      const accessToken = data.access_token;

      const res = await updateUserById(id, userData, accessToken);
      if (res.status === 200) {
        setMessage('Cập nhật người dùng thành công');
        setStatus('success');
        setTimeout(() => navigate('/admin/user'), 2000);
      } else {
        setMessage('Cập nhật người dùng thất bại');
        setStatus('danger');
      }
    } catch (error) {
      setMessage(`Cập nhật người dùng thất bại: ${error.message}`);
      setStatus('danger');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('userData:', userData);
    console.log('message:', message);
    console.log('status:', status);
  }, [userData, message, status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      role: value,
    }));
  };

  return (
    <section className="container mx-auto p-6">
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold text-center">
              Chỉnh sửa tài khoản
            </h2>
            {message && (
              <div
                className={`mt-4 p-2 text-center text-white ${
                  status === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {message}
              </div>
            )}
            <form onSubmit={handleUpdateUser} className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Họ tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full"
                  pattern="^((\\+84)|0)[1-9]{1}[0-9]{8}$"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Vai trò
                </label>
                <select
                  name="role"
                  value={userData.role}
                  onChange={handleRoleChange}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full"
                  required
                >
                  <option value="">Chọn vai trò</option>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                  disabled={loading}
                >
                  {loading ? 'Đang cập nhật...' : 'Cập nhật'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditUser;
