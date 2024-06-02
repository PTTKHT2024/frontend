import React, { useState } from 'react';
import DiscoverTabSelect from '../common/DiscoverTabSelect';
import { technologies } from '../data/CarTechnologyDiscoverTabData';
import { BsPlayCircle } from 'react-icons/bs';
import YoutubeEmbed from '../common/YoutubeEmbed';
import { Link } from 'react-router-dom';

const CarTechnologyDiscoverTab = () => {
  const [technologyClass, setTechnologyClass] = useState('HYBRID');
  const [reviewIndex, setReviewIndex] = useState(undefined);
  const tabs = ['HYBRID', 'TSS', 'TNGA'];

  const handleClickReview = (e) => {
    setReviewIndex(e.currentTarget.dataset.index);
  };

  const hanleClickOutside = () => {
    setReviewIndex(undefined);
  };

  return (
    <section className="container">
      <DiscoverTabSelect
        tabs={tabs}
        currentTab={technologyClass}
        handleChangeTab={setTechnologyClass}
        width={60}
      />

      <div className="grid grid-cols-[39%,auto,39%] grid-rows-1 mt-[56px] h-[264px] gap-4">
        {technologies
          .filter((technology) => technology.class === technologyClass)
          .map((technology, index) => (
            <React.Fragment key={index}>
              <div
                className="row-span-1 relative cursor-pointer"
                data-index={1}
                onClick={(e) => handleClickReview(e)}
              >
                <img
                  src={technology.image_1}
                  alt="technology-image"
                  className="object-cover h-full w-full"
                />
                {technology.video_1.src && (
                  <BsPlayCircle className="absolute top-0 bottom-0 right-0 left-0 m-auto h-2/5 w-2/5 text-primaryColor" />
                )}
              </div>
              <div className="row-span-1 grid-rows-2 gap-4 grid">
                <div
                  className="row-span-1 relative cursor-pointer"
                  data-index={2}
                  onClick={(e) => handleClickReview(e)}
                >
                  <img
                    src={technology.image_2}
                    alt="technology-image"
                    className="object-cover h-full w-full"
                  />
                  {technology.video_2.src && (
                    <BsPlayCircle className="absolute top-0 bottom-0 right-0 left-0 m-auto h-2/5 w-2/5 text-primaryColor" />
                  )}
                </div>
                <div
                  className="row-span-1 relative cursor-pointer"
                  data-index={3}
                  onClick={(e) => handleClickReview(e)}
                >
                  <img
                    src={technology.image_3}
                    alt="technology-image"
                    className="object-cover h-full w-full"
                  />
                  {technology.video_3.src && (
                    <BsPlayCircle className="absolute top-0 bottom-0 right-0 left-0 m-auto h-2/5 w-2/5 text-primaryColor" />
                  )}
                </div>
              </div>
              <div
                className="row-span-1 relative cursor-pointer"
                data-index={4}
                onClick={(e) => handleClickReview(e)}
              >
                <img
                  src={technology.image_4}
                  alt="technology-image"
                  className="object-cover h-full w-full"
                />
                {technology.video_4.src && (
                  <BsPlayCircle className="absolute top-0 bottom-0 right-0 left-0 m-auto h-2/5 w-2/5 text-primaryColor" />
                )}
              </div>
            </React.Fragment>
          ))}
      </div>

      {reviewIndex &&
        technologies
          .filter((technology) => technology.class === technologyClass)
          .map((technology, index) => (
            <div
              className="fixed top-0 left-0 right-0 z-50 bottom-0 bg-[#333333]/[.7]"
              id="overlay"
              onClick={hanleClickOutside}
              key={index}
            >
              <div className="bg-black absolute w-2/3 h-4/5 top-0 bottom-0 left-0 right-0 m-auto">
                {technology[`video_${reviewIndex}`].src !== '' ? (
                  <YoutubeEmbed
                    src={technology[`video_${reviewIndex}`].src}
                    title={technology[`video_${reviewIndex}`].title}
                  />
                ) : (
                  <img
                    src={technology[`image_${reviewIndex}`]}
                    alt="image-technology"
                    className="h-full w-full"
                  />
                )}
              </div>
            </div>
          ))}

      <div className="flex justify-center w-full mt-[100px]">
        <Link className="uppercase font-semibold text-xs px-5 py-4 border-tabNavigate">
          xem thêm
        </Link>
      </div>
    </section>
  );
};

export default CarTechnologyDiscoverTab;
