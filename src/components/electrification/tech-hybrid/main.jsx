import React, { useEffect, useRef, useState } from 'react';
import Jumping from '../../common/Jumping';
import { cartimeline } from '../../data/techhybrid/CarTimeline';
import CarSearch from '../CarSearch';

const TechHybrid = () => {
  const textRef = useRef(null);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [carDetailIndex, setCarDetailIndex] = useState(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTimelineVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    setScrollYValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollYValue === 0) {
      setIsTimelineVisible(false);
    }
  }, [scrollYValue]);

  const handleClickScrollMouse = () => {
    const element = document.getElementById('banner-description');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickCarItem = (id) => {
    setCarDetailIndex(id);
    console.log(id);
  };

  const handleCLoseCarItem = () => {
    setCarDetailIndex(null);
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
            src="/video/hybrid.mp4"
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
              TOYOTA
              <br />
              HYBRID ELECTRIC
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
            <Jumping>
              <p className="text-white uppercase tracking-wide text-[38px] font-bold tracking-wide mb-2 mt-8"></p>
            </Jumping>

            <p className="text-white text-base">
              <Jumping>
                Trong gần một phần tư thế kỷ, Toyota đã tiên phong trong công
                nghệ Hybrid. Với sự đổi mới không ngừng, chúng tôi đã tạo ra
                những thế hệ tiếp theo ngày càng tốt hơn, với hiệu suất được
                nâng cao hơn bao giờ hết. Được nghiên cứu và phát triển nhằm
                tăng trải nghiệm lái xe của bạn, công nghệ Hybrid kết hợp 2
                nguồn năng lượng xăng - điện, mang đến quá trình vận hành mạnh
                mẽ, mượt mà.
                <br />
              </Jumping>

              <Jumping>
                <br />
                Hành trình điện khí hoá của chúng tôi bắt đầu gần 30 năm về
                trước với việc ra mắt mẫu xe Hybrid đầu tiên trên thế giới. Kể
                từ đó, chúng tôi đã đầu tư và đổi mới các giải pháp điện khí hóa
                khác nhau nhằm đáp ứng nhu cầu về di chuyển và phong cách sống
                của khách hàng.
              </Jumping>
            </p>
          </div>
        </div>
      </section>

      <section className="block ">
        <div className="bg-gray-100 pt-5 px-0 m-0 border-0">
          <div className="max-w-[1232px] py-0 px-4 my-0 mx-auto border-0 ">
            <div className="py-10 px-0 m-0 border-0 ">
              <Jumping>
                <h2 className="text-4xl leading-[1.15] tracking-widest text-subTitleColor font-bold uppercase m-0 p-0 border-0">
                  GIẢM THIỂU TÁC ĐỘNG LÊN MÔI TRƯỜNG
                </h2>
              </Jumping>
            </div>
            <div className="py-0 px-0 m-0 border-0 pb-10">
              <div className="px-0 m-0 border-0 grid grid-cols-12 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24 lg:gap-x-16 lg:gap-y-32 ">
                <div className="py-10 px-0 m-0 border-0  col-span-4 md:col-span-6 lg:col-span-8">
                  <Jumping>
                    <img
                      src="/imgs/techhybrid/1.jpg"
                      alt=""
                      className="w-full h-auto align-middle border-none"
                    />
                  </Jumping>
                </div>
                <div className="py-10 px-0 m-0 border-0 col-span-8 md:col-span-6 lg:col-span-4">
                  <p className="py-10 px-0 m-0 border-0">
                    Xe có thể di chuyển hoàn toàn bằng năng lượng điện trong
                    điều kiện đường nội đô. Điều nãy có nghĩa rằng bạn sẽ không
                    tạo ra khí thải trên những chặng đường ngắn.
                    <br />
                    <br /> Từ mức tiêu thụ xăng thấp đến khả năng giảm phát
                    thải, dòng xe điện Hybrid được đánh giá là một trong những
                    phương tiện có hiệu suất năng lượng tốt nhất hiện nay.
                  </p>
                  <h5 className="mb-3 px-0 m-0 border-0 text-2xl font-bold">
                    20+ triệu
                  </h5>
                  <p className="px-0 m-0 border-0">
                    Chiếc xe Hybrid Toyota được bán ra trên thế giới
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block ">
        <div className=" pt-5 px-0 m-0 border-0">
          <div className="max-w-[1232px] py-0 px-4 my-0 mx-auto border-0 ">
            <div className="py-10 px-0 m-0 border-0 ">
              <Jumping>
                <h2 className="text-4xl leading-[1.15] tracking-widest text-subTitleColor font-bold uppercase m-0 p-0 border-0">
                  NGUYÊN LÝ HOẠT ĐỘNG CỦA CÔNG NGHỆ HYBRID
                </h2>
              </Jumping>
            </div>
            <div className="py-0 px-0 m-0 border-0 pb-10">
              <div className="px-0 m-0 border-0 grid grid-cols-12 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24 lg:gap-x-16 lg:gap-y-32 ">
                <div className="py-10 px-0 m-0 border-0  col-span-4 md:col-span-6 lg:col-span-8">
                  <Jumping>
                    <img
                      src="/imgs/techhybrid/2.jpg"
                      alt=""
                      className="w-full h-auto align-middle border-none"
                    />
                  </Jumping>
                </div>
                <div className="py-10 px-0 m-0 border-0 col-span-8 md:col-span-6 lg:col-span-4">
                  <p className="py-10 px-0 m-0 border-0">
                    Xe Hybrid sử dụng hai nguồn năng lượng riêng biệt - động cơ
                    xăng và mô tơ điện nên nhiên liệu tiêu thụ sẽ ít hơn so với
                    xe sử dụng động cơ đốt trong thông thường. Đồng thời, xe
                    không yêu cầu trạm sạc vì pin tự động sạc trong quá trình
                    vận hành.
                    <br />
                    <br /> Điều này làm cho các dòng xe Hybrid đặc biệt thuận
                    tiện bởi trên thực tế, bạn chỉ cần đổ đầy xăng là đã có thể
                    tận hưởng những lợi ích mà cả hai nguồn năng lượng mang lại.
                    Động cơ và mô tơ bên trong xe Hybrid có thể hoạt động riêng
                    biệt hoặc kết hợp cùng nhau tuỳ theo các điều kiện nhất
                    định.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block ">
        <div>
          <div className="">
            <div className="flex">
              <div className="w-full" ref={timelineRef}>
                <div className="">
                  <div
                    className={`transition-all ease-in items-center ${
                      isTimelineVisible
                        ? 'translate-y-0 fill-white stroke-black'
                        : 'stroke-white fill-white -translate-x-[30px]'
                    }`}
                    style={{
                      willChange: 'opacity, transform',
                      transitionDelay: isTimelineVisible ? `0.5s` : '0s',
                      transitionDuration: isTimelineVisible ? '.75s' : '0s',
                    }}
                  >
                    <svg className="w-[330%] mt-[-10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1736.201 161.533"
                        className="overflow-hidden align-middle"
                      >
                        {' '}
                        <defs> </defs>{' '}
                        <g className="">
                          {' '}
                          <g>
                            {' '}
                            <path
                              class="cls-4"
                              className=""
                              d="M103.696,123.037l-28.864-4.81v-14.432c0-4.811,4.811-4.811,4.811-9.621v-9.622h19.242s24.054-19.242,43.298-19.242h24.053c14.432,0,33.675,19.242,33.675,19.242,0,0,24.053,4.811,33.674,9.622,5.993,2.998,9.622,9.621,9.622,9.621v19.243h-24.054"
                            ></path>{' '}
                            <path
                              class="cls-4"
                              className=""
                              d="M190.286,118.227c0,7.97,6.462,14.432,14.432,14.432s14.434-6.462,14.434-14.432-6.462-14.434-14.434-14.434-14.432,6.462-14.432,14.434Z"
                            ></path>{' '}
                            <path
                              class="cls-4"
                              className=""
                              d="M103.696,118.227c0,7.97,6.462,14.432,14.432,14.432s14.434-6.462,14.434-14.432-6.462-14.434-14.434-14.434-14.432,6.462-14.432,14.434Z"
                            ></path>{' '}
                            <line
                              class="cls-4"
                              className=""
                              x1="190.288"
                              y1="123.039"
                              x2="132.56"
                              y2="123.037"
                            ></line>{' '}
                          </g>{' '}
                          <line
                            class="cls-4 line"
                            className=""
                            x1="65.398"
                            y1="94.175"
                            x2="42.419"
                            y2="94.175"
                          ></line>{' '}
                          <line
                            class="cls-4 line"
                            className=""
                            x1="65.398"
                            y1="103.794"
                            x2="49.345"
                            y2="103.794"
                          ></line>{' '}
                        </g>
                      </svg>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full" ref={timelineRef}>
                <div className="">
                  <div
                    className={`transition-all ease-in items-center ${
                      isTimelineVisible
                        ? 'translate-y-0 fill-white stroke-black'
                        : 'stroke-white fill-white -translate-x-[30px]'
                    }`}
                    style={{
                      willChange: 'opacity, transform',
                      transitionDelay: isTimelineVisible ? `1s` : '0s',
                      transitionDuration: isTimelineVisible ? '.75s' : '0s',
                    }}
                  >
                    <svg className="w-[330%] ml-[-220px] mt-[-10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1736.201 161.533"
                        className="overflow-hidden align-middle"
                      >
                        {' '}
                        <defs> </defs>{' '}
                        <g class="car-2">
                          {' '}
                          <g>
                            {' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M444.557,123.037l-28.864-4.81v-14.432c0-4.811,4.811-4.811,4.811-9.621v-9.622h19.242s24.054-19.242,43.298-19.242h24.053c14.432,0,33.675,19.242,33.675,19.242,0,0,24.053,4.811,33.674,9.622,5.993,2.998,9.622,9.621,9.622,9.621v19.243h-24.054"
                            ></path>{' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M531.147,118.227c0,7.97,6.462,14.432,14.432,14.432s14.434-6.462,14.434-14.432-6.462-14.434-14.434-14.434-14.432,6.462-14.432,14.434Z"
                            ></path>{' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M444.557,118.227c0,7.97,6.462,14.432,14.432,14.432s14.434-6.462,14.434-14.432-6.462-14.434-14.434-14.434-14.432,6.462-14.432,14.434Z"
                            ></path>{' '}
                            <line
                              class="cls-1"
                              className=""
                              x1="531.149"
                              y1="123.039"
                              x2="473.421"
                              y2="123.037"
                            ></line>{' '}
                          </g>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="406.259"
                            y1="91.222"
                            x2="358.297"
                            y2="91.222"
                          ></line>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="406.259"
                            y1="100.525"
                            x2="378.864"
                            y2="100.525"
                          ></line>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="406.259"
                            y1="109.828"
                            x2="364.93"
                            y2="109.828"
                          ></line>{' '}
                        </g>
                      </svg>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full" ref={timelineRef}>
                <div className="">
                  <div
                    className={`transition-all ease-in items-center ${
                      isTimelineVisible
                        ? 'translate-y-0 fill-white stroke-black'
                        : 'stroke-white fill-white -translate-x-[100px] -translate-y-[-50px]'
                    }`}
                    style={{
                      willChange: 'opacity, transform',
                      transitionDelay: isTimelineVisible ? `1.5s` : '0s',
                      transitionDuration: isTimelineVisible ? '.75s' : '0s',
                    }}
                  >
                    <svg className="w-[330%] ml-[-550px] mt-[-63px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1736.201 161.533"
                        className="overflow-hidden align-middle"
                      >
                        {' '}
                        <defs> </defs>{' '}
                        <g class="car-3">
                          {' '}
                          <g>
                            {' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M804.992,101.51l-28.917,4.481-4.524-13.705c-1.508-4.569,3.061-6.077,1.553-10.644l-3.016-9.137,18.272-6.032s16.81-25.812,35.083-31.845l22.84-7.54c13.705-4.524,38.01,7.715,38.01,7.715,0,0,24.349-2.972,34.993-1.419,6.631,.968,12.153,6.119,12.153,6.119l6.032,18.273-22.842,7.541"
                            ></path>{' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M885.71,69.799c2.498,7.568,10.66,11.679,18.229,9.181s11.68-10.661,9.182-18.229c-2.499-7.57-10.661-11.68-18.231-9.181s-11.679,10.66-9.18,18.23Z"
                            ></path>{' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M803.484,96.943c2.498,7.568,10.66,11.679,18.229,9.181s11.68-10.661,9.182-18.229c-2.499-7.57-10.661-11.68-18.231-9.181-7.568,2.498-11.679,10.66-9.18,18.23Z"
                            ></path>{' '}
                            <line
                              class="cls-1"
                              className=""
                              x1="887.22"
                              y1="74.367"
                              x2="832.401"
                              y2="92.462"
                            ></line>{' '}
                          </g>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="758.651"
                            y1="83.305"
                            x2="689.388"
                            y2="106.17"
                          ></line>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="761.567"
                            y1="92.139"
                            x2="722.006"
                            y2="105.199"
                          ></line>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="764.484"
                            y1="100.973"
                            x2="704.8"
                            y2="120.676"
                          ></line>{' '}
                        </g>
                      </svg>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full" ref={timelineRef}>
                <div className="">
                  <div
                    className={`transition-all ease-in items-center ${
                      isTimelineVisible
                        ? 'translate-y-0 fill-white stroke-black'
                        : 'stroke-white fill-white -translate-x-[30px]'
                    }`}
                    style={{
                      willChange: 'opacity, transform',
                      transitionDelay: isTimelineVisible ? `2s` : '0s',
                      transitionDuration: isTimelineVisible ? '.75s' : '0s',
                    }}
                  >
                    <svg className="w-[330%] ml-[-850px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1736.201 161.533"
                        className="overflow-hidden align-middle"
                      >
                        {' '}
                        <defs> </defs>{' '}
                        <g class="car-4">
                          {' '}
                          <g>
                            {' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M1229.889,62.077l-27.018-11.238,3.277-14.055c1.092-4.685,5.778-3.593,6.87-8.277l2.185-9.371,18.739,4.369s27.795-13.277,46.536-8.908l23.424,5.462c14.055,3.277,28.427,26.386,28.427,26.386,0,0,22.332,10.147,30.609,17.017,5.156,4.281,7.187,11.554,7.187,11.554l-4.37,18.741-23.426-5.462"
                            ></path>{' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M1315.309,77.054c-1.81,7.762,3.016,15.522,10.778,17.332,7.764,1.81,15.524-3.016,17.334-10.778,1.81-7.763-3.016-15.524-10.779-17.334-7.762-1.81-15.522,3.016-17.332,10.779Z"
                            ></path>{' '}
                            <path
                              class="cls-1"
                              className=""
                              d="M1230.981,57.393c-1.81,7.762,3.016,15.522,10.778,17.332s15.524-3.016,17.334-10.778c1.81-7.763-3.016-15.524-10.779-17.334-7.762-1.81-15.522,3.016-17.332,10.779Z"
                            ></path>{' '}
                            <line
                              class="cls-1"
                              className=""
                              x1="1314.218"
                              y1="81.74"
                              x2="1257.999"
                              y2="68.631"
                            ></line>{' '}
                          </g>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="1199.815"
                            y1="22.397"
                            x2="1128.781"
                            y2="5.835"
                          ></line>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="1197.703"
                            y1="31.457"
                            x2="1157.129"
                            y2="21.997"
                          ></line>{' '}
                          <line
                            class="cls-1 line"
                            className=""
                            x1="1195.59"
                            y1="40.517"
                            x2="1134.38"
                            y2="26.245"
                          ></line>{' '}
                        </g>
                      </svg>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="steps__top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1736.201 161.533"
                className="overflow-hidden align-middle mt-[-164px] w-full"
              >
                {' '}
                <defs> </defs>{' '}
                <path
                  className="fill-none stroke-primaryColor stroke-4 md:stroke-2 lg:stroke-1"
                  d="M4.424,136.039H696.614c38.793,0,77.254-7.038,113.55-20.732,60.82-22.947,161.842-57.17,231.367-60.582,105.683-5.187,320.836,51.159,399.384,72.936,20.267,5.619,41.026,9.232,61.999,10.793l224.915,16.735"
                ></path>{' '}
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div
            className="grid grid-cols-12 pt-[20px] pb-[80px]"
            ref={timelineRef}
          >
            {cartimeline.map((time, index) => (
              <div key={time.id} className="col-span-3">
                <div
                  className={`pt-[30px] pr-[25px] transition-all ease-in ${
                    isTimelineVisible
                      ? 'bg-primaryColor rounded-[50%] w-9 h-9 translate-y-0 '
                      : 'bg-white -translate-y-[15px] rounded-[50%] w-9 h-9'
                  }`}
                  style={{
                    willChange: 'opacity, transform',
                    transitionDelay: isTimelineVisible ? `${index * 1}s` : '0s',
                    transitionDuration: isTimelineVisible ? '.5s' : '0s',
                  }}
                >
                  <span className=" block font-bold mt-[-24px] ml-3 text-white">
                    {time.year}
                  </span>
                </div>
                <div
                  className={`pt-[30px] pr-[25px] transition-all ease-in ${
                    isTimelineVisible
                      ? 'text-mainTitleColor translate-y-0'
                      : 'text-white -translate-y-[15px]'
                  }`}
                  style={{
                    willChange: 'opacity, transform',
                    transitionDelay: isTimelineVisible ? `${index * 1}s` : '0s',
                    transitionDuration: isTimelineVisible ? '.5s' : '0s',
                  }}
                >
                  <p className="font-bold text-2xl pt-1 pb-2">{time.step}</p>
                  <p className="text-base">{time.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block ">
        <div className="bg-gray-100 pt-5 pb-10 px-0">
          <div className="max-w-[1232px] py-0 px-4 my-0 mx-auto">
            <div className="py-10 px-0 m-0 border-0">
              <Jumping>
                <h1 className="uppercase text-mainTitleColor font-bold text-mainTitle">
                  TẠI SAO NÊN CHỌN DÒNG XE HYBRID CỦA TOYOTA?
                </h1>
              </Jumping>
            </div>
            <div className="py-10 px-0 m-0 border-0">
              <div className="grid py-10 px-0 m-0 border-0 gap-x-4 gap-y-3 md:gap-x-8 md:gap-y-4 lg:gap-x-12 lg:gap-y-6 grid-cols-12">
                <div className="py-10 px-0 m-0 bg-transparent flex flex-col min-w-0 bg-clip-border rounded col-span-6 border-0 break-words">
                  <Jumping>
                    <img src="/imgs/techhybrid/3.jpg" alt="" />
                  </Jumping>
                  <div className="p-0 pr-5 flex-auto min-h-1 m-0 border-0">
                    <Jumping>
                      <h5 className="text-2xl font-bold mt-5 mb-3 mx-0 text-subTitleColor p-0 border-0">
                        Công nghệ pin bền bỉ
                      </h5>
                      <p>
                        Pin Hybrid được thiết kế đảm bảo tính an toàn và đạt
                        tuổi thọ lâu dài, giữ vững cam kết về chất lượng mà
                        khách hàng kỳ vọng ở bất kỳ chiếc xe nào của Toyota.
                      </p>
                    </Jumping>
                  </div>
                </div>
                <div className="py-10 px-0 m-0 bg-transparent flex flex-col min-w-0 bg-clip-border rounded col-span-6 border-0 break-words">
                  <Jumping>
                    <img src="/imgs/techhybrid/4.jpg" alt="" />
                  </Jumping>
                  <div className="p-0 pr-5 flex-auto min-h-1 m-0 border-0">
                    <Jumping>
                      <h5 className="text-2xl font-bold mt-5 mb-3 mx-0 text-subTitleColor p-0 border-0">
                        Hứng khởi khi lái xe
                      </h5>
                      <p>
                        Xe hybrid phản ứng nhanh và mạnh mẽ một cách đáng ngạc
                        nhiên do có sẵn mô-men xoắn tức thời từ động cơ điện và
                        tốc độ cao hơn mà động cơ xăng có thể mang lại.
                        <br />
                        <br /> Nguồn năng lượng kép này bổ sung cho nhau để tối
                        ưu hoá năng lượng và khả năng vận hành ở bất kỳ tốc độ
                        nào.
                      </p>
                    </Jumping>
                  </div>
                </div>
                <div className="py-10 px-0 m-0 bg-transparent flex flex-col min-w-0 bg-clip-border rounded col-span-6 border-0 break-words">
                  <Jumping>
                    <img src="/imgs/techhybrid/5.jpg" alt="" />
                  </Jumping>
                  <div className="p-0 pr-5 flex-auto min-h-1 m-0 border-0">
                    <Jumping>
                      <h5 className="text-2xl font-bold mt-5 mb-3 mx-0 text-subTitleColor p-0 border-0">
                        Tiết kiệm nhiên liệu hơn
                      </h5>
                      <p>
                        Với hai nguồn năng lượng, xe Hybrid có thể chuyển động
                        êm ái và mượt mà ở tốc độ thấp nhờ động cơ điện, trong
                        khi đó, động cơ xăng vẫn tắt. Nguồn năng lượng từ động
                        cơ xăng chỉ được sử dụng khi lái xe ở tốc độ nhanh hơn.
                        Vì vậy, hiệu suất nhiên liệu tổng thể cũng được cải
                        thiện.
                        <br />
                        <br /> Động cơ điện và động cơ xăng kết hợp với nhau để
                        tiết kiệm nhiên liệu hiệu quả mà không ảnh hưởng đến
                        hiệu suất vận hành.
                      </p>
                    </Jumping>
                  </div>
                </div>
                <div className="py-10 px-0 m-0 bg-transparent flex flex-col min-w-0 bg-clip-border rounded col-span-6 border-0 break-words">
                  <Jumping>
                    <img src="/imgs/techhybrid/6.jpg" alt="" />
                  </Jumping>
                  <div className="p-0 pr-5 flex-auto min-h-1 m-0 border-0">
                    <Jumping>
                      <h5 className="text-2xl font-bold mt-5 mb-3 mx-0 text-subTitleColor p-0 border-0">
                        Chi phí bảo dưỡng thấp
                      </h5>
                      <p>
                        Nhìn chung, chi phí để sở hữu một chiếc xe điện Hybrid
                        vô cùng tiết kiệm, xét về cả mặt chi phí nhiên liệu và
                        chi phí bảo dưỡng.
                        <br />
                        <br /> Chi phí bảo trì cho xe hybrid thấp hơn nhờ loại
                        bỏ nhiều bộ phận và độ tin cậy cao hơn của các bộ phận
                        điện và pin. Ví dụ, hệ thống phanh tái tạo của chúng tôi
                        có nghĩa là má phanh ít bị mài mòn hơn. Ví dụ, phanh tái
                        tạo được sử dụng ở xe Hybrid bền (ít tiêu tốn nhiên liệu
                        - từ gốc ý là mòn ít hơn) hơn phanh thông thường.
                      </p>
                    </Jumping>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarSearch />
    </>
  );
};

export default TechHybrid;
