import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getAllAgencies } from '../utils/AgencyApi';
import { submitForm } from '../utils/FormApi';
// import Toast from '../common/Toast';

// import PropTypes from 'prop-types';

const Toast = ({ status, message, handleCloseToast }) => {
  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 ${
        message ? '-translate-y-1/2' : '-translate-y-full'
      } transition-all ease-in-out duration-300 z-30 w-full flex justify-center`}
    >
      <div className="w-full max-w-xs">
        {status === 'success' && (
          <div
            id="toast-success"
            className="flex items-center p-4 mb-4 text-white rounded-lg shadow bg-[#28A745]"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal mr-2">{message}</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 text-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-800 inline-flex items-center justify-center h-8 w-8"
              data-dismiss-target="#toast-success"
              aria-label="Close"
              onClick={handleCloseToast}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}

        {status === 'danger' && (
          <div
            id="toast-danger"
            className="flex items-center p-4 mb-4 text-white rounded-lg shadow bg-[#DC3545]"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
              <span className="sr-only">Error icon</span>
            </div>
            <div className="ms-3 text-sm font-normal mr-2">{message}</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 text-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-800 inline-flex items-center justify-center h-8 w-8"
              data-dismiss-target="#toast-danger"
              aria-label="Close"
              onClick={handleCloseToast}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}

        {status === 'warning' && (
          <div
            id="toast-warning"
            className="flex items-center p-4 text-white rounded-lg shadow bg-[#FFC107]"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-500 dark:text-orange-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
              </svg>
              <span className="sr-only">Warning icon</span>
            </div>
            <div className="ms-3 text-sm font-normal mr-2">{message}</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 text-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-800 inline-flex items-center justify-center h-8 w-8"
              data-dismiss-target="#toast-warning"
              aria-label="Close"
              onClick={handleCloseToast}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Appointment = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem('formData');
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          fullName_customer: '',
          phone_customer: '',
          number_plates: '',
          appointment_date: '',
          name_service: 'Chọn',
          city_agency: 'Chọn',
          name_agency: 'Chọn',
        };
  });
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

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

  //Lưu dữ liệu khi f5 lại trang

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

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Thực hiện submit form
      const dataJSON = localStorage.getItem('data');
      const data = JSON.parse(dataJSON);
      const accessToken = data.access_token;
      const response = await submitForm(
        'service-orders',
        formData,
        accessToken
      );

      if (response.status === 201) {
        // Xử lý thành công
        setMessage('Đăng ký dịch vụ thành công');
        setStatus('success');
        localStorage.removeItem('formData');
        setFormData({
          fullName_customer: '',
          phone_customer: '',
          number_plates: '',
          appointment_date: '',
          name_service: 'Chọn',
          city_agency: 'Chọn',
          name_agency: 'Chọn',
        });
        setCheckboxes({
          agreement1: false,
          agreement2: false,
        });
      } else {
        setMessage('Đăng ký dịch vụ thất bại');
        setStatus('danger');
      }
    } catch (err) {
      setMessage('Đăng ký dịch vụ thất bại');
      setStatus('danger');
    }

    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, 5000);
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
  console.log(formData, isFormValid);

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
          <p className={formData[type] === 'Chọn' ? 'text-gray-400' : ''}>
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
    <section>
      <Toast
        handleCloseToast={handleCloseToast}
        message={message}
        status={status}
      />

      <div className="mx-[40px] mt-[94px] pt-[60px] bg-[url('/imgs/appointment-background.png')] bg-no-repeat bg-fixed bg-cover min-h-screen">
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
                placeholder="VD: 59D1-05494"
                type="text"
                className="w-full h-full outline-0 text-mainTitleColor"
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
                placeholder="VD: Nguyễn Văn A"
                type="text"
                className="w-full h-full outline-0 text-mainTitleColor"
                value={formData.fullName_customer}
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
                placeholder="VD: 0325428387"
                type="text"
                className="w-full h-full outline-0 text-mainTitleColor"
                value={formData.phone_customer}
                name="phone_customer"
                id="phone_customer"
                onChange={handleInputChange}
                pattern="^((\\+84)|0)[1-9]{1}[0-9]{8}$"
                required
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
                className="outline-0 w-full h-full text-mainTitleColor appearance-none"
                value={formData.appointment_date}
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
                isFormValid ? 'opacity-100' : 'opacity-55'
              } bg-primaryColor text-lg uppercase px-[44px] py-[15px] border-[#ccc] border font-bold tracking-widest mt-[30px] text-[#fff]`}
            >
              Xác nhận đặt lịch hẹn
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
export { Toast };
