import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Paginator from '../../common/Paginator';
import { deleteCar, getCarList } from '../../utils/CarApi';
import { createMarkup, fileURL } from '../../utils/UtilsFunction';
import { Tooltip } from 'react-tooltip';
import { FaRegEye, FaTrashAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import Toast from '../../common/Toast';

const CarManagement = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setcarsPerPage] = useState(20);
  const [filteredCars, setFilteredCars] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const fetchCars = async () => {
    setIsLoading(true);
    try {
      const res = await getCarList(1, 1000);
      const reversedCars = [...res.data.data.result].reverse();
      setCars(reversedCars);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleDeleteCar = async (id) => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    try {
      const res = await deleteCar(id, accessToken);
      if (res.status == 200) {
        fetchCars();
        setMessage('Xóa xe thành công');
        setStatus('success');
      }
    } catch (err) {
      setMessage('Xóa xe thất bại');
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

  const calculateTotalPages = (filteredCars, carsPerPage, cars) => {
    const totalcars =
      filteredCars.length > 0 ? filteredCars.length : cars.length;
    return Math.ceil(totalcars / carsPerPage);
  };

  const indexOfLastcar = currentPage * carsPerPage;
  const indexOfFirstcar = indexOfLastcar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstcar, indexOfLastcar);

  console.log(cars);

  return (
    <section className="">
      <Toast
        handleCloseToast={handleCloseToast}
        message={message}
        status={status}
      />

      <div className="container">
        <div className="flex justify-between">
          <p className="text-mainTitleColor text-mainTitle uppercase">
            Quản lý xe
          </p>

          <Link
            to={'/admin/car/add'}
            type="submit"
            className="uppercase px-5 py-2 flex items-center rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            thêm xe
          </Link>
        </div>
      </div>

      <div className="mt-5 bg-white rounded-2xl h-max py-5 shadow-md ml-[64px] mr-[8px]">
        <div className="flex items-center">
          <p className="text-mainTitleColor font-semibold text-[18px] px-5 mr-8">
            Chi tiết các xe hiện tại
          </p>
          <Paginator
            currentPage={currentPage}
            totalPages={calculateTotalPages(filteredCars, carsPerPage, cars)}
            onPageChange={setCurrentPage}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="divide-y divide-gray-200 mt-5 w-full">
            <thead className="bg-[#f5f5f5] w-full">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold whitespace-nowrap text-gray-500 uppercase tracking-wider">
                  Poster
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  ngang
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  nghiêng
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tên
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Giá (VNĐ)
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Số lượng
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Mẫu xe
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Dung tích
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Động cơ
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Thông số kĩ thuật
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày tạo
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Cập nhập
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentCars.map((car) => (
                <tr key={car.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="block h-5 w-5 animate-spin border-[3px] border-t-[#000]/[.7] rounded-full"></span>
                    ) : (
                      <>
                        <img
                          src={`${fileURL}/${car.poster}`}
                          alt=""
                          className="h-15 w-full object-cover"
                          data-tooltip-id={`car-poster-tooltip-${car.id}`}
                        />
                        <Tooltip
                          id={`car-poster-tooltip-${car.id}`}
                          place="top"
                        >
                          <img
                            src={`${fileURL}/${car.poster}`}
                            alt=""
                            className="w-[450px] object-cover object-center"
                          />
                        </Tooltip>
                      </>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="block h-5 w-5 animate-spin border-[3px] border-t-[#000]/[.7] rounded-full"></span>
                    ) : (
                      <>
                        <img
                          src={`${fileURL}/${car.image}`}
                          alt=""
                          className="h-15 w-full object-cover"
                          data-tooltip-id={`car-image-tooltip-${car.id}`}
                        />
                        <Tooltip id={`car-image-tooltip-${car.id}`} place="top">
                          <img
                            src={`${fileURL}/${car.image}`}
                            alt=""
                            className="w-[450px] object-cover object-center"
                          />
                        </Tooltip>
                      </>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="block h-5 w-5 animate-spin border-[3px] border-t-[#000]/[.7] rounded-full"></span>
                    ) : (
                      <>
                        <img
                          src={`${fileURL}/${car.hover_image}`}
                          alt=""
                          className="h-15 w-full object-cover"
                          data-tooltip-id={`car-hover-image-tooltip-${car.id}`}
                        />
                        <Tooltip
                          id={`car-hover-image-tooltip-${car.id}`}
                          place="top"
                        >
                          <img
                            src={`${fileURL}/${car.hover_image}`}
                            alt=""
                            className="w-[450px] object-cover object-center"
                          />
                        </Tooltip>
                      </>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">{car.name}</p>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">{car.price}</p>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">
                        {car.inventory.quantity}
                      </p>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm font-semibold text-primaryColor">
                        {car.carModel.name}
                      </p>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">{car.capacity}</p>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">{car.engine}</p>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <Link
                        to={`/admin/car/view/${car.id}`}
                        className="text-sm w-full text-[#007bff] underline underline-offset-2 cursor-pointer uppercase hover:bg-slate-100"
                      >
                        xem chi tiết
                      </Link>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {new Date(car.createdAt).toLocaleDateString('en-GB')}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {new Date(car.updatedAt).toLocaleDateString('en-GB')}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      className="text-orange-600 hover:text-orange-900 p-2 rounded-lg bg-orange-200 inline-block"
                      to={`/admin/car/edit/${car.id}`}
                    >
                      <BsPencilSquare className="h-5 w-5" />
                    </Link>
                    <span
                      className="text-red-600 hover:text-red-900 p-2 rounded-lg bg-red-200 inline-block"
                      onClick={() => handleDeleteCar(car.id)}
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

export default CarManagement;
