import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { philosophy } from '../../data/PhilosophyData';

const VisionPhilosophy = () => {
  const location = useLocation();
  const relatedContent = philosophy.filter(
    (item) => item.route !== location.pathname
  );
  return (
    <>
      <div className="flex container max-w-[1300px] mt-[100px] mb-[-120px] ml-[90px]">
        <div className="container max-w-[804px] bg-neutral-100 pl-[56px] pr-[61px]">
          <h1 className="text-mainTitleColor text-mainTitle mb-[8px] my-[20px]">
            Tầm nhìn & Triết lý Toyota Việt Nam
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
            Toyota Việt Nam sẽ nỗ lực để dẫn đầu xu hướng chuyển động đột phá và
            nâng tầm cuộc sống cho người dân Việt Nam.
          </p>
          <div className="border border-gray-300 border-1 mb-[16px]"></div> 

          {/* TẦM NHÌN */}
          <div className="">
            <h2 className=" text-[34px] text-primaryColor font-bold mb-[16px] text-center ">
              TẦM NHÌN TOYOTA VIỆT NAM
            </h2>
            <p className="text-subTitleColor text-justify">
              Với mong muốn được nhìn thấy “Nụ cười của khách hàng” thông qua
              việc đáp ứng vượt trên sự mong đợi của khách hàng, chúng tôi đặt
              mục tiêu chất lượng ở tầm cao mới, trong đó chất lượng trong công
              việc trở thành nền tảng cho chất lượng sản phẩm, hoạt động bán
              hàng và dịch vụ của Toyota. Bên cạnh đó, chúng tôi sẽ luôn nỗ lực
              đóng góp cho ngành công nghiệp ô tô Việt Nam, tôn trọng môi trường
              cũng như cộng đồng và trở thành công ty đáng tin cậy nhất Việt
              Nam.
            </p>
            <p className="text-subTitleColor text-justify mb-[22px]">
              Chúng tôi sẽ tạo ra sức mạnh để đạt được những mục tiêu đầy thách
              thức này nhờ những thành viên tài năng và đam mê, luôn nghĩ ra một
              cách làm tốt hơn trong công việc.
            </p>
            <div className="inline-block ml-[-56px] bg-[url('/imgs/information/philosophy/vision-philosophy-1.jpeg')] w-[804px] h-[536px]"></div>
          </div>
          <div>
            <h2 className=" text-[34px] text-primaryColor font-bold mb-[45px] text-center mt-[70px]">
              TRIẾT LÝ KINH DOANH TOYOTA VIỆT NAM
            </h2>
            <div className="sub-title">
              <div className=" flex mb-1">
                <img
                  className="w-[60px] h-[50px]"
                  src="/imgs/information/philosophy/vision-philosophy-icon-1.png"
                  alt=""
                />
                <div className=" ml-[30px]">
                  <h2 className=" text-[24px] text-mainTitleColor font-semibold text-justify mb-[6px]">
                    Sản xuất và kinh doanh
                  </h2>
                  <p className="text-mainTitleColor text-justify mb-[12px]">
                    Nền tảng chất lượng, vươn tới thành công
                  </p>
                </div>
              </div>
              <p className="text-subTitleColor text-justify mb-[32px]">
                Tri ân sâu sắc đối với đất nước và con người Việt Nam, Toyota
                Việt Nam đã và đang dành nhiều tâm sức trong việc đầu tư công
                nghệ, mở rộng sản xuất, luôn nỗ lực để tạo ra những sản phẩm
                chất lượng cao với tiêu chuẩn toàn cầu và mức giá cạnh tranh;
                ghi nhận và tôn vinh những cống hiến của các nhân viên, đồng
                thời khơi dậy, phát huy năng lực của toàn đội ngũ; luôn chia sẻ
                cơ hội phát triển, sự thành công cùng các đối tác, và hơn hết,
                chúng tôi sẽ tiếp tục đồng hành và nâng tầm cuộc sống cho các
                khách hàng yêu mến, tin dùng sản phẩm Toyota.
              </p>
            </div>
            {/* Sub 2 */}
            <div className="sub-title">
              <div className=" flex mb-1">
                <img
                  className="w-[60px] h-[70px]"
                  src="/imgs/information/philosophy/vision-philosophy-icon-2.png"
                  alt=""
                />
                <div className=" ml-[30px]">
                  <h2 className=" text-[24px] text-mainTitleColor font-semibold text-justify mb-[6px]">
                    Bảo vệ môi trường
                  </h2>
                  <p className="text-mainTitleColor text-justify mb-[12px]">
                    Phát triển bền vững cùng xã hội
                  </p>
                </div>
              </div>
              <p className="text-subTitleColor text-justify mb-[32px]">
                Ngay từ những ngày đầu thành lập, Toyota Việt Nam đã luôn phấn
                đấu để trở thành một “Doanh nghiệp xanh”. Không chỉ nỗ lực giảm
                thiểu tối đa tác hại đến môi trường, đầu tư nghiên cứu và ứng
                dụng các công nghệ thân thiện với môi trường tại nhà máy, chúng
                tôi còn hỗ trợ đại lý cũng như các nhà cung cấp thực hiện các
                hoạt động cải thiện và bảo vệ môi trường để hoàn thiện một “Chu
                trình xanh khép kín”. Bên cạnh đó, nhiều chương trình lớn về bảo
                vệ môi trường với nhiều hoạt động thiết thực, có ý nghĩa của
                Toyota Việt Nam, đã nhận được sự đánh giá cao và hưởng ứng mạnh
                mẽ của toàn xã hội, đặc biệt là thế hệ trẻ.
              </p>
            </div>
            {/* Sub 3 */}
            <div className="sub-title">
              <div className=" flex mb-1">
                <img
                  className="w-[60px] h-[60px]"
                  src="/imgs/information/philosophy/vision-philosophy-icon-3.png"
                  alt=""
                />
                <div className=" ml-[30px]">
                  <h2 className=" text-[24px] text-mainTitleColor font-semibold text-justify mb-[6px]">
                    Đóng góp cho xã hội
                  </h2>
                  <p className="text-mainTitleColor text-justify mb-[12px]">
                    Hỗ trợ và chia sẻ với cộng đồng
                  </p>
                </div>
              </div>
              <p className="text-subTitleColor text-justify mb-[64px]">
                Song song với việc hoàn thành mục tiêu kinh doanh, chúng tôi nỗ
                lực để trở thành một công dân tốt trong cộng đồng sở tại thông
                qua việc triển khai và thực hiện nhiều hoạt động, chương trình
                lớn có ý nghĩa xã hội sâu sắc trong nhiều lĩnh vực như: an toàn
                giao thông, giáo dục và phát triển nguồn nhân lực, bảo vệ môi
                trường và văn hóa - xã hội. Đặc biệt, ý thức được vai trò quan
                trọng của nhân tố con người trong sự thành công của doanh nghiệp
                và sự phồn vinh của đất nước, chúng tôi luôn không ngừng tạo
                điều kiện cũng như tăng cường đầu tư cho việc cải thiện chất
                lượng giáo dục và phát triển nguồn nhân lực tại Việt Nam. Trên
                tất cả, những điều này được chúng tôi xây dựng bằng niềm tin và
                trách nhiệm đối với sự phát triển của ngành công nghiệp ô tô nói
                riêng, của Việt Nam nói chung, cũng như sự trân trọng với môi
                trường, xã hội và con người Việt Nam.
              </p>
            </div>
          </div>
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

export default VisionPhilosophy;
