import React from 'react';

const SUVShowroom = () => {
  return (
    <section className="flex h-screen w-full overflow-hidden">
      <iframe
        className="flex-grow"
        width="100%"
        height="100%"
        src="https://my.matterport.com/show/?m=kGGrNywcNSv"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default SUVShowroom;
