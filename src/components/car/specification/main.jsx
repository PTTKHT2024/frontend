import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { api } from '../../utils/AuthApi'; 
import { useParams } from 'react-router';
import { createMarkup, fileURL } from '../../utils/UtilsFunction';
import { Link } from 'react-router-dom';

const getCarById = async (id) => {
  try {
    const res = await api.get(`/cars/${id}`);
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.message);
  }
};

const SpecificationCar = () => {
   const [isGeneralInfoExpanded, setIsGeneralInfoExpanded] = useState(false);
   const [isEngineFrameExpanded, setIsEngineFrameExpanded] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);

   const params = useParams();
   const [car, setCar] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     const fetchBlog = async () => {
       try {
         const res = await getCarById(params.id);
         if (res.status === 200) {
           setCar(res.data.data);
         }
       } catch (err) {
         console.error('Error fetching blog:', err);
       } finally {
         setIsLoading(false);
       }
     };

     fetchBlog();
   }, []);

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
        {isLoading ? (
          <h1 className="font-bold text-4xl leading-[120%] my-8 mx-0"></h1>
        ) : (
          <h1 className="font-bold text-4xl leading-[120%] my-8 mx-0">
            THÔNG SỐ KỸ THUẬT {car.name}
          </h1>
        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.near_lamp}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.carCategory.name}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.fuel}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.origin}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.dimensions}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Chiều dài cơ sở (mm)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.base_length}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Chiều rộng cơ sở trước (mm)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.base_front_width}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Chiều rộng cơ sở sau (mm)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.base_back_width}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Khoảng sáng gầm xe (mm)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.light_undercarriage}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Bán kính vòng quay tối thiểu (m)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.minimum_rev_radius}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Dung tích bình nhiên liệu (L)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.fuel_capacity}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.engine_type}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Số xy lanh
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.number_of_xylanh}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Bố trí xy lanh
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.xylanh_layout}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Dung tích xy lanh (cc)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.xylanh_capacity}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Hệ thống phun nhiên liệu
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.fuel_system}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Loại nhiên liệu
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.fuel_category}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Công suất tối đa ((KW) HP/vòng/phút)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.power}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Mô men xoắn tối đa (Nm/vòng/phút)
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.momen}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.driver_type}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.gearbox}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.front_hang_system}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Sau
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.back_hang_system}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.drive_system}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.tire_backup}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Kích thước lốp
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.tire_size}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Lốp dự phòng
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.tire_backup}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.emissions}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.front_brake}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Sau
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.back_brake}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.fuel_consumption}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Kết hợp
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.combine_fuel_consumption}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Trong đô thị
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.urban_fuel_consumption}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.weight}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Trọng lượng tải tối đa
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.weight_load}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.near_lamp}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Đèn chiếu xa
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.far_lamp}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Hệ thống nhắc nhở đèn sáng
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.remind_light_system}
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Đèn sương mù
                        </td>
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.fog_light}
                          </td>
                        )}
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
                        {isLoading ? (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top"></td>
                        ) : (
                          <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                            {car.specification.luggage_capacity}
                          </td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificationCar;
