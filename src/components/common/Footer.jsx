import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FaArrowRight,
  FaFacebook,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <>
      <hr className="mt-[120px] border-[#ccc]" />
      <section className="container">
        <div className="flex justify-center pt-[48px] pb-[40px]">
          <div className="w-1/6">
            <p className="font-bold text-sm text-mainTitleColor mb-[14px] uppercase">
              sản phẩm
            </p>
            <ul>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Hatchback</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Sedan</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>SUV</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Đa dụng</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Thương mại</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Bán tải</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Khách hàng dự án</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/6">
            <p className="font-bold text-sm text-mainTitleColor mb-[14px] uppercase">
              công nghệ
            </p>
            <ul>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Hybrid</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>TSS</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>TNGA</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/6">
            <p className="font-bold text-sm text-mainTitleColor mb-[14px] uppercase">
              dịch vụ
            </p>
            <ul>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Dịch vụ bảo dưỡng</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Dịch vụ sau bán hàng</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Sản phẩm chính hãng</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Cơ sở bảo hành bảo dưỡng</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/6">
            <p className="font-bold text-sm text-mainTitleColor mb-[14px] uppercase">
              tin tức & khuyến mãi
            </p>
            <ul>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Sản phẩm</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Khuyến mãi</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Xã hội</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Thông tin bổ trợ</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Thông tin khác</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/6">
            <p className="font-bold text-sm text-mainTitleColor mb-[14px] uppercase">
              về toyota việt nam
            </p>
            <ul>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Giới thiệu công ty</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Tuyển dụng</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Cộng đồng</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Nội địa hóa</Link>
              </li>
              <li className="text-sm text-subInformationColor mb-[14px]">
                <Link>Tạp chí Toyota</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="container pt-[48px] pb-[40px]">
          <div className="grid grid-cols-12">
            <div className="col-span-5">
              <p className="uppercase font-bold text-white text-lg mb-6">
                CÔNG TY Ô TÔ TOYOTA VIỆT NAM
              </p>

              <ul>
                <li className="text-xs text-white mb-2 tracking-wide">
                  Số GCNĐKDN: 2500150335
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  Cấp lần đầu: Ngày 26/03/2007
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  Đăng ký thay đổi lần thứ 19: Ngày 02/02/2023
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Vĩnh Phúc
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  Địa chỉ: Phường Phúc Thắng, Thành phố Phúc Yên, Tỉnh Vĩnh
                  Phúc, Việt Nam
                </li>
              </ul>
            </div>

            <div className="col-span-3">
              <p className="uppercase font-bold text-white text-lg mb-6">
                ĐƯỜNG DÂY NÓNG
              </p>

              <ul>
                <li className="text-xs text-white mb-2 tracking-wide">
                  <Link to={'/'} className="block">
                    <FaPhoneAlt className="h-5 w-5 inline-block mr-[18px]" />{' '}
                    <p className="text-xs text-white inline-block h-full">
                      1800 1524
                    </p>
                  </Link>
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  <Link to={'/'} className="block">
                    <FaPhoneAlt className="h-5 w-5 inline-block mr-[18px]" />{' '}
                    <p className="text-xs text-white inline-block h-full">
                      0916 001 524
                    </p>
                  </Link>
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  <Link to={'/'} className="block">
                    <AiOutlineMail className="h-5 w-5 inline-block mr-[18px]" />{' '}
                    <p className="text-xs text-white inline-block h-full">
                      Email
                    </p>
                  </Link>
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  <Link to={'/'} className="block">
                    <p className="text-xs text-white inline-block h-full">
                      Hotline Hỗ trợ tài chính: (84-28) 7309 0998
                    </p>
                  </Link>
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  <Link to={'/'} className="block">
                    <p className="text-xs text-white inline-block h-full">
                      Hotline Bảo hiểm Toyota: 1900 633 384
                    </p>
                  </Link>
                </li>
                <li className="text-xs text-white mb-2 tracking-wide w-[180px] h-[80px]">
                  <span
                    style={{
                      backgroundPositionX: '-10px',
                      backgroundPositionY: '-10px',
                    }}
                    className="bg-[url('imgs/global-image.png')] inline-block h-full w-full"
                  ></span>
                </li>
              </ul>
            </div>

            <div className="col-span-4">
              <p className="uppercase font-bold text-white text-lg mb-6">
                ĐĂNG KÝ NHẬN BẢNG TIN
              </p>

              <ul>
                <li className="text-xs text-white mb-5 tracking-wide">
                  Đừng bỏ lỡ những tin tức khuyến mãi của chúng tôi
                </li>
                <li className="text-xs text-white mb-2 tracking-wide">
                  <form className="flex">
                    <input
                      type="email"
                      className=" w-[245px] h-[40px] bg-transparent outline-0 border border-white text-base mr-[12px]"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="h-[40px] w-[40px] bg-[#EB0A1E] flex justify-center items-center">
                      <FaArrowRight className="h-5 w-5" />
                    </button>
                  </form>
                </li>
                <li className="flex">
                  <a
                    href="https://www.facebook.com/ToyotaVietnam/?utm_source=SOCIAL&utm_medium=FANPAGE&utm_content=FBICON_PRODUCT_WEBSITE_4NOV2016&utm_campaign=FANPAGE"
                    target="_blank"
                    className="mr-2 relative"
                  >
                    <FaFacebook className="h-6 w-6 text-facebookColor relative z-[5]" />
                    <span className="absolute top-0 bottom-0 right-0 left-0 bg-white h-[23px] w-5 m-auto rounded-[50%]"></span>
                  </a>
                  <a
                    href="https://www.youtube.com/user/ToyotaMotorVietnam"
                    target="_blank"
                    className="relative"
                  >
                    <FaYoutube className="h-6 w-7 text-youtubeColor relative z-[5]" />
                    <span className="absolute top-0 bottom-0 right-0 left-0 bg-white h-[10px] w-5 m-auto rounded-[50%]"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between mt-[40px]">
            <div>
              <Link className="text-xs text-[#808080] ">Sơ đồ trang |</Link>
              <Link className="text-xs text-[#808080] ">
                {' '}
                Chính sách và điều khoản |
              </Link>
              <Link className="text-xs text-[#808080] ">
                {' '}
                Chính sách bảo mật thông tin cá nhân
              </Link>
            </div>
            <div>
              <span className="text-xs text-[#808080]">
                © Bản quyền thuộc về Công ty ô tô Toyota Việt Nam
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
