import React from 'react';
import { Link } from 'react-router-dom';
import CarItem from '../common/ItemListCar';

const CarList = () => {
    const carInfor = [
      {
        id: 1,
        img: 'https://www.toyota.com.vn//Resources/Images/26A81D343439965FB49A7BE7462057F9.png',
        imgHover:
          'https://www.toyota.com.vn//Resources/Images/91896BC2F922CCC503B527165B6C3D8F.png',
        name: 'innova cross hev',
        price: '990000000',
        numberSeats: '7 chỗ',
        uses: 'Đa dụng',
        fuel: 'Xăng',
        origin: 'Indonesia',
        gear: 'Số tự động vô cấp',
        engine: 'Động cơ Xăng + Điện dung tích 1987 cc',
      },
    ];
    return (
      <div className="mt-[94px]">
        <div className="w-full relative m-auto">
          <div>
            <img
              src="https://www.toyota.com.vn/media/gnajj5p2/1600x400-1.png"
              alt=""
              className="w-full max-h-[750px] object-cover object-center h-full"
            />
          </div>
        </div>
        {/*phần filter */}
        {/*///////// */}
        {/*phần list car */}
        <div className="pt-[40px] pb-[84px] bg-[#f5f5f5]">
          {/*khung sort */}
          {/*phần list */}
          <div className="relative w-[1400px] mt-[80px] m-auto">
            <div className="grid grid-cols-3 gap-4 flex-wrap">
              {carInfor.map((car) => (
                <CarItem
                  key={car.id}
                  img={car.img}
                  imgHover={car.imgHover}
                  name={car.name}
                  price={car.price}
                  numberSeats={car.numberSeats}
                  uses={car.uses}
                  fuel={car.fuel}
                  origin={car.origin}
                  gear={car.gear}
                  engine={car.engine}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="my-0 mx-auto w-full">
          <Link TO="/">
            <img
              src="https://www.toyota.com.vn/media/em1j53xq/photo_2022-01-25_16-15-00.jpg"
              alt="banner"
              className="w-[80%] block my-0 mx-auto object-cover object-center h-[140px]"
            />
          </Link>
        </div>
      </div>
    );
}
export default CarList;
