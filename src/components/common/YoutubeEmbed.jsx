import React from 'react';

const YoutubeEmbed = ({ title, src }) => {
  return (
    <iframe
      // width="980"
      // height="580"
      className="h-full w-full"
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  );
};

export default YoutubeEmbed;
