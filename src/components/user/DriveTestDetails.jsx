import React, { useState } from 'react';
import Paginator from '../common/Paginator';

import { FaTrashAlt } from 'react-icons/fa';
import { updateStatusDriveTestById } from '../utils/DriveTestApi';
const DriveTestDetails = ({
  userDriveTests,
  loading,
  accessToken,
  onDriveTestStatusUpdated,
}) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(userDriveTests.length / itemsPerPage);
  const currentOrders = userDriveTests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteDriveTest = async (testDriveId) => {

    if (window.confirm('Bạn có chắc chắn muốn hủy đơn đăng ký lái thử này?')) {

      try {
        const res = await updateStatusDriveTestById(
          testDriveId,
          'delete',
          accessToken
        );
        if (res.status === 200) {
          alert('Hủy đơn đăng ký lái thử thành công!');
          onDriveTestStatusUpdated(testDriveId, 'delete'); 
        } else {
          alert('Hủy đơn đăng ký lái thử thất bại. Vui lòng thử lại sau.');
        }
      } catch (error) {
        console.error('Lỗi khi hủy đơn đăng ký lái thử:', error);
        alert('Xảy ra lỗi khi hủy đơn đăng ký lái thử. Vui lòng thử lại sau.');
      }
    }
  };

  return (
    <div>
      <div className="bg-primaryColor text-white py-3 px-6 rounded-t-lg mb-2 flex items-center">
        <h2 className="text-2xl font-bold">Đăng kí lái thử </h2>
      </div>

      {loading ? (
        <p>Đang tải danh sách đăng ký lái thử...</p>
      ) : userDriveTests.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="divide-y divide-gray-200 mt-5 w-full">
            <thead className="bg-[#f5f5f5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold whitespace-nowrap text-gray-500 uppercase tracking-wider">
                  STT
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tên xe
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Đại lý
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày hẹn
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold whitespace-nowrap text-gray-500 uppercase tracking-wider">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.map((testDrive, index) => (
                <tr key={testDrive.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {testDrive.car.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {testDrive.agency.name_agency}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(testDrive.scheduledDate)}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm uppercase ${
                      testDrive.status === 'success'
                        ? 'text-green-500'
                        : testDrive.status === 'delete'
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }`}
                  >
                    {testDrive.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleDeleteDriveTest(testDrive.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p>Không có đăng ký lái thử nào được tìm thấy.</p>
      )}
    </div>
  );
};

export default DriveTestDetails;
