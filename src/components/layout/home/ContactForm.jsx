import React, { useState } from 'react';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const ContactForm = () => {
  const [serviceSupport, setServiceSupport] = useState('Chọn');
  const [serviceInput, setServiceInput] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [inputName, setInputName] = useState('');
  const options = [
    'Bán hàng',
    'Dịch vụ',
    'Đại lý',
    'Tư vấn tài chính',
    'Góp ý website',
  ];

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
          <div className="w-3/5 border-b-tabAction border-b-[2px] mx-auto mb-[22px]"></div>
          <div>
            <div className="mb-4">
              <div className="mb-4">
                <label className="text-lg font-bold">
                  Thông tin quý khách cần biết{' '}
                  <span className="text-primaryColor">*</span>
                </label>
              </div>

              <div className="relative border-b pb-2">
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

              <div className="border-b pb-2">
                <input
                  type="text"
                  className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
                  value={inputName}
                  name="name"
                  id="name"
                  placeholder="Nguyễn Văn A"
                  onChange={(e) => setInputName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justtify-between">
              <div className="w-3/6">
                <div className="mb-4">
                  <label className="text-lg font-bold" htmlFor="phone">
                    Số điện thoại <span className="text-primaryColor">*</span>
                  </label>
                </div>

                <div className="border-b pb-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
                    value={inputName}
                    placeholder="0123456789"
                    onChange={(e) => setInputName(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-2/6 ml-auto">
                <div className="mb-4">
                  <label className="text-lg font-bold" htmlFor="phone">
                    Số điện thoại <span className="text-primaryColor">*</span>
                  </label>
                </div>

                <div className="border-b pb-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="text-gray-400 w-full h-full outline-0 text-mainTitleColor"
                    value={inputName}
                    placeholder="0123456789"
                    onChange={(e) => setInputName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
