import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAgencyById } from '../../utils/AgencyApi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

// Custom icon for markers
const customIcon = new L.Icon({
  iconUrl: '/imgs/map/icon-location.png',
  iconSize: [32, 32],
});
const AgencyDetail = () => {
  const { id } = useParams();
  const [agency, setAgency] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgency = async () => {
      try {
        const response = await getAgencyById(id);
        console.log('API response:', response.data.data); // Log the response to check the data structure
        setAgency(response.data.data);
      } catch (error) {
        console.error('Error fetching agency by ID:', error);
        setError(error);
      }
    };
    fetchAgency();
  }, [id]);

  if (error) {
    return <div>Error fetching agency: {error.message}</div>;
  }

  if (!agency) {
    return <div>Loading...</div>;
  }

  const {
    name_agency,
    address,
    phone_number,
    web_url,
    working_hours,
    coordinates,
  } = agency;

  // Log coordinates to verify its existence
  console.log('Agency coordinates:', coordinates);

  if (!coordinates || !coordinates.latitude || !coordinates.longitude) {
    return <div>No coordinates found for this agency.</div>;
  }
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
            src="/imgs/map/icon-location.svg"
            alt="icon-location"
          />
        </div>
        <div className="align-center text-center mt-[28px] font-bold text-[40px]">
          {name_agency}
        </div>
        <div className="scrollbar flex justify-stretch container max-w-[1440px] max-h-[938px] px-[110px] mt-[110px]">
          <div className="location">
            {/* <div className="w-[800px] h-[938px] mr-[36px bg-red-50"></div> */}
            <div className="w-[800px] h-[938px] mr-[36px]">
              <MapContainer
                center={[
                  parseFloat(coordinates.latitude),
                  parseFloat(coordinates.longitude),
                ]}
                zoom={15}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[
                    parseFloat(coordinates.latitude),
                    parseFloat(coordinates.longitude),
                  ]}
                  icon={customIcon}
                >
                  <Popup>
                    <h2 className="text-[16px] font-bold">{name_agency}</h2>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className=" w-[380px] overflow-x-hidden">
            <div className="p-8 bg-[#fafafa] border border-gray-100">
              <div className="flex">
                <div className="flex">
                  <span className="mr-[17px] z-10 text-[12px] text-center">
                    1
                  </span>
                  <img
                    className="ml-[-42px] content-start max-w-[42px] max-h-[45px] mt-[-8px]"
                    src="/imgs/map/icon-location.svg"
                    alt=""
                  />
                </div>
                <h2 className="text-[16px] font-bold ml-4 mb-4">
                  {agency.name_agency}
                </h2>
              </div>
              <div className="border-l-2 pl-8">
                {web_url && (
                  <div className="flex mb-3">
                    <img
                      className="mr-4 w-5 h-5"
                      src="/imgs/map/iconwww.svg"
                      alt="Website"
                    />
                    <a href={web_url} target="_blank" rel="noopener noreferrer">
                      {web_url}
                    </a>
                  </div>
                )}
                {phone_number && (
                  <div className="flex mb-3">
                    <img
                      className="mr-4 w-5 h-5"
                      src="/imgs/map/iconcall.svg"
                      alt="Phone"
                    />
                    <p>{phone_number}</p>
                  </div>
                )}
                {working_hours && (
                  <div className="flex mb-3">
                    <img
                      className="mr-4 w-5 h-5"
                      src="/imgs/map/iconclock.svg"
                      alt="Working Hours"
                    />
                    <p>{working_hours}</p>
                  </div>
                )}
                {address && (
                  <div className="flex mb-3">
                    <img
                      className="mr-4 w-5 h-5"
                      src="/imgs/map/iconlocation3.svg"
                      alt="Address"
                    />
                    <p>{address}</p>
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
        </div>
      </div>
    </>
  );
};

export default AgencyDetail;
