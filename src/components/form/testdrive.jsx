import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getAllAgencies } from '../utils/AgencyApi';
import { getCarList } from '../utils/CarApi';
import { fileURL } from '../utils/UtilsFunction';
import { submitForm } from '../utils/FormApi';

const Testdrive = () => {
  const [formData, setFormData] = useState({
    name_customer: '',
    phone_customer: '',
    name_car: 'Chọn',
    city_agency: 'Chọn',
    name_agency: 'Chọn',
    scheduledDate: '',
  });

  const [inputFilters, setInputFilters] = useState({
    name_car: '',
    city_agency: '',
    name_agency: '',
  });

  const [dropdowns, setDropdowns] = useState({
    name_car: false,
    city_agency: false,
    name_agency: false,
  });

  const [checkboxes, setCheckboxes] = useState({
    agreement1: false,
    agreement2: false,
    agreement3: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await getCarList();
        if (res.status === 200) {
          setCars(res.data.data.result);
          console.log(cars);
        } else {
          console.error('Failed to fetch car data.');
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCars();
  }, []);

  const [agencies, setAgencies] = useState([]);
  const [optionCities, setOptionCities] = useState([]);
  const [optionAgencies, setOptionAgencies] = useState([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const res = await getAllAgencies();
        const fetchedAgencies = res.data.data.result;
        setAgencies(fetchedAgencies);
        console.log(agencies);
        // Extract unique cities from agencies
        const cities = [
          ...new Set(fetchedAgencies.map((agency) => agency.city)),
        ];
        setOptionCities(cities);
      } catch (error) {
        console.log('Không lấy được dữ liệu đại lý');
      }
    };
    fetchAgencies();
  }, []);

  useEffect(() => {
    // Filter agencies based on selected city_agency
    if (formData.city_agency !== 'Chọn') {
      const filteredAgencies = agencies
        .filter((agency) => agency.city === formData.city_agency)
        .map((agency) => agency.name_agency);
      setOptionAgencies(filteredAgencies);
    } else {
      setOptionAgencies([]);
    }
  }, [formData.city_agency, agencies]);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const isValid =
      formData.name_customer.trim() !== '' &&
      formData.scheduledDate.trim() !== '' &&
      formData.name_car !== 'Chọn' &&
      formData.city_agency !== 'Chọn' &&
      formData.name_agency !== 'Chọn' &&
      checkboxes.agreement1 &&
      checkboxes.agreement2 &&
      checkboxes.agreement3;

    setIsFormValid(isValid);
  }, [formData, checkboxes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'scheduledDate') {
      setSelectedDate(value);
    }
  };

  const handleFilterChange = (type, value) => {
    setInputFilters((prev) => ({ ...prev, [type]: value }));
  };

  const toggleDropdown = (type) => {
    setDropdowns((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleDropdownSelect = (type, value) => {
    setFormData((prev) => ({ ...prev, [type]: value }));
    setDropdowns((prev) => ({ ...prev, [type]: false }));
    setInputFilters((prev) => ({ ...prev, [type]: '' }));

    if (type === 'name_car') {
      // Thực hiện tìm kiếm xe dựa trên tên xe
      if (cars && cars.length > 0) {
        // Lặp qua danh sách các xe
        let foundCar = null;
        for (let car of cars) {
          if (car.name === value) {
            foundCar = car;
            break;
          }
        }
        // Nếu tìm thấy xe thì cập nhật vào state
        setSelectedCar(foundCar);
      }
    }
  };

  const handleDateClick = () => {
    const dateInput = document.getElementById('scheduledDate');
    dateInput.showPicker(); // Dùng cho trình duyệt hỗ trợ, nếu không thì dateInput.click()
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;
    console.log(formData)
    try {
      const response = await submitForm(
        'test-drive-registrations',
        formData,
        accessToken
      );
      console.log('Test drive registration created:', response);
    } catch (err) {
      console.error('Failed to create test drive registration:', err.message);
    }
  };

  const dropdownRefs = useRef({});
  useEffect(() => {
    const handleClickOutside = (event) => {
      for (let key in dropdownRefs.current) {
        if (
          dropdownRefs.current[key] &&
          !dropdownRefs.current[key].contains(event.target)
        ) {
          setDropdowns((prev) => ({ ...prev, [key]: false }));
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderDropdown = (type, options) => (
    <>
      <div
        className="relative border-b border-[#ccc] pb-2 cursor-pointer"
        ref={(el) => (dropdownRefs.current[type] = el)}
      >
        <div
          className="flex justify-between"
          onClick={() => toggleDropdown(type)}
        >
          <p
            className={
              formData[type] === 'Chọn' || formData[type] === 'Chọn khung giờ'
                ? 'text-gray-400'
                : ''
            }
          >
            {formData[type]}
          </p>
          <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
        </div>
        {dropdowns[type] && (
          <ul className="py-1.5 border border-[#aaa] absolute right-0 left-0 border-t-0 bg-white z-10 max-h-64 overflow-y-auto">
            <li className="p-1.5">
              <input
                type="text"
                className="w-full border p-1.5 outline-0 border-[#aaa]"
                value={inputFilters[type]}
                onChange={(e) => handleFilterChange(type, e.target.value)}
                placeholder="Tìm kiếm..."
              />
            </li>
            {options
              .filter((option) =>
                option.toLowerCase().includes(inputFilters[type].toLowerCase())
              )
              .map((option, index) => (
                <li
                  onClick={() => handleDropdownSelect(type, option)}
                  key={index}
                  className={`text-base text-[#212529] p-1.5 hover:bg-[#5897FB] hover:text-white ${
                    option === formData[type] ? 'bg-[#5897FB] text-white' : ''
                  }`}
                >
                  {option}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const renderDropdownCar = () => {
    return (
      <div
        className="relative border-b border-[#ccc] pb-2 cursor-pointer"
        ref={(el) => (dropdownRefs.current['name_car'] = el)}
      >
        <div
          className="flex justify-between"
          onClick={() => toggleDropdown('name_car')}
        >
          <p className={formData['name_car'] === 'Chọn' ? 'text-gray-400' : ''}>
            {formData['name_car']}
          </p>
          <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
        </div>
        {dropdowns['name_car'] && (
          <ul className="py-1.5 border border-[#aaa] absolute right-0 left-0 border-t-0 bg-white z-10 max-h-64 overflow-y-auto">
            <li className="p-1.5">
              <input
                type="text"
                className="w-full border p-1.5 outline-0 border-[#aaa]"
                value={inputFilters['name_car']}
                onChange={(e) => handleFilterChange('name_car', e.target.value)}
                placeholder="Tìm kiếm..."
              />
            </li>
            {cars
              // Filter cars based on the car model name matching the search input
              .filter((car) =>
                car.carModel.name.includes(inputFilters['name_car'])
              )
              // Map through the filtered cars, grouping them by car model
              .reduce((acc, car) => {
                // Check if the car model already exists in the accumulator
                const existingCarModel = acc.find(
                  (item) =>
                    item.carModel.name.toUpperCase().trim() ===
                    car.carModel.name.toUpperCase().trim()
                );
                // If it exists, add the car to its existing group
                if (existingCarModel) {
                  existingCarModel.cars.push(car);
                } else {
                  // If it doesn't exist, create a new group for this car model
                  acc.push({
                    carModel: car.carModel,
                    cars: [car],
                  });
                }
                return acc;
              }, [])
              // Map through the grouped cars to display them
              .map((carModelGroup, carModelIndex) => (
                <li key={carModelIndex} className="text-base text-[#212529]">
                  <strong className="uppercase cursor-default block p-[6px]">
                    {carModelGroup.carModel.name}
                  </strong>
                  <ul className="list-none m-0">
                    {carModelGroup.cars.map((car, carIndex) => (
                      <li
                        onClick={() =>
                          handleDropdownSelect('name_car', car.name)
                        }
                        key={carIndex}
                        className={`pl-[18px] text-base text-[#212529] p-1.5 hover:bg-[#5897FB] hover:text-white ${
                          car.name === formData['name_car']
                            ? 'bg-[#5897FB] text-white'
                            : ''
                        }`}
                      >
                        {car.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="mx-[40px] mt-[94px] pt-[60px] bg-[url('./imgs/appointment-background.png')] bg-no-repeat bg-top bg-center bg-fixed bg-cover min-h-screen">
      <form className="h-[1300px] w-[1000px] bg-[#fff] p-[120px] left-0">
        <div className="block mb-[32px]">
          <h1 className="uppercase font-bold text-4xl text-[#1a1a1a] leading-[120%]">
            Đăng kí lái thử
          </h1>
        </div>

        {/* Họ và tên */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="name_customer">
              Họ và tên <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2">
            <input
              placeholder="VD: Nguyễn Văn A"
              type="text"
              className="text-gray-400 w-full h-full outline-0"
              value={formData.name_customer}
              name="name_customer"
              id="name_customer"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Số điện thoại */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="phone_customer">
              Số điện thoại <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2">
            <input
              placeholder="0325428387"
              type="text"
              className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
              value={formData.phone_customer}
              name="phone_customer"
              id="phone_customer"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Tên xe */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Tên xe <span className="text-primaryColor">*</span>
            </label>
          </div>
          {renderDropdownCar()}
          {/*tên và hình ảnh xe */}
          {selectedCar && (
            <div className="mt-8 items-center mb-[32px] max-h-[250px] w-full">
              <div className="uppercase text-2xl font-bold">
                {selectedCar.name}
              </div>
              <img
                src={`${fileURL}/${selectedCar.image}`}
                alt={selectedCar.name}
                className="w-[480px] h-[200px] object-contain"
              />
            </div>
          )}
        </div>

        {/* Tỉnh/Thành phố */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Tỉnh/Thành phố <span className="text-primaryColor">*</span>
            </label>
          </div>
          {renderDropdown('city_agency', optionCities)}
        </div>

        {/* Đại lý */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Đại lý <span className="text-primaryColor">*</span>
            </label>
          </div>
          {renderDropdown('name_agency', optionAgencies)}
        </div>

        {/* Ngày hẹn */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="scheduledDate">
              Chọn ngày <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2 relative">
            <input
              type="date"
              id="scheduledDate"
              name="scheduledDate"
              className="outline-0 w-full h-full text-gray-400 text-mainTitleColor appearance-none"
              value={formData.scheduledDate}
              onChange={handleInputChange}
              min={getCurrentDate()}
            />
            <div
              className="absolute inset-0 cursor-pointer flex items-center justify-end"
              onClick={handleDateClick}
            >
              <img src="./imgs/calendar.png" className="right-0 w-6 h-6" />
            </div>
          </div>
        </div>

        {/*Giấy phép lái xe*/}
        <div className="flex mb-2 mt-[68px]">
          <input
            type="checkbox"
            className="h-5 w-5 mr-2 accent-[#EB0A1E] cursor-pointer"
            checked={checkboxes.agreement3}
            name="agreement3"
            id="agreement3"
            onChange={handleCheckboxChange}
          />
          <label
            className="line-clamp-1 text-base text-[#212529]"
            htmlFor="agreement3"
          >
            Tôi đã có Giấy Phép Lái Xe hợp lệ
          </label>
        </div>
        {/* Điều khoản */}
        <div className="flex mb-2">
          <input
            type="checkbox"
            className="h-5 w-5 mr-2 accent-[#EB0A1E] cursor-pointer"
            checked={checkboxes.agreement1}
            name="agreement1"
            id="agreement1"
            onChange={handleCheckboxChange}
          />
          <label
            className="line-clamp-1 text-base text-[#212529]"
            htmlFor="agreement1"
          >
            Tôi xác nhận rằng các đại lý Toyota có thể gửi cho tôi thêm thông
            tin về các sản phẩm hoặc dịch vụ của Toyota.
          </label>
        </div>
        <div className="flex mb-2">
          <input
            type="checkbox"
            className="h-5 w-5 mr-2 accent-[#EB0A1E] cursor-pointer"
            checked={checkboxes.agreement2}
            name="agreement2"
            id="agreement2"
            onChange={handleCheckboxChange}
          />
          <label
            className="line-clamp-1 text-base text-[#212529]"
            htmlFor="agreement2"
          >
            Tôi đã đọc và đồng ý với các{' '}
            <Link to={'/'} className="text-[#007bff]">
              quy định và chính sách
            </Link>{' '}
            của Toyota Việt Nam.
          </label>
        </div>

        {/* Submit */}
        <div className="flex justify-left mt-[32px]">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`${
              isFormValid ? 'opacity_agency-100' : 'opacity_agency-55'
            } bg-primaryColor text-lg uppercase px-[44px] py-[15px] border-[#ccc] border font-bold tracking-widest mt-[30px] text-[#fff]`}
            onClick={handleSubmit}
          >
            Xác nhận đặt lịch hẹn
          </button>
        </div>
      </form>
    </div>
  );
};

export default Testdrive;
