import React from 'react';
import Banner from './BannerCompoment';
import { banner } from '../../data/information/community/BannerData'; // Adjust the import path as necessary
import { hrdev } from '../../data/information/community/HRDevelopmentData';
import CommunityComponent from './CommunityCompoment';
function HRDevelopment() {
  return (
    <div>
      <Banner data={banner} id={3} />
      {hrdev.map((item) => (
        <CommunityComponent key={item.id} data={item} />
      ))}
    </div>
  );
}

export default HRDevelopment;
