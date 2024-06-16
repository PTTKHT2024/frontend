import React, { useEffect, useRef, useState } from 'react';
import Jumping from '../common/Jumping';
import CarSearch from './CarSearch';
import ElectrificationVideoReview from './ElectricficationVideoReview';
import { carElectrification as data } from '../data/ElectricficationVideoReviewData';
import Learnmore from './LearnMore';
import ScaleOnScroll from '../common/ScaleOnScroll';
function PureElectricTechnology() {
  const textRef = useRef(null);
  const [scrollYValue, setScrollYValue] = useState(0);

  const handleScroll = () => {
    setScrollYValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickScrollMouse = () => {
    const element = document.getElementById('banner-description');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="w-full h-max mt-[94px] relative bg-black">
        <div className="">
          <video
            autoPlay="autoplay"
            preload="metadata"
            loop="loop"
            muted="muted"
            src="/video/masthead-bev.mp4"
            className="w-screen"
          ></video>
        </div>

        <div className="flex flex-col container absolute left-0 right-0 top-0 bottom-0 justify-start">
          <div className="h-screen flex justify-end flex-col">
            <p
              className="uppercase text-white font-bold text-[50px] w-full h-max tracking-wide animate-slide-in pb-[20px]"
              ref={textRef}
              id="banner-description"
            >
              công nghệ thuần điện toyota
            </p>
            <span
              className={`${
                scrollYValue === 0
                  ? 'opacity-1 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } transition-all duration-[500ms] w-[30px] h-[50px] border-[2px] border-white ml-auto mr-auto rounded-3xl relative cursor-pointer after:absolute after:right-0 after:left-0 after:top-[0%]  after:content-[''] after:animate-sweep-to-bottom after:mx-auto after:rounded-full after:block after:w-1.5 after:bg-white after:h-1.5`}
              onClick={handleClickScrollMouse}
            ></span>
          </div>

          <div className="h-[40%]">
            <p className="text-white text-base mb-8">
              <Jumping>
                Những mẫu xe thuần điện thúc đẩy hành trình chúng tôi hướng tới
                tương lai bền vững hơn thông qua điện khí hoá. Với xe thuần
                điện, bạn vừa có thể tận hưởng khả năng tăng tốc tức thì, kèm
                theo khả năng vận hành mượt mà và sự yên tĩnh đáng kinh ngạc -
                vừa giảm lượng khí thải carbon.
                <br />
              </Jumping>

              <Jumping>
                <br />
                Đến năm 2030, chúng tôi đặt mục tiêu ra mắt 3,5 triệu xe thuần
                điện trên toàn cầu, làm nền tảng để đưa chúng tôi đến gần với
                mục tiêu trung hòa carbon tới năm 2050.
              </Jumping>
            </p>
          </div>
        </div>
      </section>
      <ElectrificationVideoReview data={data} id={2} />
      <section>
        <div className="max-w-full h-[637]]">
          <div className="flex items-center h-[637]">
            <div className="w-1/2 flex flex-col  items-center text-left h-[637]">
              <Jumping>
                <h2 className="container text-mainTitleColor text-5xl font-bold px-16">
                  NGUỒN NĂNG LƯỢNG SẠCH, TIẾT KIỆM NHIÊN LIỆU
                </h2>
              </Jumping>

              <Jumping>
                <p className=" text-left text-subInformationColor text-base font-medium py-8 px-16">
                  Với khả năng chạy hoàn toàn bằng điện, dòng xe thuần điện được
                  biết đến bởi khả năng vận hành êm ái, tĩnh lặng, đồng thời
                  không phát ra khí thải.
                  <br /> <br />
                  Xe thuần điện không tạo ra bất kỳ khí thải nào, giúp cho mỗi
                  hành trình của bạn đều xanh, sạch và bền vững. ​
                </p>
              </Jumping>
            </div>
            <div className="w-1/2 overflow-hidden h-[637]">
              <ScaleOnScroll>
                  <img
                    src="/imgs/electrification/toyota-bev-tile-1-zero-fuel.jpg"
                    alt=""
                    className="w-full h-[637] object-cover"
                  />
              </ScaleOnScroll>
            </div>
          </div>
        </div>
        <div className="max-w-full h-[637]]">
          <div className="flex items-center h-[637]">
            <div className="w-1/2 overflow-hidden h-[637]">
              <ScaleOnScroll>
                  <img
                    src="/imgs/electrification/toyota-bev-tile-2-how-it-works.jpg"
                    alt=""
                    className="w-full h-[637] object-cover"
                  />
              </ScaleOnScroll>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center text-left h-[637]">
              <Jumping>
                <h2 className="container text-mainTitleColor text-5xl font-bold px-16">
                  NGUYÊN LÝ HOẠT ĐỘNG
                </h2>
              </Jumping>
              <Jumping>
                <p className="text-subInformationColor text-base font-medium py-8 px-16">
                  Không giống như xe động cơ đốt trong, xe thuần điện chỉ được
                  cung cấp năng lượng bởi động cơ điện. Điều này mang đến một
                  trải nghiệm hoàn toàn mới.
                  <br />
                  <br /> Xe thuần điện không tạo ra khí thải, có ít bộ phận
                  chuyển động hơn và mang đến trải nghiệm lái xe đầy thú vị. Bởi
                  vì tất cả các mô-men xoắn luôn có sẵn, nên xe thuần điện còn
                  có khả năng gia tốc tức thời. Không cần hộp số, bạn sẽ tận
                  hưởng việc lái xe đơn giản, mượt mà và yên tĩnh hơn.
                  <br /> <br />
                  Thông thường, pin được đặt dưới sàn xe giúp hạ thấp trọng tâm
                  đáng kể. Điều này giúp thân xe cân bằng ổn định, tăng khả năng
                  bám đường hơn.
                </p>
              </Jumping>
            </div>
          </div>
        </div>
      </section>

      <CarSearch />
      <Learnmore />
    </>
  );
}
export default PureElectricTechnology;
