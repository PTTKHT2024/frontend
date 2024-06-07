import React, { useState } from 'react';
import './MaintainService.css';
import { Link } from 'react-router-dom';

const MaintainService = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tab-header">
        <h4
          className={`tab-link text-base ${
            activeTab === 'Tab1' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('Tab1')}
        >
          Lợi ích của việc bảo dưỡng định kỳ
        </h4>
        <h4
          className={`tab-link text-base ${
            activeTab === 'Tab2' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('Tab2')}
        >
          Tiêu chuẩn bảo dưỡng định kỳ
        </h4>
        <h4
          className={`tab-link text-base ${
            activeTab === 'Tab3' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('Tab3')}
        >
          Dịch vụ bảo dưỡng nhanh (EM60)
        </h4>
        <h4
          className={`tab-link text-base ${
            activeTab === 'Tab4' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('Tab4')}
        >
          Gói dịch vụ bảo dưỡng trả trước
        </h4>
      </div>

      <div className={`tab ${activeTab === 'Tab1' ? 'active' : ''}`}>
        <div className="img-container">
          <img
            src="https://www.toyota.com.vn/media/ij1dsraw/1.png?width=730&height=518.2252559726962"
            alt=""
          ></img>
        </div>
        <p>*Chi phí 200đ/km chỉ mang tính chất tham khảo..</p>
        <div className="img-container">
          <img
            src="https://www.toyota.com.vn/media/me1foebu/image-11.png?width=500&height=287.3096446700507"
            alt=""
          ></img>
        </div>
      </div>

      <div className={`tab ${activeTab === 'Tab2' ? 'active' : ''}`}>
        <p style={{ textAlign: 'center' }}>
          Miễn phí tiền công bảo dưỡng tại các mốc 1.000 km, 50.000 km và
          100.000 km.
        </p>
        <div className="img-container">
          <img
            src="https://www.toyota.com.vn/media/2v4gkuav/2.png?width=730&height=517.7423033067274"
            alt=""
          ></img>
        </div>
        <p>
          Nhằm đảm bảo xe của bạn vận hành an toàn và ổn định, chúng tôi khuyên
          bạn nên đưa xe đi bảo dưỡng định kỳ tại các đại lý và trạm dịch vụ ủy
          quyền Toyota trên toàn quốc.
        </p>
        <div className="img-container">
          <img
            src="https://www.toyota.com.vn/media/if5pfyq2/3.png?width=730&height=512.5707814269535"
            alt=""
          ></img>
        </div>
      </div>

      <div className={`tab ${activeTab === 'Tab3' ? 'active' : ''}`}>
        <p>
          Với trang thiết bị chuyên dụng và quy trình bảo dưỡng 2-3 kỹ thuật
          viên chuyên nghiệp, Dịch vụ Bảo Dưỡng Nhanh sẽ giúp Quý khách hàng hài
          lòng hơn khi tổng thời gian chờ đợi tại trạm dịch vụ giảm xuống chỉ
          còn 60 phút (tính từ khi Quý khách ký lệnh sửa chữa bàn giao xe cho
          đến khi được thông báo xe sẵn sàng giao), trong khi quy trình bảo
          dưỡng thông thường mất 2-3 tiếng.
        </p>
        <div className="vertical-img">
          <img
            src="https://www.toyota.com.vn/media/0cypfthl/4.png"
            alt=""
          ></img>
        </div>
      </div>

      <div className={`tab ${activeTab === 'Tab4' ? 'active' : ''}`}>
        <div className="vertical-img">
          <img
            src="https://www.toyota.com.vn/media/4goj35gt/t%E1%BB%9D-r%C6%A1i-1.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MaintainService;
