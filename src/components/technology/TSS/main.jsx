import React, { useState, useEffect, useRef } from 'react';
import YoutubeEmbed from '../../common/YoutubeEmbed';
import Content from './content';
import ThreeButton from './Threebutton';
import { AiFillCaretRight } from 'react-icons/ai';

const TSS = ({ title, src }) => {
  const [selection, setSelection] = useState('video');
  const [videoIndex, setVideoIndex] = useState(null); // Define videoIndex state
  const videoRef = useRef(null); // Reference to the video container

  useEffect(() => {
    setSelection('video');
  }, []);

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  const handleClick = (index) => {
    setVideoIndex(index);
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleClose = () => {
    setVideoIndex(null);
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <>
      <div className="max-w-[1600px] m-auto p-0 relative w-full">
        <div className="relative pt-16 ">
          <div className="h-96 w-full max-w-full">
            <img
              src="/imgs/technology/tss_1.jpg"
              alt=""
              className="w-full h-full object-center align-middle border-none"
            />
          </div>
        </div>
        <div className="container my-1 mx-auto mt-14 ">
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
                  className="py-0 px-4 w-full h-10 flex items-center border border-solid border-gray-400 cursor-pointer"
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
                  <div className="flex">
                    <div>
                      <img
                        src="/imgs/technology/tss_13.jpg"
                        alt="hình ảnh công nghệ 1"
                        className="w-80 h-44 cursor-pointer mr-10"
                        onClick={() => handleClick(0)}
                      />
                      <AiFillCaretRight
                        className="absolute w-10 h-10 z-[2] left-[373px] bottom-[334px] text-white cursor-pointer"
                        onClick={() => handleClick(0)}
                      />
                      <h3
                        className="text-black text-base mt-5 hover:font-semibold cursor-pointer"
                        onClick={() => handleClick(0)}
                      >
                        Giới thiệu về Công nghệ TSS
                      </h3>
                    </div>
                    <div>
                      <img
                        src="/imgs/technology/tss_14.jpg"
                        alt="hình ảnh công nghệ 2"
                        className="w-80 h-44 cursor-pointer"
                        onClick={() => handleClick(1)}
                      />
                      <AiFillCaretRight
                        className="absolute w-10 h-10 z-[2] left-[725px] bottom-[334px] text-white cursor-pointer"
                        onClick={() => handleClick(1)}
                      />
                      <h3
                        className="text-black text-base mt-5 hover:font-semibold cursor-pointer"
                        onClick={() => handleClick(1)}
                      >
                        Hệ thống an toàn Toyota Safety Sense hỗ trợ
                        <br /> người lái như thế nào?
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div>
                    <img
                      src="/imgs/technology/tss_12.jpg"
                      alt=""
                      className="w-80 h-44"
                    />
                    <h3 className="text-black text-base mt-5 hover:font-semibold cursor-pointer">
                      Cross2
                    </h3>
                  </div>
                )}
              </div>
              <ThreeButton />
            </div>
          </div>
        </div>
      </div>

      {videoIndex !== null && (
        <div
          ref={videoRef}
          className="fixed top-0 left-0 right-0 bottom-0 z-[50] bg-gray-900 bg-opacity-75 flex justify-center items-center"
          onClick={handleClose}
        >
          <div
            className="relative bg-black w-[980px] h-[600px] transition duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <YoutubeEmbed
              src={
                videoIndex === 0
                  ? 'https://www.youtube.com/embed/_2sBbzICjsg'
                  : 'https://www.youtube.com/embed/SL3otKUZd64'
              }
              title={
                videoIndex === 0
                  ? 'Giới thiệu về Công nghệ TSS'
                  : 'Hệ thống an toàn Toyota Safety Sense hỗ trợ người lái như thế nào?'
              }
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TSS;
