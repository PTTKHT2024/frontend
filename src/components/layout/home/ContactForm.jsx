import React, { useState } from 'react';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { createFeedback } from '../../utils/UserAPi';
import Toast from '../../common/Toast';

const ContactForm = () => {
  const [serviceInput, setServiceInput] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [input, setInput] = useState({
    feedbackName: 'Chọn',
    fullName_customer: '',
    email_customer: '',
    phone_customer: '',
    feedbackContent: '',
  });
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

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
    setInput({ ...input, feedbackName: e.currentTarget.dataset.support });
  };

  const handleToggleInput = () => {
    setIsSelected(!isSelected);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await createFeedback(input);
      if (res.status == 201) {
        setStatus('success');
        setMessage('Gửi yêu cầu thành công');
        setInput({
          feedbackName: 'Chọn',
          fullName_customer: '',
          email_customer: '',
          phone_customer: '',
          feedbackContent: '',
        });
        setCheckbox1(false);
        setCheckbox2(false);
      }
    } catch (err) {
      console.error(err);
      setStatus('danger');
      setMessage('Gửi yêu cầu thất bại');
    } finally {
      setTimeout(() => {
        handleCloseToast();
      }, 5000);
    }
  };

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  return (
    <section className="container px-32">
      <Toast
        handleCloseToast={handleCloseToast}
        message={message}
        status={status}
      />

      <div className="border-tabNavigate">
        <form className="py-6 px-[90px]" onSubmit={handleSubmitForm}>
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
                  className="flex justify-between cursor-pointer"
                  onClick={handleToggleInput}
                >
                  <p
                    className={
                      input.feedbackName === 'Chọn' ? 'text-gray-400' : ''
                    }
                  >
                    {input.feedbackName}
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
                          className={`text-base text-[#212529] p-1.5 hover:bg-[#5897FB] hover:text-white cursor-pointer ${
                            option === input.feedbackName
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
                <label
                  className="text-lg font-bold"
                  htmlFor="fullName_customer"
                >
                  Họ và tên <span className="text-primaryColor">*</span>
                </label>
              </div>

              <div className="border-b border-[#ccc] pb-2">
                <input
                  type="text"
                  className="w-full h-full outline-0 text-mainTitleColor"
                  value={input.fullName_customer}
                  name="fullName_customer"
                  id="fullName_customer"
                  placeholder="Nguyễn Văn A"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="flex justtify-between mb-4">
              <div className="w-3/6">
                <div className="mb-4">
                  <label className="text-lg font-bold" htmlFor="phone_customer">
                    Số điện thoại <span className="text-primaryColor">*</span>
                  </label>
                </div>

                <div className="border-b border-[#ccc] pb-2">
                  <input
                    type="text"
                    name="phone_customer"
                    id="phone_customer"
                    className="w-full h-full outline-0 text-mainTitleColor"
                    value={input.phone_customer}
                    placeholder="0123456789"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="w-2/5 ml-auto">
                <div className="mb-4">
                  <label className="text-lg font-bold" htmlFor="email_customer">
                    Email <span className="text-primaryColor">*</span>
                  </label>
                </div>

                <div className="border-b border-[#ccc] pb-2">
                  <input
                    type="email"
                    name="email_customer"
                    id="email_customer"
                    className="w-full h-full outline-0 text-mainTitleColor"
                    value={input.email_customer}
                    placeholder="abc@gmail.com"
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                className="w-full outline-0 text-mainTitleColor border p-[2px]"
                placeholder="Điền yêu cầu/ thắc mắc"
                rows={4}
                name="feedbackContent"
                value={input.feedbackContent}
                onChange={handleInput}
              />
            </div>

            <div className="flex mb-2">
              <input
                type="checkbox"
                className="h-5 w-5 mr-2 accent-[#EB0A1E]"
                name="checkbox-1"
                id="checkbox-1"
                checked={checkbox1}
                onChange={(e) => setCheckbox1(e.target.checked)}
                required
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
                checked={checkbox2}
                onChange={(e) => setCheckbox2(e.target.checked)}
                required
              />
              <label
                className="line-clamp-1 text-base text-[#212529]"
                htmlFor="checkbox-2"
              >
                Tôi đã đọc và đồng ý với các{' '}
                <Link to={'/policy'} className="text-[#007bff]">
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
