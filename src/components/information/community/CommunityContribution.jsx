// CommunityContribution.jsx
import React from 'react';
import { contributions } from '../../data/information/community/CommunityContributionData';
import CommunityComponent from './CommunityCompoment';
import RelatedPosts from './RelatedPost';

function CommunityContribution() {
  return (
    <>
      <div className="mt-[94px]">
        <img
          className="mb-12 w-full"
          src="/imgs/information/community/contribution_head.png"
          alt=""
        />
      </div>
      <div className="bg-white px-auto py-12">
        <h1 className="text-mainTitleColor text-mainTitle font-bold text-center mb-6">
          ĐÓNG GÓP XÃ HỘI
        </h1>
        <p className="container text-center text-subInformationColor text-base mb-8 leading-6">
          Nhằm góp phần xây dựng, phát triển bền vững và kiến tạo một tương lai
          tươi đẹp cho đất nước Việt Nam, Toyota Việt Nam luôn tích cực đóng góp
          cho cộng đồng thông qua nhiều hoạt động ý nghĩa có quy mô rộng khắp
          trong các lĩnh vực: An toàn giao thông, Bảo vệ môi trường, Phát triển
          nguồn nhân lực, Văn hoá – Xã hội.
        </p>
        <hr className="border-t-4 border-red-500 w-96 mx-auto mb-16" />
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-9">Hơn 25 năm</h2>
            <p className="text-lg px-16">
              Toyota duy trì hoạt động đóng góp cho xã hội
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-center text-5xl font-bold mb-9">
              27 TRIỆU USD
            </h2>
            <p className="text-lg px-16">
              Tổng ngân sách chi cho hoạt động xã hội của Toyota
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-9">12</h2>
            <p className="text-lg px-16">
              Chương trình hoạt động xã hội đã được diễn ra trên toàn quốc
            </p>
          </div>
        </div>
      </div>
      <div>
        {contributions.map((item) => (
          <CommunityComponent key={item.id} data={item} />
        ))}
      </div>
      <div className="px-28 pt-8">
        <RelatedPosts />
      </div>
    </>
  );
}

export default CommunityContribution;
