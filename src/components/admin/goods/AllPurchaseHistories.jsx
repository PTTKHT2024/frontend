import React, { useEffect, useState } from 'react';
import { getAllPurchaseHistories } from '../../utils/GoodsApi.js';
import { IoSearchOutline } from 'react-icons/io5';
import { format } from 'date-fns';
import Toast from '../../common/Toast';
import Paginator from '../../common/Paginator';
import ServiceOrderModal from './ServiceOrderModal';
import TestDriveRegistrationModal from './TestDriveRegistrationModal';

const AllPurchaseHistories = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceOrder, setSelectedServiceOrder] = useState(null);
  const [selectedTestDrive, setSelectedTestDrive] = useState(null);
  const pageSize = 10;

  const fetchGoods = async () => {
    setIsLoading(true);
    try {
      const res = await getAllPurchaseHistories();
      if (res.data && res.data.data && res.data.data.result) {
        const sortedGoods = [...res.data.data.result].sort(
          (a, b) => a.id - b.id
        );
        setGoods(sortedGoods);
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

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  const handleServiceOrderClick = (serviceOrder) => {
    setSelectedServiceOrder(serviceOrder);
  };

  const handleTestDriveClick = (testDriveRegistration) => {
    setSelectedTestDrive(testDriveRegistration);
  };

  const handleCloseModal = () => {
    setSelectedServiceOrder(null);
    setSelectedTestDrive(null);
  };

  useEffect(() => {
    fetchGoods();
  }, []);

  const formatDate = (isoDate) => {
    return format(new Date(isoDate), 'dd/MM/yyyy HH:mm:ss');
  };

  const formatServiceDate = (isoDate) => {
    return format(new Date(isoDate), 'dd/MM/yyyy');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  const totalPages = Math.ceil(goods.length / pageSize);

  const filteredGoods = goods.filter((goods) => {
    if (!goods.serviceOrder && !goods.testDriveRegistration) {
      return false;
    }
    if (goods.serviceOrder && goods.serviceOrder.status !== 'success') {
      return false;
    }
    if (
      goods.testDriveRegistration &&
      !['success', 'fail'].includes(goods.testDriveRegistration.status)
    ) {
      return false;
    }
    return goods.user.fullName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  const currentGoods = filteredGoods.slice(
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
            LỊCH SỬ ĐƠN HÀNG
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
                <th className="px-2 py-3 text-left text-xs font-semibold whitespace-nowrap text-gray-500 uppercase tracking-wider">
                  STT
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Họ tên
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  SĐT
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Dịch vụ
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày hẹn
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Thành tiền
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày tạo
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày cập nhật
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan="10" className="text-center py-4">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : currentGoods.length > 0 ? (
                currentGoods.map((goods, index) => (
                  <tr key={goods.id}>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {index + 1 + (currentPage - 1) * pageSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {goods.user.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                      {goods.user.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {goods.user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {goods.serviceOrder ? (
                        <span
                          className="text-blue-500 cursor-pointer font-medium"
                          onClick={() =>
                            handleServiceOrderClick(goods.serviceOrder)
                          }
                        >
                          {goods.serviceOrder.name_service} (
                          {goods.serviceOrder.number_plates})
                        </span>
                      ) : goods.testDriveRegistration ? (
                        <span
                          className="text-blue-500 cursor-pointer font-medium"
                          onClick={() =>
                            handleTestDriveClick(goods.testDriveRegistration)
                          }
                        >
                          Lái thử ({goods.testDriveRegistration.car.name})
                        </span>
                      ) : (
                        <span></span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {goods.serviceOrder ? (
                        <span>
                          {formatServiceDate(
                            goods.serviceOrder.appointment_date
                          )}
                        </span>
                      ) : goods.testDriveRegistration ? (
                        <span>
                          {formatServiceDate(
                            goods.testDriveRegistration.scheduledDate
                          )}
                        </span>
                      ) : (
                        <span></span>
                      )}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {goods.serviceOrder ? (
                        <span className="px-4 py-4 whitespace-nowrap text-sm font-medium uppercase text-center text-green-500">
                          {goods.serviceOrder.status}
                        </span>
                      ) : goods.testDriveRegistration ? (
                        <span
                          className={`px-4 py-4 whitespace-nowrap text-sm font-medium uppercase text-center ${
                            goods.testDriveRegistration.status === 'success'
                              ? 'text-green-600'
                              : 'text-orange-500'
                          }`}
                        >
                          {goods.testDriveRegistration.status}
                        </span>
                      ) : (
                        <span></span>
                      )}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                      <span>{formatCurrency(goods.purchasePrice)}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(goods.createdAt)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(goods.updatedAt)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center py-4">
                    Không có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Service Order Modal */}
      {selectedServiceOrder && (
        <ServiceOrderModal
          serviceOrder={selectedServiceOrder}
          onClose={handleCloseModal}
        />
      )}

      {/* Test Drive Registration Modal */}
      {selectedTestDrive && (
        <TestDriveRegistrationModal
          testDrive={selectedTestDrive}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default AllPurchaseHistories;
