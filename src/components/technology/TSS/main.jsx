import React, { useState, useEffect } from 'react';
import Tools from '/VScode/frontend/src/components/common/Tool';
import YoutubeEmbed from '/VScode/frontend/src/components/common/YoutubeEmbed';
import Content from "./content";
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const TSS = ({title, src}) => {
  const [selection, setSelection] = useState('video');

  useEffect(() => {
    setSelection('video');
  }, []);

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };
  return (
    <>
      <Tools />
      <div className="mt-24 max-w-[1600px] m-auto p-0 relative w-full">
        <div className="relative pt-16 ">
          <div className="h-96 w-full max-w-full">
            <img
              src="public/imgs/technology/tss_1.jpg"
              alt=""
              className="w-full h-full object-center align-middle border-none"
            />
          </div>
        </div>
        <div className="max-w-[1200px] my-1 mx-auto mt-14 ">
          <Content />
          <div>
            <div className="flex justify-between items-center">
              <p
                className="border-l-4 border-solid border-primaryColor h-10 flex items-center pl-3 text-2xl 
              leading-8 text-black mb-4 mt-0"
              >
                TÌM HIỂU VỀ TSS
              </p>
              <div className="flex w-52 flex-col items-start justify-center relative">
                <select
                  name=""
                  id=""
                  className="py-0 px-4 w-full h-10 flex items-center border border-solid border-gray-400 cursor-pointer "
                  value={selection}
                  onChange={handleSelectionChange}
                >
                  <option value="video">Video</option>
                  <option value="image">Hình ảnh</option>
                </select>
              </div>
            </div>
            <div className="p-0">
              <div className="flex flex-wrap pt-10 px-28 ml-[-40px]">
                {selection === 'video' ? (
                  <>
                    <div className="pr-10 w-80 h-44">
                      <YoutubeEmbed
                        src="https://www.youtube.com/embed/_2sBbzICjsg"
                        title="Hệ thống an toàn Toyota Safety Sense hỗ trợ người lái như thế nào | Toyota Việt Nam"
                      />
                      <h3 className="text-base leading-[120%] text-black pt-5">
                        Giới thiệu về Công nghệ TSS
                      </h3>
                    </div>
                    <div className="w-80 h-44">
                      <YoutubeEmbed
                        src="https://www.youtube.com/embed/SL3otKUZd64"
                        title="Hệ thống an toàn Toyota Safety Sense hỗ trợ người lái như thế nào | Toyota Việt Nam"
                      />
                      <h3 className="text-base leading-[120%] text-black pt-5">
                        Hệ thống an toàn Toyota Safety Sense hỗ trợ người lái
                        như thế nào?
                      </h3>
                    </div>
                  </>
                ) : (
                  <div>
                    <img
                      src="public/imgs/technology/tss_12.jpg"
                      alt=""
                      className="w-80 h-44"
                    />
                  </div>
                )}
              </div>
              <div className="pt-40 flex items-center m-auto justify-center ml-[-16px]">
                <div
                  className="h-10 w-10 ml-4 border-2 border-solid border-gray-500 text-center leading-10 
                    uppercase text-base text-gray-500 cursor-pointer"
                >
                  <VscChevronLeft className="inline-block" />
                </div>
                <input
                  readOnly
                  className="ml-4 text-white bg-primaryColor h-10 w-10 text-center"
                  value={1}
                />
                <div
                  className="h-10 w-10 ml-4 border-2 border-solid border-gray-500 text-center leading-10 uppercase 
                    text-base text-gray-500 cursor-pointer "
                >
                  <VscChevronRight className="inline-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TSS;