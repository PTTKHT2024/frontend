import React from 'react';
import { createMarkup, fileURL } from '../../utils/UtilsFunction';

const TitleContent = ({ title, content, image}) => {
  return (
    <section>
      <div
        className="relative flex flex-col w-[1200px] items-center pointer-events-auto bg-white bg-clip-padding outline-none
        border-t-2 border-solid border-opacity-20 border-black rounded-e-md"
      >
        <div className="relative p-4 flex flex-1 flex-grow-1 flex-shrink-1">
          <div className="text-center mb-8 border-solid">
            <div className="font-semibold text-xl leading-7 text-center text-subTitleColor m-0">
              <p className="mt-0 mb-4">{title}</p>
            </div>
          </div>
        </div>
        {/* <div className="col-span-3 flex items-center">
          <img
            src={`${fileURL}/${image}`}
            alt="image-blog"
            className="rounded-md border-tabNavigate object-cover object-center w-full h-auto"
          />
        </div> */}
        <div
          className="mt-5 rounded-xl bg-white p-5 shadow-md max-w-[1200px] whitespace-normal"
          dangerouslySetInnerHTML={createMarkup(content)}
        ></div>
      </div>
    </section>
  );
};

export default TitleContent;
