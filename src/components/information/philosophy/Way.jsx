import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { philosophy } from '../../data/PhilosophyData';

const Way = () => {
  const location = useLocation();
  const relatedContent = philosophy.filter(
    (item) => item.route !== location.pathname
  );
  return (
    <>
      <div className="flex container max-w-[1300px] mt-[100px] mb-[-120px] ml-[90px]">
        <div className="container max-w-[804px] bg-neutral-100 pl-[56px] pr-[61px]">
          <h1 className="text-mainTitleColor text-mainTitle mb-[8px] mt-[36px]">
            Phương Thức Toyota 2020
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
          <p className="px-[20px] py-[24px] text-subTitleColor font-semibold">
            Phương Thức Toyota 2020 gồm 10 giá trị được mô tả bằng từ ngữ đơn
            giản nhằm khuyến khích hành động tích cực của các thành viên. Điều
            này khích lệ sự thay đổi tư duy của mỗi người cũng như thay đổi văn
            hóa theo từng nơi làm việc, để ngày càng có nhiều thành viên tại
            Toyota vượt qua được những điều không thể.
          </p>
          <div className="border border-gray-300 border-1"></div>
          <div className="px-[20px] py-[24px]"></div>

          {/* Image 1 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-1.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold ml-[30px] mt-[110px]">
                Hành động vì người khác
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px] ">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Chúng ta phấn đấu lấy quan điểm của khách hàng và các bên liên
                quan làm điểm cốt lõi trong những nỗ lực hàng ngày. Khi đặt mình
                vào vị trí của người khác, chúng ta có thể biến những điều không
                thể thành có thể.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-2.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold ml-[30px] mt-[110px]">
                Làm việc với sự chính trực
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Chúng ta luôn cân nhắc xem công việc ngày hôm nay sẽ đưa chúng
                ta đến đâu và nó tác động như thế nào đến những người xung
                quanh. Chúng ta tạo ra con đường dẫn đến mục tiêu của mình với
                sự chính trực và trung thực.
              </p>
            </div>
          </div>
          {/* 2 */}

          {/* 3 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-3.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold ml-[-16px] mt-[110px]">
                Thúc đẩy sự hiếu kỳ
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Dành sự quan tâm của mình cho mọi thứ, chúng ta luôn đặt câu hỏi
                để khám phá cơ chế đằng sau các hiện tượng. Tư duy này tạo ra
                những ý tưởng mới.
              </p>
            </div>
          </div>
          {/* 3 */}

          {/* 4 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-4.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold mr-8 mt-[110px]">
                Quan sát kỹ lưỡng
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Con người cảm nhận mọi thứ bằng bản năng theo những cách mà máy
                móc không thể làm được. Chúng ta tổng hợp các dữ liệu cứng trong
                khi tự mình quan sát, cảm nhận và suy luận tình huống, thực hiện
                Genchi Genbutsu để nhanh chóng tìm ra các giải pháp tốt nhất và
                sáng tạo nhất.
              </p>
            </div>
          </div>
          {/* 4 */}
          {/* 5 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-5.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold ml-2 mt-[110px]">
                Luôn làm tốt hơn nữa
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Hôm nay và hàng ngày, chúng ta tự rèn giũa các kỹ năng của bản
                thân và của người khác với trái tim, khối óc và thân thể để đáp
                ứng nhu cầu ngày càng tăng của khách hàng.
              </p>
            </div>
          </div>
          {/* 5 */}
          {/* 6 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-6.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold ml-[30px] mt-[110px]">
                Tiếp tục nhiệm vụ cải tiến
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Chúng ta tin tưởng vào khả năng tự nhiên của con người để biến
                mọi thứ trở nên tốt đẹp hơn. Mọi cải tiến, bất kể quy mô, đều có
                giá trị. Chúng ta khuyến khích những tư duy đổi mới không ngừng
                và ý tưởng mới đột phá. Chúng ta nỗ lực đổi mới bằng Kaizen
                (Liên tục cải tiến), không bao giờ chấp nhận hiện trạng.
              </p>
            </div>
          </div>
          {/* 6 */}
          {/* 7 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-7.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold ml-[30px] mt-[110px]">
                Tạo không gian để phát triển
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Tập trung vào những gì thiết yếu, chúng ta loại bỏ lãng phí và
                quản lý cẩn thận các nguồn lực của mình để tạo ra không gian
                phát triển. Đây là nền tảng cho sự ứng biến nhanh và sự khai phá
                những ý tưởng mới cho tương lai.
              </p>
            </div>
          </div>
          {/* 7 */}
          {/* 8 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-8.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold ml-[30px] mt-[110px]">
                Đón nhận sự cạnh tranh
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Chúng ta đón nhận sự cạnh tranh, không ích kỷ cá nhân. Điều đó
                thúc đẩy chúng ta cải thiện và phục vụ khách hàng cũng như xã
                hội tốt hơn, tạo ra nhiều giá trị và trải nghiệm tốt hơn.
              </p>
            </div>
          </div>
          {/* 8 */}
          {/* 9 */}
          <div className="relative flex mb-[20px]">
            <img
              src="/imgs/information/philosophy/way-background-9.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold ml-[30px] mt-[110px]">
                Thể hiện sự tôn trọng mọi người
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Không có công việc nào là đơn độc. Không có công việc nào là nỗ
                lực của chỉ một người. Chúng ta tận dụng tối đa các quan điểm đa
                dạng đế biến sự khác biệt thành sức mạnh tập thể. Với sự tôn
                trọng nền tảng dành cho tất cả mọi người, chúng ta tạo ra môi
                trường mà tất cả mọi người cảm thấy được chào đón, an toàn được
                lắng nghe và mọi người đều có thể đóng góp hết sức mình cho
                những mục tiêu có ý nghĩa.
              </p>
            </div>
          </div>
          {/* 9 */}
          {/* 10 */}
          <div className="relative flex mb-[36px]">
            <img
              src="/imgs/information/philosophy/way-background-10.png"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col max-w-[300px] h-[420px]">
              <p className="text-white text-[24px] ml-[30px] font-bold mt-[50px]">
                Tại Toyota, chúng tôi...
              </p>
              <p className=" text-black flex text-[24px] justify-center font-bold mr-8 mt-[110px]">
                Cảm ơn mọi người
              </p>
            </div>
            <div className="absolute inset-y-2 right-32 flex mt-[20px] w-[236px]">
              <p className="text-[12px] text-mainTitleColor font-semibold">
                Chúng ta tồn tại là nhờ có khách hàng, đối tác, các thành viên,
                các bên liên quan và cộng đồng của chúng ta. Chúng ta hãy nói
                “cảm ơn” với tất cả những người chúng ta gặp ngày hôm nay.
              </p>
            </div>
          </div>
          {/* 10 */}
        </div>

        {/* NOI DUNG LIEN QUAN */}
        <div className="ml-3 max-w-[320px] mr-[20px]">
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
                  <div className="inline-block text-3xl mb-[6px] ml-[4px]">
                    &rsaquo;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Way;
