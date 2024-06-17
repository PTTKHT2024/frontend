import React from "react";
import ContactAgency from "../common/ContactAgency";
import PartnerInsurance from "../common/PartnerInsurance";
import Table1 from "./table1";
import Table2 from "./table2";
import Table3 from "./table3";

const ProductInsurance = () => {
    return (
      <>
        <div className="pt-44 box-content">
          <div className="w-full h-[400px] max-w-full">
            <img
              src="/imgs/insurance/product/1.png"
              alt=""
              className="w-full h-full object-bottom"
            />
          </div>
        </div>
        <div className="">
          <div className="mx-0 mt-16 mb-12">
            <h1 className="text-center font-semibold text-4xl leading-[120%] uppercase text-subTitleColor m-0 mb-14">
              TƯ VẤN BẢO HIỂM
            </h1>
            <div className="w-32 h-[1px] bg-primaryColor my-0 mx-auto"></div>
          </div>
          <div className="w-[1200px] max-w-full my-14 mx-auto">
            <h3 className="text-center font-semibold text-3xl leading-[120%] uppercase text-primaryColor m-0 mb-24">
              BẢO HIỂM TOYOTA - VẬT CHẤT XE
            </h3>
            <div className="w-[1200px] max-w-full my-14 mx-auto">
              <Table1 />
            </div>
            <div className="w-full h-[1px] bg-gray-400 my-8 mx-0"></div>
            <div className="w-[1200px] max-w-full my-14 mx-auto">
              <Table2 />
            </div>
          </div>
          <div className="w-[1200px] max-w-full my-14 mx-auto">
            <h3 className="text-center font-semibold text-3xl leading-[120%] uppercase text-primaryColor m-0 mb-24">
              BẢO HIỂM TOYOTA - TRÁCH NHIỆM DÂN SỰ
            </h3>
            <Table3 />
            <div className="m-0 mt-14 text-base leading-[150%] text-subInformationColor">
              <p className="mt-0 mb-4">
                - Một số phạm vi/quyền lợi bảo hiểm có mức khấu trừ hoặc lưu ý
                riêng, xin vui lòng xem kỹ chi tiết sản phẩm tại Quy tắc bảo
                hiểm xe cơ giới và Giấy chứng nhận bảo hiểm Toyota.
              </p>
              <p className="mt-0 mb-4">
                - Trong mọi trường hợp giảm/thưởng/chiết khấu, phí bảo hiểm
                không được phép thấp hơn phí tối thiểu của Bộ Tài Chính.
              </p>
            </div>
            <div className=""></div>
          </div>
          <PartnerInsurance />
          <ContactAgency />
        </div>
      </>
    );
}

export default ProductInsurance;