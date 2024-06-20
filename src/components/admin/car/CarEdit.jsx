import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCarById } from '../../utils/CarApi';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import {
  fileURL,
  fileUploadRegex,
  getImageFileName,
} from '../../utils/UtilsFunction';
import { Tooltip } from 'react-tooltip';

const CarEdit = () => {
  const [car, setCar] = useState({});
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [editedCar, setEditedCar] = useState({});
  const [currentTab, setCurrentTab] = useState('THÔNG TIN CHUNG');
  const [imagePreview, setImagePreview] = useState({
    poster: '',
    image: '',
    hover_image: '',
  });
  const tabs = [
    'THÔNG TIN CHUNG',
    'ĐỘNG CƠ & KHUNG XE',
    'TIỆN NGHI',
    'KHUYẾN MÃI',
  ];

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await getCarById(params.id);
        if (res.status === 200) {
          setCar(res.data.data);
          setEditedCar(res.data.data);
          setImagePreview({
            poster: `${fileURL}/${res.data.data.poster}`,
            image: `${fileURL}/${res.data.data.image}`,
            hover_image: `${fileURL}/${res.data.data.hover_image}`,
          });
        }
      } catch (err) {
        console.error('Error fetching car:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCar();
  }, []);

  const handleChangeTab = (e) => {
    const tab = e.target.dataset.tab;
    setCurrentTab(tab);
  };

  const handleChangeInput = (e) => {
    const { name, value, type } = e.target;
    const keys = name.split('.');

    if (['poster', 'image', 'hover_image'].includes(name)) {
      const selectedFile = e.target.files[0];
      setEditedCar((prevCar) => ({
        ...prevCar,
        [name]: selectedFile,
      }));
      setImagePreview((prevImagePreview) => ({
        ...prevImagePreview,
        [name]: URL.createObjectURL(selectedFile),
      }));
    } else {
      setEditedCar((prevState) => {
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

  console.log(car);

  //   console.log(imagePreview.image);
  //   console.log(getImageFileName(imagePreview.image));

  return (
    <section className="container">
      <Link
        className="fixed top-[100px] left-[90px] block h-max p-2 bg-[#f5f5f5] shadow hover:bg-slate-600 hover:text-white rounded-lg"
        to="/admin/car"
      >
        <FaLongArrowAltLeft className="h-5 w-5" />
      </Link>

      <form action="">
        <div>
          <div className="flex justify-between">
            <p className="text-mainTitleColor text-mainTitle uppercase">
              thông tin xe
            </p>

            <Link
              to={'/admin/car/edit'}
              type="submit"
              className="uppercase px-5 py-2 flex items-center rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
            >
              Lưu
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 mt-5">
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
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <>
                      <input
                        type="text"
                        className={`w-1/2 px-2 outline-0 ${
                          editedCar.name != car.name && 'bg-orange-200'
                        }`}
                        name="name"
                        id="name"
                        value={editedCar.name}
                        onChange={handleChangeInput}
                        data-tooltip-id="name"
                        placeholder="Wigo E"
                        required
                      />
                      {editedCar.name != car.name && (
                        <Tooltip id="name">
                          <p className="">
                            Thuộc tính{' '}
                            <span className="text-[#4379EE] underline underline-offset-4">
                              tên
                            </span>{' '}
                            sắp bị thay đổi
                          </p>
                        </Tooltip>
                      )}
                    </>
                  )}
                </div>

                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <label
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                    htmlFor="price"
                  >
                    Giá <span className="text-primaryColor">*</span>
                  </label>
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <input
                      type="number"
                      className={`w-1/2 px-2 outline-0 ${
                        editedCar.price != car.price && 'bg-orange-200'
                      }`}
                      name="price"
                      id="price"
                      value={editedCar.price}
                      onChange={handleChangeInput}
                      placeholder="360000000"
                      required
                    />
                  )}
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
                    className={`w-1/2 px-2 outline-0 ${
                      editedCar.capacity != car.capacity && 'bg-orange-200'
                    }`}
                    name="capacity"
                    id="capacity"
                    value={editedCar.capacity}
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
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <input
                      type="text"
                      className={`w-1/2 px-2 outline-0 ${
                        editedCar.engine != car.engine && 'bg-orange-200'
                      }`}
                      name="engine"
                      id="engine"
                      value={editedCar.engine}
                      onChange={handleChangeInput}
                      placeholder="V6"
                      required
                    />
                  )}
                </div>

                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <label
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc]"
                    htmlFor="carModel.name"
                  >
                    Mẫu xe <span className="text-primaryColor">*</span>
                  </label>
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <input
                      type="text"
                      className={`w-1/2 px-2 outline-0 ${
                        editedCar.carModel.name != car.carModel.name &&
                        'bg-orange-200'
                      }`}
                      name="carModel.name"
                      id="carModel.name"
                      value={editedCar.carModel.name}
                      onChange={handleChangeInput}
                      placeholder="Wigo"
                      required
                    />
                  )}
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
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <input
                      type="number"
                      min="1"
                      className={`w-1/2 px-2 outline-0 ${
                        editedCar.inventory.quantity !=
                          car.inventory.quantity && 'bg-orange-200'
                      }`}
                      name="inventory.quantity"
                      id="inventory.quantity"
                      value={editedCar.inventory.quantity}
                      onChange={handleChangeInput}
                      placeholder="1"
                      required
                    />
                  )}
                </div>

                <div>
                  <div
                    data-tooltip-id="poster"
                    className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3 items-center"
                  >
                    <label className="w-1/2 pl-2 h-full block" htmlFor="poster">
                      Poster <span className="text-primaryColor">*</span>
                    </label>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="file"
                        className="w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]"
                        name="poster"
                        id="poster"
                        onChange={handleChangeInput}
                        required
                      />
                    )}
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
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="file"
                        className="w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]"
                        name="image"
                        id="image"
                        onChange={handleChangeInput}
                        required
                      />
                    )}
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
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="file"
                        className="w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]"
                        name="hover_image"
                        id="hover_image"
                        onChange={handleChangeInput}
                        required
                      />
                    )}
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
        </div>
      </form>
    </section>
  );
};

export default CarEdit;
