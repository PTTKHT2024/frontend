import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaAngleLeft, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useParams } from 'react-router';


const api = axios.create({
  baseURL: 'http://18.140.54.30/api/v1',
});

const getCarById = async (id) => {
  try {
    const res = await api.get(`/cars/${id}`);
    return { status: res.status, data: res.data };
  } catch (err) {
    throw new Error(err.message);
  }
};

const Test = () => {
  const [isGeneralInfoExpanded, setIsGeneralInfoExpanded] = useState(false);
  const [isEngineFrameExpanded, setIsEngineFrameExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCarIndex, setSelectedCarIndex] = useState(0); 
  const [carData, setCarData] = useState([]);
  const params = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getCarById(params.id);
        if (res.status === 200) {
          setBlog(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, []);

  if (!Array.isArray(carData) || carData.length === 0) {
    return <div>Loading...</div>;
  }
  const selectedCar = carData[selectedCarIndex]; 
  return (
    <div>
      <h1>Car Information</h1>
      <div>
        <h2 onClick={() => setIsGeneralInfoExpanded(!isGeneralInfoExpanded)}>
          General Information{' '}
          {isGeneralInfoExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </h2>
        {isGeneralInfoExpanded && (
          <div>
            <p>Make: {selectedCar.name}</p>
            <p>Model: {selectedCar.model}</p>
            <p>Year: {selectedCar.fuel}</p>
            <p>Color: {selectedCar.number_of_seats}</p>
          </div>
        )}
      </div>

      <div>
        <h2 onClick={() => setIsEngineFrameExpanded(!isEngineFrameExpanded)}>
          Engine and Frame{' '}
          {isEngineFrameExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </h2>
        {isEngineFrameExpanded && (
          <div>
            <p>Engine Type: {selectedCar.engineType}</p>
            <p>Frame Number: {selectedCar.frameNumber}</p>
          </div>
        )}
      </div>

      <div>
        <h2 onClick={() => setIsExpanded(!isExpanded)}>
          Other Information {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </h2>
        {isExpanded && (
          <div>
            <p>Price: {selectedCar.price}</p>
            <p>Mileage: {selectedCar.mileage}</p>
          </div>
        )}
      </div>
      <div>
        <h2>Select a Car</h2>
        <select
          onChange={(e) => setSelectedCarIndex(Number(e.target.value))}
          value={selectedCarIndex}
        >
          {carData.map((car, index) => (
            <option key={index} value={index}>
              {car.make} {car.model}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Test;
