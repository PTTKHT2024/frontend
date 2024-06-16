import React, { useState } from 'react';
import { carModel } from '../../model/CarModel';

const AddCar = () => {
  const [car, setCar] = useState(carModel);

  //   const handleChangeInput = (e) => {
  //     const { name, value } = e.target;
  //     setCar({ ...car, [name]: value });
  //   };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');

    setCar((prevState) => {
      let newState = { ...prevState };
      let tempState = newState;

      for (let i = 0; i < keys.length - 1; i++) {
        tempState = tempState[keys[i]];
      }
      tempState[keys[keys.length - 1]] = value;

      return newState;
    });
  };

  return (
    <section>
      <div className="container">
        <div className="flex justify-between">
          <p className="text-mainTitleColor text-mainTitle uppercase">
            Nhập xe
          </p>

          <button
            type="submit"
            className="uppercase px-5 py-2 rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            Lưu
          </button>
        </div>
      </div>

      <div className="container mt-5">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <p className="text-mainTitleColor font-semibold text-[18px]">
            Thông tin cơ bản
          </p>
          <hr />

          <div className="grid grid-cols-12 gap-10 mt-5">
            <div className="col-span-3">
              <div>
                <label className="text-base block font-medium" htmlFor="name">
                  Tên xe <span className="text-primaryColor">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  className="block outline-0 px-5 py-2 text-mainTitleColor w-full mt-3 rounded-3xl border border-[1px] border-[#3A3A3A]/[.4]"
                  placeholder="Tên xe"
                  value={car.name}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mt-3">
                <label className="text-base block font-medium" htmlFor="price">
                  Giá <span className="text-primaryColor">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  id="price"
                  className="block outline-0 px-5 py-2 text-mainTitleColor w-full mt-3 rounded-3xl border border-[1px] border-[#3A3A3A]/[.4]"
                  placeholder="Tên xe"
                  value={car.price}
                  onChange={handleChangeInput}
                  min={0}
                />
              </div>
            </div>

            {/* dung tích, số lượng */}
            <div className="col-span-3">
              <div>
                <label
                  className="text-base block font-medium"
                  htmlFor="capacity"
                >
                  Dung tích <span className="text-primaryColor">*</span>
                </label>
                <input
                  type="text"
                  name="capacity"
                  required
                  id="capacity"
                  className="block outline-0 px-5 py-2 text-mainTitleColor w-full mt-3 rounded-3xl border border-[1px] border-[#3A3A3A]/[.4]"
                  placeholder="Dung tích"
                  value={car.capacity}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mt-3">
                <label
                  className="text-base block font-medium"
                  htmlFor="quantity"
                >
                  Số lượng <span className="text-primaryColor">*</span>
                </label>
                <input
                  type="number"
                  name="inventory.quantity"
                  required
                  id="quantity"
                  className="block outline-0 px-5 py-2 text-mainTitleColor w-full mt-3 rounded-3xl border border-[1px] border-[#3A3A3A]/[.4]"
                  placeholder="Tên xe"
                  value={car.inventory.quantity}
                  onChange={handleChangeInput}
                  min={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="grid grid-cols-12 ">
          <div className="col-span-4 "></div>
        </div>
      </div>
    </section>
  );
};

export default AddCar;
