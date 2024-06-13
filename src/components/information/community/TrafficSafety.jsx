import React from 'react';
import Banner from './BannerCompoment';
import { banner } from '../../data/information/community/BannerData'; // Adjust the import path as necessary
import { traffic } from '../../data/information/community/TrafficSafetyData';
import CommunityComponent from './CommunityCompoment';
function TrafficSafety() {
  return (
    <div>
      <Banner data={banner} id={1} />
      {traffic.map((item) => (
        <CommunityComponent key={item.id} data={item} />
      ))}
    </div>
  );
}

export default TrafficSafety;
