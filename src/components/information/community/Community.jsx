// Community.jsx
import React from 'react';
import { community } from '../../data/CommunityData';
import CommunityComponent from './CommunityCompoment';

function Community() {
  return (
    <>
      <div className="mt-[94px]">
        <img
          className="mb-sectionMargin_1 w-full"
          src="/imgs/information/community_head.png"
          alt=""
        />
      </div>

      <div className="flex items-center justify-center px-28 py-12">
        <h1 className=" inline-block text-mainTitleColor text-mainTitle font-bold pb-12 border-b-4 border-red-500">
          CỘNG ĐỒNG
        </h1>
      </div>

      {community.map((item) => (
        <CommunityComponent key={item.id} data={item} />
      ))}
    </>
  );
}

export default Community;
