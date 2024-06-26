import React, { useState } from 'react';
import { updateProfile, logout } from '../utils/AuthApi';
import { useNavigate } from 'react-router-dom';

const ChangePasswordPopup = ({ accessToken, onClose, onSuccess }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      setMessage('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('Mật khẩu mới và xác nhận mật khẩu không khớp');
      return;
    }

    setLoading(true);

    try {
      const res = await updateProfile(oldPassword, null, null, newPassword);

      setMessage('Đổi mật khẩu thành công');
      alert('Cập nhật thông tin thành công.!');
      alert('Vui lòng đăng nhập lại để xem thay đổi.!');

      onSuccess();


      try {
        const logoutRes = await logout(accessToken);

        localStorage.removeItem('data');
        navigate('/');
      } catch (error) {
        console.error('Lỗi khi đăng xuất:', error);
      }

      onClose();
    } catch (error) {
      console.error('Lỗi khi đổi mật khẩu:', error);
      setMessage(
        error.response?.data?.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Đổi Mật Khẩu</h2>

        <div className="mb-4">
          <label
            htmlFor="oldPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mật khẩu cũ:
          </label>
          <input
            type="password"
            id="oldPassword"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mật khẩu mới:
          </label>
          <input
            type="password"
            id="newPassword"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Xác nhận mật khẩu mới:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {message && (
          <p className="text-red-500 text-xs italic mb-4">{message}</p>
        )}

        <div className="flex items-center justify-between">
          <button
            onClick={handleChangePassword}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPopup;
