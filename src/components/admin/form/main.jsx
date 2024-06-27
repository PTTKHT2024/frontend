import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTestDrives } from '../../utils/TestDriveApi';
import Paginator from '../../common/Paginator';
import Toast from '../../common/Toast';

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
  const [TestDriveCategory, setTestDriveCategory] = useState([
    'success',
    'fail',
    'delete',
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [TestDrivesPerPage, setTestDrivesPerPage] = useState(10);
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
      const filtered = TestDrives.filter((TestDrive) =>
        TestDriveCategory.includes(TestDrive.status)
      );
      setFilteredTestDrives(filtered);
    }
    setCurrentPage(1);
  }, [TestDriveCategory, TestDrives]);

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  const calculateTotalPages = (
    filteredTestDrives,
    TestDrivesPerPage,
    TestDrives
  ) => {
    const totalTestDrives =
      filteredTestDrives.length > 0
        ? filteredTestDrives.length
        : TestDrives.length;
    return Math.ceil(totalTestDrives / TestDrivesPerPage);
  };

  const indexOfLastTestDrive = currentPage * TestDrivesPerPage;
  const indexOfFirstTestDrive = indexOfLastTestDrive - TestDrivesPerPage;
  const currentTestDrives = filteredTestDrives.slice(
    indexOfFirstTestDrive,
    indexOfLastTestDrive
  );

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
            Quản lý form đăng ký lái thử (MAIN)
          </p>
        </div>
        <div className="mt-5 grid grid-cols-10 gap-5">
          <Link to={`/admin/testdrive/approved`}>
            <div className="bg-white col-span-2 p-5 h-max w-full shadow-md rounded-2xl hover:bg-[#17A2B8]/[.7] group cursor-pointer">
              <div className="flex items-center justify-evenly">
                <p className="text-sm uppercase font-medium group-hover:text-white">
                  APPROVED
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/admin/testdrive/pending`}>
            <div className="bg-white col-span-2 p-5 h-max w-full shadow-md rounded-2xl hover:bg-[#17A2B8]/[.7] group cursor-pointer">
              <div className="flex items-center justify-evenly">
                <p className="text-sm uppercase font-medium group-hover:text-white">
                  PENDING
                </p>
              </div>
            </div>
          </Link>
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
              </tr>
            </thead>
            {currentTestDrives.length > 0 && (
              <tbody className="bg-white divide-y divide-gray-200">
                {currentTestDrives.map((TestDrive) =>
                  TestDrive.status !== 'pending' &&
                  TestDrive.status !== 'approve' ? (
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
                          <p className="text-sm text-primaryColor font-medium">
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
                        ) : TestDrive.status === 'success' ? (
                          <p className="text-sm text-green-500 font-medium uppercase">
                            {TestDrive.status}
                          </p>
                        ) : TestDrive.status === 'fail' ? (
                          <p className="text-sm text-orange-500 font-medium uppercase">
                            {TestDrive.status}
                          </p>
                        ) : TestDrive.status === 'delete' ? (
                          <p className="text-sm text-red-500 font-medium uppercase">
                            {TestDrive.status}
                          </p>
                        ) : null}
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </section>
  );
};

export default TestDrive;
