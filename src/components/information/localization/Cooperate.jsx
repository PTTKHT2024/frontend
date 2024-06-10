import React from 'react';
import Cooperate_component from './Cooperate_component';

const datas = [
  {
    id: 1,
    image:
      'https://www.toyota.com.vn/media/yqfn2hhx/10aa8cb9af6bb8303034d6d78dd2e558.jpg',
    title: 'IDC',
    par: `Với mục tiêu mở rộng và thiết thực hóa các hoạt động hợp tác, Toyota Việt Nam cùng IDC đã tiến hành ký kết 
        “Biên bản ghi nhớ về việc hợp tác hỗ trợ doanh nghiệp trong nước, 
        trong lĩnh vực công nghiệp hỗ trợ ngành ô tô”. 
        Sự hợp tác giữa Trung tâm Hỗ trợ phát triển công nghiệp IDC và Toyota Việt Nam là bước đệm vững chắc trong việc xây dựng hệ thống các nhà cung cấp linh kiện nội địa, 
        đóng góp vào sự phát triển của công nghiệp hỗ trợ ô tô trong nước.`,
    link: 'https://idccenter.gov.vn/',
  },
  {
    id: 2,
    image:
      'https://www.toyota.com.vn/media/zc4ppk2w/b419aa9e6ff628191351553b7872c977.jpg',
    title: 'USAID',
    par: `Nhờ sự tham gia vào dự án 
        “Thúc đẩy cải cách và nâng cao năng lực kết nối của doanh nghiệp nhỏ và vừa” (LinkSME) do USAID tài trợ, 
        Toyota Việt Nam đã kết nối với các nhà cung cấp tiềm năng, góp phần đẩy nhanh xu hướng nội địa hóa.`,
    link: 'https://www.usaid.gov/vietnam',
  },
  {
    id: 3,
    image:
      'https://www.toyota.com.vn/media/du2fk4ve/eda19fc3cbc4503904c659351fea45d0.jpg',
    title: 'JETRO',
    par: `Với tư cách “Bên mua” trong việc tham gia triển lãm 
        “Công nghiệp hỗ trợ Việt Nam - Nhật Bản” do JETRO và Cục xúc tiến thương mại (VIETRADE) phối hợp tổ chức, 
        Toyota Việt Nam đã mở rộng tìm kiếm các nhà cung cấp tại Việt Nam, đẩy mạnh hoạt động gia tăng nội địa hóa.`,
    link: 'https://www.jetro.go.jp/vietnam/',
  },
];

const Cooperate = () => {
  return (
    <div className="relative w-full mt-[94px]">
      <div className="relative h-[calc(100vh-94px-59.5px)]">
        <img
          src="https://www.toyota.com.vn/media/idgh0x1g/646c2b512bba370e6808cfb62d170a9d.jpg"
          className="w-full h-auto object-center object-cover"
          alt=""
        />
        <div className="bg-white bg-opacity-80 absolute bottom-0 left-0 w-full md:w-[80%] h-auto py-8 md:py-16 px-8 md:px-32">
          <h1 className="text-2xl md:text-5xl leading-tight font-semibold text-start text-[#1a1a1a]">
            Chương trình hợp tác và phát triển
          </h1>
        </div>
      </div>
      <div className="container mx-auto md:my-10 px-4 md:px-0">
        {datas.map((data) => (
          <Cooperate_component
            key={data.id}
            id={data.id}
            image={data.image}
            title={data.title}
            par={data.par}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Cooperate;
