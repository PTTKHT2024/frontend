import React from 'react';
import Banner from './BannerCompoment';
import { banner } from '../../data/information/community/BannerData'; // Adjust the import path as necessary
import { Social_Culture } from '../../data/information/community/SocialCultureData';
import CommunityComponent from './CommunityCompoment';
function SocialCulture() {
  return (
    <div>
      <Banner data={banner} id={4} />
      {Social_Culture.map((item) => (
        <CommunityComponent key={item.id} data={item} />
      ))}
    </div>
  );
}

export default SocialCulture;
