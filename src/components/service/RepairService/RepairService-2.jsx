import React, { useState } from 'react';
import Header from '../../common/Header';

const RepairService = () => {
  const [activeSubTab, setActiveSubTab] = useState('sua-chua-than');

  const handleSubTabClick = (tab) => {
    setActiveSubTab(tab);
  };

  return (
    <>
      <Header />

      {/* Menu */}
      {/* <!-- Tab links --> */}
      <div className="tabs p-6  mt-sectionMargin_1 bg-black space-x-6 text-white text-xs font-bold text-subTitleColor-100">
        <button
          // active
          className="tablinks ml-sectionMargin_1"
          data-electronic="bao-duong"
        >
          BẢO DƯỠNG ĐỊNH KỲ
        </button>
        <button className="tablinks" data-electronic="sua-chua">
          DỊCH VỤ SỬA CHỮA
        </button>
        <button className="tablinks" data-electronic="cham-soc">
          DỊCH VỤ CHĂM SÓC LÀM ĐẸP XE
        </button>
        <button className="tablinks" data-electronic="bao-hanh">
          CHÍNH SÁCH BẢO HÀNH
        </button>
        <button className="tablinks" data-electronic="kiem-tra">
          KIỂM TRA & TRIỆU HỒI
        </button>
      </div>

      <div>
        <img
          className="mb-sectionMargin_1"
          src="https://www.toyota.com.vn/media/hb0bvfz3/008a7694.jpg"
          alt=""
        />
      </div>

      {/* Sub- Tab links */}
      <div className="sub-tabs mb-16 space-x-12 flex justify-center">
        <button
          className={`tab-item px-4 py-2 font-bold text-sm ${
            activeSubTab === 'sua-chua-than'
              ? 'text-red-500 underline'
              : 'text-black'
          }`}
          onClick={() => handleSubTabClick('sua-chua-than')}
          data-electronic="sua-chua-than"
        >
          Sửa chữa thân xe & sơn
        </button>
        <button
          className={`tab-item px-4 py-2 font-bold text-sm ${
            activeSubTab === 'sua-chua-chung'
              ? 'text-red-500 underline'
              : 'text-black'
          }`}
          onClick={() => handleSubTabClick('sua-chua-chung')}
          data-electronic="sua-chua-chung"
        >
          Sửa chữa chung
        </button>
      </div>

      {/* Tab content */}
      <div className="wrapper_tabcontent">
        <div
          id="sua-chua-than"
          className={`tab-pane ${
            activeSubTab === 'sua-chua-than' ? 'block' : 'hidden'
          }`}
        >
          <p>
            Ngoài dịch vụ bảo dưỡng và sửa chữa những hiện tượng bất thường trên
            xe, Toyota cũng cung cấp dịch vụ sửa chữa đối với những hư hỏng do
            va chạm mà chiếc xe của bạn gặp phải trong quá trình sử dụng. Dịch
            vụ đó được gọi là Sửa chữa Thân xe và Sơn.
          </p>
          <p>
            Với kỹ thuật sửa chữa theo tiêu chuẩn toàn cầu, trang thiết bị, vật
            tư vật chất lượng cao (được chỉ định bởi Toyota Nhật Bản), các Đại
            Lý của Toyota sẽ phục hồi hình dạng cũng như diện mạo lớp sơn trên
            chiếc xe của bạn về điều kiện ban đầu.
          </p>
          <p>
            Ngoài ra, nhằm đảm bảo chất lượng và rút ngắn thời gian sửa chữa,
            chúng tôi xây dựng và áp dụng quy trình quản lý chất lượng trong
            từng công đoạn, quy trình sửa chữa vết xước trong 4 giờ...để không
            ngừng đem đến sự hài lòng cho khách hàng đối với dịch vụ sửa chữa
            Thân xe và Sơn của Toyota.
          </p>
          <p>
            Để được tư vấn chi tiết về nội dung sừa chữa, xin liên hệ với các
            Đại lý chính hãng của Toyota Việt Nam trên toàn quốc.
          </p>
        </div>

        <div
          id="sua-chua-chung"
          className={`tab-pane ${
            activeSubTab === 'sua-chua-chung' ? 'block' : 'hidden'
          }`}
        >
          <p>
            Tự hào là doanh nghiệp dẫn đầu trên thị trường về dịch vụ sau bán
            hàng trong nhiều năm liên tiếp và được khách hàng đánh giá cao trong
            việc luôn tiên phong áp dụng những công nghệ mới cũng như thực hiện
            các chương trình hậu mãi, Công ty ô tô Toyota Việt Nam (TMV) luôn
            không ngừng nỗ lực phấn đấu để giành được sự tin yêu của các Quý
            khách hàng bằng các hoạt đông cụ thể.
          </p>
          <p>
            - Cơ sở vật chất, trang thiết bị hiện đại theo tiêu chuẩn Toyota:
            Các đại lý chính hãng của Toyota đều được xây dựng với cơ sở vật
            chất hiện đại, trang bị tiện nghi và thiết bị dụng cụ chuyên dụng,
            được thiết kế đặc biệt dành riêng cho việc bảo dưỡng và sửa chữa xe
            Toyota với chất lượng cao nhất và trong thời gian ngắn nhất.
          </p>
          <p>
            <b>- Nguồn nhân lực chuyên nghiệp:</b> Với đội ngũ CVDV, Kỹ thuật
            viên được đào tạo về kiến thức và kỹ năng theo hệ thống Đào tạo bài
            bản và chuyên nghiệp của Toyota (TEAM), Khách hàng sẽ hoàn toàn yên
            tâm khi chiếc xe được chăm sóc tại các Đại lý Toyota chính hãng.
          </p>
          <p>
            <b>- Quy trình hoạt động Dịch vụ tiêu chuẩn:</b> Các Đại lý Toyota
            đều áp dụng một quy trình hoạt động dịch vụ tiêu chuẩn toàn cầu, lấy
            khách hàng làm trung tâm. Trong đó, quy trình dịch vụ được thực hiện
            từ khâu nhắc & mời khách hàng đưa xe đến làm bảo dưỡng, đến khâu
            chuẩn bị, tiếp đón khách hàng, sửa chữa, giao xe và liên hệ sau sửa
            chữa.
          </p>
          <p>
            <b>- Phụ tùng chính hiệu:</b> Tất cả các phụ tùng bảo dưỡng, sửa
            chữa chính hãng, nhập khẩu từ Thái Lan, Nhật Bản và các nước trong
            khu vực, luôn sẵn sàng đáp ứng nhu cầu của Khách hàng nhanh nhất và
            chất lượng tốt nhất.
          </p>
          <p>
            <b>- Bảo hành chất lượng sửa chữa và phụ tùng thay thế:</b> Với các
            phụ tùng thay thế chính hãng, Khách hàng sẽ được bảo hành 10.000km
            hoặc 12 tháng kể từ thời điểm sửa chữa và tùy điều kiện nào đến
            trước.
          </p>
          <p>
            <b>- Mạng lưới đại lý:</b> Với mục tiêu luôn luôn cải thiện, nâng
            cao chất lượng dịch vụ sau bán hàng, Toyota Việt Nam và các Đại lý
            mong muốn mang đến cho mỗi khách hàng đang sở hữu chiếc xe Toyota sự
            hài lòng cao nhất.
          </p>
        </div>
      </div>
    </>
  );
};

export default RepairService;
