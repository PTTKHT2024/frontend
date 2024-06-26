import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllForms, deleteFormById } from '../../utils/FormApi';

import { BsCheckSquareFill, BsCheck, BsSquare } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import Toast from '../../common/Toast';
import Paginator from '../../common/Paginator';

const UserManagement = () => {
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
      const reversedCars = [...res.data.data.result].reverse();
      setForms(reversedCars);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchForms();
  }, []);

  const handleDeleteForm = async (id) => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;
    try {
      const res = await deleteFormById('service-orders', id, accessToken);
      if (res.status === 200) {
        fetchForms();
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

  const formatDate = (isoDate) => {
    return format(new Date(isoDate), 'dd/MM/yyyy HH:mm:ss');
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedForms = forms.slice(startIndex, endIndex);

  const totalPages = Math.ceil(forms.length / pageSize);

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
            Quản lý đơn đăng ký dịch vụ
          </p>
        </div>
        <div className="flex mt-4 justify-end">
          <Link
            to={'/admin/service/pending'}
            type="submit"
            className=" uppercase px-5 py-2 flex items-center rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            Dịch vụ Chờ duyệt
          </Link>
          <Link
            to={'/admin/service/approved'}
            type="submit"
            className="mx-2 uppercase px-5 py-2 flex items-center rounded-md bg-[#349143] hover:bg-[#349143]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            Kiểm duyệt 
          </Link>
          <Link
            to={'/admin/service/view'}
            type="submit"
            className="uppercase px-5 py-2 flex items-center rounded-md bg-[#3abdc6] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow "
          >
            Xem dịch vụ 
          </Link>
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
                  Dịch vụ yêu cầu
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Chi nhánh
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Trạng thái
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
              ) : paginatedForms.length > 0 ? (
                paginatedForms.map((form, index) => (
                  <tr key={form.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {index + 1 + (currentPage - 1) * pageSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {form.user.fullName}
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
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-base font-bold ${
                        form.status === 'success'
                          ? 'text-green-600'
                          : 'text-gray-500'
                      } uppercase`}
                    >
                      {form.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {formatDate(form.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {formatDate(form.updatedAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium">
                      <Link
                        className="text-orange-600 hover:text-orange-900 p-2 rounded-lg bg-orange-200 inline-block"
                        to={`/admin/form/edit/${form.id}`}
                      >
                        {form.status === 'success' ? (
                          <BsCheck className="h-5 w-5" />
                        ) : (
                          <BsSquare className="h-5 w-5" />
                        )}
                      </Link>
                      <span
                        className="text-red-600 hover:text-red-900 p-2 rounded-lg bg-red-200 inline-block"
                        onClick={() => handleDeleteForm(form.id)}
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
      </div>
    </section>
  );
};

export default UserManagement;
