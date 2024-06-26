import React, { useState } from 'react';
import Paginator from '../common/Paginator';
import { FaTrashAlt } from 'react-icons/fa';
import { updateStatusServiceOrderById } from '../utils/ServiceOrderApi';

const ServiceOrderDetails = ({
  userOrders,
  loading,
  accessToken,
  onOrderDeleted,
}) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(userOrders.length / itemsPerPage);
  const currentOrders = userOrders.slice(
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

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm('Bạn có chắc chắn muốn huỷ dịch vụ này?')) {
      try {
        
        const res = await updateStatusServiceOrderById(
          orderId,
          'delete',
          accessToken
        ); 

        if (res.status === 200) {
          alert('Huỷ dịch vụ thành công!');
          onOrderDeleted(orderId, 'delete');
        } else {
          alert('Huỷ dịch vụ thất bại. Vui lòng thử lại sau.');
        }
      } catch (error) {
        console.error('Lỗi khi huỷ dịch vụ:', error);
        alert('Xảy ra lỗi khi huỷ dịch vụ. Vui lòng thử lại sau.');
      }
    }
  };

  return (
    <div>
      <div className="bg-primaryColor text-white py-3 px-6 rounded-t-lg mb-2 flex items-center">
        <h2 className="text-2xl font-bold">Dịch vụ</h2>
      </div>
      {loading ? (
        <p>Đang tải danh sách dịch vụ...</p>
      ) : userOrders.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 mt-5 w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold whitespace-nowrap text-gray-500 uppercase tracking-wider">
                    STT
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Tên dịch vụ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Biển số xe
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Ngày hẹn
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Đại lý
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
                {currentOrders.map((order, index) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.name_service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.number_plates}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(order.appointment_date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.agency.name_agency}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm uppercase ${
                        order.status === 'success'
                          ? 'text-green-500'
                          : order.status === 'delete'
                          ? 'text-red-500'
                          : 'text-gray-500'
                      }`}
                    >
                      {order.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p>Không có dịch vụ nào được tìm thấy.</p>
      )}
    </div>
  );
};

export default ServiceOrderDetails;
