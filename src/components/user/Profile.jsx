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

            // Lấy service orders
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

            // Lấy drive tests
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
    // Thêm thông báo hoặc logic khác sau khi đổi mật khẩu thành công (nếu cần)
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
          <ServiceOrderDetails userOrders={userOrders} loading={loading} />
        );
      case 'test-drive':
        return (
          <DriveTestDetails userDriveTests={userDriveTests} loading={loading} />
        );

      case 'exit':
        navigate('/'); // Điều hướng về trang chủ
        return null; // Hoặc bạn có thể return một component loading trong khi chờ chuyển hướng

      default:
        return null;
    }
  };

  return (
    <>
      <section className="bg-white">
        <div className="mt-sectionMargin_1 mx-[100px] ">
          <div className="flex">
            <div className="w-64 bg-gray-200 rounded-l-lg h-screen p-6 ">
              <div className="flex items-center mb-8">
                <span className="text-lg font-medium text-gray-800">
                  {userData.fullName}
                </span>
              </div>
              <ul>
                <li>
                  <span
                    onClick={() => setSelectedSection('account')}
                    className={`hover:bg-red-500 hover:text-white flex items-center  py-2 px-4 block text-gray-700 font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer ${
                      selectedSection === 'account'
                        ? 'bg-red-500 text-white'
                        : ''
                    }`}
                  >
                    <FaRegCircleUser />
                    <i className="fas fa-user mr-2"></i> Tài Khoản
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => setSelectedSection('service-order')}
                    className={`hover:bg-red-500 hover:text-white flex items-center py-2 px-4 block text-gray-700 font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer ${
                      selectedSection === 'service-order'
                        ? 'bg-red-500 text-white'
                        : ''
                    }`}
                  >
                    <IoDocumentTextOutline />
                    <i className="fas fa-list mr-2"></i> Dịch vụ
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => setSelectedSection('test-drive')}
                    className={`hover:bg-red-500 hover:text-white flex items-center py-2 px-4 block text-gray-700 font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer ${
                      selectedSection === 'test-drive'
                        ? 'bg-red-500 text-white'
                        : ''
                    }`}
                  >
                    <PiSteeringWheelFill />
                    <i className="fas fa-history mr-2"></i> Đăng kí lái thử
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => setSelectedSection('exit')}
                    className={`hover:bg-red-500 hover:text-white flex items-center py-2 px-4 block text-gray-700 font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer ${
                      selectedSection === 'exit' ? 'bg-red-500 text-white' : ''
                    }`}
                  >
                    <IoMdExit />
                    <i className="fas fa-sign-out-alt mr-2"></i> Thoát
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex-1 p-8 rounded-r-lg bg-gray-100">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
