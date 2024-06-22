import React, { useState } from 'react';
import { FaAngleLeft, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Test from './test';

const SpecificationCar = () => {
   const [isGeneralInfoExpanded, setIsGeneralInfoExpanded] = useState(false);
   const [isEngineFrameExpanded, setIsEngineFrameExpanded] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);

   const toggleExpand = () => {
     setIsExpanded(!isExpanded);
   };

   const toggleGeneralInfo = () => {
     setIsGeneralInfoExpanded(!isGeneralInfoExpanded);
   };

   const toggleEngineFrame = () => {
     setIsEngineFrameExpanded(!isEngineFrameExpanded);
   };

  return (
    <>
      <div className="py-16 px-0 w-[1142px] max-w-full mt-24 mx-auto mb-0">
        <a
          href=""
          className="text-primaryColor cursor-pointer bg-transparent no-underline"
        >
          <i className="font-black inline-block leading-[1] not-italic mb-[-2px]">
            <FaAngleLeft />
          </i>
          DANH SÁCH CÁC MẪU XE
        </a>
        <h1 className="font-bold text-4xl leading-[120%] my-8 mx-0">
          THÔNG SỐ KỸ THUẬT INNOVA CROSS
        </h1>
        <p className="text-primaryColor mt-0 mb-4">
          Lưu ý: Công ty Ô tô Toyota Việt Nam được quyền thay đổi bất kỳ đặc
          tính nào mà không báo trước. Một số đặc tính kỹ thuật có thể khác so
          với thực tế.
        </p>
        <div className="border border-solid border-1px border-gray-600 ">
          <div className="">
            <div
              className="relative flex justify-between font-bold py-6 px-7 items-center cursor-pointer transition duration-300 ease-in-out border border-solid border-1px border-gray-600"
              onClick={toggleGeneralInfo}
            >
              <h2 className="block text-base mx-0 font-bold">
                THÔNG TIN CHUNG
              </h2>
              <i className="text-primaryColor text-[20px] transition duration-300 ease-in-out font-black">
                {isGeneralInfoExpanded ? <FaAngleUp /> : <FaAngleDown />}
              </i>
            </div>
            {isGeneralInfoExpanded && (
              <div className="block">
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Số chỗ
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Số chỗ
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Kiểu dáng
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Kiểu dáng
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Nhiên liệu
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Nhiên liệu
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Xuất xứ
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Xuất xứ
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border border-solid border-1px border-gray-600 ">
          <div className="">
            <div
              className="relative flex justify-between font-bold py-6 px-7 items-center cursor-pointer transition duration-300 ease-in-out border border-solid border-1px border-gray-600"
              onClick={toggleEngineFrame}
            >
              <h2 className="block text-base mx-0 font-bold">
                ĐỘNG CƠ & KHUNG XE
              </h2>
              <i className="text-primaryColor text-[20px] transition duration-300 ease-in-out font-black">
                {isEngineFrameExpanded ? <FaAngleUp /> : <FaAngleDown />}
              </i>
            </div>
            {isEngineFrameExpanded && (
              <div className="block">
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Kích thước
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Kích thước tổng thể (D x R x C) (mm x mm x mm)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Chiều dài cơ sở (mm)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Chiều rộng cơ sở trước (mm)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Chiều rộng cơ sở sau (mm)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Khoảng sáng gầm xe (mm)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Bán kính vòng quay tối thiểu (m)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Dung tích bình nhiên liệu (L)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Động cơ thường
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Loại động cơ
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Số xy lanh
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Bố trí xy lanh
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Dung tích xy lanh (cc)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Hệ thống phun nhiên liệu
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Loại nhiên liệu
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Công suất tối đa ((KW) HP/vòng/phút)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Mô men xoắn tối đa (Nm/vòng/phút)
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Hệ thống truyền động
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Hệ thống truyền động
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Hộp số
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Hộp số
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Hệ thống treo
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Trước
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Sau
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Hệ thống lái
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Trợ lực tay lái
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Vành & lốp xe
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Loại vành
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Kích thước lốp
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Lốp dự phòng
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Tiêu chuẩn khí thải
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Tiêu chuẩn khí thải
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Phanh
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Trước
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Sau
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Tiêu thụ nhiên liệu (L/100km)
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Ngoài đô thị
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Kết hợp
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Trong đô thị
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Trọng lượng
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Trọng lượng không tải
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Trọng lượng tải tối đa
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border border-solid border-1px border-gray-600 ">
          <div className="">
            <div
              className="relative flex justify-between font-bold py-6 px-7 items-center cursor-pointer transition duration-300 ease-in-out border border-solid border-1px border-gray-600"
              onClick={toggleExpand}
            >
              <h2 className="block text-base mx-0 font-bold">TIỆN NGHI</h2>
              <i className="text-primaryColor text-[20px] transition duration-300 ease-in-out font-black">
                {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
              </i>
            </div>
            {isExpanded && (
              <div className="block">
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Cụm đèn
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Đèn chiếu gần
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Đèn chiếu xa
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Hệ thống nhắc nhở đèn sáng
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Đèn sương mù
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border-t-2">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Khoang hành lý
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Khoang hành lý
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
        <Test />
      </div>
    </>
  );
};

export default SpecificationCar;
