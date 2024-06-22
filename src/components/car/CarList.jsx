import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarItem from '../common/ItemListCar';
import { fileURL } from '../utils/UtilsFunction';
import { getCarList } from '../utils/CarApi';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await getCarList();
        if (res.status === 200) {
          setCars(res.data.data.result);
        } else {
          setError('Failed to fetch car data.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

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
      {/* Phần filter */}
      {/*///////// */}
      {/* Phần list car */}
      <div className="pt-[40px] pb-[84px] bg-[#f5f5f5]">
        {/* Khung sort */}
        {/* Phần list */}
        <div className="relative w-[1400px] mt-[80px] m-auto container">
          <div className="grid grid-cols-12 gap-5 flex-wrap">
            {cars.length > 0 ? (
              cars.map((car) => (
                <div className="col-span-4">
                  <CarItem
                    key={car.id}
                    id={car.id}
                    img={`${fileURL}/${car.image}`}
                    imgHover={`${fileURL}/${car.hover_image}`}
                    name={car.name}
                    price={car.price}
                    numberSeats={car.number_of_seats}
                    uses={car.carCategory.name}
                    fuel={car.specification.fuel}
                    origin={car.specification.origin}
                    gear={car.gearbox}
                    engine={car.engine}
                  />
                </div>
              ))
            ) : (
              <div className="text-center col-span-3">No cars available.</div>
            )}
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto w-full">
        <Link to="/">
          <img
            src="https://www.toyota.com.vn/media/em1j53xq/photo_2022-01-25_16-15-00.jpg"
            alt="banner"
            className="w-[80%] block my-0 mx-auto object-cover object-center h-[140px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default CarList;
