import React from 'react';
import { hybridCars as cars } from '../data/HybridCarData';
import { Link } from 'react-router-dom';
import Jumping from '../common/Jumping';

const CarSearch = () => {
  return (
    <section>
      <div className="container">
        <div className="py-[40px]">
          <Jumping>
            <h1 className="uppercase text-mainTitleColor font-bold text-mainTitle">
              KHÁM PHÁ CÁC DÒNG XE CỦA CHÚNG TÔI
            </h1>
          </Jumping>

          <div className="mt-6 relative">
            <p className="uppercase tracking-wide text-mainTitleColor py-[20px] px-[40px] font-bold text-base border-b-tabAction w-max relative z-10">
              công nghệ hybrid
            </p>
            <hr className="border-black border-b w-full absolute bottom-[2.2px] z-0" />
          </div>

          <ul className="grid grid-cols-12 mt-5">
            {cars.map((car) => (
              <li className="col-span-3" key={car.id}>
                <Link
                  to={car.route}
                  className="w-full overflow-hidden text-subTitleColor"
                >
                  <img
                    src={`${car.image}`}
                    alt="hybrid-car-image"
                    className="max-w-full object-cover object-center hover:scale-[1.05] h-[65%] transition-all ease-in duration-200"
                  />
                  <p className="uppercase py-2 font-bold text-[22px]">
                    {car.name}
                  </p>
                  <p className="font-medium">{car.sub_name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarSearch;
