
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAllForms,
  updateFormById,
  deleteFormById,
} from '../../utils/FormApi';
import Toast from '../../common/Toast';
import { BsCheckCircle } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import Paginator from '../../common/Paginator';
import { format } from 'date-fns';

const PendingService = () => {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const fetchForms = async () => {
    setIsLoading(true);
    try {
      const res = await getAllForms('service-orders', 1, 1000);
      const reversedForms = [...res.data.data.result].reverse();
      setForms(reversedForms);
    } catch (error) {
      console.error('Error fetching forms:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchForms();
  }, []);

  const filterForms = (forms) => {
    return forms.filter((form) => form.status.toLowerCase() === 'pending');
  };

  const handleDeleteForm = async (id) => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;
    try {
      const res = await deleteFormById('service-orders', id, accessToken);
      if (res.status === 200) {
        fetchForms();
        setMessage('Xóa đơn đăng ký thành công');
        setStatus('success');
      } else {
        setMessage('Xóa đơn đăng ký thất bại');
        setStatus('danger');
      }
    } catch (err) {
      setMessage('Xóa đơn đăng ký thất bại');
      setStatus('danger');
    }

    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, 5000);
  };

  const handleApproveForm = async (id) => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    try {
      const res = await updateFormById(
        'service-orders',
        id,
        { status: 'approve' },
        accessToken
      );
      if (res.status === 200) {
        fetchForms();
        setMessage('Cập nhật trạng thái thành công');
        setStatus('success');
      } else {
        setMessage('Cập nhật trạng thái thất bại');
        setStatus('danger');
      }
    } catch (err) {
      setMessage('Cập nhật trạng thái thất bại');
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

  const formatDate = (isoDate) => {
    return format(new Date(isoDate), 'dd/MM/yyyy HH:mm:ss');
  };

  const filteredForms = filterForms(forms);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedForms = filteredForms.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredForms.length / pageSize);

  const getServiceTypeClass = (serviceName) => {
    switch (serviceName) {
      case 'Kiểm tra':
        return 'text-blue-600';
      case 'Bảo trì':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
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
            Dịch vụ đang chờ duyệt
          </p>
        </div>
      </div>

      <div className="mt-5 bg-white rounded-2xl h-max py-5 shadow-md ml-[64px] mr-[8px]">
        <div className="flex items-center">
          <p className="text-mainTitleColor font-semibold text-[18px] px-5 mr-8">
            Danh sách dịch vụ
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
                  Tên khách hàng
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Dịch vụ yêu cầu
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Chi nhánh
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
                  <td colSpan="8" className="text-center py-4">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : paginatedForms.length > 0 ? (
                paginatedForms.map((form, index) => (
                  <tr key={form.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {index + 1 + (currentPage - 1) * pageSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {form.user.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {form.user.email}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-base font-bold ${getServiceTypeClass(
                        form.name_service
                      )}`}
                    >
                      {form.name_service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {form.agency.name_agency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {formatDate(form.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {formatDate(form.updatedAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium">
                      <span
                        className="mr-1 text-green-600 hover:text-green-900 p-2 rounded-lg bg-green-200 inline-block cursor-pointer"
                        onClick={() => handleApproveForm(form.id)}
                      >
                        <BsCheckCircle className="h-5 w-5" />
                      </span>
                      <span
                        className="text-red-600 hover:text-red-900 p-2 rounded-lg bg-red-200 inline-block cursor-pointer"
                        onClick={() => handleDeleteForm(form.id)}
                      >
                        <FaTrashAlt className="h-5 w-5" />
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    Không có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PendingService;
