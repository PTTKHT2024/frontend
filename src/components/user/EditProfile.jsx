import React, { useState } from 'react';
import { updateProfile, logout } from '../utils/AuthApi';
import { useNavigate } from 'react-router-dom';

const EditProfilePopup = ({
  userData,
  accessToken,
  onClose,
  onProfileUpdated,
}) => {
  const [fullName, setFullName] = useState(userData.fullName);
  const [phone, setPhone] = useState(userData.phone);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpdateProfile = async () => {
    if (!password) {
      setMessage('Vui lòng nhập mật khẩu hiện tại để xác minh');
      return;
    }

    setLoading(true);

    try {
      const res = await updateProfile(
        password,
        fullName,
        phone,
        null, 
        accessToken
      );

      setMessage('Cập nhật thành công');
      alert('Cập nhật thông tin thành công.!');
      alert('Vui lòng đăng nhập lại để xem thay đổi.!');

      try {
        const logoutRes = await logout(accessToken);

        localStorage.removeItem('data');
        navigate('/');
      } catch (error) {
        console.error('Lỗi khi đăng xuất:', error);
      }

      onClose();
    } catch (error) {
      console.error('Lỗi khi cập nhật thông tin:', error);
      setMessage(
        error.response?.data?.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.'
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Chỉnh sửa thông tin cá nhân</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Họ và tên
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Mật khẩu hiện tại
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {message && <p className="text-red-500 text-xs italic">{message}</p>}
        <div className="flex items-center justify-between">
          <button
            onClick={handleUpdateProfile}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? 'Đang cập nhật...' : 'Cập nhật'}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePopup;
