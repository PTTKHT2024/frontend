import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { philosophy } from '../../data/PhilosophyData';

const Vision = () => {
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
            Tầm nhìn Toyota toàn cầu
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
            Toyota sẽ dẫn đầu tương lai của chuyển động, nâng tầm cuộc sống trên
            toàn thế giới với những cách thức di chuyển an toàn và đáng tin cậy
            nhất. Chúng tôi sẽ đạt được những mục tiêu đầy thách thức của mình
            bằng cách quy tụ tài năng và đam mê của những con người tin tưởng
            rằng sẽ luôn có cách tốt hơn.
          </p>
          <div className="border border-gray-300 border-1"></div>
          <div className="px-[20px] py-[24px]"></div>

          <div className="">
            {/* TIEN PHONG */}
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-1.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Tiên Phong
                </h2>
                <p className="text-subTitleColor text-justify">
                  Toyota sẽ là người dẫn bước tiên phong. Chúng tôi sẽ nắm bắt
                  mọi cơ hội và đầu tư cho tương lai.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-2.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Tương lai của chuyển động
                </h2>
                <p className="text-subTitleColor text-justify">
                  Phát triển những mẫu xe mới và theo đuổi những cách thức mới
                  để kết nối công nghệ với con người.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-3.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Nâng tầm cuộc sống trên toàn thế giới
                </h2>
                <p className="text-subTitleColor text-justify">
                  Thông qua ý tưởng Monozukuri, tạo công ăn việc làm, phát triển
                  con người và đóng góp cho xã hội.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-4.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Cách thức di chuyển an toàn và đáng tin cậy cho con người
                </h2>
                <p className="text-subTitleColor text-justify">
                  An toàn cho khách hàng và nhân viên là ưu tiên hàng đầu.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-5.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Cam kết chất lượng
                </h2>
                <p className="text-subTitleColor text-justify">
                  Không ngừng nâng cao tiêu chuẩn của mình về độ tin cậy và mức
                  độ hài lòng của khách hàng.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-6.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Cải tiến
                </h2>
                <p className="text-subTitleColor text-justify">
                  Không ngừng Không ngừng theo đuổi việc tạo ra những chiếc xe
                  tốt hơn, tự làm mới chính mình, giới thiệu những công nghệ mới
                  và luôn đi trước thời đại.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-7.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Gìn giữ hành tinh
                </h2>
                <p className="text-subTitleColor text-justify">
                  Trái đất Cân nhắc đến vấn đề của Trái đất trong mọi việc làm,
                  nghiên cứu và phát triển các hệ thống, giải pháp thân thiện
                  với môi trường.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-8.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Vượt qua mọi sự mong đợi
                </h2>
                <p className="text-subTitleColor text-justify">
                  Dự đoán nhu cầu của khách hàng, mang đến những sản phẩm và
                  dịch vụ mà khách hàng cần và vượt qua mọi sự mong đợi của
                  khách hàng.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-9.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Nụ cười khách hàng
                </h2>
                <p className="text-subTitleColor text-justify">
                  Sự hài lòng của khách hàng được thể hiện rõ nhất ở nụ cười, là
                  sự ghi nhận và đánh giá cao những nỗ lực của chúng tôi.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-10.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Những mục tiêu đầy thách thức
                </h2>
                <p className="text-subTitleColor text-justify">
                  Luôn đặt ra những mục tiêu đầy thách thức và cùng nhau nỗ lực
                  để đạt được.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[65px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-11.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Quy tụ tài năng và đam mê của con người
                </h2>
                <p className="text-subTitleColor text-justify">
                  Sức mạnh của Toyota đến từ kỹ năng và sự đa dạng của các thành
                  viên và đối tác kinh doanh, từ cách giải quyết vấn đề và đưa
                  ra những ý tưởng mới.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="h-[90px] flex mb-[40px]">
              <img
                className="w-[80px] h-[80px]"
                src="/imgs/information/philosophy/vision-12.png"
                alt=""
              />
              <div className=" ml-[20px]">
                <h2 className=" text-[26px] text-primaryColor font-bold text-justify mb-[8px]">
                  Luôn có cách thức tốt hơn nữa
                </h2>
                <p className="text-subTitleColor text-justify">
                  Tinh thần Kaizen (Liên tục cải tiến) luôn phát huy và thách
                  thức tìm ra cách tốt hơn trong mọi việc chúng tôi làm, trong
                  mỗi ngày qua đi.
                </p>
              </div>
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

export default Vision;
