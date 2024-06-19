import React from 'react';
import InsuranceBanner from '../common/InsuranceBanner';
import ContactAgency from '../common/ContactAgency';
const IntroductionInsurance = () => {
  return (
    <div className="w-full mt-[96px] m-auto p-0">
      <InsuranceBanner src="/imgs/insurance/banner.png" />
      <div>
        <div>
          <div className="mt-[60px] mx-0 mb-[50px]">
            <h1 className="text-center text-4xl font-semibold leading-tight text-[#1a1a1a] uppercase mb-8 m-0">
              CHỌN <span className="text-primaryColor">BẢO HIỂM TOYOTA</span>,
              TRỌN <span className="text-primaryColor">NIỀM TIN</span>
            </h1>
            <div className="w-[120px] h-[1px] my-0 mx-auto bg-primaryColor"></div>
          </div>
          <div className="relative w-[1200px] max-w-full my-0 mx-auto">
            <img
              className="block w-full h-auto my-0 mx-auto"
              src="https://www.toyota.com.vn/media/mz1nz2d5/cover-2_website-1.png"
              alt=""
            />
          </div>
          <div className="w-[1200px] max-w-full mx-auto my-[60px] ">
            <h3 className="uppercase text-4xl text-primaryColor font-semibold text-center m-0 mb-10 leading-tight">
              VÌ SAO NÊN LỰA CHỌN BẢO HIỂM TOYOTA?
            </h3>
            <div className="grid grid-cols-3 gap-4 flex-wrap max-w-[900px] my-0 mx-auto items-stretch justify-between">
              <div className="w-[calc(100%/3)-56px] items-center text-center mx-[24px] mb-[32px]">
                <img
                  className="w-[100px] h-[100px] mb-[16px] mx-auto"
                  src="https://www.toyota.com.vn/media/2kypecom/why-choose-image-1.png"
                  alt=""
                />
                <p className="text-[#000] text-base m-0 font-medium">
                  Quy trình bồi thường{' '}
                  <span className="text-primaryColor">
                    đơn giản, nhanh chóng
                  </span>
                </p>
              </div>
              <div className="w-[calc(100%/3)-56px] items-center text-center mx-[24px] mb-[32px]">
                <img
                  className="w-[100px] h-[100px] mb-[16px] mx-auto"
                  src="https://www.toyota.com.vn/media/21rhei5r/why-choose-image-2.png"
                  alt=""
                />
                <p className="text-[#000] text-base m-0 font-medium">
                  Sửa chữa và thay thế phụ tùng tại{' '}
                  <span className="text-primaryColor">
                    đại lý Toyota chính hãng
                  </span>
                </p>
              </div>
              <div className="w-[calc(100%/3)-56px] items-center text-center mx-[24px] mb-[32px]">
                <img
                  className="w-[100px] h-[100px] mb-[16px] mx-auto"
                  src="https://www.toyota.com.vn/media/obvjrnsv/why-choose-image-3.png"
                  alt=""
                />
                <p className="text-[#000] text-base m-0 font-medium">
                  Phục vụ riêng cho{' '}
                  <span className="text-primaryColor">khách hàng Toyota</span>
                </p>
              </div>
              <div className="w-[calc(100%/3)-56px] items-center text-center mx-[24px] mb-[32px]">
                <img
                  className="w-[100px] h-[100px] mb-[16px] mx-auto"
                  src="https://www.toyota.com.vn/media/oqxhdt3r/why-choose-image-4.png"
                  alt=""
                />
                <p className="text-[#000] text-base m-0 font-medium">
                  Bảng giá đồng sơn tiêu chuẩn do Toyota xây dựng nhằm{' '}
                  <span className="text-primaryColor">
                    rút ngắn thời gian duyệt giá
                  </span>
                </p>
              </div>
              <div className="w-[calc(100%/3)-56px] items-center text-center mx-[24px] mb-[32px]">
                <img
                  className="w-[100px] h-[100px] mb-[16px] mx-auto"
                  src="https://www.toyota.com.vn/media/fuspll53/why-choose-image-5-1.png"
                  alt=""
                />
                <p className="text-[#000] text-base m-0 font-medium">
                  Dịch vụ vô cùng{' '}
                  <span className="text-primaryColor">tiện lợi</span>, hạn chế
                  tối đa việc đi lại của khách hàng
                </p>
              </div>
              <div className="w-[calc(100%/3)-56px] items-center text-center mx-[24px] mb-[32px]">
                <img
                  className="w-[100px] h-[100px] mb-[16px] mx-auto"
                  src="https://www.toyota.com.vn/media/ep1jz2qh/why-choose-image-6-1.png"
                  alt=""
                />
                <p className="text-[#000] text-base m-0 font-medium">
                  <span className="text-primaryColor">Đồng hành</span> hỗ trợ
                  giải quyết thoả đáng nhất
                </p>
              </div>
            </div>
            <div className="max-w-full w-[1200px] my-60px mx-auto">
              <h3 className="font-semibold text-4xl leading-tight text-center m-0 mb-10 uppercase text-primaryColor">
                NHỮNG LỢI ÍCH ƯU VIỆT BẢO HIỂM TOYOTA CUNG CẤP
              </h3>
              <div className="mx-auto my-0 max-w-fit">
                <ul className="m-0 p-0 list-none">
                  <li className="mb-[40px]">
                    <div className="flex items-center">
                      <img
                        className="w-[32px] h-[32px] object-contain"
                        src="/imgs/icon-choose.png"
                        alt=""
                      />
                      <p className="ml-6 m-0 font-semibold text-2xl leading-tight">
                        Sữa chữa và thay thế{' '}
                        <strong className="text-primaryColor">
                          phụ tùng chính hãng
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li className="mb-[40px]">
                    <div className="flex items-center">
                      <img
                        className="w-[32px] h-[32px] object-contain"
                        src="/imgs/icon-choose.png"
                        alt=""
                      />
                      <p className="ml-6 m-0 font-semibold text-2xl leading-tight">
                        Bồi thường theo
                        <strong className="text-primaryColor">
                          giá trị thoả thuận
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li className="mb-[40px]">
                    <div className="flex items-center">
                      <img
                        className="w-[32px] h-[32px] object-contain"
                        src="/imgs/icon-choose.png"
                        alt=""
                      />
                      <p className="ml-6 m-0 font-semibold text-2xl leading-tight">
                        <strong className="text-primaryColor">
                          Hỗ trợ chi phí thuê xe
                        </strong>{' '}
                        trong thời gian sửa chữa*
                      </p>
                    </div>
                  </li>
                  <li className="mb-[40px]">
                    <div className="flex items-center">
                      <img
                        className="w-[32px] h-[32px] object-contain"
                        src="/imgs/icon-choose.png"
                        alt=""
                      />
                      <p className="ml-6 m-0 font-semibold text-2xl leading-tight">
                        <strong className="text-primaryColor">Thưởng</strong>{' '}
                        khi không có tổn thất
                      </p>
                    </div>
                  </li>
                  <li className="">
                    <div className="flex items-center">
                      <img
                        className="w-[32px] h-[32px] object-contain"
                        src="/imgs/icon-choose.png"
                        alt=""
                      />
                      <p className="ml-6 m-0 font-semibold text-2xl leading-tight">
                        Chiết khấu cho{' '}
                        <strong className="text-primaryColor">
                          hợp đồng dài hạn
                        </strong>
                      </p>
                    </div>
                    <p className="">*Tuỳ thuộc theo gói sản phẩm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactAgency />
    </div>
  );
};
export default IntroductionInsurance;
