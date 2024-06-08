import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [serviceSupport, setServiceSupport] = useState('Chọn');
  const [serviceInput, setServiceInput] = useState('');
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  const [place, setPlace] = useState('Chọn');
  const [placeInput, setPlaceInput] = useState('');
  const [placeDropdownOpen, setPlaceDropdownOpen] = useState(false);

  const [agent, setAgent] = useState('Chọn');
  const [agentInput, setAgentInput] = useState('');
  const [agentDropdownOpen, setAgentDropdownOpen] = useState(false);

  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    licensePlate: '',
    date: ''
  });

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

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleToggleDropdown = (dropdownSetter) => {
    dropdownSetter(prevState => !prevState);
  };

  const handleChange = (setValue, e, dropdownSetter) => {
    setValue(e.currentTarget.dataset.support);
    dropdownSetter(false);
  };

  return (
    <div className="mx-[40px] mt-[94px] pt-[60px] bg-[url('./public/imgs/appointment-background.png')] bg-no-repeat bg-top bg-center bg-fixed bg-cover min-h-screen">
      <form className="h-[1300px] w-[1000px] bg-[#fff] p-[120px] left-0">
        <div className="block mb-[32px]">
          <h1 className="font-bold text-4xl text-[#1a1a1a] leading-[120%]">ĐẶT LỊCH HẸN DỊCH VỤ</h1>
        </div>
        {/* dịch vụ */}
        <div className="mb-4">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Dịch vụ{' '}
              <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="relative border-b border-[#ccc] pb-2">
            <div className="flex justify-between" onClick={() => handleToggleDropdown(setServiceDropdownOpen)}>
              <p className={serviceSupport === 'Chọn' ? 'text-gray-400' : ''}>
                {serviceSupport}
              </p>
              <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
            </div>
            {serviceDropdownOpen && (
              <ul className="py-1.5 border border-[#aaa] absolute right-0 left-0 border-t-0 bg-white z-10">
                <li className="p-1.5">
                  <input
                    type="text"
                    className="w-full border p-1.5 outline-0 border-[#aaa]"
                    value={serviceInput}
                    onChange={(e) => setServiceInput(e.target.value)}
                  />
                </li>
                {optionServices
                  .filter((option) =>
                    option.toLowerCase().includes(serviceInput.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      data-support={option}
                      onClick={(e) => handleChange(setServiceSupport, e, setServiceDropdownOpen)}
                      key={index}
                      className={`text-base text-[#212529] p-1.5 hover:bg-[#5897FB] hover:text-white ${
                        option === serviceSupport ? 'bg-[#5897FB] text-white' : ''
                      }`}
                    >
                      {option}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        {/* Biển số xe */}
        <div className="mb-4">
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
              value={input.licensePlate}
              name="licensePlate"
              id="licensePlate"
              onChange={handleInput}
            />
          </div>
        </div>
        {/* Họ và tên */}
        <div className="mb-4">
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
              value={input.name}
              name="name"
              id="name"
              onChange={handleInput}
            />
          </div>
        </div>
        {/* Số điện thoại */}
        <div className="mb-4">
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
              value={input.phone}
              name="phone"
              id="phone"
              onChange={handleInput}
            />
          </div>
        </div>
        {/* Tỉnh/Thành phố */}
        <div className="mb-4">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Tỉnh/Thành phố{' '}
              <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="relative border-b border-[#ccc] pb-2">
            <div className="flex justify-between" onClick={() => handleToggleDropdown(setPlaceDropdownOpen)}>
              <p className={place === 'Chọn' ? 'text-gray-400' : ''}>
                {place}
              </p>
              <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
            </div>
            {placeDropdownOpen && (
              <ul className="py-1.5 border border-[#aaa] absolute right-0 left-0 border-t-0 bg-white z-10">
                <li className="p-1.5">
                  <input
                    type="text"
                    className="w-full border p-1.5 outline-0 border-[#aaa]"
                    value={placeInput}
                    onChange={(e) => setPlaceInput(e.target.value)}
                  />
                </li>
                {optionPlaces
                  .filter((option) =>
                    option.toLowerCase().includes(placeInput.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      data-support={option}
                      onClick={(e) => handleChange(setPlace, e, setPlaceDropdownOpen)}
                      key={index}
                      className={`text-base text-[#212529] p-1.5 hover:bg-[#5897FB] hover:text-white ${
                        option === place ? 'bg-[#5897FB] text-white' : ''
                      }`}
                    >
                      {option}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        {/* Đại lý */}
        <div className="mb-4">
          <div className="mb-4">
            <label className="text-lg font-bold">
              Đại lý{' '}
              <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="relative border-b border-[#ccc] pb-2">
            <div className="flex justify-between" onClick={() => handleToggleDropdown(setAgentDropdownOpen)}>
              <p className={agent === 'Chọn' ? 'text-gray-400' : ''}>
                {agent}
              </p>
              <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
            </div>
            {agentDropdownOpen && (
              <ul className="py-1.5 border border-[#aaa] absolute right-0 left-0 border-t-0 bg-white z-10">
                <li className="p-1.5">
                  <input
                    type="text"
                    className="w-full border p-1.5 outline-0 border-[#aaa]"
                    value={agentInput}
                    onChange={(e) => setAgentInput(e.target.value)}
                  />
                </li>
                {/* Implement agent options if available */}
                <li className="text-base text-[#212529] p-1.5">No results found</li>
              </ul>
            )}
          </div>
        </div>
        {/* Ngày dự kiến */}
        <div className="mb-4">
          <div className="mb-4">
            <label className="text-lg font-bold" htmlFor="date">
              Ngày dự kiến <span className="text-primaryColor">*</span>
            </label>
          </div>
          <div className="border-b border-[#ccc] pb-2">
            <input
              type="date"
              className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
              value={input.date}
              name="date"
              id="date"
              onChange={handleInput}
            />
          </div>
        </div>
        {/* Điều khoản và cam kết */}
        <div className="flex mb-2 mt-[68px]">
          <input
            type="checkbox"
            className="h-5 w-5 mr-2 accent-[#EB0A1E]"
            name="checkbox-1"
            id="checkbox-1"
          />
          <label
            className="line-clamp-1 text-base text-[#212529]"
            htmlFor="checkbox-1"
          >
            Tôi xác nhận rằng các đại lý Toyota có thể gửi cho tôi thêm
            thông tin về các sản phẩm hoặc dịch vụ của Toyota.
          </label>
        </div>
        <div className="flex mb-2">
          <input
            type="checkbox"
            className="h-5 w-5 mr-2 accent-[#EB0A1E]"
            name="checkbox-2"
            id="checkbox-2"
          />
          <label
            className="line-clamp-1 text-base text-[#212529]"
            htmlFor="checkbox-2"
          >
            Tôi đã đọc và đồng ý với các{' '}
            <Link to={'/'} className="text-[#007bff]">
              quy định và chính sách
            </Link>{' '}
            của Toyota Việt Nam.
          </label>
        </div>
        <div className="flex justify-left mt-[32px]">
          <button
            type="submit"
            className="bg-primaryColor text-lg uppercase px-[44px] py-[15px] border-[#ccc] border font-bold tracking-widest mt-[30px] text-[#fff]"
          >
            Xác nhận đặt lịch hẹn
          </button>
        </div>
      </form>
    </div>
  );
};

