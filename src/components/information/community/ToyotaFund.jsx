// CommunityContribution.jsx
import React from 'react';
import { fund } from '../../data/information/community/ToyotaFundData';
import CommunityComponent from './CommunityCompoment';

function ToyotaFund() {
  return (
    <>
      <div className="mt-[94px]">
        <img
          className="mb-12 w-full"
          src="/imgs/information/community/fund_head.png"
          alt=""
        />
      </div>
      <div className="bg-white px-auto py-12">
        <h1 className="text-mainTitleColor text-mainTitle font-bold text-center mb-6">
          QUỸ TOYOTA
        </h1>
        <p className="container text-center text-subInformationColor text-base mb-8 leading-6">
          Quỹ Toyota Việt Nam (TVF) được thành lập vào năm 2006 với số vốn ban
          đầu là 4 triệu đô la Mỹ. 14 năm qua, cùng với Bộ Giáo dục và Đào tạo,
          Bộ Văn Hoá, Thể thao và Du lịch, TVF đã thực hiện nhiều hoạt động cộng
          đồng để hỗ trợ giao lưu và phát triển văn hoá xã hội, đặc biệt là phát
          triển nguồn nhân lực tại Việt Nam.
        </p>
        <hr className="border-t-4 border-red-500 w-96 mx-auto mb-16" />
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-9">2007</h2>
            <p className="text-lg px-16">
              Năm TMV duy trì hoạt động đóng góp cho xã hội
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-center text-5xl font-bold mb-9">50 TRIỆU</h2>
            <p className="text-lg px-16">
              Tổng ngân sách chi cho hoạt động xã hội của TMV
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-9">20</h2>
            <p className="text-lg px-16">
              Chương trình hoạt động xã hội đã được diễn ra trên toàn quốc
            </p>
          </div>
        </div>
      </div>
      <div>
        {fund.map((item) => (
          <CommunityComponent key={item.id} data={item} />
        ))}
      </div>
      <div className="px-28 py-8">
        <h2 className="text-3xl text-mainTitleColor font-medium mb-6 pl-4 border-l-4 border-red-500">
          BÀI VIẾT LIÊN QUAN
        </h2>
      </div>
    </>
  );
}

export default ToyotaFund;
