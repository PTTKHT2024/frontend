import React, { useState } from 'react';
import { FaAngleLeft, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const SpecificationCar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
        <div className="border border-solid border-1px border-gray-600 min-h-52 ">
          <div className="">
            <div
              className="relative flex justify-between font-bold py-6 px-7 items-center cursor-pointer transition duration-300 ease-in-out border border-solid border-1px border-gray-600"
              onClick={toggleExpand}
            >
              <h2 className="block text-base mx-0 font-bold">
                THÔNG TIN CHUNG
              </h2>
              <i className="text-primaryColor text-[20px] transition duration-300 ease-in-out font-black">
                {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
              </i>
            </div>
            {isExpanded && (
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
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificationCar;
