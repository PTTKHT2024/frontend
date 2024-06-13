import React from 'react';
import Banner from './BannerCompoment';
import { banner } from '../../data/information/community/BannerData'; // Adjust the import path as necessary
import { environment } from '../../data/information/community/EnvironmentalProtectionData';
import CommunityComponent from './CommunityCompoment';
function EnvironmentalProtection() {
  return (
    <div>
      <Banner data={banner} id={2} />
      {environment.map((item) => (
        <CommunityComponent key={item.id} data={item} />
      ))}
    </div>
  );
}

export default EnvironmentalProtection;
