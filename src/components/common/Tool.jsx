import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { IoClose, IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Tool = () => {
  const [isOpened, setIsOpened] = useState(true);

  const handleToggleToolList = () => {
    setIsOpened(!isOpened);
  };

  return (
    <section className="fixed right-0 w-[48px] h-3/6 z-10 top-0 bottom-0 mt-auto mb-auto">
      <button
        className="w-full h-[48px] bg-white"
        onClick={handleToggleToolList}
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.6)' }}
      >
        {isOpened ? (
          <IoClose className="m-auto w-6 h-6" />
        ) : (
          <FaList className="m-auto w-5 h-5" />
        )}
      </button>
      {isOpened && (
        <ul className="">
          <li
            className="w-full h-[48px] bg-white"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <span
                style={{
                  backgroundPositionX: '-89px',
                  backgroundPositionY: '-339px',
                }}
                className="bg-[url('imgs/global-image.png')] w-[17px] h-6 bg-center"
              ></span>
            </Link>
          </li>

          <li
            className="w-full h-[48px] bg-white"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <span
                style={{
                  backgroundPositionX: '-10px',
                  backgroundPositionY: '-339px',
                }}
                className="bg-[url('imgs/global-image.png')] w-[21px] h-6 bg-center"
              ></span>
            </Link>
          </li>

          <li
            className="w-full h-[48px] bg-white"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <span
                style={{
                  backgroundPositionX: '-364px',
                  backgroundPositionY: '-219px',
                }}
                className="bg-[url('imgs/global-image.png')] w-6 h-6 bg-center"
              ></span>
            </Link>
          </li>

          <li
            className="w-full h-[48px] bg-white"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <span
                style={{
                  backgroundPositionX: '-232px',
                  backgroundPositionY: '-219px',
                }}
                className="bg-[url('imgs/global-image.png')] w-6 h-6 bg-center"
              ></span>
            </Link>
          </li>

          <li
            className="w-full h-[48px] bg-white"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <span
                style={{
                  backgroundPositionX: '-52px',
                  backgroundPositionY: '-339px',
                }}
                className="bg-[url('imgs/global-image.png')] w-[18px] h-6 bg-center"
              ></span>
            </Link>
          </li>

          <li
            className="w-full h-[48px] bg-white"
            style={{ boxShadow: 'inset 0 0 1px 1px rgba(192, 192, 192, 0.6)' }}
          >
            <Link className="h-full w-full flex justify-center items-center">
              <span
                style={{
                  backgroundPositionX: '-126px',
                  backgroundPositionY: '-339px',
                }}
                className="bg-[url('imgs/global-image.png')] w-[17px] h-6 bg-center"
              ></span>
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Tool;
