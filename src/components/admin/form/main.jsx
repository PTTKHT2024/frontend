import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  deleteTestDriveById,
  getAllTestDrives,
  createANewTestDrive,
} from '../../utils/TestDriveApi';
import { BsPencilSquare } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import Paginator from '../../common/Paginator';
import Toast from '../../common/Toast';
import { BsFillCheckSquareFill } from 'react-icons/bs';

const TestDrive = () => {
  const [TestDrives, setTestDrives] = useState([
    {
      id: '',
      user: {
        fullName: '',
        email: '',
        phone: '',
      },
      car: {
        name: '',
      },
      agency: {
        name_agency: '',
      },
      createdAt: '',
      status: '',
    },
  ]);
  const [filteredTestDrives, setFilteredTestDrives] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [TestDriveCategory, setTestDriveCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [TestDrivesPerPage, setTestDrivesPerPage] = useState(10);
  const [TestDriveGroup, setTestDriveGroup] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  

  const fetchTestDrives = async () => {
    setIsLoading(true);
    try {
      const res = await getAllTestDrives(1, 1000);
      const reversedTestDrives = [...res.data.data.result].reverse();
      setTestDrives(reversedTestDrives);
    } catch (error) {
      console.error('Error fetching TestDrives:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTestDrives();
  }, []);

  useEffect(() => {
    if (!TestDriveCategory) {
      setFilteredTestDrives(TestDrives);
    } else {
      const filtered = TestDrives.filter(
        (TestDrive) => TestDrive.TestDriveCategory.name === TestDriveCategory
      );
      setFilteredTestDrives(filtered);
    }
    setCurrentPage(1);
  }, [TestDriveCategory, TestDrives]);

  const handleChangeCategory = (e) => {
    const category = e.currentTarget.dataset.category;
    if (category == TestDriveCategory) {
      setTestDriveCategory('');
    } else {
      setTestDriveCategory(category);
    }
    console.log('TestDrive category', TestDriveCategory);
  };

  const handleDeleteTestDrive = async (id) => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    try {
      const res = await deleteTestDriveById(id, accessToken);
      if (res.status == 200) {
        fetchTestDrives();
        setMessage('Xóa form thành công');
        setStatus('success');
      }
    } catch (err) {
      setMessage('Xóa form thất bại');
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

  const calculateTotalPages = (filteredTestDrives, TestDrivesPerPage, TestDrives) => {
    const totalTestDrives =
      filteredTestDrives.length > 0 ? filteredTestDrives.length : TestDrives.length;
    return Math.ceil(totalTestDrives / TestDrivesPerPage);
  };

  const indexOfLastTestDrive = currentPage * TestDrivesPerPage;
  const indexOfFirstTestDrive = indexOfLastTestDrive - TestDrivesPerPage;
  const currentTestDrives = filteredTestDrives.slice(indexOfFirstTestDrive, indexOfLastTestDrive);

  const handleStatusChange = async (id) => {
    let testDrive = {
      id: '',
      status: 'success',
      name_customer: 'Quách Phú Thuận',
      phone_customer: '0886332809',
      name_car: 'COROLLA ALTIS 1.8G',
      city_agency: 'Hồ Chí Minh',
      name_agency: 'Toyota An Thành Fukushima',
      scheduledDate: '2024-12-16',
    };

    try {
      const dataJSON = localStorage.getItem('data');
      if (!dataJSON) throw new Error('No data found in localStorage');

      const { access_token } = JSON.parse(dataJSON);
      if (!access_token) throw new Error('No access token found');

      const res = await createANewTestDrive(testDrive, access_token);

      setTestDrives((prevTestDrives) =>
        prevTestDrives.map((drive) =>
          drive.id === id && drive.status === 'pending'
            ? { ...drive, status: 'success' }
            : drive
        )
      );
    } catch (err) {
      console.error('Error updating test drive status:', err.message);
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
          <p className="text-mainTitleColor text-mainTitle uppercase">
            Quản lý form đăng ký lái thử
          </p>
        </div>

        <div className="mt-5 grid grid-cols-10 gap-5">
          {TestDriveGroup.map((TestDrive, index) => (
            <div
              className={`col-span-2 p-5 h-max w-full shadow-md rounded-2xl hover:bg-[#17A2B8]/[.7] group cursor-pointer ${
                TestDriveCategory == TestDrive.name
                  ? 'bg-[#17A2B8]/[.7]'
                  : 'bg-white'
              }`}
              key={TestDrive.id}
              data-category={TestDrive.name}
              onClick={handleChangeCategory}
            >
              <div className="flex items-center justify-evenly">
                <p
                  className={`text-sm uppercase font-medium group-hover:text-white ${
                    TestDriveCategory == TestDrive.name
                      ? 'text-white'
                      : 'text-mainTitleColor'
                  }`}
                >
                  {TestDrive.name}
                </p>
                {isLoading ? (
                  <span className="block h-5 w-5 animate-spin border-[3px] border-t-[#000]/[.7] rounded-full"></span>
                ) : (
                  <p className="text-3xl text-primaryColor font-medium">
                    {TestDrive.count}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 bg-white rounded-2xl h-max py-5 shadow-md ml-[64px] mr-[8px]">
        <div className="flex items-center justify-center">
          <Paginator
            currentPage={currentPage}
            totalPages={calculateTotalPages(
              filteredTestDrives,
              TestDrivesPerPage,
              TestDrives
            )}
            onPageChange={setCurrentPage}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="divide-y divide-gray-200 mt-5 w-full">
            <thead className="bg-[#f5f5f5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold whitespace-nowrap text-gray-500 uppercase tracking-wider">
                  Họ và tên
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Số điện thoại
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Xe
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Đại lý
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày tạo
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className=" py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Thao
                </th>
                <th className=" py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentTestDrives.map((TestDrive) => (
                <tr key={TestDrive.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">
                        {TestDrive.user.fullName}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">
                        {TestDrive.user.phone}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">
                        {TestDrive.user.email}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">
                        {TestDrive.car.name}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">
                        {TestDrive.agency.name_agency}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {new Date(TestDrive.createdAt).toLocaleDateString(
                          'en-GB'
                        )}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">
                        {TestDrive.status}
                      </p>
                    )}
                  </td>
                  <td className="w-7 h-7 py-4 whitespace-nowrap text-sm font-medium">
                    {TestDrive.status === 'pending' && (
                      <span className="text-green-400 hover:text-green-800 p-2 rounded-lg bg-green-200 inline-block cursor-pointer">
                        <BsFillCheckSquareFill
                          className="h-5 w-5"
                          onClick={() => handleStatusChange(TestDrive.id)}
                        />
                      </span>
                    )}
                  </td>
                  <td className=" py-4 whitespace-nowrap text-sm font-medium">
                    <span
                      className="text-red-600 hover:text-red-900 p-2 rounded-lg bg-red-200 inline-block cursor-pointer"
                      onClick={() => handleDeleteTestDrive(TestDrive.id)}
                    >
                      <FaTrashAlt className="h-5 w-5" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TestDrive;
