import React from 'react';
import InsuranceBanner from '../common/InsuranceBanner';
import PartnerInsurance from '../common/PartnerInsurance';
import ContactAgency from '../common/ContactAgency';
const IndemnifyService = () => {
  return (
    <div className="w-full mt-[96px] m-auto p-0">
      <InsuranceBanner src="/imgs/insurance/banner.png" />
      <div>
        <div>
          <div className="mt-[60px] mx-0 mb-[50px]">
            <h1 className="text-center text-4xl font-semibold leading-tight text-[#1a1a1a] uppercase mb-8 m-0">
              Tư vấn bảo hiểm
            </h1>
            <div className="w-[120px] h-[1px] my-0 mx-auto bg-primaryColor"></div>
          </div>
          <div className="w-[1200px] max-w-full mx-auto my-[60px] ">
            <h3 className="uppercase text-4xl text-primaryColor font-semibold text-center m-0 mb-10 leading-tight">
              Quy trình bồi thường
            </h3>
            <div>
              <div>
                <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                  <img
                    className="max-w-full h-auto my-0 mx-auto block"
                    src="https://www.toyota.com.vn/images/insurance/insurance-process-image-1.png"
                    alt=""
                  />
                  <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                    <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                      1
                    </span>
                  </div>
                </div>
                <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                  Khi xảy ra tai nạn
                </p>
              </div>
              <div className="mx-0 my-[40px]">
                <img
                  className="max-w-full h-auto block my-0 mx-auto"
                  src="/imgs/insurance/arrow-down.png"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-[900px] my-0 mx-auto justify-between">
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-2.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        2
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Gọi trợ giúp nếu có người bị thương
                  </p>
                </div>
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-3.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        2
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Gọi cảnh sát giao thông hoặc cơ quan chức năng gần nhất
                  </p>
                </div>
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-4.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        2
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Gọi Bảo hiểm theo số Hotline in trên Giấy chứng nhận Bảo
                    hiểm Toyota
                  </p>
                </div>
              </div>
              <div className="mx-0 my-[40px]">
                <img
                  className="max-w-full h-auto block my-0 mx-auto"
                  src="/imgs/insurance/arrow-down.png"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-[900px] my-0 mx-auto justify-between">
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-5.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        3
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Giữ hiện trường và chụp ảnh vụ tai nạn
                  </p>
                </div>
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-6.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        4
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Bảo Hiểm giám định thiệt hại sơ bộ
                  </p>
                </div>
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-7.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        5
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Điền thông tin yêu cầu bồi thường
                  </p>
                </div>
              </div>
              <div className="mx-0 my-[40px]">
                <img
                  className="max-w-full h-auto block my-0 mx-auto"
                  src="/imgs/insurance/arrow-down.png"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-[900px] my-0 mx-auto justify-between">
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-8.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        6
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Yêu cầu dịch vụ sửa chữa tại đại lý Toyota
                  </p>
                </div>
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-9.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        7
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Kiểm tra xe và xác nhận
                  </p>
                </div>
                <div className="w-[calc(100%/3)-75px] items-center text-center mx-[38px]">
                  <div className="my-0 mx-auto relative flex justify-center items-center w-[100px] h-[100px] border-[2px] border-gray-800 rounded-full">
                    <img
                      className="max-w-full h-auto my-0 mx-auto block"
                      src="https://www.toyota.com.vn/images/insurance/insurance-process-image-10.png"
                      alt=""
                    />
                    <div className="w-[35px] h-[35px] rounded-full bg-primaryColor border-white border-[2px] absolute -top-[5px] -left-[5px] flex items-center justify-center">
                      <span className="font-bold text-lg leading-snug text-center text-[#fff] ">
                        8
                      </span>
                    </div>
                  </div>
                  <p className="m-0 mt-[16px] text-center text-base text-[#000] leading-snug">
                    Bảo lãnh sửa chữa nhanh chóng
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1200px] max-w-full my-[60px] mx-auto ">
            <h3 className="uppercase text-4xl text-primaryColor font-semibold text-center m-0 mb-10 leading-tight">
              MỨC CHẾ TÀI THƯỜNG ÁP DỤNG
            </h3>
            <table border="0" className="p-0 m-0">
              <tbody>
                <tr>
                  <td className="w-[20%] bg-[#ba2822] border-[2px] border-[#fff] h-[136px] align-middle p-[0.75rem]">
                    <p className="mt-0 mb-[1rem]">
                      <span className="font-bold text-4xl text-[#fff] text-center block">
                        GIẢM TRỪ <br />
                      </span>
                      <span className="font-bold text-4xl text-[#fff] text-center block">
                        5% ~ 10%
                      </span>
                    </p>
                  </td>
                  <td className="w-[80%] bg-[#ededed] border-[2px] border-[#fff] h-[136px] align-middle p-[0.75rem]">
                    <span className="block font-normal text-base leading-normal text-center text-[#090909] my-0 mx-auto max-w-[490px]">
                      {' '}
                      <strong className="font-bold">
                        {' '}
                        Không thông báo tai nạn tới công ty Bảo Hiểm bằng văn
                        bản trong vòng 5 ngày kể từ ngày xảy ra tổn thất{' '}
                      </strong>{' '}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="w-[20%] bg-[#ba2822] border-[2px] border-[#fff] h-[136px] align-middle p-[0.75rem]">
                    <span className="font-bold text-4xl text-[#fff] text-center block">
                      GIẢM TRỪ <br />
                      20% ~ 30%
                    </span>
                  </td>
                  <td className="w-[80%] bg-[#ededed] border-[2px] border-[#fff] h-[136px] align-middle p-[0.75rem]">
                    <span className="block font-normal text-base leading-normal text-center text-[#090909] my-0 mx-auto max-w-[490px]">
                      {' '}
                      <strong className="font-bold">
                        {' '}
                        Chủ xe tự ý di chuyển, tháo dỡ hoặc sửa chữa tài sản bị
                        thiệt hại khi chưa có ý kiến chấp thuận của Công ty Bảo
                        Hiểm{' '}
                      </strong>{' '}
                      <br />
                      (Với Bảo Hiểm Liberty, mức giảm trừ từ 30% đến 80%){' '}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="w-[20%] bg-[#ba2822] border-[2px] border-[#fff] h-[136px] align-middle p-[0.75rem]">
                    <span className="font-bold text-4xl text-[#fff] text-center block">
                      GIẢM TRỪ <br />
                      50% ~ 100%{' '}
                    </span>
                  </td>
                  <td className="w-[80%] bg-[#ededed] border-[2px] border-[#fff] h-[136px] align-middle p-[0.75rem]">
                    <span className="block font-normal text-base leading-normal text-center text-[#090909] my-0 mx-auto max-w-[490px]">
                      {' '}
                      <strong className="font-bold">
                        {' '}
                        Chủ xe không bảo lưu quyền khiếu nại và chuyển quyền đòi
                        người thứ ba cho Công ty Bảo Hiểm <br />
                        Chủ xe không trung thực trong việc cung cấp các thông
                        tin, tài liệu, chứng từ trong hồ sơ bồi thường{' '}
                      </strong>{' '}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full h-[1px] bg-[#ccc]"></div>
          <div className="w-[1200px] max-w-full my-[60px] mx-auto">
            <h3 className="uppercase text-4xl text-[#000] font-semibold text-center m-0 mb-10 leading-tight">
              HỒ SƠ YÊU CẦU BỒI THƯỜNG
            </h3>
            <div className="">
              <h3 className="mb-0 font-semibold text-base">
                Chủ xe, người yêu cầu bồi thường phối hợp cung cấp cho công ty
                Bảo hiểm các chứng từ sau:
              </h3>
              <p className="mt-0 mb-[1rem]">&nbsp;</p>
              <h3 className="mb-0 font-semibold text-base text-primaryColor">
                1. Thông báo tổn thất và yêu cầu bồi thường của Chủ xe cơ giới
              </h3>
              <p className="mt-0 mb-[1rem]">&nbsp;</p>
              <h3 className="mb-0 font-semibold text-base text-primaryColor">
                2. Tai nạn liên quan đến bên thứ 3
              </h3>
              <p className="mt-[4px] leading-normal mb-[1rem]">
                - Giấy tờ xe (Đăng ký, đăng kiểm, Giấy phép lái xe hợp lệ){' '}
                <br />- Hồ sơ Cảnh sát giao thông <br />- Tài liệu chứng minh
                thiệt hại: Hợp đồng, hoá đơn sửa chữa xe hoặc hoá đơn chứng từ
                liên quan đến việc điều trị vết thương (Thiệt hại về người)
              </p>
              <h3 className="mb-0 font-semibold text-base text-primaryColor">
                3. Tai nạn do tự đâm va vào vật khác hoặc vật thể khác va vào
              </h3>
              <p className="mt-[4px] leading-normal mb-[1rem]">
                - Giấy tờ xe (Đăng ký, đăng kiểm, Giấy phép lái xe hợp lệ){' '}
                <br />- Đơn trình báo vụ việc có xác nhận của cơ quan Công an
                nơi xảy ra vụ việc (Thiệt hại trên 10 triệu đồng) <br />- Tài
                liệu chứng minh thiệt hại : Hợp đồng, hoá đơn sửa chữa xe hoặc
                hoá đơn chứng từ liên quan đến việc điều trị vết thương (Thiệt
                hại về người)
              </p>
              <h3 className="mb-0 font-semibold text-base text-primaryColor">
                4. Mất cắp bộ phận, mất cắp, mất cướp toàn bộ xe
              </h3>
              <p className="mt-[4px] leading-normal mb-[1rem]">
                - Giấy tờ xe (Đăng ký, đăng kiểm, Giấy phép lái xe hợp lệ){' '}
                <br />- Đơn trình báo bị mất trộm, mất cướp xe cơ giới có xác
                nhận của cơ quan Công an tại khu vực bị mất. <br />
                Hoặc kết luận điều tra, quyết định đình chỉ điều tra, đình chỉ
                vụ án hình sự liên quan đến vụ mất trộm, mất cắp.
              </p>
              <h3 className="mb-0 font-semibold text-base text-primaryColor">
                5. Hỗ trợ chi phí thuê xe
              </h3>
              <p className="mt-[4px] leading-normal mb-[1rem]">
                - Hợp đồng thuê xe và Hoá đơn gốc
              </p>
            </div>
          </div>
        </div>
      </div>
      <PartnerInsurance />
      <ContactAgency />
    </div>
  );
};
export default IndemnifyService;
