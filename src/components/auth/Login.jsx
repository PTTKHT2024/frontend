import React, { useState } from 'react';
import { AiFillFacebook, AiOutlineUser } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { MdArrowBackIos } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../utils/AuthApi';
import { CgDanger } from 'react-icons/cg';

const Login = ({ handleClickRegister, handleClickLogin }) => {
  const [emailLogin, setEmailLogin] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const countdown = 5;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickEmailLogin = () => {
    setEmailLogin(!emailLogin);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login(loginForm);

      if (res.status === 201) {
        localStorage.setItem('data', JSON.stringify(res.data.data));
        window.dispatchEvent(new CustomEvent('localStorageChanged'));
        navigate('/');
        handleClickLogin();
        // console.log(res.data.data);
      } else {
        setErrorMessage('Email hoặc mật khẩu không hợp lệ');
      }
    } catch (err) {
      console.error('Error registering user:', err);
      setErrorMessage('Email hoặc mật khẩu không hợp lệ');
    }

    setTimeout(() => {
      setErrorMessage('');
    }, countdown * 1000);
  };

  return (
    <div className="bg-white w-2/5 h-max top-0 bottom-0 left-0 right-0 m-auto py-[30px] px-[5px] rounded-[20px] overflow-y-auto fixed m-auto z-[100]">
      <Link className="text-center block mt-5" to={'/'}>
        <img
          src="/imgs/logo-toyota.jpg"
          alt=""
          className="mx-auto object-cover"
        />
      </Link>

      <h1 className="text-center font-bold  text-3xl text-mainTitleColor mt-5">
        Đăng nhập vào TOYOTA
      </h1>

      <p className="text-[#f33a58] text-center mx-12 mt-5 text-sm">
        Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng
        sẽ bị khóa.
      </p>

      {emailLogin ? (
        <>
          <span
            className="absolute top-5 left-6 text-base text-[#000]/[.8] flex items-center cursor-pointer"
            onClick={handleClickEmailLogin}
          >
            <MdArrowBackIos className="inline-block h-5 w-5 " /> Quay lại
          </span>
          <form onSubmit={handleLogin}>
            <ul className="w-4/6 mx-auto">
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

              <li className="bg-white cursor-pointer mb-3">
                <label className="font-sm w-full font-medium block mb-3">
                  Email của bạn?
                </label>
                <input
                  name="username"
                  value={loginForm.username}
                  onChange={handleChangeInput}
                  type="email"
                  placeholder="Địa chỉ email"
                  className="w-full px-5 py-2.5 rounded-3xl border-[2px] border-[#ccc]/[.8] outline-0"
                />
              </li>

              <li className="bg-white cursor-pointer mb-3">
                <input
                  name="password"
                  value={loginForm.phone}
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
                  Đăng nhập
                </button>
              </li>
            </ul>
          </form>
        </>
      ) : (
        <ul className="w-4/6 mx-auto">
          <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-4 hover:bg-[#ccc]/[.5] flex items-center font-medium cursor-pointer">
            <AiOutlineUser className="h-5 w-6" />
            <p className="w-full text-center" onClick={handleClickEmailLogin}>
              Sử dụng email
            </p>
          </li>

          <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-3 hover:bg-[#ccc]/[.5] flex items-center font-medium cursor-pointer">
            <FcGoogle className="h-5 w-6" />
            <p className="w-full text-center">Đăng nhập với Google</p>
          </li>

          <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-3 hover:bg-[#ccc]/[.5] flex items-center font-medium cursor-pointer">
            <AiFillFacebook className="h-5 w-6 text-facebookColor" />
            <p className="w-full text-center">Đăng nhập với Facebook</p>
          </li>
        </ul>
      )}

      <p className="text-center mt-8">
        Bạn chưa có tài khoản?{' '}
        <button
          className="text-primaryColor underline cursor-pointer underline-offset-[2px] font-medium"
          onClick={handleClickRegister}
        >
          Đăng ký
        </button>
      </p>

      <p className="text-center mt-3">
        <Link className="text-primaryColor underline underline-offset-[2px] font-medium">
          Quên mật khẩu
        </Link>
      </p>

      <p className="text-center mt-5 mx-12 text-xs text-[#000]/[.6]">
        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
        <Link className="text-[#007bff]">quy định và chính sách</Link> của chúng
        tôi.
      </p>
    </div>
  );
};

export default Login;
