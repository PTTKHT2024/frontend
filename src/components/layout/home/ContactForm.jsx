import React, { useState } from 'react';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [serviceSupport, setServiceSupport] = useState('Chọn');
  const [serviceInput, setServiceInput] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  const options = [
    'Bán hàng',
    'Dịch vụ',
    'Đại lý',
    'Tư vấn tài chính',
    'Góp ý website',
  ];

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleChangeServiceSupport = (e) => {
    setServiceSupport(e.currentTarget.dataset.support);
  };

  const handleToggleInput = () => {
    setIsSelected(!isSelected);
  };

  return (
    <section className="container px-32">
      <div className="border-tabNavigate">
        <form className="py-6 px-[90px]">
          <h3 className="uppercase font-bold text-lg text-center w-full mb-6">
            trao đổi với chúng tôi
          </h3>
          <div className="w-3/5 border-[#EB0A1E] border-b border-[#ccc]-[2px] mx-auto mb-[22px]"></div>
          <div>
            <div className="mb-4">
              <div className="mb-4">
                <label className="text-lg font-bold">
                  Thông tin quý khách cần biết{' '}
                  <span className="text-primaryColor">*</span>
                </label>
              </div>

              <div className="relative border-b border-[#ccc] pb-2">
                <div
                  className="flex justify-between"
                  onClick={handleToggleInput}
                >
                  <p
                    className={serviceSupport === 'Chọn' ? 'text-gray-400' : ''}
                  >
                    {serviceSupport}
                  </p>
                  <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
                </div>

                {isSelected && (
                  <ul className="py-1.5 border border-[#aaa] absolute right-0 left-0 border-t-0 bg-white">
                    <li className="p-1.5">
                      <input
                        type="text"
                        className="w-full border p-1.5 outline-0 border-[#aaa]"
                        value={serviceInput}
                        onChange={(e) => setServiceInput(e.target.value)}
                      />
                    </li>

                    {options
                      .filter((option) =>
                        option
                          .toLowerCase()
                          .includes(serviceInput.toLowerCase())
                      )
                      .map((option, index) => (
                        <li
                          data-support={option}
                          onClick={(e) => {
                            handleChangeServiceSupport(e);
                            handleToggleInput();
                          }}
                          key={index}
                          className={`text-base text-[#212529] p-1.5 hover:bg-[#5897FB] hover:text-white ${
                            option === serviceSupport
                              ? 'bg-[#5897FB] text-white'
                              : ''
                          }`}
                        >
                          {option}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="mb-4">
              <div className="mb-4">
                <label className="text-lg font-bold" htmlFor="name">
                  Họ và tên <span className="text-primaryColor">*</span>
                </label>
              </div>

              <div className="border-b border-[#ccc] pb-2">
                <input
                  type="text"
                  className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
                  value={input.name}
                  name="name"
                  id="name"
                  placeholder="Nguyễn Văn A"
                  onChange={(e) => setInput(e)}
                />
              </div>
            </div>

            <div className="flex justtify-between mb-4">
              <div className="w-3/6">
                <div className="mb-4">
                  <label className="text-lg font-bold" htmlFor="phone">
                    Số điện thoại <span className="text-primaryColor">*</span>
                  </label>
                </div>

                <div className="border-b border-[#ccc] pb-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
                    value={input.phone}
                    placeholder="0123456789"
                    onChange={(e) => setInput(e)}
                  />
                </div>
              </div>

              <div className="w-2/5 ml-auto">
                <div className="mb-4">
                  <label className="text-lg font-bold" htmlFor="email">
                    Email <span className="text-primaryColor">*</span>
                  </label>
                </div>

                <div className="border-b border-[#ccc] pb-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
                    value={input.email}
                    placeholder="abc@gmail.com"
                    onChange={(e) => setInput(e)}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                className="w-full text-gray-400 outline-0 text-mainTitleColor border p-[2px]"
                placeholder="Điền yêu cầu/ thắc mắc"
                rows={4}
                value={input.description}
                onChange={(e) => setInput(e)}
              />
            </div>

            <div className="flex mb-2">
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

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-xs uppercase px-[44px] py-[15px] border-[#ccc] border font-bold tracking-widest mt-[30px] text-mainTitleColor"
              >
                gửi
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
