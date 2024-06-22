import React, { useState, useEffect, useCallback } from 'react';
import { getAllAgencies, getAgencyById } from '../../utils/AgencyApi'; // Điều chỉnh đường dẫn import nếu cần
import CustomDropdown from './CustomDropdown';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

const customIcon = new L.Icon({
  iconUrl: './imgs/map/icon-location.png',
  iconSize: [32, 32],
});


const provinces = [
  { name: 'Hà Nội' },
  { name: 'Hồ Chí Minh' },
  { name: 'An Giang' },
  { name: 'Bà Rịa - Vũng Tàu' },
  { name: 'Bắc Giang' },
  { name: 'Bắc Kạn' },
  { name: 'Bạc Liêu' },
  { name: 'Bắc Ninh' },
  { name: 'Bến Tre' },
  { name: 'Bình Định' },
  { name: 'Bình Dương' },
  { name: 'Bình Phước' },
  { name: 'Bình Thuận' },
  { name: 'Cà Mau' },
  { name: 'Cần Thơ' },
  { name: 'Cao Bằng' },
  { name: 'Đà Nẵng' },
  { name: 'Đắk Lắk' },
  { name: 'Đắk Nông' },
  { name: 'Điện Biên' },
  { name: 'Đồng Nai' },
  { name: 'Đồng Tháp' },
  { name: 'Gia Lai' },
  { name: 'Hà Giang' },
  { name: 'Hà Nam' },
  { name: 'Hà Tĩnh' },
  { name: 'Hải Dương' },
  { name: 'Hải Phòng' },
  { name: 'Hậu Giang' },
  { name: 'Hòa Bình' },
  { name: 'Hưng Yên' },
  { name: 'Khánh Hòa' },
  { name: 'Kiên Giang' },
  { name: 'Kon Tum' },
  { name: 'Lai Châu' },
  { name: 'Lâm Đồng' },
  { name: 'Lạng Sơn' },
  { name: 'Lào Cai' },
  { name: 'Long An' },
  { name: 'Nam Định' },
  { name: 'Nghệ An' },
  { name: 'Ninh Bình' },
  { name: 'Ninh Thuận' },
  { name: 'Phú Thọ' },
  { name: 'Phú Yên' },
  { name: 'Quảng Bình' },
  { name: 'Quảng Nam' },
  { name: 'Quảng Ngãi' },
  { name: 'Quảng Ninh' },
  { name: 'Quảng Trị' },
  { name: 'Sóc Trăng' },
  { name: 'Sơn La' },
  { name: 'Tây Ninh' },
  { name: 'Thái Bình' },
  { name: 'Thái Nguyên' },
  { name: 'Thanh Hóa' },
  { name: 'Thừa Thiên - Huế' },
  { name: 'Tiền Giang' },
  { name: 'Trà Vinh' },
  { name: 'Tuyên Quang' },
  { name: 'Vĩnh Long' },
  { name: 'Vĩnh Phúc' },
  { name: 'Yên Bái' },
];

const Agency = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [agencies, setAgencies] = useState([]);
  const [filteredAgencies, setFilteredAgencies] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState(null);
  const { agencyId } = useParams();
  const navigate = useNavigate();

  // Fetch all agencies on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllAgencies();
        const agenciesData = response.data.data.result;

        if (Array.isArray(agenciesData)) {
          setAgencies(agenciesData);
          setFilteredAgencies(agenciesData); // Initially set filtered agencies to all agencies
        } else {
          console.error('Data from API is not an array:', agenciesData);
          setAgencies([]); // Or handle the error as you wish
          setFilteredAgencies([]);
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
        setAgencies([]); // Set agencies to an empty array in case of error
        setFilteredAgencies([]);
      }
    };
    fetchData();
  }, []);

  // Fetch agency by ID when agencyId changes
  useEffect(() => {
    const fetchAgencyById = async () => {
      if (agencyId) {
        try {
          const response = await getAgencyById(agencyId);
          setSelectedAgency(response.data.data);
        } catch (error) {
          console.error('Error fetching agency by ID:', error);
        }
      }
    };
    fetchAgencyById();
  }, [agencyId]);

  // Filter agencies based on selected city
  const filterAgencies = useCallback(() => {
    if (selectedCity) {
      const filtered = agencies.filter((agency) =>
        agency.city?.toLowerCase().includes(selectedCity.toLowerCase())
      );
      setFilteredAgencies(filtered);
    } else {
      setFilteredAgencies(agencies); // No city selected, show all agencies
    }
  }, [agencies, selectedCity]);

  // Update filtered agencies when selectedCity changes
  useEffect(() => {
    filterAgencies();
  }, [selectedCity, agencies, filterAgencies]);

  // Handle city change
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  // Handle agency click
  const handleAgencyClick = (agencyId) => {
    setSelectedAgency(null); // Reset selectedAgency to trigger map update
    navigate(`/agency/${agencyId}`);
  };

  // Handle test drive button click
  const handleTestDriveClick = () => {
    navigate('/test-drive');
  };
  const handleAppointmentClick = () => {
    navigate('/user/appointment');
  };
  return (
    <>
      <div className="hero mt-[120px]">
        <div>
          <img
            className="block mx-auto"
            src="./imgs/map/icon-location.svg"
            alt="icon-location"
          />
        </div>
        <div className="align-center text-center mt-[28px] font-bold text-[40px]">
          {selectedAgency ? selectedAgency.name_agency : 'TÌM KIẾM ĐẠI LÝ'}
        </div>
        <div className="flex justify-center mt-[20px] space-x-4 z-10">
          <CustomDropdown
            options={provinces}
            selectedOption={selectedCity}
            onSelectOption={handleCityChange}
            placeholder="Tỉnh/Thành phố"
          />
        </div>

        <div className="scrollbar flex container max-w-[1440px] max-h-[938px] overflow-y-auto px-[110px] mt-[110px]">
          <div className="location">
            <div className="w-[800px] h-[938px] mr-[36px] ">
              <MapContainer
                center={[
                  selectedAgency?.coordinates.latitude || 10.7594281,
                  selectedAgency?.coordinates.longitude || 106.4392805,
                ]}
                zoom={15}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredAgencies.map((agency) => (
                  <Marker
                    key={agency.id}
                    position={[
                      agency.coordinates.latitude,
                      agency.coordinates.longitude,
                    ]}
                    icon={customIcon}
                  >
                    <Popup>
                      <h2 className="text-[16px] font-bold">
                        {agency.name_agency}
                      </h2>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
          <div className="overflow-y-auto w-[380px] overflow-x-hidden">
            {filteredAgencies.map((agency, index) => (
              <div
                key={agency.id}
                className="p-8 bg-[#fafafa] w-[380px] border border-gray-100 cursor-pointer"
              >
                <div className="flex">
                  <div className="flex">
                    <span className="mr-[17px] z-10 text-[12px] text-center">
                      {index + 1}
                    </span>
                    <img
                      onClick={() => handleAgencyClick(agency.id)}
                      className="ml-[-42px] content-start max-w-[42px] max-h-[45px] mt-[-8px]"
                      src="./imgs/map/icon-location.png"
                      alt=""
                    />
                  </div>
                  <h2
                    onClick={() => handleAgencyClick(agency.id)}
                    className="text-[16px] font-bold ml-4 mb-4"
                  >
                    <Link to={`/agency/${agency.id}`}>
                      {agency.name_agency}
                    </Link>
                  </h2>
                </div>
                <div className="max-w-[290px]">
                  <div className="border-l-2 pl-8">
                    {agency.web_url && (
                      <div className="flex mb-3 content-start">
                        <img
                          className="mr-4 content-start w-5 h-5"
                          src="./imgs/map/iconwww.svg"
                          alt=""
                        />
                        <a
                          href={agency.web_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=""
                        >
                          {agency.web_url}
                        </a>
                      </div>
                    )}
                    {agency.phone_number && (
                      <div className="flex mb-3">
                        <img
                          className="mr-4 content-start w-5 h-5"
                          src="./imgs/map/iconcall.svg"
                          alt=""
                        />
                        <p>{agency.phone_number}</p>
                      </div>
                    )}
                    {agency.working_hours && (
                      <div className="flex mb-3 content-start">
                        <img
                          className="mr-4 content-start w-5 h-5"
                          src="./imgs/map/iconclock.svg"
                          alt=""
                        />
                        <p>{agency.working_hours}</p>
                      </div>
                    )}
                    {agency.address && (
                      <div
                        onClick={() => handleAgencyClick(agency.id)}
                        className="flex mb-3"
                      >
                        <img
                          className="mr-4 content-start w-5 h-5"
                          src="./imgs/map/iconlocation3.svg"
                          alt=""
                        />
                        <p>{agency.address}</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <button
                      className="bg-primaryColor text-white px-4 py-2 text-[12px] hover:bg-red-700"
                      onClick={handleTestDriveClick}
                    >
                      ĐĂNG KÝ LÁI THỬ
                    </button>

                    <button
                      onClick={handleAppointmentClick}
                      className="bg-white text-mainTitleColor px-4 py-2 text-[12px] border border-black hover:bg-gray-200 "
                    >
                      ĐẶT HẸN DỊCH VỤ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
