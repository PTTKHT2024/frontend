import React, { useState } from 'react';
import { carModel } from '../../model/CarModel';
import { Tooltip } from 'react-tooltip';
import Specification from './Specification';
import { createCar } from '../../utils/CarApi';
import { fileUploadRegex, uploadFile } from '../../utils/UtilsFunction';
import Toast from '../../common/Toast';
import { useNavigate } from 'react-router';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddCar = () => {
  const [car, setCar] = useState(carModel);
  const [imagePreview, setImagePreview] = useState({
    poster: '',
    image: '',
    hover_image: '',
  });
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value, type } = e.target;
    const keys = name.split('.');

    if (['poster', 'image', 'hover_image'].includes(name)) {
      const selectedFile = e.target.files[0];
      setCar((prevCar) => ({
        ...prevCar,
        [name]: selectedFile,
      }));
      setImagePreview((prevImagePreview) => ({
        ...prevImagePreview,
        [name]: URL.createObjectURL(selectedFile),
      }));
    } else {
      setCar((prevState) => {
        const newState = { ...prevState };
        let tempState = newState;

        for (let i = 0; i < keys.length - 1; i++) {
          tempState = tempState[keys[i]];
        }

        tempState[keys[keys.length - 1]] =
          type === 'number' ? parseFloat(value) : value;

        return newState;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    try {
      const savePoster = await uploadFile(car.poster, accessToken);
      const saveImage = await uploadFile(car.image, accessToken);
      const saveHoverImage = await uploadFile(car.hover_image, accessToken);

      const savePosterFileName = savePoster.data.match(fileUploadRegex);
      const saveImageFileName = saveImage.data.match(fileUploadRegex);
      const saveHoverImageFileName = saveHoverImage.data.match(fileUploadRegex);
      const tmpCar = {
        ...car,
        poster: savePosterFileName[0],
        image: saveImageFileName[0],
        hover_image: saveHoverImageFileName[0],
      };

      const res = await createCar(tmpCar, accessToken);
      if (res.status == 201) {
        setMessage('Nhập xe mới thành công');
        setStatus('success');
        setImagePreview({
          poster: '',
          image: '',
          hover_image: '',
        });
      }
    } catch (err) {
      setMessage('Nhập xe thất bại');
      setStatus('danger');
      console.error('Error create car:', err);
    }

    setTimeout(() => {
      handleCloseToast();
    }, 5000);
  };

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  return (
    <section>
      <Toast
        handleCloseToast={handleCloseToast}
        message={message}
        status={status}
      />
      <Link
        className="fixed top-[100px] left-[90px] block h-max p-2 bg-[#f5f5f5] shadow hover:bg-slate-600 hover:text-white rounded-lg"
        to="/admin/car"
      >
        <FaLongArrowAltLeft className="h-5 w-5" />
      </Link>
      <form onSubmit={handleSubmit}>
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
            <p className="text-mainTitleColor font-semibold text-[18px] uppercase">
              Thông tin cơ bản
            </p>
            <hr />

            <div className="grid grid-cols-12 mt-5 gap-3">
              <div className="col-span-6">
                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <label
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                    htmlFor="name"
                  >
                    Tên <span className="text-primaryColor">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-1/2 px-2 outline-0"
                    name="name"
                    id="name"
                    value={car.name}
                    onChange={handleChangeInput}
                    placeholder="Wigo E"
                    required
                  />
                </div>

                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <label
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                    htmlFor="price"
                  >
                    Giá <span className="text-primaryColor">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-1/2 px-2 outline-0"
                    name="price"
                    id="price"
                    value={car.price}
                    onChange={handleChangeInput}
                    placeholder="360000000"
                    required
                  />
                </div>

                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <label
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                    htmlFor="capacity"
                  >
                    Dung tích <span className="text-primaryColor">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-1/2 px-2 outline-0"
                    name="capacity"
                    id="capacity"
                    value={car.capacity}
                    onChange={handleChangeInput}
                    placeholder="2"
                    required
                  />
                </div>

                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <label
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                    htmlFor="engine"
                  >
                    Động cơ <span className="text-primaryColor">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-1/2 px-2 outline-0"
                    name="engine"
                    id="engine"
                    value={car.engine}
                    onChange={handleChangeInput}
                    placeholder="V6"
                    required
                  />
                </div>

                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <label
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                    htmlFor="carModel.name"
                  >
                    Mẫu xe <span className="text-primaryColor">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-1/2 px-2 outline-0"
                    name="carModel.name"
                    id="carModel.name"
                    value={car.carModel.name}
                    onChange={handleChangeInput}
                    placeholder="Wigo"
                    required
                  />
                </div>
              </div>

              {/* ảnh */}
              <div className="col-span-6">
                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <label
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                    htmlFor="inventory.quantity"
                  >
                    Số lượng <span className="text-primaryColor">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-1/2 px-2 outline-0"
                    name="inventory.quantity"
                    id="inventory.quantity"
                    value={car.inventory.quantity}
                    onChange={handleChangeInput}
                    placeholder="1"
                    required
                  />
                </div>

                <div>
                  <div
                    data-tooltip-id="poster"
                    className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3 items-center"
                  >
                    <label className="w-1/2 pl-2 h-full block" htmlFor="poster">
                      Poster <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="file"
                      className="w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]"
                      name="poster"
                      id="poster"
                      onChange={handleChangeInput}
                      required
                    />
                  </div>

                  {imagePreview.poster && car.poster && (
                    <Tooltip id="poster">
                      <div className="relative w-[300px]">
                        <img
                          src={imagePreview.poster}
                          alt="poster"
                          className="object-cover object-center w-full"
                        />
                        <p
                          className="absolute bottom-[10px] left-[10px] font-semibold text-2xl"
                          style={{ textShadow: '0 0 2px rgba(0, 0, 0, 0.9)' }}
                        >
                          Poster
                        </p>
                      </div>
                    </Tooltip>
                  )}
                </div>

                <div>
                  <div
                    data-tooltip-id="image"
                    className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3 items-center"
                  >
                    <label className="w-1/2 pl-2 h-full block" htmlFor="image">
                      Ảnh xe ngang <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="file"
                      className="w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]"
                      name="image"
                      id="image"
                      onChange={handleChangeInput}
                      required
                    />
                  </div>

                  {imagePreview.image && car.image && (
                    <Tooltip id="image">
                      <div className="relative w-[300px]">
                        <img
                          src={imagePreview.image}
                          alt="image"
                          className="object-cover object-center w-full"
                        />
                        <p
                          className="absolute bottom-[10px] left-[10px] font-semibold text-2xl"
                          style={{ textShadow: '0 0 2px rgba(0, 0, 0, 0.9)' }}
                        >
                          Ảnh xe ngang
                        </p>
                      </div>
                    </Tooltip>
                  )}
                </div>

                <div>
                  <div
                    data-tooltip-id="hover_image"
                    className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3 items-center"
                  >
                    <label
                      className="w-1/2 pl-2 h-full block"
                      htmlFor="hover_image"
                    >
                      Ảnh xe nghiêng{' '}
                      <span className="text-primaryColor">*</span>
                    </label>
                    <input
                      type="file"
                      className="w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]"
                      name="hover_image"
                      id="hover_image"
                      onChange={handleChangeInput}
                      required
                    />
                  </div>

                  {imagePreview.hover_image && car.hover_image && (
                    <Tooltip id="hover_image">
                      <div className="relative w-[300px]">
                        <img
                          src={imagePreview.hover_image}
                          alt="hover_image"
                          className="object-cover object-center w-full"
                        />
                        <p
                          className="absolute bottom-[10px] left-[10px] font-semibold text-2xl"
                          style={{ textShadow: '0 0 2px rgba(0, 0, 0, 0.9)' }}
                        >
                          Ảnh xe nghiêng
                        </p>
                      </div>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Specification car={car} handleChangeInput={handleChangeInput} />
        </div>
      </form>
    </section>
  );
};

export default AddCar;
