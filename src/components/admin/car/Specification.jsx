import React, { useState } from 'react';

const Specification = ({ car, handleChangeInput }) => {
  const [currentTab, setCurrentTab] = useState('THÔNG TIN CHUNG');
  const tabs = ['THÔNG TIN CHUNG', 'ĐỘNG CƠ & KHUNG XE', 'TIỆN NGHI'];

  const handleChangeTab = (e) => {
    const tab = e.target.dataset.tab;
    setCurrentTab(tab);
  };

  console.log('Car', car);

  return (
    <section>
      <div className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 bg-white rounded-2xl shadow-md overflow-hidden h-max">
            <ul className="w-full text-center uppercase">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`w-full py-3 border-b-[1px] border-[#ccc] block cursor-pointer font-semibold ${
                    currentTab == tab
                      ? 'bg-[#56BACC] text-white'
                      : 'hover:bg-[#f5f5f5] text-mainTitleColor'
                  }`}
                  data-tab={tab}
                  onClick={handleChangeTab}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-9 bg-white p-5 rounded-2xl shadow-md">
            <p className="text-mainTitleColor font-semibold text-[18px]">
              {currentTab}
            </p>
            <hr />

            {/* THÔNG TIN CHUNG */}
            <div>
              {currentTab == 'THÔNG TIN CHUNG' && (
                <>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold mt-5">
                    Số chỗ
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="number_of_seats"
                    >
                      Số chỗ ngồi <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="number_of_seats"
                      id="number_of_seats"
                      value={car.number_of_seats}
                      onChange={handleChangeInput}
                      placeholder="5"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Kiểu dáng
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="carCategory.name"
                    >
                      Kiểu dáng <span className="text-primaryColor">*</span>
                    </label>
                    <select
                      className="w-1/2 px-2 outline-0"
                      name="carCategory.name"
                      id="carCategory.name"
                      value={car.carCategory.name}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value="" className="text-[#ccc]" disabled>
                        Chọn
                      </option>
                      <option value="Sedan">Sedan</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Suv">Suv</option>
                      <option value="Đa dụng">Đa dụng</option>
                      <option value="Bán tải">Bán tải</option>
                    </select>
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Nhiên liệu
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.fuel"
                    >
                      Nhiên liệu <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.fuel"
                      id="specification.fuel"
                      value={car.specification.fuel}
                      onChange={handleChangeInput}
                      placeholder="Xăng"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Xuất xứ
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.origin"
                    >
                      Xuất xứ <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.origin"
                      id="specification.origin"
                      value={car.specification.origin}
                      onChange={handleChangeInput}
                      placeholder="Indonesia"
                      required
                    />
                  </div>
                </>
              )}
            </div>

            {/* ĐỘNG CƠ & KHUNG XE */}
            <div className="mt-5">
              {currentTab == 'ĐỘNG CƠ & KHUNG XE' && (
                <>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Kích thước
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.dimensions"
                    >
                      Kích thước tổng thể (D x R x C) (mm x mm x mm){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.dimensions"
                      id="specification.dimensions"
                      value={car.specification.dimensions}
                      onChange={handleChangeInput}
                      placeholder="3760 x 1665 x 1515 mm"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.base_length"
                    >
                      Chiều dài cơ sở (mm){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.base_length"
                      id="specification.base_length"
                      value={car.specification.base_length}
                      onChange={handleChangeInput}
                      placeholder="2525"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.base_front_width"
                    >
                      Chiều rộng cơ sở trước (mm){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.base_front_width"
                      id="specification.base_front_width"
                      value={car.specification.base_front_width}
                      onChange={handleChangeInput}
                      placeholder="1585"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.base_back_width"
                    >
                      Chiều rộng cơ sở sau (mm){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.base_back_width"
                      id="specification.base_back_width"
                      value={car.specification.base_back_width}
                      onChange={handleChangeInput}
                      placeholder="1595"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.light_undercarriage"
                    >
                      Khoảng sáng gầm xe (mm){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.light_undercarriage"
                      id="specification.light_undercarriage"
                      value={car.specification.light_undercarriage}
                      onChange={handleChangeInput}
                      placeholder="160"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.minimum_rev_radius"
                    >
                      Bán kính vòng quay tối thiểu (m){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.minimum_rev_radius"
                      id="specification.minimum_rev_radius"
                      value={car.specification.minimum_rev_radius}
                      onChange={handleChangeInput}
                      placeholder="4"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.fuel_capacity"
                    >
                      Dung tích bình nhiên liệu (L){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.fuel_capacity"
                      id="specification.fuel_capacity"
                      value={car.specification.fuel_capacity}
                      onChange={handleChangeInput}
                      placeholder="42"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Động cơ thường
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.engine_type"
                    >
                      Loại động cơ <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.engine_type"
                      id="specification.engine_type"
                      value={car.specification.engine_type}
                      onChange={handleChangeInput}
                      placeholder="V6"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.number_of_xylanh"
                    >
                      Số xy lanh <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.number_of_xylanh"
                      id="specification.number_of_xylanh"
                      value={car.specification.number_of_xylanh}
                      onChange={handleChangeInput}
                      placeholder="6"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.xylanh_layout"
                    >
                      Bố trí xy lanh{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.xylanh_layout"
                      id="specification.xylanh_layout"
                      value={car.specification.xylanh_layout}
                      onChange={handleChangeInput}
                      placeholder="V"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.xylanh_capacity"
                    >
                      Dung tích xy lanh (cc){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.xylanh_capacity"
                      id="specification.xylanh_capacity"
                      value={car.specification.xylanh_capacity}
                      onChange={handleChangeInput}
                      placeholder="1198"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.fuel_system"
                    >
                      Hệ thống phun nhiên liệu{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.fuel_system"
                      id="specification.fuel_system"
                      value={car.specification.fuel_system}
                      onChange={handleChangeInput}
                      placeholder="Tiêm trực tiếp"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.fuel_category"
                    >
                      Loại nhiên liệu{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.fuel_category"
                      id="specification.fuel_category"
                      value={car.specification.fuel_category}
                      onChange={handleChangeInput}
                      placeholder="Xăng"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.power"
                    >
                      Công suất tối đa ((KW) HP/vòng/phút){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.power"
                      id="specification.power"
                      value={car.specification.power}
                      onChange={handleChangeInput}
                      placeholder="(79) 106/6000"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.momen"
                    >
                      Mô men xoắn tối đa (Nm/vòng/phút){' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.momen"
                      id="specification.momen"
                      value={car.specification.momen}
                      onChange={handleChangeInput}
                      placeholder="140/4200"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Hệ thống truyền động
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.driver_type"
                    >
                      Hệ thống truyền động{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.driver_type"
                      id="specification.driver_type"
                      value={car.specification.driver_type}
                      onChange={handleChangeInput}
                      placeholder="Dẫn động cầu trước"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Hộp số
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="gearbox"
                    >
                      Hộp số <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="gearbox"
                      id="gearbox"
                      value={car.gearbox}
                      onChange={handleChangeInput}
                      placeholder="Số sàn 5 cấp"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Hệ thống treo
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.front_hang_system"
                    >
                      Trước <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.front_hang_system"
                      id="specification.front_hang_system"
                      value={car.specification.front_hang_system}
                      onChange={handleChangeInput}
                      placeholder="Độc lập Macpherson"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.back_hang_system"
                    >
                      Sau <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.back_hang_system"
                      id="specification.back_hang_system"
                      value={car.specification.back_hang_system}
                      onChange={handleChangeInput}
                      placeholder="Dầm xoắn"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Hệ thống lái
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.drive_system"
                    >
                      Trợ lực tay lái{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.drive_system"
                      id="specification.drive_system"
                      value={car.specification.drive_system}
                      onChange={handleChangeInput}
                      placeholder="Điện"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Vành & lốp xe
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.rim"
                    >
                      Loại vành <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.rim"
                      id="specification.rim"
                      value={car.specification.rim}
                      onChange={handleChangeInput}
                      placeholder="Mâm đúc"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.tire_size"
                    >
                      Kích thước lốp{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.tire_size"
                      id="specification.tire_size"
                      value={car.specification.tire_size}
                      onChange={handleChangeInput}
                      placeholder="185/60R15"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.tire_backup"
                    >
                      Lốp dự phòng <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.tire_backup"
                      id="specification.tire_backup"
                      value={car.specification.tire_backup}
                      onChange={handleChangeInput}
                      placeholder="Mâm đúc"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Tiêu chuẩn khí thải
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.emissions"
                    >
                      Tiêu chuẩn khí thải{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.emissions"
                      id="specification.emissions"
                      value={car.specification.emissions}
                      onChange={handleChangeInput}
                      placeholder="Euro 5"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Phanh
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.front_brake"
                    >
                      Trước <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.front_brake"
                      id="specification.front_brake"
                      value={car.specification.front_brake}
                      onChange={handleChangeInput}
                      placeholder="Đĩa thông gió 15"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.back_brake"
                    >
                      Sau <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.back_brake"
                      id="specification.back_brake"
                      value={car.specification.back_brake}
                      onChange={handleChangeInput}
                      placeholder="Đĩa đặc"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Tiêu thụ nhiên liệu (L/100km)
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.fuel_consumption"
                    >
                      Ngoài đô thị <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.fuel_consumption"
                      id="specification.fuel_consumption"
                      value={car.specification.fuel_consumption}
                      onChange={handleChangeInput}
                      placeholder="4.67"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.combine_fuel_consumption"
                    >
                      Kết hợp <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.combine_fuel_consumption"
                      id="specification.combine_fuel_consumption"
                      value={car.specification.combine_fuel_consumption}
                      onChange={handleChangeInput}
                      placeholder="5.77"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.urban_fuel_consumption"
                    >
                      Trong đô thị <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.urban_fuel_consumption"
                      id="specification.urban_fuel_consumption"
                      value={car.specification.urban_fuel_consumption}
                      onChange={handleChangeInput}
                      placeholder="7.70"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Trọng lượng
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.weight"
                    >
                      Trọng lượng không tải{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.weight"
                      id="specification.weight"
                      value={car.specification.weight}
                      onChange={handleChangeInput}
                      placeholder="1530"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.weight_load"
                    >
                      Trọng lượng tải tối đa{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.weight_load"
                      id="specification.weight_load"
                      value={car.specification.weight_load}
                      onChange={handleChangeInput}
                      placeholder="2030"
                      required
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mt-5">
              {currentTab == 'TIỆN NGHI' && (
                <>
                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Cụm đèn
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.near_lamp"
                    >
                      Đèn chiếu gần <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.near_lamp"
                      id="specification.near_lamp"
                      value={car.specification.near_lamp}
                      onChange={handleChangeInput}
                      placeholder="Bi LED dạng bóng chiếu"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.far_lamp"
                    >
                      Đèn chiếu xa <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.far_lamp"
                      id="specification.far_lamp"
                      value={car.specification.far_lamp}
                      onChange={handleChangeInput}
                      placeholder="Bi LED dạng bóng chiếu"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.remind_light_system"
                    >
                      Hệ thống nhắc nhở đèn sáng{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.remind_light_system"
                      id="specification.remind_light_system"
                      value={car.specification.remind_light_system}
                      onChange={handleChangeInput}
                      placeholder="Có/Không"
                      required
                    />
                  </div>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.fog_light"
                    >
                      Đèn sương mù <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 px-2 outline-0"
                      name="specification.fog_light"
                      id="specification.fog_light"
                      value={car.specification.fog_light}
                      onChange={handleChangeInput}
                      placeholder="Có/Không"
                      required
                    />
                  </div>

                  <p className="text-base text-mainTitleColor mb-3 font-semibold">
                    Khoang hành lý
                  </p>

                  <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                    <label
                      className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                      htmlFor="specification.luggage_capacity"
                    >
                      Khoang hành lý{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-1/2 px-2 outline-0"
                      name="specification.luggage_capacity"
                      id="specification.luggage_capacity"
                      value={car.specification.luggage_capacity}
                      onChange={handleChangeInput}
                      placeholder="427"
                      required
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specification;
