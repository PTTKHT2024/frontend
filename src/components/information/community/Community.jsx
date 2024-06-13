// Community.jsx
import React from 'react';
import { community } from '../../data/information/community/CommunityData';
import CommunityComponent from './CommunityCompoment';

function Community() {
  return (
    <>
      <div className="mt-[94px] mb-4 ">
        <img
          className="w-full"
          src="/imgs/information/community/community_head.png"
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
