import React, { useState } from 'react';
import YoutubeEmbed from '../../common/YoutubeEmbed';
const Content = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const renderContent = () => {
    if (selectedValue === 'image') {
      return (
        <div>
          <div className="flex justify-between mx-[120px]">
            <img
              className="w-[300px]"
              src="/imgs/technology/tnga_003_3_en.png"
              alt=""
            />

            <img
              className="w-[300px]"
              src="/imgs/technology/tnga_003_04.jpg"
              alt=""
            />

            <img
              className=" w-[300px]"
              src="/imgs/technology/tnga_003_05.jpg"
              alt=""
            />
          </div>
        </div>
      );
    } else if (selectedValue === 'video') {
      return (
        <div className="h-[180px] w-[300px] mt-[40px ml-[120px]">
          <YoutubeEmbed
            title="Hệ thống Hybrid của động cơ 1.8 cấu tạo và hoạt động như thế nào?"
            src="https://www.youtube.com/embed/e-LbRfjz2Nc"
          />

          <div className="description mt-[12px] hover:font-semibold">
            Hệ thống Hybrid của động cơ 1.8 cấu tạo và hoạt động như thế nào?
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="mt-[160px] mb-[60px]">
        <img
          className=" w-full h-[400px]"
          src="/imgs/technology/banner-tnga.jpg"
          alt="anh banner"
        />
      </div>
      <div className="container mt-[60px] max-w-[1300px] mt-auto">
        <h1 className="h-[40px] flex items-center pl-3 border-l-4 border-red-600 text-2xl leading-4 text-black mb-4 font-semibold">
          VỀ TNGA
        </h1>
        <p className="text-base text-justify mb-[32px]">
          TOYOTA NEW GLOBAL ARCHITECHTURE (TNGA) Việc thay đổi của Toyota nhằm
          tạo ra những chiếc xe tốt hơn bao giờ hết. Thông qua Định hướng thiết
          kế toàn cầu mới của Toyota (TNGA), Toyota đã tái thiết kế toàn bộ cấu
          trúc khung gầm củng cố nền tảng cốt lõi và mang đến cảm giác lái tuyệt
          vời cho khách hàng.
        </p>
        <img
          className="pt-[32px] pb-[32px]"
          src="/imgs/technology/image-tnga-1.png"
          alt=""
        />
        <h2 className="font-bold text-[24px] mb-[32px] mt-[32px]">
          1. GIỚI THIỆU VỀ ĐỊNH HƯỚNG THIẾT KẾ TOÀN CẦU MỚI CỦA TOYOTA - TNGA
        </h2>
        <h3 className="text-[16px] font-bold mb-[32px]">A. TNGA LÀ GÌ?</h3>
        <div className="title-paragraph text-[16px] text-justify">
          <p className="mb-[24px]">
            TNGA là một chương trình đổi mới cấu trúc, thay đổi cấu ​​trúc cơ
            bản của phương tiện. Thông qua TNGA, Toyota đang tái thiết kế hoàn
            toàn bộ phận truyền động (động cơ, bộ phận truyền số, HEV) và khung
            cơ bản (khung gầm). Với sự cải tiến về sản phẩm, chúng tôi có thể
            tạo ra một sự cải tiến vượt bậc và nhanh chóng trên cả 3 mặt vận
            hành bao gồm: di chuyển, đổi hướng và dừng.
          </p>
          <p className="mb-[24px]">
            TNGA được xây dựng trên hai trụ cột – Sức mạnh cốt lõi (Nền tảng
            được chia sẻ trên nhiều mẫu xe) và nhấn mạnh cá tính. (Phần thân
            trên thay đổi theo từng mẫu xe và thị trường) Sử dụng TNGA, Toyota
            đã thay đổi chiếc xe từ chính cấu trúc nền tảng, hạ thấp độ cao của
            mui xe, hạ thấp trọng tâm của xe và thực hiện các cải tiến khác để
            cải thiện và nâng cao hiệu suất vận hành.
          </p>
          <p className="mb-[24px]">
            Là xe lai nghĩa là kết hợp sử dụng 2 bộ truyền động, một động cơ
            chạy xăng và một mô tơ chạy điện. Đặc điểm quan trọng nhất của xe
            Hybrid là khả năng tiết kiệm nhiên liệu, thân thiện môi trường, vận
            hành mạnh mẽ và yên tĩnh. Hơn nữa, công nghệ pin hybrid là một phần
            quan trọng tạo nên sự vận hành mạnh mẽ và độ tin cậy cao.
          </p>

          <h3 className="text-[16px] font-bold mb-[32px]">
            B. 5 Giá trị trọng tâm Toyota tập trung để tạo ra những chiếc xe tốt
            hơn bao giờ hết
          </h3>
          <div className="title-paragraph text-[16px] text-justify">
            <ul className="list-disc ml-[45px] mb-[32px]">
              <li>
                Trải nghiệm lái: Chiếc xe mang đến trải nghiệm lái tuyệt vời cho
                khách hàng là chiếc xe đạt sự cân bằng về chiều cao.
              </li>
              <li>
                Sự thoải mái: Thiết kế mới mang đến sự thoải mái, đánh thức mọi
                giác quan, không chỉ là cảm giác thư giãn, dễ chịu cho người lái
                mà cho cả hành khách trên xe
              </li>
              <li>
                Thân thiện với người dùng: Là một chiếc xe mang đến sự đến cảm
                giác lái thân thiện, dễ dàng vận hành trong mọi hành trình
              </li>
              <li>
                Niềm tự hào của người chủ sở hữu: Tạo ra chiếc xe đánh thức cảm
                xúc và dẫn đầu thế hệ mới
              </li>
              <li>
                Sự an toàn: Nỗ lực hướng đến sự an toàn tuyệt đối (không có
                thương vong vì tai nạn giao thông) mang đến sự an tâm cho hành
                khách.
              </li>
            </ul>

            <img
              src="/imgs/technology/image-tnga-2.png"
              alt=""
              className="block ml-auto mr-auto pt-[32px] pb-[32px]"
            />
          </div>
        </div>
        <h2 className="font-bold text-[24px] mb-[32px] mt-[32px]">
          2. LỢI ÍCH CỦA TNGA?
        </h2>
        <div className="content-h2"></div>
        <p>
          Khả năng vận hành vượt qua sự mong đợi nhờ Định hướng thiết kế toàn
          cầu mới của Toyota tái định nghĩa cảm giác lái và sự thoải mái cho
          hành khách.
        </p>
        {/* P1 */}
        <p className="mt-[32px] text-center">
          <b>
            Tính linh hoạt: Giảm thiểu các chuyển động thân xe vặn xoắn, phần
            trọng tâm thấp hơn và hệ thống treo hoàn toàn mới để vận hành sắc
            sảo hơn và khả năng xử lý nhanh nhạy hơn.
          </b>
        </p>
        <div className="flex max-w-[1000px] justify-between ml-auto mr-auto mt-[60px] mb-[60px] text-center ">
          <div className="flex flex-col gap-20">
            <img
              className=""
              src="/imgs/technology/image-tnga-6.png"
              alt=" Trọng tâm được hạ thấp làm giảm lực xô ngang"
            />
            <div className="text-center">
              Trọng tâm được hạ thấp làm giảm lực xô ngang
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <img
              className=""
              src="/imgs/technology/image-tnga-7.png"
              alt="Hệ thống treo"
            />
            <div className="w-[400px]">
              Hệ thống treo hoàn toàn mới làm tăng cảm giác lái và cải thiện độ
              êm ái
            </div>
          </div>
        </div>

        {/* P2 */}
        <p className="mt-[32px] text-center">
          <b>Độ ổn định: Thân xe tăng cường độ cứng vững</b>
        </p>
        <div className="flex max-w-[1000px] justify-between ml-auto mr-auto mt-[60px] mb-[60px] text-center ">
          <div className="flex flex-col gap-4">
            <img
              className="mb-[30px]"
              src="/imgs/technology/image-tnga-8.png"
              alt="Cửa trước và sau"
            />
            <div className="max-w-[450px] ">Cửa trước và sau</div>
          </div>

          <div className="flex flex-col gap-8">
            <img
              className="mb-[30px]"
              src="/imgs/technology/image-tnga-9.png"
              alt="Vách ngăn khoang hành lý"
            />
            <div className="max-w-[450px]">Vách ngăn khoang hành lý</div>
          </div>
        </div>
        {/* P3 */}
        <p className="mt-[32px] text-center">
          <b>
            Cải thiện tầm nhìn: Bảng điều khiển thấp hơn, cột chữ A nhỏ hơn và
            cửa sổ cao hơn giúp cải thiện tầm nhìn của người lái.
          </b>
        </p>
        <div className="flex max-w-[1000px] justify-between mx-auto mt-[60px] mb-[60px] text-center ">
          <div className="flex flex-col gap-4">
            <img
              className="mb-[30px]"
              src="/imgs/technology/image-tnga-10.png"
              alt="Bảng điều khiển thấp hơn"
            />
            <div className="max-w-[450px] ">Bảng điều khiển thấp hơn</div>
          </div>

          <div className="flex flex-col gap-14">
            <img
              className="mb-[30px]"
              src="/imgs/technology/image-tnga-11.png"
              alt="Vách ngăn khoang hành lý"
            />
            <div className="max-w-[450px]">
              Cột chữ A thu gọn lại và cửa sổ rộng hơn
            </div>
          </div>
        </div>
        <div className="flex mx-auto justify-between">
          <h2 className="h-[40px] flex items-center pl-3 border-l-4 border-red-600 text-2xl leading-4 text-black mb-4 font-semibold">
            TÌM HIỂU THÊM
          </h2>
          <div className="flex border border-gray-300 px-[16px] h-[40px]">
            <select
              className="max-w-full w-[200px] outline-0"
              id="list"
              onChange={handleSelectChange}
            >
              <option value="video">Video</option>
              <option value="image">Hỉnh ảnh</option>
            </select>
          </div>
        </div>
        {renderContent()}
      </div>
    </>
  );
};

export default Content;
