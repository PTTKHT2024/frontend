import React from 'react';
import { format } from 'date-fns';


const ServiceOrderModal = ({ serviceOrder, onClose }) => {


  const formatDate = (isoDate) => {
    return format(new Date(isoDate), 'dd/MM/yyyy');
  };

  const handleOverlayClick = (e) => {
    // Kiểm tra xem người dùng đã nhấp vào phần ngoài pop-up (nền đen) hay không
    if (e.target === e.currentTarget) {
      onClose(); // Gọi onClose để đóng pop-up
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-4 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-lg font-bold mb-2">
          Chi tiết dịch vụ {serviceOrder.name_service}
        </h2>
        <p>Tên dịch vụ: {serviceOrder.name_service}</p>
        <p>Biển số xe: {serviceOrder.number_plates}</p>
        <p>Giá dịch vụ: {serviceOrder.price_service}</p>
        <p>Ngày hẹn: {formatDate(serviceOrder.appointment_date)}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default ServiceOrderModal;
