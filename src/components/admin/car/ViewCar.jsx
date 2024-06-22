import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCarById } from '../../utils/CarApi';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const ViewCar = () => {
  const [currentTab, setCurrentTab] = useState('THÔNG TIN CHUNG');
  const tabs = [
    'THÔNG TIN CHUNG',
    'ĐỘNG CƠ & KHUNG XE',
    'TIỆN NGHI',
    'KHUYẾN MÃI',
  ];
  const params = useParams();
  const [car, setCar] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await getCarById(params.id);
        if (res.status === 200) {
          setCar(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching car:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCar();
  }, []);

  const handleChangeTab = (e) => {
    const tab = e.target.dataset.tab;
    setCurrentTab(tab);
  };

  console.log(car);
  console.log(params.id);
  return (
    <section className="container">
      <Link
        className="fixed top-[100px] left-[90px] block h-max p-2 bg-[#f5f5f5] shadow hover:bg-slate-600 hover:text-white rounded-lg"
        to="/admin/car"
      >
        <FaLongArrowAltLeft className="h-5 w-5" />
      </Link>
      <div>
        <div className="flex justify-between">
          <p className="text-mainTitleColor text-mainTitle uppercase">
            {isLoading ? (
              <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
            ) : (
              car.name
            )}
          </p>

          <Link
            to={'/admin/car/edit'}
            type="submit"
            className="uppercase px-5 py-2 flex items-center rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            cập nhập
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-3 bg-white rounded-2xl shadow-md overflow-hidden h-max">
          <ul className="w-full text-center uppercase">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`w-full py-3 border-b-[1px] border-[#ccc] block cursor-pointer font-semibold ${
                  currentTab == tab
                    ? 'bg-[#56BACC] text-white'
                    : 'hover:bg-[#f5f5f5] text-mainTitleColor'
                }`}
                data-tab={tab}
                onClick={handleChangeTab}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-9 bg-white p-5 rounded-2xl shadow-md">
          <p className="text-mainTitleColor font-semibold text-[18px]">
            {currentTab}
          </p>
          <hr />

          <div className="mt-5">
            {currentTab == 'THÔNG TIN CHUNG' && (
              <>
                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Số chỗ
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Số chỗ ngồi
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.number_of_seats}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Kiểu dáng
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Kiểu dáng
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.carCategory.name}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Nhiên liệu
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Nhiên liệu
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.fuel}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Xuất xứ
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Xuất xứ
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.origin}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-5">
            {currentTab == 'ĐỘNG CƠ & KHUNG XE' && (
              <>
                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Kích thước
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Kích thước tổng thể (D x R x C) (mm x mm x mm)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.dimensions}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Chiều dài cơ sở (mm)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.base_length}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Chiều rộng cơ sở trước (mm)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.base_front_width}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Chiều rộng cơ sở sau (mm)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.base_back_width}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Khoảng sáng gầm xe (mm)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.light_undercarriage}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Bán kính vòng quay tối thiểu (m)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.minimum_rev_radius}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Dung tích bình nhiên liệu (L)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.fuel_capacity}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Động cơ thường
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Loại động cơ
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.engine_type}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Số xy lanh
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.number_of_xylanh}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Bố trí xy lanh
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.xylanh_layout}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Dung tích xy lanh (cc)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.xylanh_capacity}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Hệ thống phun nhiên liệu
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.fuel_system}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Loại nhiên liệu
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.fuel_category}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Công suất tối đa ((KW) HP/vòng/phút)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.power}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Mô men xoắn tối đa (Nm/vòng/phút)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.momen}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Hệ thống truyền động
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Hệ thống truyền động
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.driver_type}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Hộp số
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Hộp số
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.gearbox}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Hệ thống treo
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Trước
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.front_hang_system}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Sau
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.back_hang_system}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Hệ thống lái
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Trợ lực tay lái
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.drive_system}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Vành & lốp xe
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Loại vành
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.rim}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Kích thước lốp
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.tire_size}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Lốp dự phòng
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.tire_backup}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Tiêu chuẩn khí thải
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Tiêu chuẩn khí thải
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.emissions}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Phanh
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Trước
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.front_brake}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Sau
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.back_brake}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Tiêu thụ nhiên liệu (L/100km)
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Ngoài đô thị
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.fuel_consumption}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Kết hợp
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.combine_fuel_consumption}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Trong đô thị
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.urban_fuel_consumption}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Trọng lượng
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Trọng lượng không tải
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.weight}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Trọng lượng tải tối đa
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.weight_load}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-5">
            {currentTab == 'TIỆN NGHI' && (
              <>
                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Cụm đèn
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Đèn chiếu gần
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.near_lamp}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Đèn chiếu xa
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.far_lamp}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Hệ thống nhắc nhở đèn sáng
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.remind_light_system}
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Đèn sương mù
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={car.specification.fog_light}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Khoang hành lý
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.luggage_capacity"
                    >
                      Khoang hành lý (L)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.luggage_capacity"
                        id="specification.luggage_capacity"
                        value={car.specification.luggage_capacity}
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-5">
            {currentTab == 'KHUYẾN MÃI' && (
              <>
                <div>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Khuyến mãi
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Chi tiết
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={
                          car.promotion
                            ? car.promotion.promotionDetails
                            : 'Chưa có'
                        }
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Số phần trăm giảm giá (%)
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="number"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={
                          car.promotion ? car.promotion.discountPercentage : 0
                        }
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Ngày bắt đầu
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={
                          car.promotion ? car.promotion.startDate : 'Chưa có'
                        }
                        disabled
                        required
                      />
                    )}
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Ngày kết thúc
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="text"
                        className="w-1/2 px-2 outline-0 disabled:bg-[#f5f5f5]"
                        name="specification.near_lamp"
                        id="specification.near_lamp"
                        value={
                          car.promotion ? car.promotion.endDate : 'Chưa có'
                        }
                        disabled
                        required
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewCar;
