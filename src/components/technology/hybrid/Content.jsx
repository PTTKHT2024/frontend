import React, { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import YoutubeEmbed from '../../common/YoutubeEmbed';

const Content = () => {
  const [selectedOption, setSelectedOption] = useState('video'); // State variable to track the selected option

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const handlePlayVideo = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClickReview = (id) => {
    setSelectedVideo(id);
  };

  const handleClickOutside = () => {
    setSelectedVideo(null);
  };
  const imageItems = [
    {
      id: 0,
      src: 'https://www.toyota.com.vn/media/jf0crt5f/f9900fbcc67dc66ac7abbb5ed6968e6c.jpg',
      title: 'Hybrid 01',
    },
    {
      id: 1,
      src: 'https://www.toyota.com.vn/media/yxqboede/55379389f2f14403849cda5f524c4397.jpg',
      title: 'Hybrid 02',
    },
    {
      id: 2,
      src: 'https://www.toyota.com.vn/media/vn2ipkdu/5fb2938dc2744a7bf2862def6b84ab5e.jpg',
      title: 'Hybrid 03',
    },
    {
      id: 3,
      src: 'https://www.toyota.com.vn/media/omlpk4v4/cor_w_2005-1003.jpg',
      title: 'Hybrid 04',
    },
    {
      id: 4,
      src: 'https://www.toyota.com.vn/media/exvll4i4/cor_w_2005-1005.jpg',
      title: 'Hybrid 05',
    },
    {
      id: 5,
      src: 'https://www.toyota.com.vn/media/drwdylyc/cor_w_2005-1006.jpg',
      title: 'Hybrid 06',
    },
    {
      id: 6,
      src: 'https://www.toyota.com.vn/media/pkcbyjm5/cor_w_2005-1008.jpg',
      title: 'Hybrid 07',
    },
    {
      id: 7,
      src: 'https://www.toyota.com.vn/media/1mio4qhl/cor_w_2005-1009.jpg',
      title: 'Hybrid 08',
    },
    {
      id: 8,
      src: 'https://www.toyota.com.vn/media/z30dppse/cor_w_2005-1011.jpg',
      title: 'Hybrid 09',
    },
    {
      id: 9,
      src: 'https://www.toyota.com.vn/media/bm2cg0vm/cor_w_2005-1012.jpg',
      title: 'Hybrid 10',
    },
    {
      id: 10,
      src: 'https://www.toyota.com.vn/media/pwveicwv/front-1.jpg',
      title: 'Hybrid 11',
    },
    {
      id: 11,
      src: 'https://www.toyota.com.vn/media/2jmftghc/rear-1.jpg',
      title: 'Hybrid 12',
    },
    {
      id: 12,
      src: 'https://www.toyota.com.vn/media/ndgma0kh/rear.jpg',
      title: 'Hybrid 13',
    },
    {
      id: 13,
      src: 'https://www.toyota.com.vn/media/tsppykjt/side-1.jpg',
      title: 'Hybrid 14',
    },
    {
      id: 14,
      src: 'https://www.toyota.com.vn/media/2fabxnf1/side.jpg',
      title: 'Hybrid 15',
    },
  ];

  const videos = [
    {
      id: 1,
      videoId: 'uhAF8W6jml0',
      src_img: 'https://img.youtube.com/vi/uhAF8W6jml0/0.jpg',
      src: 'https://www.youtube.com/embed/uhAF8W6jml0',
      title:
        'Hệ thống Toyota Hybrid với công nghệ tự sạc điện hoạt động như thế nào?',
    },
    {
      id: 2,
      videoId: 'e-LbRfjz2Nc',
      src_img: 'https://img.youtube.com/vi/e-LbRfjz2Nc/0.jpg',
      src: 'https://www.youtube.com/embed/e-LbRfjz2Nc',
      title:
        'Hệ thống Toyota Hybrid của động cơ 1.8 cấu tạo và hoạt động như thế nào?',
    },
    {
      id: 3,
      videoId: 'zzLSAjOkwe0',
      src_img: 'https://img.youtube.com/vi/zzLSAjOkwe0/0.jpg',
      src: 'https://www.youtube.com/embed/zzLSAjOkwe0',
      title: 'Giới thiệu về Công nghệ Hybrid',
    },
  ];

  return (
    <div className="mt-40 container">
      <h1 className="h-[40px] flex items-center pl-3 border-l-4 border-red-600 text-2xl leading-4 text-black mb-4">
        VỀ HYBRID
      </h1>
      <p
        style={{ marginTop: '10px' }}
        className="text-base leading-6 text-justify text-black mb-8"
      >
        Toyota là công ty tiên phong giới thiệu công nghệ Hybrid trên thế giới.
      </p>
      <div className="flex items-center flex-wrap">
        <h2 className="font-bold text-2xl leading-9 uppercase text-black mb-8 mt-16">
          GIỚI THIỆU VỀ CÔNG NGHỆ TOYOTA HYBRID
        </h2>
      </div>
      <h3 className="font-bold text-base leading-6 text-justify text-black mb-8">
        CÔNG NGHỆ HYBRID LÀ GÌ?
      </h3>
      <p className="text-base leading-6 text-justify text-black mb-8">
        Xe Hybrid hay còn gọi là xe lai nghĩa là kết hợp sử dụng 2 bộ truyền
        động, một động cơ chạy xăng và một mô tơ chạy điện. Đặc điểm quan trọng
        nhất của xe Hybrid là khả năng tiết kiệm nhiên liệu, thân thiện môi
        trường, vận hành mạnh mẽ và yên tĩnh. Hơn nữa, công nghệ pin Hybrid là
        một phần quan trọng tạo nên sự vận hành mạnh mẽ và độ tin cậy cao.
      </p>
      <p>
        <img
          className="block max-w-full h-auto mx-auto my-16"
          src="https://www.toyota.com.vn/images/technology/image-hybrid-3.png"
          alt=""
        />
      </p>
      <h3
        className="text-base leading-6 text-justify text-black"
        style={{ marginBottom: 0 }}
      >
        <strong className="font-bold">Trang bị hệ thống lái độc đáo</strong>
      </h3>
      <p className="text-base leading-6 text-justify text-black mb-8">
        Xe hybrid sử dụng động cơ xăng và cả mô tơ điện trong khi đó các xe
        thông thường chỉ sử dụng động cơ xăng. Tùy thuộc vào hệ thống, xe Hybrid
        sẽ sử dụng hai nguồn năng lượng theo các cách khác nhau để tạo nên sự
        vận hành mạnh mẽ mà vẫn đạt hiệu quả tiết kiệm nhiên liệu tối ưu.
        <br />
        <br />
        <strong className="font-bold">Công nghệ Pin Hybrid</strong>
        <br />
        So với ắc quy trên xe thông thường, pin Hybrid lớn hơn nhiều và mạnh mẽ
        hơn. Do pin là nguồn điện chính cho mô tơ nên pin có thể truyền đi và
        nhận về dòng điện lớn. Pin Hybrid tự động sạc trong quá trình xe vận
        hành vì vậy không tốn thời gian để sạc pin. HEVs không cần yêu cầu trạm
        sạc.
      </p>
      <p style={{ marginTop: 0 }} className="font-bold normal-text bold mb-8">
        HỆ THỐNG TOYOTA HYBRID CÓ ĐIỂM GÌ KHÁC BIỆT?
      </p>
      <p className="text-base leading-6 text-justify text-black mb-8">
        <strong className="font-bold">
          Hệ thống Hybrid nối tiếp song song
        </strong>
        <br />
        Có rất nhiều hệ thống Hybrid trên thị trường. Điều gì khiến Hệ thống
        Toyota Hybrid khác biệt và nổi trội?
        <br />
        Hệ thống Toyota Hybrid (THS) kết hợp giữa động cơ đốt trong hiệu suất
        cao và mô tơ điện công suất lớn và hiệu quả của việc kết hợp hai nguồn
        công suất này phụ thuộc vào điều kiện lái. Một hệ thống quản lý năng
        lượng sẽ đảm bảo xe vận hành với hiệu suất tối ưu nhất.
        <br />
        Hơn nữa, hệ thống Toyota Hybrid còn được coi là hệ thống Hybrid mạnh mẽ,
        được trang bị pin và mô tơ điện công suất lớn. Hệ thống Toyota Hybrid có
        khả năng lựa chọn nguồn năng lượng cần thiết để vận hành xe một cách
        mạnh mẽ mà vẫn tiết kiệm nhiên liệu.
        <br />
        <br />
        <strong className="font-bold">Khi xe bắt đầu chuyển động:</strong>
        Ở tốc độ thấp, năng lượng được cung cấp từ pin Hybrid đến động cơ điện.
        Động cơ xăng vẫn tắt, xe chuyển động êm ái và mượt mà nhờ động cơ điện
        <br />
        <strong className="font-bold">Khi tăng tốc:</strong>
        Động cơ điện và động cơ xăng kết hợp cùng hoạt động để đạt được công
        suất mạnh mẽ. Khi ắc quy Hybrid không còn đủ năng lượng, động cơ xăng sẽ
        làm quay động cơ điện và sử dụng nguồn điện tạo ra để dẫn động bánh xe.
        <br />
        <strong className="font-bold">Khi giảm tốc và phanh:</strong>
        Động cơ điện sử dụng động năng của xe làm máy phát quay, lượng điện này
        sẽ được tích vào pin Hybrid
        <br />
        <strong className="font-bold">Khi xe ở chế độ nghỉ:</strong>
        Động cơ điện và động cơ xăng tự động tắt để bảo toàn năng lượng. Nhiên
        liệu không bị lãng phí khi xe không hoạt động
      </p>
      <p className="mt-0 mb-4">
        <img
          className="block max-w-full h-auto mx-auto my-16"
          style={{ verticalAlign: 'middle', borderStyle: 'none' }}
          src="https://www.toyota.com.vn/images/technology/image-hybrid-4.png"
          alt=""
        />
      </p>
      <h2 className="font-bold text-3xl leading-9 uppercase text-black mb-8 mt-16">
        LỢI ÍCH CỦA CÔNG NGHỆ TOYOTA HYBRID
      </h2>
      <h3 className="font-bold text-base leading-6 text-justify text-black mb-8">
        LỢI ÍCH ĐỐI VỚI NGƯỜI DÙNG XE HYBRID
      </h3>
      <p className="mt-0 mb-4">
        <img
          className="block max-w-full h-auto mx-auto my-16"
          src="https://www.toyota.com.vn/images/technology/image-hybrid-5.png"
          alt=""
        />
        {/* responsive 
                <img className="block max-w-full h-auto mx-auto my-16" src="" alt="" /> */}
      </p>
      <p
        style={{ marginTop: 0 }}
        className="text-base leading-6 text-justify text-black mb-8"
      >
        <strong className="font-bold">Hiệu quả nhiên liệu tối ưu </strong>
        Hệ thống Toyota Hybrid sử dụng mô tơ điện để khởi động hay khi đi ở tốc
        độ thấp trước khi tăng tốc trong khi động cơ xăng tắt giúp tiết kiệm
        nhiên liệu. Khi trên hành trình, năng lượng từ động cơ xăng và mô tơ
        điện kết hợp tự động và hiệu quả để đáp ứng từng chế độ lái. Hơn nữa,
        động cơ xăng cũng ngắt khi xe ở chế độ nghỉ (idling) để tiết kiệm nhiên
        liệu.
        <br />
        <br />
        <strong className="font-bold">Phát thải thấp </strong>
        Khi mô tơ điện hoạt động thay thế cho động cơ xăng trong quá trình vận
        hành sẽ giúp giảm phát thải. Khi chạy hoàn toàn bằng điện, hay xe ở chế
        độ nghỉ, động cơ xăng tắt cũng giảm tiêu hao nhiên liệu và phát thải.
        <br />
        <br />
        <strong className="font-bold">Hứng khởi khi lái xe </strong>
        Bằng việc kết hợp giữa mô tơ điện công suất cao và động cơ xăng, hệ
        thống Hybrid của Toyota giúp cho việc tăng tốc trở nên mạnh mẽ hơn. Trên
        hành trình, động cơ xăng và mô tơ điện cùng tác động lên bánh lái: động
        cơ xăng được chia đôi nguồn năng lượng, một phần để tác động đến bánh
        xe, một phần sạc vào máy phát điện, tác động lên mô tơ. Sự phân chia
        năng lượng giúp tối đa hiệu suất.
        <br />
        <br />
        <strong className="font-bold">Êm ái & Tĩnh lặng </strong>
        Chế độ lái hoàn toàn bằng điện giúp xe vận hành êm ái và tĩnh lặng tuyệt
        đối. Chế độ lái hoàn toàn bằng điện đặc biệt phát huy tác dụng khi vận
        hành vào sáng sớm hay đêm muộn trong những khu dân cư hay dưới hầm đỗ
        xe. Đây cũng là lợi thế tuyệt vời của hệ thống Toyota Hybrid.
      </p>
      <h3 className="normal-text font-bold mb-8">LỢI ÍCH MÔI TRƯỜNG</h3>
      <p
        className="text-base leading-6 text-justify text-black mb-8"
        style={{ marginTop: 0 }}
      >
        Mẫu xe Hybrid có thể tiết kiệm nhiên liệu gấp 1.5 đến 2 lần so với các
        xe thông thường khác. Tính đến 2020, tổng doanh số xe điện hóa toàn cầu
        của Toyota đạt 16 triệu chiếc, mức tiết kiệm nhiên liệu toàn cầu đã đạt
        52 tỉ lít và lượng khí thải CO2 giảm hơn 139 triệu tấn so với các loại
        động cơ đốt trong. Bên cạnh đó, hệ thống Hyrbid của Toyota giải quyết
        được cơ sở hạ tầng công nghệ hiện tại của Việt Nam và đóng góp giảm
        thiểu ô nhiễm môi trường và biến đổi khí hậu.
        <br />
        <br />
        Xe hybrid có thể mang lại nhiều lợi ích cho Việt Nam bởi mẫu xe này
        không cần thêm cơ sở hạ tầng mới, nó có thể sử dụng hạ tầng như những xe
        thông thường hiện nay.
        <br />
        <br />
        Hơn nữa, những mẫu xe Hybrid còn rất phù hợp ở các đô thị lớn của Việt
        Nam vì Hybrid giúp tiết kiệm nhiên liệu hơn rất nhiều trong những trường
        hợp bị tắc đường.
      </p>
      <h2 className="font-bold text-3xl leading-tight uppercase text-black mb-8 mt-16">
        LỊCH SỬ RA ĐỜI CÔNG NGHỆ HYBRID
      </h2>
      <p className="mt-0 mb-4">
        <img
          className="block max-w-full h-auto mx-auto my-16"
          src="https://www.toyota.com.vn/images/technology/image-hybrid-1.png"
          alt=""
        />
      </p>
      <div className="flex items-center flex-wrap">
        <div className="content-item w-2/3">
          <h3 className="normal-text font-bold mb-8">
            Xe Hybrid được bán tại trên 90 nước và vùng lãnh thổ trên thế giới
          </h3>
          <p className="pr-14 text-base leading-6 text-justify text-black mb-8">
            Những quốc gia Châu Á đang phân phối xe Hybrid: Thái Lan, Indonesia,
            Ấn Độ, Malaysia, Philippines, Pakistan, Singapore, Brunei, Bhutan,
            Sri Lanka, Bangladesh và Việt Nam
          </p>
        </div>
        <div className="w-1/3">
          <img
            className="block max-w-full h-auto mx-auto"
            src="https://www.toyota.com.vn/images/technology/image-hybrid-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="block">
        <div className="flex justify-between items-center">
          <p
            style={{ margin: 0 }}
            className="h-12 flex items-center pl-3 border-l-4 border-[#EB0A1E] text-2xl leading-8 text-black mb-4"
          >
            TÌM HIỂU THÊM
          </p>

          <div className="flex flex-col items-start justify-center w-56 relative">
            <select
              className="px-4 w-full h-10 flex items-center border border-gray-300 outline-none appearance-none cursor-pointer"
              name="technology-learn"
              id="select-list"
              onChange={handleSelectionChange}
            >
              <option
                value="video"
                selected
                className="font-normal block min-h-[1.2em] px-0.5 py-[1px] whitespace-nowrap"
              >
                Video
              </option>
              <option
                value="image"
                className="font-normal block min-h-[1.2em] px-2 py-1 whitespace-nowrap"
              >
                Hình ảnh
              </option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-primaryColor-600 pointer-events-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* page content video and img */}
      <div className="container mb-16">
        <div className="grid grid-cols-3 gap-4 mt-5">
          {selectedOption === 'video' ? (
            <>
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative cursor-pointer"
                  onClick={() => handleClickReview(video.id)}
                >
                  <img
                    src={video.src_img}
                    alt={video.title}
                    className="object-cover h-72 w-full"
                  />
                  <BsPlayCircle className="absolute top-0 bottom-12 left-0 right-0 m-auto h-20 w-20 text-primaryColor" />
                  <h3 className="text-base mt-1 leading-7 text-black hover:font-bold">
                    {video.title}
                  </h3>
                </div>
              ))}

              {selectedVideo && (
                <div
                  className="fixed top-0 left-0 right-0 bottom-0 z-[50] bg-[#333333]/70"
                  id="overlay"
                  onClick={handleClickOutside}
                >
                  <div className="bg-black absolute w-2/3 h-4/5 top-0 bottom-0 left-0 right-0 m-auto">
                    <YoutubeEmbed
                      src={videos[selectedVideo - 1].src}
                      title="YouTube video player"
                      className=""
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {imageItems.map((item) => (
                <div key={item.id} className="relative cursor-pointer">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="object-cover h-72 w-full"
                  />
                  <h3 className="text-base mt-1 leading-7 text-black hover:font-bold">
                    {item.title}
                  </h3>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/*pagelisst- video*/}
      <div className="container">
        {selectedOption === 'video' ? (
          <div className="flex justify-center">
            <div className="order-0 h-[40px] w-[40px] mx-[16px] my-[12px] flex-wrap border border-solid border-gray-300 text-center leading-40 uppercase text-sm text-gray-300 cursor-pointer">
              <span className="font-normal antialiased block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-300 font-900 w-6 h-6 mx-[4px] my-[4px]"
                >
                  <path
                    strokeLinecap="evenodd"
                    d="M7.293 11.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-3.293-3.293a1 1 0 010-1.414l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 010 1.414z"
                    strokeLinejoin="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="order-2 h-[40px] w-[40px] mx-[16px] my-[12px] flex-wrap border border-solid border-gray-300 text-center leading-40 uppercase text-sm text-gray-300 cursor-pointer">
              <span className="font-normal antialiased block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-300 font-900 w-6 h-6 mx-[4px] my-[4px]"
                >
                  <path
                    strokeLinecap="evenodd"
                    d="M12.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4z"
                    strokeLinejoin="evenodd"
                  />
                </svg>
              </span>
            </div>
            <input
              className="text-300 text-white bg-primaryColor my-[12px] h-[40px] w-[40px] flex flex-wrap border border-solid border-gray-300 justify-center items-center text-center uppercase text-md cursor-pointer "
              id="1"
              value="1"
            ></input>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="order-0 h-[40px] w-[40px] mx-[16px] my-[12px] flex-wrap border border-solid border-gray-300 text-center leading-40 uppercase text-sm text-gray-300 cursor-pointer">
              <span className="font-normal antialiased block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-300 font-900 w-6 h-6 mx-[4px] my-[4px]"
                >
                  <path
                    strokeLinecap="evenodd"
                    d="M7.293 11.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-3.293-3.293a1 1 0 010-1.414l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 010 1.414z"
                    strokeLinejoin="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="order-2 h-[40px] w-[40px] mx-[16px] my-[12px] flex-wrap border border-solid border-gray-300 text-center leading-40 uppercase text-sm text-gray-300 cursor-pointer">
              <span className="font-normal antialiased block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-300 font-900 w-6 h-6 mx-[4px] my-[4px]"
                >
                  <path
                    strokeLinecap="evenodd"
                    d="M12.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4z"
                    strokeLinejoin="evenodd"
                  />
                </svg>
              </span>
            </div>
            <input
              className="text-300 text-white bg-primaryColor my-[12px] h-[40px] w-[40px] flex flex-wrap border border-solid border-gray-300 justify-center items-center text-center uppercase text-md cursor-pointer "
              id="1"
              value="1"
            ></input>
          </div>
        )}
      </div>
    </div>
  );
};
export default Content;
