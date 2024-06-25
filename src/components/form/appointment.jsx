import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getAllAgencies } from '../utils/AgencyApi';
import { submitForm } from '../utils/FormApi';
const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName_customer: '',
    phone_customer: '',
    number_plates: '',
    appointment_date: '',
    name_service: 'Chọn',
    city_agency: 'Chọn',
    name_agency: 'Chọn',
  });


  const [inputFilters, setInputFilters] = useState({
    name_service: '',
    city_agency: '',
    name_agency: '',
  });

  const [dropdowns, setDropdowns] = useState({
    name_service: false,
    city_agency: false,
    name_agency: false,
  });

  const [checkboxes, setCheckboxes] = useState({
    agreement1: false,
    agreement2: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const optionServices = ['Bảo trì', 'Bảo dưỡng', 'Kiểm tra'];

  const [agencies, setAgencies] = useState([]);
  const [optionCities, setOptionCities] = useState([]);
  const [optionAgencies, setOptionAgencies] = useState([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const res = await getAllAgencies();
        const fetchedAgencies = res.data.data.result;
        setAgencies(fetchedAgencies);
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
  // const agency = agencies.find((a) => a.name_agency === formData.name_agency);
  // const agencyId = agency ? agency.id : null;

  const [selectedDate, setSelectedDate] = useState('');
  useEffect(() => {
    if (formData.city_agency !== 'Chọn') {
      const filteredAgencies = agencies
        .filter((agency) => agency.city === formData.city_agency)
        .map((agency) => agency.name_agency);
      setOptionAgencies(filteredAgencies);
    } else {
      setOptionAgencies([]);
    }
  }, [formData.city_agency, agencies]);

  useEffect(() => {
    const isValid =
      formData.fullName_customer.trim() !== '' &&
      formData.phone_customer.trim() !== '' &&
      formData.number_plates.trim() !== '' &&
      formData.appointment_date.trim() !== '' &&
      formData.name_service !== 'Chọn' &&
      formData.city_agency !== 'Chọn' &&
      formData.name_agency !== 'Chọn' &&
      checkboxes.agreement1 &&
      checkboxes.agreement2;

    setIsFormValid(isValid);
  }, [formData, checkboxes]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'appointment_date') {
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
    const dateInput = document.getElementById('appointment_date');
    dateInput.showPicker(); // Dùng cho trình duyệt hỗ trợ, nếu không thì dateInput.click()
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataJSON = localStorage.getItem('data');
      const data = JSON.parse(dataJSON);
      const accessToken = data.access_token;
      const response = await submitForm(
        'service-orders',
        formData,
        accessToken
      );
      console.log('Service registration created:', response);
    } catch (err) {
      console.error('Failed to create service registration:', err.message);
    }
  };

  //click ra ngoài sẽ đóng khung select
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
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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

  return (
    <div className="mx-[40px] mt-[94px] pt-[60px] bg-[url('/imgs/appointment-background.png')] bg-no-repeat bg-top bg-center bg-fixed bg-cover min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="h-[1300px] w-[1000px] bg-[#fff] p-[120px] left-0"
      >
        <div className="block mb-[32px]">
          <h1 className="font-bold text-4xl text-[#1a1a1a] leading-[120%]">
            ĐẶT LỊCH HẸN DỊCH VỤ
          </h1>
        </div>

        {/* dịch vụ */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Dịch vụ <span className="text-primaryColor">*</span>
            </label>
          </div>
          {renderDropdown('name_service', optionServices)}
        </div>

        {/* Biển số xe */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="number_plates">
              Biển số xe <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2">
            <input
              placeholder="59D1-05494"
              type="text"
              className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
              value={formData.number_plates}
              name="number_plates"
              id="number_plates"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Họ và tên */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="fullName_customer">
              Họ và tên <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2">
            <input
              placeholder="Nguyễn Văn A"
              type="text"
              className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
              value={formData.name}
              name="fullName_customer"
              id="fullName_customer"
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
            <label className="text-lg font-bold" htmlFor="appointment_date">
              Chọn ngày <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2 relative">
            <input
              type="date"
              id="appointment_date"
              name="appointment_date"
              className="outline-0 w-full h-full text-gray-400 text-mainTitleColor appearance-none"
              value={formData.date}
              onChange={handleInputChange}
              min={getCurrentDate()}
            />
            <div
              className="absolute inset-0 cursor-pointer flex items-center justify-end"
              onClick={handleDateClick}
            >
              <img src="/imgs/calendar.png" className="right-0 w-6 h-6 z-5" />
            </div>
          </div>
        </div>

        {/* Điều khoản */}
        <div className="flex mb-2 mt-[68px]">
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
          >
            Xác nhận đặt lịch hẹn
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
