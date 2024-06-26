import React from 'react';

const AccountDetails = ({ userData }) => {
  return (
    <>
      <div className="bg-primaryColor text-white py-3 px-6 rounded-t-lg mb-2 flex items-center">
        <h2 className="text-2xl font-bold">Tài khoản</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Họ và tên:
          </label>
          <span className="text-gray-700">{userData.fullName}</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Số điện thoại:
          </label>
          <span className="text-gray-700">{userData.phone}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <span className="text-gray-700">{userData.email}</span>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
