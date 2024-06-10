import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import ContactUs from '../../common/ContactUs';
import Content from './Content';
import historyData from '../../data/Introduction';

const Introduction = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [startYearIndex, setStartYearIndex] = useState(21);
  const [transition, setTransition] = useState(false);
  const [direction, setDirection] = useState('');
  const years = Object.keys(historyData);
  const visibleYearsCount = 4;
  const transitionDuration = 500;

  const handleYearClick = (year) => {
    setSelectedYear(parseInt(year));
  };

  const handleNextYears = () => {
    setDirection('right');
    setTransition(true);
    setTimeout(() => {
      const currentIndex = years.indexOf(String(selectedYear));
      const nextIndex = (currentIndex + 1) % years.length;
      setSelectedYear(parseInt(years[nextIndex]));
      setStartYearIndex((startYearIndex + 1) % years.length);
      setTransition(false);
    }, transitionDuration);
  };

  const handlePreviousYears = () => {
    setDirection('left');
    setTransition(true);
    setTimeout(() => {
      const currentIndex = years.indexOf(String(selectedYear));
      const prevIndex = (currentIndex - 1 + years.length) % years.length;
      setSelectedYear(parseInt(years[prevIndex]));
      setStartYearIndex((startYearIndex - 1 + years.length) % years.length);
      setTransition(false);
    }, transitionDuration);
  };

  const getVisibleYears = () => {
    const endIndex = (startYearIndex + visibleYearsCount) % years.length;
    if (endIndex < startYearIndex) {
      return [...years.slice(startYearIndex), ...years.slice(0, endIndex)];
    }
    return years.slice(startYearIndex, startYearIndex + visibleYearsCount);
  };

  return (
    <div className="mt-24 min-h-full">
      <Content />
      <section className="max-w-[840px] my-0 mx-auto mt-16 mb-24">
        <p className="font-bold text-3xl leading-[115%] text-center text-mainTitleColor mb-16">
          THÀNH TỰU
        </p>
        <div className="relative">
          <div className="static touch-pan-y ml-auto mr-auto overflow-hidden list-none p-0">
            {selectedYear && (
              <div
                className={`transition-all duration-${transitionDuration}ms ${
                  transition
                    ? direction === 'right'
                      ? 'translate-x-full'
                      : 'translate-x-[-100%]'
                    : ''
                }`}
              >
                <div className="w-[840px] mr-2 static shrink-0 h-full">
                  <div className="w-full h-[560px]">
                    <img
                      src={historyData[selectedYear].image}
                      alt=""
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            )}
            <div
              onClick={handlePreviousYears}
              className="left-0 static bottom-7 w-6 h-6 text-primaryColor right-auto absolute z-10 cursor-pointer flex items-center justify-center"
            >
              <SlArrowLeft />
            </div>
            <div
              onClick={handleNextYears}
              className="right-0 bottom-7 w-6 h-6 text-primaryColor cursor-pointer left-auto absolute z-10 flex items-center justify-center"
            >
              <SlArrowRight />
            </div>
            <div className=""></div>
          </div>
          <div className="py-0 px-12 mt-5 touch-pan-y ml-auto mr-auto relative overflow-hidden list-none z-[1]">
            <div className="flex items-center justify-between">
              <div className="flex duration-0 items-baseline ease-out relative w-full h-full z-[1] transition-transform box-content overflow-hidden">
                {getVisibleYears().map((year) => (
                  <div
                    key={year}
                    onClick={() => handleYearClick(year)}
                    className={`w-[178px] mr-2 shrink-0 h-full relative transition-transform ${
                      selectedYear === parseInt(year)
                        ? 'font-bold text-7xl leading-[150%] text-primaryColor m-0 cursor-pointer text-center'
                        : 'font-medium text-4xl leading-[150%] text-red-400 cursor-pointer m-0 text-center'
                    }`}
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {selectedYear && (
          <div className="h-max">
            <p className="mt-0 mb-4 font-medium">
              <span>{historyData[selectedYear].content1}</span>
            </p>
            <p className="mt-0 mb-4 font-medium">
              <span>{historyData[selectedYear].content2}</span>
            </p>
            <p className="mt-0 mb-4 font-medium">
              <span>{historyData[selectedYear].content3}</span>
            </p>
            <p className="mt-0 mb-4 font-medium">
              <span>{historyData[selectedYear].content4}</span>
            </p>
            <p className="mt-0 mb-4 font-medium">
              <span>{historyData[selectedYear].content5}</span>
            </p>
            <p className="mt-0 mb-4 font-medium">
              <span>{historyData[selectedYear].content6}</span>
            </p>
          </div>
        )}
      </section>
      <ContactUs />
    </div>
  );
};

export default Introduction;
