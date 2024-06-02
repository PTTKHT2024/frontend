import React from 'react';

const MainTitle = ({ title, mt = 120, mb = 60 }) => {
  return (
    <div
      className="container"
      style={{ marginTop: `${mt}px`, marginBottom: `${mb}px` }}
    >
      <h1 className="text-mainTitle uppercase text-mainTitleColor mt-sectionMargin_1 mb-sectionMargin_2">
        {title}
      </h1>
    </div>
  );
};

export default MainTitle;
