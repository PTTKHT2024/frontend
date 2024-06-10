import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    licensePlate: '',
    date: '',
    serviceSupport: 'Chọn',
    place: 'Chọn',
    agent: 'Chọn',
    timeSlot: 'Chọn khung giờ',
  });

  const [inputFilters, setInputFilters] = useState({
    serviceSupport: '',
    place: '',
    agent: '',
    timeSlot: '',
  });

  const [dropdowns, setDropdowns] = useState({
    serviceSupport: false,
    place: false,
    agent: false,
    timeSlot: false,
  });

  const [checkboxes, setCheckboxes] = useState({
    agreement1: false,
    agreement2: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  const optionServices = ['Bảo hành', 'Bảo dưỡng', 'Kiểm tra'];
  const optionPlaces= [
    "Hồ Chí Minh",
    "Hà Nội",
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên - Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Nha Trang",
    "Yên Bái"
  ];
  const optionAgents = ['Đại lý 1', 'Đại lý 2', 'Đại lý 3', 'Đại lý 4', 'Đại lý 5'];

  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    if (selectedDate) {
      const timeSlots = [
        '08:00 - 09:00',
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00'
      ];
      setAvailableTimeSlots(timeSlots);
    }
  }, [selectedDate]);

  useEffect(() => {
    const isValid =
      formData.name.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.licensePlate.trim() !== '' &&
      formData.date.trim() !== '' &&
      formData.timeSlot !== 'Chọn khung giờ' &&
      formData.serviceSupport !== 'Chọn' &&
      formData.place !== 'Chọn' &&
      formData.agent !== 'Chọn' &&
      checkboxes.agreement1 &&
      checkboxes.agreement2;

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

  const renderDropdown = (type, options) => (
    <>
      <div className="relative border-b border-[#ccc] pb-2 cursor-pointer">
        <div className="flex justify-between" onClick={() => toggleDropdown(type)}>
          <p className={formData[type] === 'Chọn' || formData[type] === 'Chọn khung giờ' ? 'text-gray-400' : ''}>
            {formData[type]}
          </p>
          <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
        </div>
        {dropdowns[type] && (
          <ul className="py-1.5 border border-[#aaa] absolute right-0 left-0 border-t-0 bg-white z-10">
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
                  className={`text-base text-[#212529] p-1.5 hover:bg-[#5897FB] hover:text-white ${option === formData[type] ? 'bg-[#5897FB] text-white' : ''}`}
                >
                  {option}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );

  return (
    <div className="mx-[40px] mt-[94px] pt-[60px] bg-[url('./imgs/appointment-background.png')] bg-no-repeat bg-top bg-center bg-fixed bg-cover min-h-screen">
      <form className="h-[1300px] w-[1000px] bg-[#fff] p-[120px] left-0">
        <div className="block mb-[32px]">
          <h1 className="font-bold text-4xl text-[#1a1a1a] leading-[120%]">ĐẶT LỊCH HẸN DỊCH VỤ</h1>
        </div>
        
        {/* dịch vụ */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Dịch vụ <span className="text-primaryColor">*</span>
            </label>
          </div>
          {renderDropdown('serviceSupport', optionServices)}
        </div>

        {/* Biển số xe */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="licensePlate">
              Biển số xe <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2">
            <input
              placeholder="VD: 59D1-05494"
              type="text"
              className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
              value={formData.licensePlate}
              name="licensePlate"
              id="licensePlate"
              onChange={handleInputChange}
            />
          </div>
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

        {/* Số điện thoại */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="phone">
              Số điện thoại <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2">
            <input
              placeholder="VD: 0325428387"
              type="text"
              className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
              value={formData.phone}
              name="phone"
              id="phone"
              onChange={handleInputChange}
            />
          </div>
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
              <img src="./imgs/calendar.png" className="right-0 w-6 h-6 z-10"/>
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

        {/* Điều khoản */}
        <div className="flex mb-2 mt-[68px]">
          <input
            type="checkbox"
            className="h-5 w-5 mr-2 accent-[#EB0A1E]"
            checked={checkboxes.agreement1}
            name="agreement1"
            id="agreement1"
            onChange={handleCheckboxChange}
          />
          <label
            className="line-clamp-1 text-base text-[#212529]"
            htmlFor="agreement1"
          >
            Tôi xác nhận rằng các đại lý Toyota có thể gửi cho tôi thêm
            thông tin về các sản phẩm hoặc dịch vụ của Toyota.
          </label>
        </div>
        <div className="flex mb-2">
          <input
            type="checkbox"
            className="h-5 w-5 mr-2 accent-[#EB0A1E]"
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
            className={`${isFormValid ? 'opacity-100' : 'opacity-55'} bg-primaryColor text-lg uppercase px-[44px] py-[15px] border-[#ccc] border font-bold tracking-widest mt-[30px] text-[#fff]`}
            onClick={handleSubmit}
          >
            Xác nhận đặt lịch hẹn
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
