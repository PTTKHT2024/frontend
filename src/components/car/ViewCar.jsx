import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fileURL } from '../utils/UtilsFunction';
import { getCarById } from '../utils/CarApi';
import { getCarList } from '../utils/CarApi';
import { formatPrice } from '../common/ItemListCar';


const ViewCar = () => {
  const params = useParams(); // Lấy ID từ URL
  const [carID, setCarID] = useState({});
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchCarById = async () => {
      try {
        const res = await getCarById(params.id);
        if (res.status === 200) {
          setCarID(res.data.data);
        }
        console.log(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (params.id) {
      fetchCarById();
    }
  }, []);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await getCarList();
        if (res.status === 200) {
          setCars(res.data.data.result);
        } else {
          setError('Failed to fetch car data.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const filterCarsById = cars
    .filter(car => car.carModel.name === `${carID.carModel.name}` && car.name !== carID.name);
  
    return (
    <div className="mt-[96px] w-full max-w-full">
      {/* Banner nền tối */}
      <div className="relative w-full h-[700px]">
        <img
          src={`${fileURL}/${carID.poster}`}
          alt=""
          className="w-full h-full"
        />
      </div>

      <div
        className={`w-full bg-[#eee] relative transition-all duration-500 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="w-[900px] max-w-full py-[52px] px-0 my-0 mx-auto ">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center">
              <Link to="/" className="text-[#1a1a1a] flex items-center">
                <img
                  className="max-w-[50px] mr-[10px]"
                  src="https://www.toyota.com.vn/media/bsnb203o/register-test-car.png"
                  alt="Đăng ký lái thử"
                />
                <span className="mt-2">Đăng ký lái thử</span>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link to="/" className="text-[#1a1a1a] flex items-center">
                <img
                  className="max-w-[50px] mr-[10px]"
                  src="https://www.toyota.com.vn/media/d4wib4en/du-toan-chi-phi-icon.png"
                  alt="Dự toán chi phí"
                />
                <span className="mt-2">Dự toán chi phí</span>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link to="/" className="text-[#1a1a1a] flex items-center">
                <img
                  className="max-w-[50px] mr-[10px]"
                  src="https://www.toyota.com.vn/media/fnfhpiaw/taicatalogue.png"
                  alt="Tải Catalogue"
                />
                <span className="mt-2">Tải Catalogue</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="flex w-[1200px] max-w-full my-[60px] mx-auto">
          <div className="basis-1/2 max-w-1/2">
            <div
              className="w-full h-full mt-10"
              style={{ boxShadow: '-15px 15px #eb0a1e' }}
            >
              <img
                src={`${fileURL}/${carID.image}`}
                alt="Gọn nhỏ lướt phố"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
          <div className="basis-1/2 max-w-1/2">
            <div className=" mt-10 pl-8 ">
              <h1 className="!mb-8 text-4xl font-bold leading-[44px] uppercase">
                {carID.name}{' '}
              </h1>
              <p className="!mb-8 text-base leading-tight">
                {' '}
                Mượt mà, Lướt êm phố thị
              </p>

              <div className="flex items-center">
                <Link
                  to="/thong-so-ky-thuat/?modelId=476&amp;gradeId=1651"
                  target="_blank"
                  className="flex items-center text-sm text-primaryColor font-semibold leading-[115%]"
                >
                  <span>XEM THÔNG SỐ</span>
                </Link>
                <span className="block w-[1px] h-[22px] my-0 mx-4 bg-[#ccc]"></span>
                <Link
                  to="/so-sanh-xe/?modelId1=476&amp;&amp;gradeId1=1651"
                  target="_blank"
                  className="flex items-center text-sm text-primaryColor font-semibold leading-[115%]"
                >
                  <span>SO SÁNH XE</span>
                </Link>
              </div>
            </div>
            <div className="mt-[38px] color-[#000] align-center">
              <div className="flex flex-wrap -mx-[15px]">
                <div className="basis-1/3 relative px-[15px] w-100% max-w-1/3">
                  <div className="relative after:content-[''] after:absolute after:w-[1px] after:top-[10px] after:h-[60px] after:right-0 after:bg-[#ccc] ">
                    <p className="text-base leading-[115%] text-center mb-[26px]">
                      Số chỗ ngồi
                    </p>
                    <p className="text-2xl text-center leading-[115%] relative tracking-[1px] font-semibold">
                      {carID.number_of_seats} chỗ
                    </p>
                  </div>
                </div>
                <div className="basis-1/3 relative px-[15px] w-100% max-w-1/3">
                  <div className="relative after:content-[''] after:absolute after:w-[1px] after:top-[10px] after:h-[60px] after:right-0 after:bg-[#ccc] ">
                    <p className="text-base leading-[115%] text-center mb-[26px]">
                      Kiểu dáng
                    </p>
                    <p className="text-2xl text-center leading-[115%] relative tracking-[1px] font-semibold">
                      {carID.carCategory.name}
                    </p>
                  </div>
                </div>
                <div className="basis-1/3 relative px-[15px] w-100% max-w-1/3">
                  <div className="relative">
                    <p className="text-base leading-[115%] text-center mb-[26px]">
                      Nhiên liệu
                    </p>
                    <p className="text-2xl text-center leading-[115%] relative tracking-[1px] font-semibold">
                      {carID.specification.fuel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[38px] color-[#000] align-center">
              <div className="flex flex-wrap -mx-[15px]">
                <div className="basis-5/12 max-w-5/12 relative px-[15px] w-full">
                  <div className="relative after:content-[''] after:absolute after:w-[1px] after:top-[10px] after:h-[60px] after:right-0 after:bg-[#ccc] ">
                    <p className="text-base leading-[115%] text-center mb-[26px]">
                      Xuất xứ
                    </p>
                    <p className="text-2xl text-center leading-[115%] relative tracking-[1px] font-semibold">
                      {carID.specification.origin}
                    </p>
                  </div>
                </div>
                <div className="basis-7/12 max-w-5/12 relative px-[15px] w-full">
                  <div className="relative after:content-[''] ">
                    <p className="text-base leading-[115%] text-center mb-[26px]">
                      Giá từ
                    </p>
                    <p className="text-2xl text-center leading-[115%] relative tracking-[1px] font-semibold">
                      {formatPrice(carID.price)}
                      <span className="absolute -top-[8px] text-[14px]">
                        VNĐ
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {filterCarsById.length > 0 && (
        <div className="bg-white w-full">
          <div className="py-20 px-0 w-[1200px] mx-auto my-0 max-w-full">
            <h2 className="text-4xl font-bold leading-tight text-[#1a1a1a] mb-[50px] uppercase">
              KHÁM PHÁ CÁC MẪU {carID.carModel.name}
            </h2>
            {filterCarsById.map((carfilter) => (
              <div key={carfilter.id} className="mb-[60px]">
                <div className="flex border-b-[1px] border-[#101010] justify-between pb-4 mb-9 items-end">
                  <h3 className="text-xl font-bold mb-0 leading-1.2">
                    {carfilter.name}
                  </h3>
                  <p className="m-0 relative">
                    <span className="text-lg font-bold mr-6 leading-[23px]">
                      {formatPrice(carfilter.price)}
                    </span>
                    <span className="text-[12px] -top-[6px] right-0 absolute leading-[17px]">
                      VNĐ
                    </span>
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap -mx-[15px]">
                    <div className="basis-1/3 max-w-1/3 relative w-full px-[15px]">
                      <Link to="innova-cross">
                        <img
                          className="w-full h-auto"
                          src={`${fileURL}/${carfilter.image}`}
                          alt="Innova Cross"
                        />
                      </Link>
                    </div>
                    <div className="basis-1/6 max-w-1/6 relative w-full px-[15px]">
                      <div className="relative after:content-[''] after:absolute after:w-[1px] after:top-[10px] after:h-[60px] after:right-0 after:bg-[#ccc]">
                        <p className="text-base mb-[26px] text-center leading-[115%]">
                          Số chỗ ngồi
                        </p>
                        <p className="text-2xl leading-[115%] text-center relative tracking-[1px]">
                          {carfilter.number_of_seats} chỗ
                        </p>
                      </div>
                    </div>
                    <div className="basis-1/6 max-w-1/6 relative w-full px-[15px]">
                      <div className="relative after:content-[''] after:absolute after:w-[1px] after:top-[10px] after:h-[60px] after:right-0 after:bg-[#ccc]">
                        <p className="text-base mb-[26px] text-center leading-[115%]">
                          Kiểu dáng
                        </p>
                        <p className="text-2xl leading-[115%] text-center relative tracking-[1px]">
                          {carfilter.carCategory.name}
                        </p>
                      </div>
                    </div>
                    <div className="basis-1/6 max-w-1/6 relative w-full px-[15px]">
                      <div className="relative">
                        <p className="text-base mb-[26px] text-center leading-[115%]">
                          Nhiên liệu
                        </p>
                        <p className="text-2xl leading-[115%] text-center relative tracking-[1px]">
                          {carfilter.specification.fuel}
                        </p>
                      </div>
                    </div>
                    <div className="basis-1/6 max-w-1/6 relative w-full px-[15px] flex flex-col space-y-2">
                      <div>
                        <Link
                          className="m-0 py-2 px-3 uppercase border-[1px] border-[#101010] text-[#000] text-center font-semibold text-[12px]"
                          to="/dang-ky-lai-thu?modelId=501&gradeId=1941"
                        >
                          ĐĂNG KÝ LÁI THỬ
                        </Link>
                        <Link
                          to="/thong-so-ky-thuat/?modelId=501&gradeId=1941"
                          target="_blank"
                          className="mt-[18px] text-primaryColor flex items-center cursor-pointer font-semibold text-[14px]"
                        >
                          XEM THÔNG SỐ
                          <svg
                            className="w-3 h-3 fill-current ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCar;
