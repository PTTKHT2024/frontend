import React from 'react';
import Jumping from '../common/Jumping';
import { Link } from 'react-router-dom';

const ToyotaTechnology = () => {
  return (
    <>
      <section className="w-full bg-electrification_1">
        <div className="container mx-auto p-6">
          <Jumping>
            <div className="text-left font-black tracking-widest mb-10 mt-10">
              <h1 className="text-mainTitle text-mainTitleColor">
                TÌM HIỂU THÊM VỀ CÔNG NGHỆ TOYOTA
              </h1>
            </div>
          </Jumping>
          <div className="grid md:grid-cols-3 gap-x-16">
            <div className="group overflow-hidden">
              <div className="overflow-hidden">
                <Jumping>
                  <img
                    src="/imgs/electrification/toyota-xev-explore_1.jpeg"
                    alt="Điện hoá ô tô tại Toyota"
                    className="w-full h-[168px] object-cover rounded transition-transform duration-500 ease-in-out group-hover:scale-105" // Thay đổi duration và thêm ease-in-out
                  />
                </Jumping>
              </div>

              <Jumping>
                <div className="py-6 text-left">
                  <Link>
                    <h2 className="text-2xl font-sans font-bold underline group-hover:no-underline transition-all duration-500 ease-in-out">
                      ĐIỆN HOÁ Ô TÔ TẠI TOYOTA
                    </h2>
                  </Link>
                  <p className="text-subInformationColor py-2">
                    Chúng tôi cam kết phát triển dài sản phẩm điện khí hoá vừa
                    mang đến cho bạn trải nghiệm lái hứng khởi khi lái xe, vừa
                    đáp ứng nhu cầu về phong cách sống đa dạng của bạn.
                  </p>
                </div>
              </Jumping>
            </div>
            <div className="group overflow-hidden">
              <div className="overflow-hidden">
                <Jumping>
                  <img
                    src="/imgs/electrification/toyota-hev-explore.jpg"
                    alt="Công nghệ Toyota Hybrid"
                    className="w-full h-[168px] object-cover rounded transition-transform duration-500 ease-in-out group-hover:scale-105" // Thay đổi duration và thêm ease-in-out
                  />
                </Jumping>
              </div>

              <Jumping>
                <div className="py-6 text-left">
                  <Link>
                    <h2 className="text-2xl font-sans font-bold underline group-hover:no-underline transition-all duration-500 ease-in-out">
                      CÔNG NGHỆ TOYOTA HYBRID
                    </h2>
                  </Link>
                  <p className="text-subInformationColor py-2">
                    Trải nghiệm khả năng vận hành tối đa với dòng xe Hybrid tự
                    sạc của chúng tôi, đồng thời giảm lượng khí thải và tiết
                    kiệm chi phí nhiên liệu.
                  </p>
                </div>
              </Jumping>
            </div>
            <div className="group overflow-hidden">
              <div className=" overflow-hidden">
                <Jumping>
                  <img
                    src="/imgs/electrification/xev-explore-tnga.jpg"
                    alt="Kiến trúc toàn cầu mới Toyota"
                    className="w-full h-[168px] object-cover rounded transition-transform duration-500 ease-in-out group-hover:scale-105" // Thay đổi duration và thêm ease-in-out
                  />
                </Jumping>
              </div>
              <Jumping>
                <div className="py-6 text-left">
                  <Link>
                    <h2 className="text-2xl font-sans font-bold underline group-hover:no-underline transition-all duration-500 ease-in-out">
                      KIẾN TRÚC TOÀN CẦU MỚI TOYOTA
                    </h2>
                  </Link>
                  <p className="text-subInformationColor py-2">
                    Triết lý tạo ra những chiếc xe mới đang mở đường cho chúng
                    tôi tạo ra các mẫu xe Toyota mang lại trải nghiệm lái hấp
                    dẫn và hứng khởi hơn.
                  </p>
                </div>
              </Jumping>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToyotaTechnology;
