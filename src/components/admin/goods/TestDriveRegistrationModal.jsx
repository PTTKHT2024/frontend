import React from 'react';
import { format } from 'date-fns';


const TestDriveRegistrationModal = ({ testDrive, onClose }) => {
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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-4 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-lg font-bold mb-2">Chi tiết dịch vụ lái thử</h2>
        <p>Tên xe: {testDrive.car.name}</p>
        <p>Giá: {testDrive.car.price}</p>
        <p>Dung tích: {testDrive.car.capacity}</p>
        <p>Động cơ: {testDrive.car.engine}</p>
        <p>Số ghế: {testDrive.car.number_of_seats}</p>
        <p>Hộp số: {testDrive.car.gearbox}</p>
        <p>Ngày hẹn: {formatDate(testDrive.scheduledDate)}</p>
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

export default TestDriveRegistrationModal;
