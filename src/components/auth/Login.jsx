import React from 'react';
import { AiFillFacebook, AiOutlineUser } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = ({ handleToggleLogin }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bottom-0 bg-[#333333]/[.7]"
      onClick={(e) => handleToggleLogin(e)}
      id="overlay"
    >
      <div className="bg-white absolute w-2/5 h-max top-0 bottom-0 left-0 right-0 m-auto p-[30px] rounded-[20px] overflow-y-auto">
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
          Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử
          dụng sẽ bị khóa.
        </p>

        <ul className="w-4/6 mx-auto">
          <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-4 hover:bg-[#ccc]/[.5] flex items-center font-medium">
            <AiOutlineUser className="h-5 w-6" />
            <p className="w-full text-center">Sử dụng email</p>
          </li>

          <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-3 hover:bg-[#ccc]/[.5] flex items-center font-medium">
            <FcGoogle className="h-5 w-6" />
            <p className="w-full text-center">Đăng nhập với Google</p>
          </li>

          <li className="bg-white px-5 py-2.5 rounded-3xl border border-[#ccc]/[.8] mx w-full mt-3 hover:bg-[#ccc]/[.5] flex items-center font-medium">
            <AiFillFacebook className="h-5 w-6 text-facebookColor" />
            <p className="w-full text-center">Đăng nhập với Facebook</p>
          </li>
        </ul>

        <p className="text-center mt-8">
          Bạn chưa có tài khoản?{' '}
          <Link className="text-primaryColor underline">Đăng ký</Link>
        </p>

        <p className="text-center mt-3">
          <Link className="text-primaryColor underline">Quên mật khẩu</Link>
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

export default Login;
