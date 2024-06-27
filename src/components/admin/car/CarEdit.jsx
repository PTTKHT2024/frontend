import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCarById, updateCar } from '../../utils/CarApi';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import {
  fileURL,
  fileUploadRegex,
  getImageFileName,
  isFile,
  uploadFile,
} from '../../utils/UtilsFunction';
import { Tooltip } from 'react-tooltip';
import { TbReload } from 'react-icons/tb';
import { carModel, carModelPromotion } from '../../model/CarModel';
import Toast from '../../common/Toast';

const CarEdit = () => {
  const [car, setCar] = useState(carModelPromotion);
  const [editedCar, setEditedCar] = useState(carModelPromotion);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('THÔNG TIN CHUNG');
  const [imagePreview, setImagePreview] = useState({
    poster: '',
    image: '',
    hover_image: '',
  });
  const tabs = ['THÔNG TIN CHUNG', 'ĐỘNG CƠ & KHUNG XE', 'TIỆN NGHI'];
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const fetchCar = async () => {
    try {
      const res = await getCarById(params.id);
      if (res.status === 200) {
        setCar(res.data.data);
        setEditedCar(JSON.parse(JSON.stringify(res.data.data)));
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

  useEffect(() => {
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
      if (selectedFile instanceof File) {
        setEditedCar((prevCar) => ({
          ...prevCar,
          [name]: selectedFile,
        }));
        setImagePreview((prevImagePreview) => ({
          ...prevImagePreview,
          [name]: URL.createObjectURL(selectedFile),
        }));
      } else {
        console.error('Selected file is not valid:', selectedFile);
      }
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

  const handleResetField = (e) => {
    const { name, type } = e.target.dataset;
    const keys = name.split('.');

    if (['poster', 'image', 'hover_image'].includes(name)) {
      setEditedCar((prevCar) => ({
        ...prevCar,
        [name]: car.poster,
      }));
      setImagePreview((prevImagePreview) => ({
        ...prevImagePreview,
        [name]: `${fileURL}/${car[name]}`,
      }));
    } else {
      setEditedCar((prevState) => {
        const newState = { ...prevState };
        let tempState = newState;
        let carState = { ...car };

        for (let i = 0; i < keys.length - 1; i++) {
          tempState = tempState[keys[i]];
        }

        for (let i = 0; i < keys.length - 1; i++) {
          carState = carState[keys[i]];
        }

        tempState[keys[keys.length - 1]] = carState[keys[keys.length - 1]];

        return newState;
      });
    }
  };

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    let tmpCar = { ...editedCar };

    try {
      if (isFile(editedCar.poster)) {
        const savePoster = await uploadFile(editedCar.poster, accessToken);
        const savePosterFileName = savePoster.data.match(fileUploadRegex);
        tmpCar.poster = savePosterFileName[0];
      }

      if (isFile(editedCar.image)) {
        const saveImage = await uploadFile(editedCar.image, accessToken);
        const saveImageFileName = saveImage.data.match(fileUploadRegex);
        tmpCar.image = saveImageFileName[0];
      }

      if (isFile(editedCar.hover_image)) {
        const saveHoverImage = await uploadFile(
          editedCar.hover_image,
          accessToken
        );
        const saveHoverImageFileName =
          saveHoverImage.data.match(fileUploadRegex);
        tmpCar.hover_image = saveHoverImageFileName[0];
      }

      const res = await updateCar(params.id, tmpCar, accessToken);
      if (res.status === 200) {
        setMessage('Thay đổi thông tin xe thành công');
        setStatus('success');
        setImagePreview({
          poster: '',
          image: '',
          hover_image: '',
        });
        fetchCar();
      }
    } catch (err) {
      setMessage('Thay đổi thông tin xe thất bại');
      setStatus('danger');
      console.error('Error create car:', err);
    } finally {
      setTimeout(() => {
        handleCloseToast();
      }, 5000);
    }
  };

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  // console.log(car);

  //   console.log(imagePreview.image);
  //   console.log(getImageFileName(imagePreview.image));

  console.log('EditCar', editedCar);

  return (
    <section className="container">
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

      <form onSubmit={handleUpdateCar}>
        <div>
          <div className="flex justify-between">
            <p className="text-mainTitleColor text-mainTitle uppercase">
              cập nhập xe
            </p>

            <button
              type="submit"
              className="uppercase px-5 py-2 flex items-center rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
            >
              Lưu
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 mt-5">
            <p className="text-mainTitleColor font-semibold text-[18px] uppercase">
              Thông tin cơ bản
            </p>
            <hr />

            <div className="grid grid-cols-12 mt-5 gap-3">
              <div className="col-span-6">
                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                    <label className="cursor-pointer" htmlFor="name">
                      Tên <span className="text-primaryColor">*</span>
                    </label>
                    {editedCar.name != car.name && (
                      <TbReload
                        className="inline-block ml-auto mr-2 cursor-pointer"
                        data-name="name"
                        data-type="text"
                        onClick={handleResetField}
                      />
                    )}
                  </span>
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <>
                      <input
                        type="text"
                        className={`w-1/2 px-2 outline-0 ${
                          editedCar.name != car.name && 'bg-[#FFC107]/[.7]'
                        }`}
                        name="name"
                        id="name"
                        value={editedCar.name}
                        onChange={handleChangeInput}
                        data-tooltip-id="name"
                        placeholder="Wigo E"
                        required
                      />
                    </>
                  )}
                </div>

                <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                  <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                    <label htmlFor="price" className="cursor-pointer">
                      Giá <span className="text-primaryColor">*</span>
                    </label>
                    {editedCar.price != car.price && (
                      <TbReload
                        className="inline-block ml-auto mr-2 cursor-pointer"
                        data-name="price"
                        data-type="number"
                        onClick={handleResetField}
                      />
                    )}
                  </span>
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <input
                      type="number"
                      className={`w-1/2 px-2 outline-0 ${
                        editedCar.price != car.price && 'bg-[#FFC107]/[.7]'
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
                  <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                    <label htmlFor="capacity" className="cursor-pointer">
                      Dung tích <span className="text-primaryColor">*</span>
                    </label>
                    {editedCar.capacity != car.capacity && (
                      <TbReload
                        className="inline-block ml-auto mr-2 cursor-pointer"
                        data-name="capacity"
                        data-type="number"
                        onClick={handleResetField}
                      />
                    )}
                  </span>
                  <input
                    type="number"
                    className={`w-1/2 px-2 outline-0 ${
                      editedCar.capacity != car.capacity && 'bg-[#FFC107]/[.7]'
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
                  <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                    <label htmlFor="engine" className="cursor-pointer">
                      Động cơ <span className="text-primaryColor">*</span>
                    </label>
                    {editedCar.engine != car.engine && (
                      <TbReload
                        className="inline-block ml-auto mr-2 cursor-pointer"
                        data-name="engine"
                        data-type="text"
                        onClick={handleResetField}
                      />
                    )}
                  </span>
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <input
                      type="text"
                      className={`w-1/2 px-2 outline-0 ${
                        editedCar.engine != car.engine && 'bg-[#FFC107]/[.7]'
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
                  <span
                    className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center"
                    htmlFor="carModel.name"
                  >
                    <label htmlFor="carModel.name" className="cursor-pointer">
                      Mẫu xe <span className="text-primaryColor">*</span>
                    </label>
                    {editedCar.carModel.name != car.carModel.name && (
                      <TbReload
                        className="inline-block ml-auto mr-2 cursor-pointer"
                        data-name="carModel.name"
                        data-type="text"
                        onClick={handleResetField}
                      />
                    )}
                  </span>
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <input
                      type="text"
                      className={`w-1/2 px-2 outline-0 ${
                        editedCar.carModel.name != car.carModel.name &&
                        'bg-[#FFC107]/[.7]'
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
                  <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                    <label
                      htmlFor="inventory.quantity"
                      className="cursor-pointer"
                    >
                      Số lượng <span className="text-primaryColor">*</span>
                    </label>
                    {editedCar.inventory.quantity != car.inventory.quantity && (
                      <TbReload
                        className="inline-block ml-auto mr-2 cursor-pointer"
                        data-name="inventory.quantity"
                        data-type="number"
                        onClick={handleResetField}
                      />
                    )}
                  </span>
                  {isLoading ? (
                    <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                  ) : (
                    <input
                      type="number"
                      min="1"
                      className={`w-1/2 px-2 outline-0 ${
                        editedCar.inventory.quantity !=
                          car.inventory.quantity && 'bg-[#FFC107]/[.7]'
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
                    <span
                      className="w-1/2 pl-2 flex items-center"
                      htmlFor="poster"
                    >
                      <label htmlFor="poster" className="cursor-pointer">
                        Poster <span className="text-primaryColor">*</span>
                      </label>
                      {editedCar.poster != car.poster && (
                        <TbReload
                          className="inline-block ml-auto mr-2 cursor-pointer"
                          data-name="poster"
                          data-type="file"
                          onClick={handleResetField}
                        />
                      )}
                    </span>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="file"
                        className={`w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]  ${
                          editedCar.poster != car.poster && 'bg-[#FFC107]/[.7]'
                        }`}
                        name="poster"
                        id="poster"
                        onChange={handleChangeInput}
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
                    <span className="w-1/2 pl-2 flex items-center">
                      <label htmlFor="image" className="cursor-pointer">
                        Ảnh xe ngang{' '}
                        <span className="text-primaryColor">*</span>
                      </label>
                      {editedCar.image != car.image && (
                        <TbReload
                          className="inline-block ml-auto mr-2 cursor-pointer"
                          data-name="image"
                          data-type="file"
                          onClick={handleResetField}
                        />
                      )}
                    </span>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="file"
                        className={`w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]  ${
                          editedCar.image != car.image && 'bg-[#FFC107]/[.7]'
                        }`}
                        name="image"
                        id="image"
                        onChange={handleChangeInput}
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
                    <span className="w-1/2 pl-2 flex items-center">
                      <label htmlFor="hover_image" className="cursor-pointer">
                        Ảnh xe nghiêng{' '}
                        <span className="text-primaryColor">*</span>
                      </label>
                      {editedCar.hover_image != car.hover_image && (
                        <TbReload
                          className="inline-block ml-auto mr-2 cursor-pointer"
                          data-name="hover_image"
                          data-type="file"
                          onClick={handleResetField}
                        />
                      )}
                    </span>
                    {isLoading ? (
                      <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                    ) : (
                      <input
                        type="file"
                        className={`w-1/2 px-2 outline-0 border-l-[2px] border-[#ccc]  ${
                          editedCar.hover_image != car.hover_image &&
                          'bg-[#FFC107]/[.7]'
                        }`}
                        name="hover_image"
                        id="hover_image"
                        onChange={handleChangeInput}
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

          <div className="mt-5 grid grid-cols-12 gap-5">
            <div className="col-span-3 bg-white rounded-2xl shadow-md overflow-hidden h-max">
              <ul className="w-full text-center uppercase">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`w-full py-3 border-b-[1px] border-[#ccc] block cursor-pointer font-semibold ${
                      currentTab == tab
                        ? 'bg-[#56BACC] text-white'
                        : 'hover:bg-[#f5f5f5] text-mainTitleColor'
                    }`}
                    data-tab={tab}
                    onClick={handleChangeTab}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specification */}
            <div className="col-span-9 bg-white rounded-2xl shadow-md overflow-hidden h-max p-5">
              {currentTab == 'THÔNG TIN CHUNG' && (
                <>
                  <p className="text-mainTitleColor font-semibold text-[18px] uppercase">
                    Thông tin chung
                  </p>
                  <hr />

                  <div className="mt-5">
                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Số chỗ
                      </p>
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="number_of_seats"
                          >
                            Số chỗ <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.number_of_seats != car.number_of_seats && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="number_of_seats"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.number_of_seats !=
                                  car.number_of_seats && 'bg-[#FFC107]/[.7]'
                              }`}
                              name="number_of_seats"
                              id="number_of_seats"
                              value={editedCar.number_of_seats}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Kiểu dáng
                      </p>
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="carCategory.name"
                          >
                            Kiểu dáng{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.carCategory.name !=
                            car.carCategory.name && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="carCategory.name"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.carCategory.name !=
                                  car.carCategory.name && 'bg-[#FFC107]/[.7]'
                              }`}
                              name="carCategory.name"
                              id="carCategory.name"
                              value={editedCar.carCategory.name}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Nhiên liệu
                      </p>
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.fuel"
                          >
                            Nhiên liệu{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.fuel !=
                            car.specification.fuel && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.fuel"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.fuel !=
                                  car.specification.fuel && 'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.fuel"
                              id="specification.fuel"
                              value={editedCar.specification.fuel}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Xuất xứ
                      </p>
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.origin"
                          >
                            Xuất xứ <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.origin !=
                            car.specification.origin && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.origin"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.origin !=
                                  car.specification.origin &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.origin"
                              id="specification.origin"
                              value={editedCar.specification.origin}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentTab == 'ĐỘNG CƠ & KHUNG XE' && (
                <>
                  <div>
                    <p className="text-mainTitleColor font-semibold text-[18px] uppercase">
                      ĐỘNG CƠ & KHUNG XE
                    </p>
                    <hr />

                    <div className="mt-5">
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Kích thước
                      </p>

                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.dimensions"
                          >
                            Kích thước tổng thể (D x R x C) (mm x mm x mm){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.dimensions !=
                            car.specification.dimensions && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.dimensions"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.dimensions !=
                                  car.specification.dimensions &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.dimensions"
                              id="specification.dimensions"
                              value={editedCar.specification.dimensions}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Chiều dài cơ sở */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.base_length"
                          >
                            Chiều dài cơ sở (mm){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.base_length !=
                            car.specification.base_length && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.base_length"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.base_length !=
                                  car.specification.base_length &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.base_length"
                              id="specification.base_length"
                              value={editedCar.specification.base_length}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Chiều rộng cơ sở trước (mm) */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.base_front_width"
                          >
                            Chiều rộng cơ sở trước (mm){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.base_front_width !=
                            car.specification.base_front_width && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.base_front_width"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.base_front_width !=
                                  car.specification.base_front_width &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.base_front_width"
                              id="specification.base_front_width"
                              value={editedCar.specification.base_front_width}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Chiều rộng cơ sở sau (mm) */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.base_back_width"
                          >
                            Chiều rộng cơ sở sau (mm){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.base_back_width !=
                            car.specification.base_back_width && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.base_back_width"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.base_back_width !=
                                  car.specification.base_back_width &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.base_back_width"
                              id="specification.base_back_width"
                              value={editedCar.specification.base_back_width}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Khoảng sáng gầm xe (mm) */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.light_undercarriage"
                          >
                            Khoảng sáng gầm xe (mm){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.light_undercarriage !=
                            car.specification.light_undercarriage && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.light_undercarriage"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.light_undercarriage !=
                                  car.specification.light_undercarriage &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.light_undercarriage"
                              id="specification.light_undercarriage"
                              value={
                                editedCar.specification.light_undercarriage
                              }
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Bán kính vòng quay tối thiểu (m) */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.minimum_rev_radius"
                          >
                            Bán kính vòng quay tối thiểu (m){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.minimum_rev_radius !=
                            car.specification.minimum_rev_radius && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.minimum_rev_radius"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.minimum_rev_radius !=
                                  car.specification.minimum_rev_radius &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.minimum_rev_radius"
                              id="specification.minimum_rev_radius"
                              value={editedCar.specification.minimum_rev_radius}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Dung tích bình nhiên liệu (L)  */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.fuel_capacity"
                          >
                            Dung tích bình nhiên liệu (L){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.fuel_capacity !=
                            car.specification.fuel_capacity && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.fuel_capacity"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.fuel_capacity !=
                                  car.specification.fuel_capacity &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.fuel_capacity"
                              id="specification.fuel_capacity"
                              value={editedCar.specification.fuel_capacity}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Động cơ thường
                      </p>

                      {/* Loại động cơ */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.engine_type"
                          >
                            Loại động cơ{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.engine_type !=
                            car.specification.engine_type && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.engine_type"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.engine_type !=
                                  car.specification.engine_type &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.engine_type"
                              id="specification.engine_type"
                              value={editedCar.specification.engine_type}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Số xy lanh */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.number_of_xylanh"
                          >
                            Số xy lanh{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.number_of_xylanh !=
                            car.specification.number_of_xylanh && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.number_of_xylanh"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.number_of_xylanh !=
                                  car.specification.number_of_xylanh &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.number_of_xylanh"
                              id="specification.number_of_xylanh"
                              value={editedCar.specification.number_of_xylanh}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Bố trí xy lanh */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.xylanh_layout"
                          >
                            Bố trí xy lanh{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.xylanh_layout !=
                            car.specification.xylanh_layout && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.xylanh_layout"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.xylanh_layout !=
                                  car.specification.xylanh_layout &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.xylanh_layout"
                              id="specification.xylanh_layout"
                              value={editedCar.specification.xylanh_layout}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Dung tích xy lanh (cc) */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.xylanh_capacity"
                          >
                            Dung tích xy lanh (cc){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.xylanh_capacity !=
                            car.specification.xylanh_capacity && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.xylanh_capacity"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.xylanh_capacity !=
                                  car.specification.xylanh_capacity &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.xylanh_capacity"
                              id="specification.xylanh_capacity"
                              value={editedCar.specification.xylanh_capacity}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Hệ thống phun nhiên liệu */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.fuel_system"
                          >
                            Hệ thống phun nhiên liệu{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.fuel_system !=
                            car.specification.fuel_system && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.fuel_system"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.fuel_system !=
                                  car.specification.fuel_system &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.fuel_system"
                              id="specification.fuel_system"
                              value={editedCar.specification.fuel_system}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Công suất tối đa ((KW) HP/vòng/phút) */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.power"
                          >
                            Công suất tối đa ((KW) HP/vòng/phút){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.power !=
                            car.specification.power && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.power"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.power !=
                                  car.specification.power && 'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.power"
                              id="specification.power"
                              value={editedCar.specification.power}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Mô men xoắn tối đa (Nm/vòng/phút) */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.momen"
                          >
                            Mô men xoắn tối đa (Nm/vòng/phút){' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.momen !=
                            car.specification.momen && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.momen"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.momen !=
                                  car.specification.momen && 'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.momen"
                              id="specification.momen"
                              value={editedCar.specification.momen}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Hệ thống truyền động
                      </p>

                      {/* Hệ thống truyền động */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.driver_type"
                          >
                            Hệ thống truyền động{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.driver_type !=
                            car.specification.driver_type && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.driver_type"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.driver_type !=
                                  car.specification.driver_type &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.driver_type"
                              id="specification.driver_type"
                              value={editedCar.specification.driver_type}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Hộp số
                      </p>

                      {/*Hộp số */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label className="cursor-pointer" htmlFor="gearbox">
                            Hộp số <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.gearbox != car.gearbox && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="gearbox"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.gearbox != car.gearbox &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="gearbox"
                              id="gearbox"
                              value={editedCar.gearbox}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Hệ thống treo
                      </p>

                      {/* Hệ thống treo trước */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.front_hang_system"
                          >
                            Trước <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.front_hang_system !=
                            car.specification.front_hang_system && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.front_hang_system"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.front_hang_system !=
                                  car.specification.front_hang_system &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.front_hang_system"
                              id="specification.front_hang_system"
                              value={editedCar.specification.front_hang_system}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/* Hệ thống treo sau */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.back_hang_system"
                          >
                            Sau <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.back_hang_system !=
                            car.specification.back_hang_system && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.back_hang_system"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.back_hang_system !=
                                  car.specification.back_hang_system &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.back_hang_system"
                              id="specification.back_hang_system"
                              value={editedCar.specification.back_hang_system}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Hệ thống lái
                      </p>

                      {/* Hệ thống treo sau */}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.drive_system"
                          >
                            Trợ lực tay lái{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.drive_system !=
                            car.specification.drive_system && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.drive_system"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.drive_system !=
                                  car.specification.drive_system &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.drive_system"
                              id="specification.drive_system"
                              value={editedCar.specification.drive_system}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Vành & lốp xe
                      </p>

                      {/*Loại vành*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.rim"
                          >
                            Loại vành{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.rim !=
                            car.specification.rim && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.rim"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.rim !=
                                  car.specification.rim && 'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.rim"
                              id="specification.rim"
                              value={editedCar.specification.rim}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/*Kích thước lốp*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.tire_size"
                          >
                            Kích thước lốp{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.tire_size !=
                            car.specification.tire_size && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.tire_size"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.tire_size !=
                                  car.specification.tire_size &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.tire_size"
                              id="specification.tire_size"
                              value={editedCar.specification.tire_size}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/*Lốp dự phòng*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.tire_backup"
                          >
                            Lốp dự phòng{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.tire_backup !=
                            car.specification.tire_backup && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.tire_backup"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.tire_backup !=
                                  car.specification.tire_backup &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.tire_backup"
                              id="specification.tire_backup"
                              value={editedCar.specification.tire_backup}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Tiêu chuẩn khí thải
                      </p>

                      {/*Tiêu chuẩn khí thải*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.emissions"
                          >
                            Tiêu chuẩn khí thải{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.emissions !=
                            car.specification.emissions && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.emissions"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.emissions !=
                                  car.specification.emissions &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.emissions"
                              id="specification.emissions"
                              value={editedCar.specification.emissions}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Phanh
                      </p>

                      {/*Phanh*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.front_brake"
                          >
                            Trước <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.front_brake !=
                            car.specification.front_brake && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.front_brake"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.front_brake !=
                                  car.specification.front_brake &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.front_brake"
                              id="specification.front_brake"
                              value={editedCar.specification.front_brake}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/*Phanh*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.back_brake"
                          >
                            Sau <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.back_brake !=
                            car.specification.back_brake && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.back_brake"
                              data-type="text"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="text"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.back_brake !=
                                  car.specification.back_brake &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.back_brake"
                              id="specification.back_brake"
                              value={editedCar.specification.back_brake}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Tiêu thụ nhiên liệu (L/100km)
                      </p>

                      {/*Ngoài đô thị*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.fuel_consumption"
                          >
                            Ngoài đô thị
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.fuel_consumption !=
                            car.specification.fuel_consumption && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.fuel_consumption"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.fuel_consumption !=
                                  car.specification.fuel_consumption &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.fuel_consumption"
                              id="specification.fuel_consumption"
                              value={editedCar.specification.fuel_consumption}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/*kết hợp*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.combine_fuel_consumption"
                          >
                            Kết hợp <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.combine_fuel_consumption !=
                            car.specification.combine_fuel_consumption && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.combine_fuel_consumption"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification
                                  .combine_fuel_consumption !=
                                  car.specification.combine_fuel_consumption &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.combine_fuel_consumption"
                              id="specification.combine_fuel_consumption"
                              value={
                                editedCar.specification.combine_fuel_consumption
                              }
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/*Trong đô thị*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.urban_fuel_consumption"
                          >
                            Trong đô thị{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.urban_fuel_consumption !=
                            car.specification.urban_fuel_consumption && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.urban_fuel_consumption"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification
                                  .urban_fuel_consumption !=
                                  car.specification.urban_fuel_consumption &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.urban_fuel_consumption"
                              id="specification.urban_fuel_consumption"
                              value={
                                editedCar.specification.urban_fuel_consumption
                              }
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-base text-mainTitleColor mb-3 font-semibold">
                        Trọng lượng
                      </p>

                      {/*Trọng lượng không tải*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.weight"
                          >
                            Trọng lượng không tải{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.weight !=
                            car.specification.weight && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.weight"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.weight !=
                                  car.specification.weight &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.weight"
                              id="specification.weight"
                              value={editedCar.specification.weight}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>

                      {/*Trọng lượng tải tối đa*/}
                      <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                        <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                          <label
                            className="cursor-pointer"
                            htmlFor="specification.weight_load"
                          >
                            Trọng lượng tải tối đa{' '}
                            <span className="text-primaryColor">*</span>
                          </label>
                          {editedCar.specification.weight_load !=
                            car.specification.weight_load && (
                            <TbReload
                              className="inline-block ml-auto mr-2 cursor-pointer"
                              data-name="specification.weight_load"
                              data-type="number"
                              onClick={handleResetField}
                            />
                          )}
                        </span>
                        {isLoading ? (
                          <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                        ) : (
                          <>
                            <input
                              type="number"
                              className={`w-1/2 px-2 outline-0 ${
                                editedCar.specification.weight_load !=
                                  car.specification.weight_load &&
                                'bg-[#FFC107]/[.7]'
                              }`}
                              name="specification.weight_load"
                              id="specification.weight_load"
                              value={editedCar.specification.weight_load}
                              onChange={handleChangeInput}
                              placeholder="Wigo E"
                              required
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentTab == 'TIỆN NGHI' && (
                <>
                  <p className="text-mainTitleColor font-semibold text-[18px] uppercase">
                    Thông tin cơ bản
                  </p>
                  <hr />

                  <div>
                    <p className="text-base text-mainTitleColor mb-3 font-semibold mt-5">
                      Cụm đèn
                    </p>

                    {/*Đèn chiếu gần*/}
                    <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                      <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                        <label
                          className="cursor-pointer"
                          htmlFor="specification.near_lamp"
                        >
                          Đèn chiếu gần{' '}
                          <span className="text-primaryColor">*</span>
                        </label>
                        {editedCar.specification.near_lamp !=
                          car.specification.near_lamp && (
                          <TbReload
                            className="inline-block ml-auto mr-2 cursor-pointer"
                            data-name="specification.near_lamp"
                            data-type="text"
                            onClick={handleResetField}
                          />
                        )}
                      </span>
                      {isLoading ? (
                        <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                      ) : (
                        <>
                          <input
                            type="text"
                            className={`w-1/2 px-2 outline-0 ${
                              editedCar.specification.near_lamp !=
                                car.specification.near_lamp &&
                              'bg-[#FFC107]/[.7]'
                            }`}
                            name="specification.near_lamp"
                            id="specification.near_lamp"
                            value={editedCar.specification.near_lamp}
                            onChange={handleChangeInput}
                            placeholder="Wigo E"
                            required
                          />
                        </>
                      )}
                    </div>

                    {/*Đèn chiếu xa*/}
                    <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                      <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                        <label
                          className="cursor-pointer"
                          htmlFor="specification.far_lamp"
                        >
                          Đèn chiếu xa{' '}
                          <span className="text-primaryColor">*</span>
                        </label>
                        {editedCar.specification.far_lamp !=
                          car.specification.far_lamp && (
                          <TbReload
                            className="inline-block ml-auto mr-2 cursor-pointer"
                            data-name="specification.far_lamp"
                            data-type="text"
                            onClick={handleResetField}
                          />
                        )}
                      </span>
                      {isLoading ? (
                        <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                      ) : (
                        <>
                          <input
                            type="text"
                            className={`w-1/2 px-2 outline-0 ${
                              editedCar.specification.far_lamp !=
                                car.specification.far_lamp &&
                              'bg-[#FFC107]/[.7]'
                            }`}
                            name="specification.far_lamp"
                            id="specification.far_lamp"
                            value={editedCar.specification.far_lamp}
                            onChange={handleChangeInput}
                            placeholder="Wigo E"
                            required
                          />
                        </>
                      )}
                    </div>

                    {/*Hệ thống nhắc nhở đèn sáng*/}
                    <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                      <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                        <label
                          className="cursor-pointer"
                          htmlFor="specification.remind_light_system"
                        >
                          Hệ thống nhắc nhở đèn sáng{' '}
                          <span className="text-primaryColor">*</span>
                        </label>
                        {editedCar.specification.remind_light_system !=
                          car.specification.remind_light_system && (
                          <TbReload
                            className="inline-block ml-auto mr-2 cursor-pointer"
                            data-name="specification.remind_light_system"
                            data-type="text"
                            onClick={handleResetField}
                          />
                        )}
                      </span>
                      {isLoading ? (
                        <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                      ) : (
                        <>
                          <input
                            type="text"
                            className={`w-1/2 px-2 outline-0 ${
                              editedCar.specification.remind_light_system !=
                                car.specification.remind_light_system &&
                              'bg-[#FFC107]/[.7]'
                            }`}
                            name="specification.remind_light_system"
                            id="specification.remind_light_system"
                            value={editedCar.specification.remind_light_system}
                            onChange={handleChangeInput}
                            placeholder="Wigo E"
                            required
                          />
                        </>
                      )}
                    </div>

                    {/*Đèn sương mù*/}
                    <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                      <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                        <label
                          className="cursor-pointer"
                          htmlFor="specification.fog_light"
                        >
                          Đèn sương mù{' '}
                          <span className="text-primaryColor">*</span>
                        </label>
                        {editedCar.specification.fog_light !=
                          car.specification.fog_light && (
                          <TbReload
                            className="inline-block ml-auto mr-2 cursor-pointer"
                            data-name="specification.fog_light"
                            data-type="text"
                            onClick={handleResetField}
                          />
                        )}
                      </span>
                      {isLoading ? (
                        <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                      ) : (
                        <>
                          <input
                            type="text"
                            className={`w-1/2 px-2 outline-0 ${
                              editedCar.specification.fog_light !=
                                car.specification.fog_light &&
                              'bg-[#FFC107]/[.7]'
                            }`}
                            name="specification.fog_light"
                            id="specification.fog_light"
                            value={editedCar.specification.fog_light}
                            onChange={handleChangeInput}
                            placeholder="Wigo E"
                            required
                          />
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-base text-mainTitleColor mb-3 font-semibold">
                      Khoang hành lý
                    </p>

                    {/*Khoang hành lý (L)*/}
                    <div className="flex w-full border-[2px] border-[#ccc] rounded-md overflow-hidden text-mainTitleColor text-base mb-3">
                      <span className="w-1/2 pl-2 border-r-[2px] border-[#ccc] flex items-center">
                        <label
                          className="cursor-pointer"
                          htmlFor="specification.luggage_capacity"
                        >
                          Khoang hành lý (L){' '}
                          <span className="text-primaryColor">*</span>
                        </label>
                        {editedCar.specification.luggage_capacity !=
                          car.specification.luggage_capacity && (
                          <TbReload
                            className="inline-block ml-auto mr-2 cursor-pointer"
                            data-name="specification.luggage_capacity"
                            data-type="text"
                            onClick={handleResetField}
                          />
                        )}
                      </span>
                      {isLoading ? (
                        <span className="animate-sweep-to-right block w-full h-6 bg-slate-400"></span>
                      ) : (
                        <>
                          <input
                            type="text"
                            className={`w-1/2 px-2 outline-0 ${
                              editedCar.specification.luggage_capacity !=
                                car.specification.luggage_capacity &&
                              'bg-[#FFC107]/[.7]'
                            }`}
                            name="specification.luggage_capacity"
                            id="specification.luggage_capacity"
                            value={editedCar.specification.luggage_capacity}
                            onChange={handleChangeInput}
                            placeholder="Wigo E"
                            required
                          />
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CarEdit;
