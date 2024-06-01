import React from 'react';
import Header from '../../common/Header';


 const RepairService = () => {
//   const [visibleService, setVisibleService] = useState('service1');

//   const toggleContent = (serviceId) => {
//     // event.preventDefault();
//     setVisibleService(serviceId);
//   };

  return (
    <>
      {/* class="flex space-x-4  justify-between" flex items-center inline-block relative */}
      <Header />;
      <div class="mt-sectionMargin_1 bg-teal-500 p-8 flex items-center justify-center">
        <nav class="inline ">
          <ul class="space-x-4 flex items-center ">
            <li>
              <a href="#!"></a>BẢO DƯỠNG ĐỊNH KỲ
            </li>
            <li>
              <a href="#!"></a>DỊCH VỤ SỬA CHỮA
            </li>
            <li>
              <a href="#!"></a>DỊCH VỤ CHĂM SÓC LÀM ĐẸP XE
            </li>
            <li>
              <a href="#!"></a>CHÍNH SÁCH BẢO HÀNH
            </li>
            <li>
              <a href="#!"></a>KIỂM TRA & TRIỆU HỒI
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <img
          src="https://www.toyota.com.vn/media/hb0bvfz3/008a7694.jpg"
          alt=""
        />
      </div>
      {/* Content */}
      <div className="container">
        <div className="container1">
          <a href="#" onclick={() => toggleContent('service1')}>
            Sửa chữa thân xe & sơn
          </a>
          {visibleService === 'service1' && (
            <>
              <p>
                Ngoài dịch vụ bảo dưỡng và sửa chữa những hiện tượng bất thường
                trên xe, Toyota cũng cung cấp dịch vụ sửa chữa đối với những hư
                hỏng do va chạm mà chiếc xe của bạn gặp phải trong quá trình sử
                dụng. Dịch vụ đó được gọi là Sửa chữa Thân xe và Sơn.
              </p>
              <p>
                Với kỹ thuật sửa chữa theo tiêu chuẩn toàn cầu, trang thiết bị,
                vật tư vật chất lượng cao (được chỉ định bởi Toyota Nhật Bản),
                các Đại Lý của Toyota sẽ phục hồi hình dạng cũng như diện mạo
                lớp sơn trên chiếc xe của bạn về điều kiện ban đầu.
              </p>
              <p>
                Ngoài ra, nhằm đảm bảo chất lượng và rút ngắn thời gian sửa
                chữa, chúng tôi xây dựng và áp dụng quy trình quản lý chất lượng
                trong từng công đoạn, quy trình sửa chữa vết xước trong 4
                giờ...để không ngừng đem đến sự hài lòng cho khách hàng đối với
                dịch vụ sửa chữa Thân xe và Sơn của Toyota.
              </p>
              <p>
                Để được tư vấn chi tiết về nội dung sừa chữa, xin liên hệ với
                các Đại lý chính hãng của Toyota Việt Nam trên toàn quốc.
              </p>
            </>
          )}
        </div>
        <div className="container2">
          <a href="#!" onClick={() => toggleContent('service2')}>
            Sửa chữa chung
          </a>

          {visibleService === 'service2' && (
            <>
              <p>
                Tự hào là doanh nghiệp dẫn đầu trên thị trường về dịch vụ sau
                bán hàng trong nhiều năm liên tiếp và được khách hàng đánh giá
                cao trong việc luôn tiên phong áp dụng những công nghệ mới cũng
                như thực hiện các chương trình hậu mãi, Công ty ô tô Toyota Việt
                Nam (TMV) luôn không ngừng nỗ lực phấn đấu để giành được sự tin
                yêu của các Quý khách hàng bằng các hoạt đông cụ thể.
              </p>
              <p>
                - Cơ sở vật chất, trang thiết bị hiện đại theo tiêu chuẩn
                Toyota: Các đại lý chính hãng của Toyota đều được xây dựng với
                cơ sở vật chất hiện đại, trang bị tiện nghi và thiết bị dụng cụ
                chuyên dụng, được thiết kế đặc biệt dành riêng cho việc bảo
                dưỡng và sửa chữa xe Toyota với chất lượng cao nhất và trong
                thời gian ngắn nhất.
              </p>
              <p>
                - Nguồn nhân lực chuyên nghiệp: Với đội ngũ CVDV, Kỹ thuật viên
                được đào tạo về kiến thức và kỹ năng theo hệ thống Đào tạo bài
                bản và chuyên nghiệp của Toyota (TEAM), Khách hàng sẽ hoàn toàn
                yên tâm khi chiếc xe được chăm sóc tại các Đại lý Toyota chính
                hãng.
              </p>
              <p>
                - Quy trình hoạt động Dịch vụ tiêu chuẩn: Các Đại lý Toyota đều
                áp dụng một quy trình hoạt động dịch vụ tiêu chuẩn toàn cầu, lấy
                khách hàng làm trung tâm. Trong đó, quy trình dịch vụ được thực
                hiện từ khâu nhắc & mời khách hàng đưa xe đến làm bảo dưỡng, đến
                khâu chuẩn bị, tiếp đón khách hàng, sửa chữa, giao xe và liên hệ
                sau sửa chữa.
              </p>
              <p>
                - Phụ tùng chính hiệu: Tất cả các phụ tùng bảo dưỡng, sửa chữa
                chính hãng, nhập khẩu từ Thái Lan, Nhật Bản và các nước trong
                khu vực, luôn sẵn sàng đáp ứng nhu cầu của Khách hàng nhanh nhất
                và chất lượng tốt nhất.
              </p>
              <p>
                - Bảo hành chất lượng sửa chữa và phụ tùng thay thế: Với các phụ
                tùng thay thế chính hãng, Khách hàng sẽ được bảo hành 10.000km
                hoặc 12 tháng kể từ thời điểm sửa chữa và tùy điều kiện nào đến
                trước.
              </p>
              <p>
                - Mạng lưới đại lý: Với mục tiêu luôn luôn cải thiện, nâng cao
                chất lượng dịch vụ sau bán hàng, Toyota Việt Nam và các Đại lý
                mong muốn mang đến cho mỗi khách hàng đang sở hữu chiếc xe
                Toyota sự hài lòng cao nhất.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RepairService;
