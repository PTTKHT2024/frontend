import React from 'react';
import { Link } from 'react-router-dom';
import Tool from '../../common/Tool';


function Community() {
  return (
    <>    
      <div>
        <img
          className="my-sectionMargin_1 "
          src="/imgs/information/community_head.png"
          alt=""
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className=" inline-block text-mainTitleColor text-mainTitle font-sans pb-12 border-b-4 border-red-500">
          CỘNG ĐỒNG
        </h1>
      </div>
      {/* Ảnh 1 */}
      <div className=" max-w-full mx-auto">
        <div className="flex items-center mt-sectionMargin_1">
          <div className="w-1/2 ">
            <Link to="">
              <img
                src="/imgs/information/community_1.png"
                alt=""
                className="w-full"
              />
            </Link>
          </div>

          <div className="w-1/2 flex flex-col justify-center items-center text-center">
            <Link to="">
              <h2 className="text-mainTitleColor text-mainTitle font-sans">
                Đóng góp xã hội
              </h2>
            </Link>

            <p className="text-subInformationColor text-base font-sans py-8 px-16 font-medium">
              Nhằm góp phần xây dựng, phát triển bền vững và kiến tạo một tương
              lai tươi đẹp cho đất nước Việt Nam, Toyota Việt Nam luôn tích cực
              đóng góp cho cộng đồng thông qua nhiều hoạt động có ý nghĩa có quy
              mô rộng khắp trong các lĩnh vực: An toàn giao thông, Bảo vệ môi...
            </p>
            <Link to="">
              <button className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                Tìm hiểu
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Ảnh 2 */}
      <div className=" max-w-full mx-auto">
        <div className="flex items-center">
          <div className="w-1/2 flex flex-col justify-center items-center text-center">
            <Link to="">
              <h2 className="text-mainTitleColor text-mainTitle font-sans">
                Quỹ Toyota Việt Nam
              </h2>
            </Link>

            <p className="text-subInformationColor text-base font-sans py-8 px-16 font-medium">
              Toyota Việt Nam luôn không ngừng nỗ lực để trở thành một “doanh
              nghiệp xanh” thông qua việc thực hiện nhiều hoạt động như: đầu tư
              và ứng dụng các công nghệ thân thiện với môi trường, hỗ trợ đại lý
              và các nhà cung cấp cùng thực hiện “chu trình xanh” khép kín, cũng
              như thực hiện nhiều hoạt...
            </p>
            <Link to="">
              <button className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                Tìm hiểu
              </button>
            </Link>
          </div>
          <div className="w-1/2 ">
            <Link to="">
              <img
                src="/imgs/information/community_2.png"
                alt=""
                className="w-full"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Ảnh 3 */}
      <div className=" max-w-full mx-auto">
        <div className="flex items-center ">
          <div className="w-1/2 ">
            <Link to="">
              <img
                src="/imgs/information/community_3.png"
                alt=""
                className="w-full"
              />
            </Link>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center text-center">
            <Link to="">
              <h2 className="text-mainTitleColor text-mainTitle font-sans">
                Phát triển bền vững
              </h2>
            </Link>

            <p className="text-subInformationColor text-base font-sans py-8 px-16 font-medium">
              Sự bền vững là một phần trong các Nguyên tắc hướng dẫn của Toyota
              kể từ khi thành lập. Việc quản lý sự bền vững của chúng tôi được
              dẫn dắt bởi Ban lãnh đạo Công ty và được thực hiện bởi toàn bộ các
              phòng ban trong công ty. Báo cáo bền vững dựa trên đánh giá hàng
              năm về các chỉ tiêu quan trọng...
            </p>
            <Link to="">
              <button className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                Tìm hiểu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
