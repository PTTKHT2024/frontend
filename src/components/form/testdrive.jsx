import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Testdrive = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    carName: 'Chọn',
    place: 'Chọn',
    agent: 'Chọn',
    timeSlot: 'Chọn khung giờ',
  });

  const [inputFilters, setInputFilters] = useState({
    carName: '',
    place: '',
    agent: '',
    timeSlot: '',
  });

  const [dropdowns, setDropdowns] = useState({
    carName: false,
    place: false,
    agent: false,
    timeSlot: false,
  });

  const [checkboxes, setCheckboxes] = useState({
    agreement1: false,
    agreement2: false,
    agreement3: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  const CarNames = [
    {
      carTypeName: 'Vios',
      cars: [
        {
          carTypeImage:
            'https://www.toyota.com.vn//Resources/Images/EDBF83A9C97849C00B8A6B900CE213A5.png',
          carName: 'vios 1.5E ',
        },
        {
          carTypeImage:
            'https://www.toyota.com.vn//Resources/Images/EDBF83A9C97849C00B8A6B900CE213A5.png',
          carName: 'vios 1.6H ',
        },
        {
          carTypeImage:
            'https://www.toyota.com.vn//Resources/Images/EDBF83A9C97849C00B8A6B900CE213A5.png',
          carName: 'vios 1.8V ',
        },
      ],
    },
  ];
  const optionPlaces = [
    'Hồ Chí Minh',
    'Hà Nội',
    'An Giang',
    'Bà Rịa - Vũng Tàu',
    'Bắc Giang',
    'Bắc Kạn',
    'Bạc Liêu',
    'Bắc Ninh',
    'Bến Tre',
    'Bình Định',
    'Bình Dương',
    'Bình Phước',
    'Bình Thuận',
    'Cà Mau',
    'Cần Thơ',
    'Cao Bằng',
    'Đà Nẵng',
    'Đắk Lắk',
    'Đắk Nông',
    'Điện Biên',
    'Đồng Nai',
    'Đồng Tháp',
    'Gia Lai',
    'Hà Giang',
    'Hà Nam',
    'Hà Tĩnh',
    'Hải Dương',
    'Hải Phòng',
    'Hậu Giang',
    'Hòa Bình',
    'Hưng Yên',
    'Khánh Hòa',
    'Kiên Giang',
    'Kon Tum',
    'Lai Châu',
    'Lâm Đồng',
    'Lạng Sơn',
    'Lào Cai',
    'Long An',
    'Nam Định',
    'Nghệ An',
    'Ninh Bình',
    'Ninh Thuận',
    'Phú Thọ',
    'Phú Yên',
    'Quảng Bình',
    'Quảng Nam',
    'Quảng Ngãi',
    'Quảng Ninh',
    'Quảng Trị',
    'Sóc Trăng',
    'Sơn La',
    'Tây Ninh',
    'Thái Bình',
    'Thái Nguyên',
    'Thanh Hóa',
    'Thừa Thiên - Huế',
    'Tiền Giang',
    'Trà Vinh',
    'Tuyên Quang',
    'Vĩnh Long',
    'Vĩnh Phúc',
    'Nha Trang',
    'Yên Bái',
  ];
  const optionAgents = [
    'Đại lý 1',
    'Đại lý 2',
    'Đại lý 3',
    'Đại lý 4',
    'Đại lý 5',
  ];

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      const timeSlots = [
        '08:00 - 09:00',
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00',
      ];
      setAvailableTimeSlots(timeSlots);
    }
  }, [selectedDate]);

  useEffect(() => {
    const isValid =
      formData.name.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.date.trim() !== '' &&
      formData.timeSlot !== 'Chọn khung giờ' &&
      formData.carName !== 'Chọn' &&
      formData.place !== 'Chọn' &&
      formData.agent !== 'Chọn' &&
      checkboxes.agreement1 &&
      checkboxes.agreement2 &&
      checkboxes.agreement3;

    setIsFormValid(isValid);
  }, [formData, checkboxes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'date') {
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
    if (type === 'carName') {
      let foundCar = null;
      CarNames.forEach((carType) => {
        const car = carType.cars.find((c) => c.carName === value);
        if (car) {
          foundCar = { ...carType, ...car }; // Merge carType info with car info
        }
      });
      setSelectedCar(foundCar);
    }
  };

  const handleDateClick = () => {
    const dateInput = document.getElementById('date');
    dateInput.showPicker(); // Dùng cho trình duyệt hỗ trợ, nếu không thì dateInput.click()
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Form submitted:', { ...formData, ...checkboxes });
    } else {
      console.log('Form is not valid.');
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

  {
    /*Dropdown car */
  }
  const renderDropdownCar = () => {
    return (
      <div
        className="relative border-b border-[#ccc] pb-2 cursor-pointer"
        ref={(el) => (dropdownRefs.current['carName'] = el)}
      >
        <div
          className="flex justify-between"
          onClick={() => toggleDropdown('carName')}
        >
          <p className={formData['carName'] === 'Chọn' ? 'text-gray-400' : ''}>
            {formData['carName']}
          </p>
          <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
        </div>
        {dropdowns['carName'] && (
          <ul className="py-1.5 border border-[#aaa] absolute right-0 left-0 border-t-0 bg-white z-10 max-h-64 overflow-y-auto">
            <li className="p-1.5">
              <input
                type="text"
                className="w-full border p-1.5 outline-0 border-[#aaa]"
                value={inputFilters['carName']}
                onChange={(e) => handleFilterChange('carName', e.target.value)}
                placeholder="Tìm kiếm..."
              />
            </li>
            {CarNames.filter((carType) =>
              carType.carTypeName
                .toLowerCase()
                .includes(inputFilters['carName'].toLowerCase())
            ).map((carType, index) => (
              <li key={index} className="text-base text-[#212529]">
                <strong className="uppercase cursor-default block p-[6px]">
                  {carType.carTypeName}
                </strong>
                <ul className="list-none m-0 ">
                  {carType.cars.map((car, index) => (
                    <li
                      onClick={() =>
                        handleDropdownSelect('carName', car.carName)
                      }
                      key={index}
                      className={`uppercase pl-[18px] text-base text-[#212529] p-1.5 hover:bg-[#5897FB] hover:text-white ${
                        car.carName === formData['carName']
                          ? 'bg-[#5897FB] text-white'
                          : ''
                      }`}
                    >
                      {car.carName}
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
            <label className="text-lg font-bold" htmlFor="name">
              Họ và tên <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2">
            <input
              placeholder="VD: Nguyễn Văn A"
              type="text"
              className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
              value={formData.name}
              name="name"
              id="name"
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
                {selectedCar.carName}
              </div>
              <img
                src={selectedCar.carTypeImage}
                alt={selectedCar.carTypeName}
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
          {renderDropdown('place', optionPlaces)}
        </div>

        {/* Đại lý */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Đại lý <span className="text-primaryColor">*</span>
            </label>
          </div>
          {renderDropdown('agent', optionAgents)}
        </div>

        {/* Ngày hẹn */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="date">
              Chọn ngày <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2 relative">
            <input
              type="date"
              id="date"
              name="date"
              className="outline-0 w-full h-full text-gray-400 text-mainTitleColor appearance-none"
              value={formData.date}
              onChange={handleInputChange}
            />
            <div
              className="absolute inset-0 cursor-pointer flex items-center justify-end"
              onClick={handleDateClick}
            >
              <img src="./imgs/calendar.png" className="right-0 w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Chọn khung giờ */}
        {selectedDate && (
          <div className="mb-8">
            <div className="mb-4">
              <label className="text-lg font-bold">
                Chọn giờ <span className="text-primaryColor">*</span>
              </label>
            </div>
            {renderDropdown('timeSlot', availableTimeSlots)}
          </div>
        )}

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
              isFormValid ? 'opacity-100' : 'opacity-55'
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
