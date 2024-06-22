import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createANewUser } from '../../utils/UserAPi';

const AddUser = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleAddUser = async (e) => {
    e.preventDefault();
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    const user = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      password: password.trim(),
      role: role.trim(),
    };

    try {
      const res = await createANewUser(user, accessToken);
      if (res.status === 201) {
        setMessage('Tạo người dùng thành công');
        setStatus('success');
        setTimeout(() => navigate('/admin/user'), 2000); // Chuyển hướng sau 2 giây
      } else {
        setMessage('Tạo người dùng thất bại');
        setStatus('danger');
      }
    } catch (error) {
      setMessage(`Tạo người dùng thất bại: ${error.message}`);
      setStatus('danger');
    }
  };

  return (
    <section className="container mx-auto p-6">
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold text-center">Tạo tài khoản</h2>
            {message && (
              <div
                className={`mt-4 p-2 text-center text-white ${
                  status === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {message}
              </div>
            )}
            <form onSubmit={handleAddUser} className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Họ tên
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full"
                  pattern="^((\+84)|0)[1-9]{1}[0-9]{8}$"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Vai trò
                </label>
                <div className="relative inline-block w-full">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full appearance-none"
                    required
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center ">
                    <img
                      src="/imgs/icon-arrow.png"
                      alt="Arrow"
                      className="h-5 w-5 mt-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Tạo tài khoản
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddUser;
