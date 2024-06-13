import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { philosophy } from '../../data/PhilosophyData'
const GlobalPhilosophy = () => {
  const location = useLocation();

  // Lọc ra các phần tử không trùng với đường dẫn hiện tại
  const relatedContent = philosophy.filter(
    (item) => item.route !== location.pathname
  );
  return (
    <>
      <div className="flex container max-w-[1300px] mt-[100px] mb-[-120px] ml-[90px]">
        <div className="container max-w-[804px] bg-neutral-100 pl-[56px] pr-[61px]">
          <h1 className="text-mainTitleColor text-mainTitle mb-[8px] mt-[36px]">
            Triết lý Toyota toàn cầu
          </h1>

          <div className="flex flex-row-reverse pb-[20px]">
            {/* Zalo Icon */}
            <a href="#!">
              <div className="flex w-[70px] h-[20px] bg-blue-700 justify-center rounded-[3px] ml-[10px]">
                <img
                  className="w-[18px] h-[18px] mt-[1px] mr-[4px] b-radius-[4px]"
                  src="/imgs/information/philosophy/Logo-Zalo-Arc.webp"
                  alt=""
                />
                <div className=" text-[11px] mt-[1px] text-center text-white">
                  Chia sẻ
                </div>
              </div>
            </a>
            {/* FB Icon */}
            <div>
              <a href="">
                <img
                  src="/imgs/information/philosophy/icon-facebook.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="border border-gray-300 border-1"></div>
          <p className="px-[20px] py-[24px] text-subTitleColor ">
            Tinh thần sáng lập Toyota và các bước trong quá trình chuyển đổi
            thành một công ty cung cấp giải pháp di chuyển (Mobility).
          </p>
          <div className="border border-gray-300 border-1"></div>
          <div className="px-[20px] py-[24px]"></div>
          <div className="border border-gray-300 border-1"></div>
          <img src="/imgs/information/philosophy/thap-toyota.png" alt="" />
          <p className="text-center mt-[16px] mb-[8px] text-subTitleColor">
            Tháp triết lý Toyota
          </p>
          {/* SU MENH */}
          <div className="">
            <h2 className="text-[32px] text-primaryColor font-bold text-center">
              SỨ MỆNH
            </h2>
            <h3 className="text-center mt-[25px] mb-[16px] text-[24px] font-semibold">
              Tạo ra hạnh phúc cho tất cả
            </h3>
            <p className="text-center text-subTitleColor ">
              Đặt hạnh phúc của người khác làm ưu tiên hàng đầu <br />
              Tạo ra sản phẩm tốt hơn với giá cả phải chăng hơn <br />
              Trân trọng từng giây và từng đồng <br />
              Nỗ lực và cống hiến tất cả sự khéo léo của mình <br />
              Luôn hướng vềphía trước, không lùi bước <br />
              Tin tưởng điều không thể là có thể
            </p>
          </div>
          <div className="border border-gray-300 border-1 w-[490px] mx-auto my-[50px]"></div>
          {/* TAM NHIN */}
          <div className="">
            <h2 className="text-[32px] text-primaryColor font-bold text-center">
              TẦM NHÌN
            </h2>
            <h3 className="text-center mt-[25px] mb-[16px] text-[24px] font-semibold">
              Tự do di chuyển cho mọi người
            </h3>
            <p className="text-subTitleColor text-justify">
              Trong một thế giới đa dạng và nhiều biến động, Toyota nỗ lực nâng
              cao chất lượng và sự đa dạng của các dịch vụ di chuyển. Chúng tôi
              mong muốn tạo ra những khả năng mới cho con người và tạo dựng mối
              quan hệ bền vững với hành tinh của chúng ta.
            </p>
          </div>
          <div className="border border-gray-300 border-1 w-[490px] mx-auto my-[50px]"></div>

          {/* GIA TRI */}
          <div className="">
            <h2 className="text-[32px] text-primaryColor font-bold text-center">
              GIÁ TRỊ
            </h2>
            <h3 className="text-center mt-[25px] mb-[16px] text-[24px] font-semibold">
              Phần mềm
            </h3>
            <p className="text-subTitleColor text-justify">
              Áp dụng trí tưởng tượng để cải thiện xã hội thông qua triết lý
              thiết kế ưu tiên con người trên hết. Thực hành Genchi Genbutsu để
              hiểu bản chất các hoạt động.
            </p>
            <h3 className="text-center mt-[25px] mb-[16px] text-[24px]  font-semibold">
              Phần cứng
            </h3>
            <p className="text-subTitleColor text-justify">
              Tạo ra một nền tảng vật lý cho phép di chuyển mọi người và mọi
              vật. Một hệ thống linh hoạt thay đổi bằng phần mềm.
            </p>
            <h3 className="text-center mt-[25px] mb-[16px] text-[24px]  font-semibold">
              Quan hệ đối tác
            </h3>
            <p className="text-subTitleColor text-justify pb-[40px]">
              Mở rộng khả năng của chúng ta bằng cách hợp nhất sức mạnh của các
              đối tác, cộng đồng, khách hàng và nhân viên để tạo ra sự tự do di
              chuyển và hạnh phúc cho tất cả.
            </p>
          </div>
        </div>
        {/* NOI DUNG LIEN QUAN */}
        <div className="ml-3 max-w-[360px] mr-[20px]">
          <h2 className="text-[28px] font-semibold mb-[20px]">
            NỘI DUNG LIÊN QUAN
          </h2>
          <div className="flex flex-col gap-[50px]">
            {relatedContent.map((item) => (
              <Link to={item.route} key={item.id} className="">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[320px] h-[220px] object-cover mb-[20px]"
                />
                <a className="text-[16px] text-mainTitleColor font-semibold">
                  {item.title}
                </a>
                <div className="flex items-center text-primaryColor font-semibold">
                  <a>XEM THÊM</a>
                  <div className="inline-block text-3xl mb-[6px] ml-[4px]">&rsaquo;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalPhilosophy;
