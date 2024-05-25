import React from 'react';

const MainTitle = ({ title }) => {
  return (
    <div className="container">
      <h1 className="text-mainTitle uppercase text-mainTitleColor mt-sectionMargin_1 mb-sectionMargin_2">
        {title}
      </h1>
    </div>
  );
};

export default MainTitle;
