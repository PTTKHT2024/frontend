import React, { useEffect, useState } from 'react';
import { GrPlay } from 'react-icons/gr';
import YoutubeEmbed from '../common/YoutubeEmbed';
import Jumping from '../common/Jumping';
import { TfiClose } from 'react-icons/tfi';

const ElectricficationVideoReview = ({ data }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVideoOpen]);

  const handleToggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };
  return (
    <>
      <section className="min-h-[110vh] w-full relative">
        <img
          className="absolute h-full w-full"
          src={`${data.background_blur}`}
        />

        <div className="container pt-[20px] pb-[40px] h-full relative z-10">
          <div className="py-[40px]">
            <Jumping>
              <h1 className="uppercase text-white font-bold text-mainTitle">
                {data.title}
              </h1>
            </Jumping>
            <Jumping>
              <p className="text-white text-base mt-[20px]">
                {data.description}
              </p>
            </Jumping>
          </div>

          <Jumping>
            <div
              className="h-full relative group overflow-hidden cursor-pointer"
              onClick={handleToggleVideo}
            >
              <img
                src={`${data.image}`}
                alt=""
                className="h-full object-cover transition-all ease-in group-hover:scale-[1.05]"
              />
              <div className="absolute top-0 right-0 left-0 bottom-0 m-auto h-[80px] w-[80px] bg-white flex justify-center items-center rounded-full p-2 group-hover:opacity-80 transition-all ease-in">
                <GrPlay className="text-primaryColor h-3/6 w-3/6 ml-1" />
              </div>
            </div>
          </Jumping>
        </div>
      </section>

      {isVideoOpen && (
        <div className="h-screen w-full fixed top-0 bottom-0 right-0 left-0 z-[51]">
          <YoutubeEmbed src={data.video_src} title={data.video_title} />
          <TfiClose
            className="absolute right-5 top-0 bottom-0 my-auto h-9 w-9 text-white cursor-pointer"
            onClick={handleToggleVideo}
          />
        </div>
      )}
    </>
  );
};

export default ElectricficationVideoReview;
