import React from 'react';

const YoutubeEmbed = ({ title, src }) => {
  const updatedSrc = `${src}?autoplay=1`;

  return (
    <iframe
      className="h-full w-full"
      src={updatedSrc}
      title={title}
      frameBorder="0"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  );
};

export default YoutubeEmbed;
