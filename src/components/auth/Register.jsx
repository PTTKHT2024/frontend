import React, { useEffect, useRef, useState } from 'react';
import { AiFillFacebook, AiOutlineUser } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { register } from '../utils/AuthApi';
import { CgDanger } from 'react-icons/cg';

const Register = ({ handleClickLogin }) => {
  const [emailRegister, setEmailRegister] = useState(false);
  const nameInputRef = useRef(null);
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    console.log(nameInputRef.current);
    nameInputRef.current?.focus();
  }, [emailRegister]);

  const handleClickEmailRegister = () => {
    setEmailRegister(!emailRegister);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await register(registerForm);
      if (response.status === 201) {
        setSuccessMessage('Bạn đã đăng kí thành công');

        const interval = setInterval(() => {
          setCountdown((prevCountdown) => {
            if (prevCountdown <= 1) {
              clearInterval(interval);
              handleClickLogin();
            }
            return prevCountdown - 1;
          });
        }, 1000);
      } else {
        setErrorMessage('Email không hợp lệ hoặc đã được sử dụng');
      }
    } catch (err) {
      console.error('Error registering user:', err);
      setErrorMessage('Email không hợp lệ hoặc đã được sử dụng');
    }

    setTimeout(() => {
      setErrorMessage('');
    }, countdown * 1000);
  };

  return (
    <div className="bg-white w-2/5 h-max top-0 bottom-0 left-0 right-0 m-auto py-[10px] px-[5px] rounded-[20px] fixed m-auto z-[100]">
      <div className="overflow-y-auto w-full max-h-[90vh] py-[20px] rounded-[20px]">
        <Link className="text-center block mt-5" to={'/'}>
          <img
            src="/imgs/logo-toyota.jpg"
            alt=""
            className="mx-auto object-cover"
          />
        </Link>

        <h1 className="text-center font-bold  text-3xl text-mainTitleColor mt-5">
          Đăng ký
        </h1>

        <p className="text-[#f33a58] text-center mx-12 mt-5 text-sm">
          Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử
          dụng sẽ bị khóa.
        </p>

        {emailRegister ? (
          <>
            <span
              className="absolute top-5 left-6 text-base text-[#000]/[.8] flex items-center cursor-pointer"
              onClick={handleClickEmailRegister}
            >
              <MdArrowBackIos className="inline-block h-5 w-5 " /> Quay lại
            </span>
            <form onSubmit={handleRegister}>
              <ul className="w-4/6 mx-auto">
                <li
                  className="bg-white mb-3 mt-3 cursor-pointer"
                  onClick={handleClickLogin}
                >
                  {successMessage && (
                    <div className="w-full px-5 py-2.5 rounded-3xl bg-[#28A745]/[.6] outline-0 text-white flex justify-between items-center hover:drop-shadow">
                      <p className="font-medium text-sm">{successMessage}</p>
                      <p className="font-bold text-base rounded-[50%] bg-white text-[#28A745] px-3 py-1 drop-shadow-md h-max w-max">
                        {countdown}
                      </p>
                    </div>
                  )}
                </li>

                <li className="bg-white mb-3 mt-3">
                  {errorMessage && (
                    <div className="w-full px-5 py-2.5 rounded-3xl bg-[#DC3545]/[.6] outline-0 text-white flex justify-between items-center">
                      <p className="font-medium text-sm">{errorMessage}</p>
                      <p className="font-bold text-base rounded-[50%] bg-white text-[#28A745] px-[6px] py-[5px] drop-shadow-md h-max w-max flex items-center">
                        <CgDanger className="text-[#DC3545] inline h-5 w-5 rounded-[50%]" />
                      </p>
                    </div>
                  )}
                </li>

                <li className="bg-white mb-3">
                  <label className="font-sm w-full font-medium block mb-3">
                    Tên của bạn?
                  </label>
                  <input
                    ref={nameInputRef}
                    required
                    name="fullName"
                    value={registerForm.fullName}
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Họ và tên của bạn"
                    className="w-full px-5 py-2.5 rounded-3xl border-[2px] border-[#1dbfaf]/[.6] outline-0"
                  />
                </li>

                <li className="bg-white cursor-pointer mb-3">
                  <label className="font-sm w-full font-medium block mb-3">
                    Số điện thoại của bạn?
                  </label>
                  <input
                    required
                    name="phone"
                    value={registerForm.phone}
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Số điện thoại"
                    className="w-full px-5 py-2.5 rounded-3xl border-[2px] border-[#1dbfaf]/[.6] outline-0"
                  />
                </li>

                <li className="bg-white cursor-pointer mb-3">
                  <label className="font-sm w-full font-medium block mb-3">
                    Email của bạn
                  </label>
                  <input
                    required
                    name="email"
                    value={registerForm.email}
                    onChange={handleChangeInput}
                    type="email"
                    placeholder="Địa chỉ email"
                    className="w-full px-5 py-2.5 rounded-3xl border-[2px] border-[#ccc]/[.8] outline-0"
                  />
                </li>

                <li className="bg-white cursor-pointer mb-3">
                  <input
                    required
                    name="password"
                    value={registerForm.password}
                    onChange={handleChangeInput}
                    type="password"
                    placeholder="Mật khẩu"
                    className="w-full px-5 py-2.5 rounded-3xl border-[2px] border-[#ccc]/[.8] outline-0"
                  />
                </li>

                <li className="bg-white cursor-pointer mb-3">
                  <button
                    className="w-full px-5 py-2.5 rounded-3xl outline-0 text-white font-medium bg-[#1dbfaf]/[.6]"
                    type="submit"
                  >
                    Đăng ký
                  </button>
                </li>
              </ul>
            </form>
          </>
        ) : (
          <ul className="w-4/6 mx-auto">
            <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-4 hover:bg-[#ccc]/[.5] flex items-center font-medium cursor-pointer">
              <AiOutlineUser className="h-5 w-6" />
              <p
                className="w-full text-center"
                onClick={handleClickEmailRegister}
              >
                Sử dụng email
              </p>
            </li>

            <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-3 hover:bg-[#ccc]/[.5] flex items-center font-medium cursor-pointer">
              <FcGoogle className="h-5 w-6" />
              <p className="w-full text-center">Đăng ký với Google</p>
            </li>

            <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-3 hover:bg-[#ccc]/[.5] flex items-center font-medium cursor-pointer">
              <AiFillFacebook className="h-5 w-6 text-facebookColor" />
              <p className="w-full text-center">Đăng ký với Facebook</p>
            </li>
          </ul>
        )}

        <p className="text-center mt-8">
          Bạn đã có tài khoản?{' '}
          <span
            className="text-primaryColor underline cursor-pointer underline-offset-[2px] font-medium"
            onClick={handleClickLogin}
          >
            Đăng nhập
          </span>
        </p>

        <p className="text-center mt-3">
          <span className="text-primaryColor underline underline-offset-[2px] font-medium">
            Quên mật khẩu
          </span>
        </p>

        <p className="text-center mt-5 mx-12 text-xs text-[#000]/[.6]">
          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
          <Link className="text-[#007bff]">quy định và chính sách</Link> của
          chúng tôi.
        </p>
      </div>
    </div>
  );
};

export default Register;
