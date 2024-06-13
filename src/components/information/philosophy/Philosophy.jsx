import React from 'react';
import { Link } from 'react-router-dom';

const Philosophy = () => {
  return (
    <>
      {/* Triết lý Toyota toàn cầu */}
      <div className="max-w-full mx-auto h-[calc(100vh-94px-59.5px)] mt-[94px]">
        <div className="flex items-center h-full">
          {/* Image 1 */}
          <div className="w-1/2 overflow-hidden h-full ">
            <img
              className="w-full h-full object-cover mt-[30px]"
              src="/imgs/information/philosophy-1.jpg"
              alt=""
            />
          </div>
          {/* Text 1 */}
          <div className="w-1/2 px-[72px]">
            <div className=" justify-center items-center text-center h-full ">
              <div className="">
                <img
                  className="w-[60px] h-[60px] block mx-auto "
                  src="/imgs/information/icon-philosophy-1.png"
                  alt=""
                />
              </div>
              <div className=" inline-block p-2 border-b-[3px] border-black w-[90px] mb-[28px]"></div>
              <h2 className="font-bold text-3xl leading-9 mb-[32px]">
                Triết lý Toyota toàn cầu
              </h2>
              <p className="text-subInformationColor text-sm font-medium mb-[32px]">
                Tinh thần sáng lập Toyota và các bước trong quá trình chuyển đổi
                thành một công ty cung cấp giải pháp di chuyển (Mobility).
              </p>
              <div className="relative group">
                <div className="absolute inset-0 transition-opacity duration-300">
                  <Link to="/information/company/philosophy/global-philosophy">
                    <button
                      className="px-[32px] py-[6px] bg-primaryColor text-[16px] font-bold text-white rounded-[20px]
                 hover:bg-white hover:text-primaryColor hover:border-2 hover:border-primaryColor"
                    >
                      TÌM HIỂU
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tầm nhìn Toyota toàn cầu */}
      <div className="max-w-full mx-auto h-[calc(100vh-94px-59.5px)]">
        <div className="flex items-center h-full">
          {/* Text 2 */}
          <div className="w-1/2 px-[72px]">
            <div className=" justify-center items-center text-center h-full ">
              <div className="">
                <img
                  className="w-[60px] h-[60px] block mx-auto "
                  src="/imgs/information/icon-philosophy-2.png"
                  alt=""
                />
              </div>
              <div className=" inline-block p-2 border-b-[3px] border-black w-[90px] mb-[28px]"></div>
              <h2 className="font-bold text-3xl leading-9 mb-[32px]">
                Tầm nhìn Toyota toàn cầu
              </h2>
              <p className="text-subInformationColor text-sm font-medium mb-[32px]">
                Toyota sẽ dẫn đầu tương lai của chuyển động, nâng tầm cuộc sống
                trên toàn thế giới với những cách thức di chuyển an toàn và đáng
                tin cậy nhất. Chúng tôi sẽ đạt được những mục tiêu đầy thách
                thức của mình bằng cách quy tụ tài năng và đam mê của những con
                người tin tưởng rằng sẽ luôn có cách tốt hơn.
              </p>
              <div className="relative group">
                <div className="absolute inset-0 transition-opacity duration-300">
                  <Link
                    to="/information/company/philosophy/vision
"
                  >
                    <button
                      className="px-[32px] py-[6px] bg-primaryColor text-[16px] font-bold text-white rounded-[20px]
                 hover:bg-white hover:text-primaryColor hover:border-2 hover:border-primaryColor"
                    >
                      TÌM HIỂU
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Image 2 */}
          <div className="w-1/2 overflow-hidden h-full ">
            <img
              className="w-full h-full object-cover "
              src="/imgs/information/philosophy-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ////////////////// */}
      {/* Tầm nhìn & Triết lý Toyota Việt Nam */}
      <div className="max-w-full mx-auto h-[calc(100vh-94px-59.5px)]">
        <div className="flex items-center h-full">
          {/* Image 3 */}
          <div className="w-1/2 overflow-hidden h-full ">
            <img
              className="w-full h-full object-cover "
              src="/imgs/information/philosophy-3.jpg"
              alt=""
            />
          </div>
          {/* Text 3 */}
          <div className="w-1/2 px-[72px]">
            <div className=" justify-center items-center text-center h-full ">
              <div className="">
                <img
                  className="w-[60px] h-[60px] block mx-auto "
                  src="/imgs/information/icon-philosophy-3.png"
                  alt=""
                />
              </div>
              <div className=" inline-block p-2 border-b-[3px] border-black w-[90px] mb-[28px]"></div>
              <h2 className="font-bold text-3xl leading-9 mb-[32px]">
                Tầm nhìn & Triết lý Toyota Việt Nam
              </h2>
              <p className="text-subInformationColor text-sm font-medium mb-[32px]">
                Toyota Việt Nam sẽ nỗ lực để dẫn đầu xu hướng chuyển động đột
                phá và nâng tầm cuộc sống cho người dân Việt Nam.
              </p>
              <div className="relative group">
                <div className="absolute inset-0 transition-opacity duration-300">
                  <Link
                    to="/information/company/philosophy/vision-philosophy
"
                  >
                    <button
                      className="px-[32px] py-[6px] bg-primaryColor text-[16px] font-bold text-white rounded-[20px]
                 hover:bg-white hover:text-primaryColor hover:border-2 hover:border-primaryColor"
                    >
                      TÌM HIỂU
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phương Thức Toyota 2020 */}
      <div className="max-w-full mx-auto h-[calc(100vh-94px-59.5px)] mb-[-122px]">
        <div className="flex items-center h-full">
          {/* Text 4 */}
          <div className="w-1/2 px-[72px]">
            <div className=" justify-center items-center text-center h-full ">
              <div className="">
                <img
                  className="w-[60px] h-[60px] block mx-auto "
                  src="/imgs/information/icon-philosophy-4.png"
                  alt=""
                />
              </div>
              <div className=" inline-block p-2 border-b-[3px] border-black w-[90px] mb-[28px]"></div>
              <h2 className="font-bold text-3xl leading-9 mb-[32px]">
                Phương Thức Toyota 2020
              </h2>
              <p className="text-subInformationColor text-sm font-medium mb-[32px]">
                Phương Thức Toyota 2020 gồm 10 giá trị được mô tả bằng từ ngữ
                đơn giản nhằm khuyến khích hành động tích cực của các thành
                viên. Điều này khích lệ sự thay đổi tư duy của mỗi người cũng
                như thay đổi văn hóa theo từng nơi làm việc, để ngày càng có
                nhiều thành viên tại Toyota vượt qua được những điều không thể.
              </p>
              <div className="relative group">
                <div className="absolute inset-0 transition-opacity duration-300">
                  <Link to="/information/company/philosophy/way">
                    <button
                      className="px-[32px] py-[6px] bg-primaryColor text-[16px] font-bold text-white rounded-[20px]
                 hover:bg-white hover:text-primaryColor hover:border-2 hover:border-primaryColor"
                    >
                      TÌM HIỂU
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Image 4 */}
          <div className="w-1/2 overflow-hidden h-full ">
            <img
              className="w-full h-full object-cover "
              src="/imgs/information/philosophy-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Philosophy;
