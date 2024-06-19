import React from "react";

const ContactAgency = () => {
    return (
      <>
        <div className="pt-20 pb-16 px-0 bg-electrification_1">
          <h3 className="text-base leading-[201.5%] text-center text-black font-semibold">
            Liên hệ
            <span className="text-primaryColor"> đại lý Toyota gần nhất </span>
            để được hỗ trợ tốt nhất hoặc gọi cho số hotline
            <strong className="">
              <a href="tel:1900 633 384" className="text-black">
                <span className="text-primaryColor"> 1900 633 384</span>
              </a>
            </strong>
          </h3>
          <p className="text-base leading-[201.5%] text-center text-black m-0 ">
            (Từ 8h - 17h trừ Thứ Bảy, Chủ Nhật và các ngày nghỉ lễ)
          </p>
        </div>
      </>
    );
}

export default ContactAgency