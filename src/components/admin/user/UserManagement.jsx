import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers, deleteUserById } from '../../utils/UserAPi';
import { BsPencilSquare } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import Toast from '../../common/Toast';
import Paginator from '../../common/Paginator';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const pageSize = 8;

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await getAllUsers(); // fetch all users initially
      console.log('API response:', res); // Log API response for debugging
      if (res.data && res.data.data && res.data.data.result) {
        const sortedUsers = [...res.data.data.result].sort(
          (a, b) => a.id - b.id
        );
        console.log('Sorted users:', sortedUsers); // Log sorted users for debugging
        setUsers(sortedUsers);
      } else {
        console.error(
          'Dữ liệu trả về từ API không hợp lệ hoặc thiếu:',
          res.data
        );
      }
    } catch (error) {
      console.error('Lỗi khi lấy danh sách người dùng:', error);
    }
    setIsLoading(false);
  };

  const handleDeleteUser = async (id) => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    try {
      const res = await deleteUserById(id, accessToken);
      if (res.status === 200) {
        fetchUsers();
        setMessage('Xóa người dùng thành công');
        setStatus('success');
      } else {
        setMessage('Xóa người dùng thất bại');
        setStatus('danger');
      }
    } catch (err) {
      setMessage('Xóa người dùng thất bại');
      setStatus('danger');
    }

    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, 5000);
  };

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const formatDate = (isoDate) => {
    return format(new Date(isoDate), 'dd/MM/yyyy HH:mm:ss');
  };

  const totalPages = Math.ceil(users.length / pageSize);
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section>
      <Toast
        handleCloseToast={handleCloseToast}
        message={message}
        status={status}
      />

      <div className="container">
        <div className="flex justify-between">
          <p className="text-mainTitleColor text-mainTitle uppercase ml-4">
            Quản lý khách hàng
          </p>
        </div>
        <div className="flex justify-between mt-4">
          {/* THANH TÌM KIẾM */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm tên khách hàng"
              className="pl-8 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300 ml-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-4">
              <IoSearchOutline className="text-gray-400" />
            </div>
            {searchQuery && (
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md ml-4"
                onClick={handleClearSearch}
              >
                Xóa bộ lọc
              </button>
            )}
          </div>
          <Link
            to={'/admin/user/add'}
            type="submit"
            className="uppercase px-5 py-2 flex items-center rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            Tạo tài khoản
          </Link>
        </div>
      </div>

      <div className="mt-5 bg-white rounded-2xl h-max py-5 shadow-md ml-[64px] mr-[8px]">
        <div className="flex items-center">
          <p className="text-mainTitleColor font-semibold text-[18px] px-5 mr-8">
            Danh sách khách hàng
          </p>
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="divide-y divide-gray-200 mt-5 w-full">
            <thead className="bg-[#f5f5f5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold whitespace-nowrap text-gray-500 uppercase tracking-wider">
                  STT
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Họ tên
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Số điện thoại
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày tạo
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày cập nhật
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {index + 1 + (currentPage - 1) * pageSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(user.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(user.updatedAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        className="text-orange-600 hover:text-orange-900 p-2 rounded-lg bg-orange-200 inline-block"
                        to={`/admin/user/edit/${user.id}`}
                      >
                        <BsPencilSquare className="h-5 w-5" />
                      </Link>
                      <span
                        className="text-red-600 hover:text-red-900 p-2 rounded-lg bg-red-200 inline-block"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <FaTrashAlt className="h-5 w-5" />
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    Không có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center mt-4 mr-2">
          <div className="mr-4">
            Trang {currentPage} / {totalPages}
          </div>
          <button
            className={`px-4 py-1 bg-gray-200 text-gray-700 rounded-md flex items-center border border-gray-300 ${
              currentPage === 1
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-300'
            }`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="text-3xl mb-[6px]">&lsaquo;</span>
          </button>
          <button
            className={`px-4 py-1 bg-gray-200 text-gray-700 rounded-md flex items-center border border-gray-300 ${
              currentPage === totalPages
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-300'
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="text-3xl mb-[6px]">&rsaquo;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserManagement;
