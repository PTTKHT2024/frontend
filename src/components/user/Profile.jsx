import React, { useEffect, useState } from 'react';
import { checkTokenExpire } from '../utils/AuthApi';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiSteeringWheelFill } from 'react-icons/pi';
import { IoMdExit } from 'react-icons/io';
import AccountDetails from './AccountDetails';
import { getAllServiceOrder } from '../utils/ServiceOrderApi';
import ServiceOrderDetails from './ServiceOrderDetails';
import DriveTestDetails from './DriveTestDetails';
import { getAllDriveTests } from '../utils/DriveTestApi';
import EditProfilePopup from './EditProfile';
import ChangePasswordPopup from './ChangePassword';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [selectedSection, setSelectedSection] = useState('account');
  const [userData, setUserData] = useState({
    id: null,
    fullName: '',
    phone: '',
    email: '',
  });
  const [userOrders, setUserOrders] = useState([]);
  const [userDriveTests, setUserDriveTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const dataJSON = localStorage.getItem('data');
        if (dataJSON) {
          const data = JSON.parse(dataJSON);
          const token = data.access_token;
          setAccessToken(token);

          const userRes = await checkTokenExpire(token);

          if (userRes.status === 200 && userRes.data) {
            const { id, fullName, phone, email } = userRes.data.data.user;
            setUserData({ id, fullName, phone, email });

            
            const ordersRes = await getAllServiceOrder(token);
            if (ordersRes.status === 200 && ordersRes.data) {
              const filteredOrders = ordersRes.data.data.result.filter(
                (order) => order.user.id === id
              );
              setUserOrders(filteredOrders);
            } else {
              setMessage('Không thể tải danh sách dịch vụ');
              setStatus('danger');
            }

            
            const driveTestsRes = await getAllDriveTests(token);
            if (driveTestsRes.status === 200 && driveTestsRes.data) {
              const filteredDriveTests = driveTestsRes.data.data.result.filter(
                (testDrive) => testDrive.user.id === id
              );
              setUserDriveTests(filteredDriveTests);
            } else {
              console.error('Không thể tải danh sách đăng ký lái thử');
            }
          } else {
            setMessage('Không thể tải thông tin người dùng');
            setStatus('danger');
          }
        }
      } catch (error) {
        setMessage('Lỗi khi tải dữ liệu');
        setStatus('danger');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (accessToken) {
      console.log('Access Token:', accessToken);
    }
  }, [accessToken]);

  const handleProfileUpdated = (newUserData) => {
    setUserData(newUserData);
  };

  const handleClosePopup = () => {
    setIsEditPopupOpen(false);
  };

  const handlePasswordChangeSuccess = () => {
    setIsChangePasswordOpen(false);
  };

  const handleOrderStatusUpdated = (updatedOrderId, newStatus) => {
    setUserOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === updatedOrderId ? { ...order, status: newStatus } : order
      )
    );
    setSelectedSection('service-order');
  };

  const handleDriveTestStatusUpdated = (updatedTestDriveId, newStatus) => {
    setUserDriveTests((prevTestDrives) =>
      prevTestDrives.map((testDrive) =>
        testDrive.id === updatedTestDriveId
          ? { ...testDrive, status: newStatus }
          : testDrive
      )
    );
    setSelectedSection('test-drive');
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'account':
        return (
          <>
            <AccountDetails userData={userData} />

            {isEditPopupOpen && (
              <EditProfilePopup
                userData={userData}
                accessToken={accessToken}
                onClose={handleClosePopup}
                onProfileUpdated={handleProfileUpdated}
              />
            )}
            <button
              onClick={() => setIsEditPopupOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Chỉnh sửa hồ sơ
            </button>

            <button
              onClick={() => setIsChangePasswordOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-32 py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Đổi mật khẩu
            </button>

            {isChangePasswordOpen && (
              <ChangePasswordPopup
                accessToken={accessToken}
                onClose={() => setIsChangePasswordOpen(false)}
                onSuccess={handlePasswordChangeSuccess}
              />
            )}
          </>
        );
      case 'service-order':
        return (
          <ServiceOrderDetails
            userOrders={userOrders}
            loading={loading}
            accessToken={accessToken}
            onOrderDeleted={handleOrderStatusUpdated}
          />
        );
      case 'test-drive':
        return (
          <DriveTestDetails
            userDriveTests={userDriveTests}
            loading={loading}
            accessToken={accessToken}
            onDriveTestStatusUpdated={handleDriveTestStatusUpdated}
          />
        );

      case 'exit':
        navigate('/');
        return null;

      default:
        return null;
    }
  };

  return (
    <>
      <section className="bg-white min-h-screen mt-[94px]">
        <div className="container mx-auto py-12 px-4 md:px-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 bg-gray-100 rounded-lg md:rounded-l-lg md:rounded-r-none shadow-md ">
              <div className="flex text-center justify-center items-center mb-8 bg-primaryColor py-4 rounded-lg rounded-b-none md:rounded-t-lg md:rounded-r-none">
                <span className="text-lg font-semibold text-white">
                  {userData.fullName}
                </span>
              </div>
              <ul className="px-6 pb-6">
                <li className="mb-2">
                  <button
                    onClick={() => setSelectedSection('account')}
                    className={`flex items-center py-2 px-4 w-full text-gray-700 hover:bg-primaryColor hover:text-white rounded-lg transition duration-300 ${
                      selectedSection === 'account'
                        ? 'bg-red-500 text-white'
                        : ''
                    }`}
                  >
                    <FaRegCircleUser className="mr-2" />
                    Tài Khoản
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={() => setSelectedSection('service-order')}
                    className={`flex items-center py-2 px-4 w-full text-gray-700 hover:bg-primaryColor hover:text-white rounded-lg transition duration-300 ${
                      selectedSection === 'service-order'
                        ? 'bg-red-500 text-white'
                        : ''
                    }`}
                  >
                    <IoDocumentTextOutline className="mr-2" />
                    Dịch vụ
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={() => setSelectedSection('test-drive')}
                    className={`flex items-center py-2 px-4 w-full text-gray-700 hover:bg-primaryColor hover:text-white rounded-lg transition duration-300 ${
                      selectedSection === 'test-drive'
                        ? 'bg-red-500 text-white'
                        : ''
                    }`}
                  >
                    <PiSteeringWheelFill className="mr-2" />
                    Đăng kí lái thử
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedSection('exit')}
                    className={`flex items-center py-2 px-4 w-full text-gray-700 hover:bg-primaryColor hover:text-white rounded-lg transition duration-300 ${
                      selectedSection === 'exit' ? 'bg-red-500 text-white' : ''
                    }`}
                  >
                    <IoMdExit className="mr-2" />
                    Về trang chủ
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:w-3/4 bg-gray-100 rounded-lg md:rounded-r-lg md:rounded-l-none shadow-md p-8 md:ml-4 mt-4 md:mt-0">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
