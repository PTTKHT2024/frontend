import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
