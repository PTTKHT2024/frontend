import React, { useEffect, useState, useRef } from 'react';
import Paginator from '../../common/Paginator';
import TitleContent from './TitleContent';
import {getAllSummons, getSummom} from '../../utils/SummonApi'

const Summon = () => {
  const [Services, setServices] = useState([
    {
      id: '',
      image: '',
      title: '',
      createdAt: '',
      content: '',
      updatedAt: '',
    },
  ]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ServiceCategory, setServiceCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [ServicesPerPage, setServicesPerPage] = useState(10);

  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const res = await getAllSummons(1, 1000);
      const reversedServices = [...res.data.data.result].reverse();
      setServices(reversedServices);
    } catch (error) {
      console.error('Error fetching Services:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (!ServiceCategory) {
      setFilteredServices(Services);
    } else {
      const filtered = Services.filter(
        (Service) => Service.ServiceCategory.name === ServiceCategory
      );
      setFilteredServices(filtered);
    }
    setCurrentPage(1);
  }, [ServiceCategory, Services]);

  const calculateTotalPages = (filteredServices, ServicesPerPage, Services) => {
    const totalServices =
      filteredServices.length > 0 ? filteredServices.length : Services.length;
    return Math.ceil(totalServices / ServicesPerPage);
  };

  const indexOfLastService = currentPage * ServicesPerPage;
  const indexOfFirstService = indexOfLastService - ServicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

  const [selection, setSelection] = useState('services');
  const [servicesIndex, setservicesIndex] = useState(null); 
  const servicesRef = useRef(null); 

  useEffect(() => {
    setSelection('services');
  }, []);

  const handleClick =(index) => {
    index = getSummom(index);
    setservicesIndex(index);
    if (servicesRef.current) {
      if (servicesRef.current.requestFullscreen) {
        servicesRef.current.requestFullscreen();
      } else if (servicesRef.current.mozRequestFullScreen) {
        servicesRef.current.mozRequestFullScreen();
      } else if (servicesRef.current.webkitRequestFullscreen) {
        servicesRef.current.webkitRequestFullscreen();
      } else if (servicesRef.current.msRequestFullscreen) {
        servicesRef.current.msRequestFullscreen();
      }
    }
  };

  const handleClose = () => {
    setservicesIndex(null);
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  return (
    <>
      <div className="mt-20 ">
        <div className="my-0 mx-auto w-[1200px] p-0 max-w-full">
          <div className="flex items-center max-w-full mb-20 justify-center">
            <div className="p-0 cursor-pointer">
              <h2 className="m-0 text-base leading-[120%] text-center whitespace-nowrap font-bold text-primaryColor">
                Chương trình triệu hồi
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="mt-5 bg-[#f5f5f5] h-max py-5 ">
          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 mt-5 w-full">
              <tbody className="bg-[#f5f5f5] divide-y divide-gray-200">
                {currentServices.map((Service) => (
                  <tr key={Service.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isLoading ? (
                        <span className="block h-5 w-5 animate-spin border-[3px] border-t-[#000]/[.7] rounded-full"></span>
                      ) : (
                        <></>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                      >
                        <path
                          d="M29.8209 35.3012C31.2241 35.3012 32.6274 34.7671 33.6957 33.6988C35.8322 31.5623 35.8322 28.0859 33.6957 25.9494C31.5591 23.8128 28.0827 23.8128 25.9461 25.9494C23.8096 28.0859 23.8096 31.5623 25.9461 
                            33.6988C27.0144 34.767 28.4176 35.3012 29.8209 35.3012ZM26.9401 26.9432C27.7344 26.1489 28.7775 25.7518 29.8209 25.7518C30.8641 25.7518 31.9076 26.1491 32.7017 26.9432C34.2902 28.5317 34.2902 31.1164 32.7017
                            32.7048C31.1133 34.2934 28.5285 34.2933 26.9401 32.7048C25.3515 31.1164 25.3515 28.5317 26.9401 26.9432Z"
                          fill="black"
                        ></path>
                        <path
                          d="M23.4428 23.4451C20.8281 26.06 20.0721 29.9488 21.517 33.3523C21.6686 33.7096 22.0814 33.8761 22.4385 33.7245C22.7958 33.5728 22.9625 33.1603 22.8108 32.803C21.591 29.9296 22.2293 26.6466 24.4368 24.439C27.4061
                             21.4698 32.2376 21.4699 35.2067 24.439C38.176 27.4083 38.176 32.2396 35.2067 35.2088C33.7802 36.6352 31.8839 37.4273 29.8668 37.4392C29.8515 37.4393 29.8364 37.4393 29.821 37.4393C27.8227 37.4393 25.9366 36.6723
                             24.5059 35.277C24.228 35.0059 23.7831 35.0115 23.5122 35.2893C23.2412 35.5672 23.2467 36.0122 23.5246 36.2832C25.2196 37.9364 27.4536 38.8449 29.8207 38.8448C29.8388 38.8448 29.857 38.8448 29.8751 38.8446C32.2644 38.8307 34.5109 37.8923 36.2007 36.2026C39.7179 32.6853 39.7179 26.9623 36.2007 23.445C32.6831 19.9278 26.9603 19.9278 23.4428 23.4451Z"
                          fill="black"
                        ></path>
                        <path
                          d="M46.6518 26.6686H44.1511C43.7798 24.974 43.119 23.3774 42.1868 21.9214L43.9535 20.1546C44.2078 19.9004 44.3478 19.5624 44.3478 19.2028C44.3478 18.8433 44.2078 18.5053 43.9536 18.2511L41.3945 15.6921C41.1402 15.4379 40.8023 15.2978 40.4428 15.2978C40.0832 15.2978 39.7453 15.4378 39.491 15.692L37.7242 17.4589C36.2683 16.5266 34.6718 15.8659 32.9771 15.4945V12.9938C32.9771 12.2517 32.3734 11.6479 31.6312 11.6479H28.0122C27.5941 11.6479 27.2199 11.8396 26.9729 
                            12.1396H26.5137C26.2143 10.8293 25.7022 9.59185 24.9897 8.45679L26.3414 7.10508C26.818 6.62839 26.818 5.85288 26.3414 5.37611L24.2732 3.30782C24.0422 3.07693 23.7352 2.94977 23.4086 2.94977C23.0821 2.94977 22.775 3.07693 22.5442 3.30792L21.1924 4.65953C20.0576 3.94718 18.82 3.43508 17.5095 3.13559V1.22258C17.5096 0.548462 16.9613 0 16.2871 0H13.3621C12.688 0 12.1395 0.548462 12.1395 1.22258V3.13569C10.8291 3.43517 9.59147 3.94737 8.45669 4.65963L7.10517 3.30801C6.87428 
                            3.07703 6.5673 2.94987 6.24064 2.94987C5.91398 2.94987 5.6069 3.07703 5.37601 3.30801L3.30792 5.3762C2.83133 5.85288 2.83133 6.62839 3.30792 7.10517L4.65963 8.45688C3.94727 9.59166 3.43517 10.8293 3.13569 12.1397H1.22258C0.548462 12.1397 0 12.6882 0 13.3623V16.2872C0 16.9614 0.548462 17.5098 1.22258 17.5098H3.13569C3.43517 18.8203 3.94727 20.058 4.65963 21.1927L3.30792 22.5444C2.83124 23.0211 2.83124 23.7967 3.30792 24.2733L5.3761 26.3416C5.85279 26.8182 6.6283 26.8184 
                            7.10517 26.3416L8.45688 24.9899C9.59157 25.7023 10.829 26.2144 12.1396 26.5139V26.9738C11.8384 27.2208 11.6457 27.5955 11.6457 28.0147V31.6338C11.6457 32.3759 12.2494 32.9797 12.9916 32.9797H15.4923C15.8638 34.6743 16.5245 36.271 17.4567 37.7268L15.69 39.4936C15.4356 39.7479 15.2956 40.0859 15.2956 40.4454C15.2956 40.805 15.4356 41.143 15.6899 41.3971L18.249 43.9561C18.5032 44.2103 18.8411 44.3504 19.2007 44.3504C19.5602 44.3504 19.8981 44.2104 20.1524 43.9562L21.9192 42.1893C23.3752 43.1217 24.9718 43.7824 26.6663 
                            44.1536V46.6544C26.6663 47.3965 27.2701 48.0003 28.0122 48.0003H31.6312C32.3734 48.0003 32.9771 47.3965 32.9771 46.6544V44.1534C34.6718 43.782 36.2684 43.1213 37.7243 42.189L39.4911 43.9559C39.7453 44.2101 40.0832 44.3502 40.4428 44.3502C40.8023 44.3502 41.1402 44.2102 41.3945 43.9559L43.9535 41.3969C44.2078 41.1427 44.3478 40.8047 44.3478 40.4451C44.3478 40.0856 44.2078 39.7476 43.9536 39.4935L42.1868 37.7265C43.1189 36.2708 43.7797 34.6741 44.1511 32.9794H46.6518C47.394 32.9794 47.9977 32.3756 47.9977 31.6335V28.0144C47.9978 
                            27.2723 47.394 26.6686 46.6518 26.6686ZM12.5781 25.1712C11.3332 24.9023 10.1616 24.4176 9.09558 23.7302C8.61365 23.4198 7.97101 23.4876 7.56705 23.8917L6.24064 25.2182L4.43117 23.4087L5.75768 22.0821C6.16164 21.6781 6.22949 21.0353 5.91904 20.5536C5.2317 19.4877 4.74687 18.316 4.47793 17.071C4.35677 16.5107 3.85422 16.104 3.2829 16.104H1.40559V13.5452H3.28299C3.85422 13.5452 4.35686 13.1385 4.47812 12.578C4.74696 11.3332 5.2318 10.1616 5.91913 9.09558C6.22958 8.61403 6.16174 7.9712 5.75777 7.56714L4.43127 6.24064L6.24073 4.43117L7.56714 
                            5.75768C7.97111 6.16174 8.61365 6.22958 9.09577 5.91904C10.1618 5.2317 11.3334 4.74687 12.5781 4.47803C13.1384 4.35696 13.5452 3.85432 13.5452 3.2829V1.40559H16.1041V3.28299C16.1041 3.85441 16.5109 4.35705 17.0713 4.47812C18.316 4.74696 19.4876 5.2318 20.5537 5.91904C21.0353 6.22949 21.6782 6.16183 22.0823 5.75768L23.4087 4.43117L25.2182 6.24064L23.8918 7.56705C23.4876 7.97111 23.4198 8.61393 23.7303 9.09558C24.4177 10.1618 24.9026 11.3335 25.1713 12.578C25.2924 13.1384 25.7949 13.5452 26.3665 13.5452H26.6664V15.4945C24.9718 15.8658 23.3753 
                            16.5266 21.9193 17.4589L20.1524 15.692C20.1314 15.671 20.1091 15.6521 20.087 15.6327C20.3336 14.0137 19.8355 12.3023 18.5914 11.0582C17.1195 9.58623 14.9081 9.10608 12.9576 9.83473C12.594 9.97061 12.4093 10.3755 12.5453 10.7391C12.6811 11.1027 13.086 11.2873 13.4495 11.1515C14.8855
                            10.6148 16.5138 10.9683 17.5975 12.052C18.507 12.9614 18.8733 14.2098 18.7008 15.3941C18.5337 15.4609 18.3802 15.561 18.2491 15.692L15.6901 18.251C15.5587 18.3823 15.4585 18.5363 15.3917 18.7036C15.2055 18.7307 15.0164 18.7459 14.8248 18.7459C13.7773 18.7459 12.7927 18.338 12.0521 17.5974C10.8144 16.3598 10.5476 14.4309 11.4033 12.9068C11.5932 12.5683 11.4729 12.1399 11.1344 11.95C10.7962 11.76 10.3676 11.8803 10.1776 12.2188C9.01499 14.2899 9.37707 16.9104
                            11.0581 18.5914C12.0965 19.6298 13.4607 20.1491 14.8247 20.1491C15.0936 20.1491 15.3623 20.1278 15.6287 20.0872C15.6486 20.11 15.6682 20.133 15.6899 20.1546L17.4567 21.9215C16.5245 23.3773 15.8637 24.9741 15.4923 26.6687H13.5452V26.3665C13.5452 25.795 13.1385 25.2924 12.5781 25.1712ZM46.5923 31.5738H44.1026C43.4735 31.5738 42.9203 32.0217 42.7868 32.639C42.4499 34.1988 41.8424 35.6671 40.9811 37.0028C40.6391 37.5332 40.7137 38.2411 41.1584 38.6858L42.9176 40.445L40.4429 
                            42.9197L38.6837 41.1604C38.2391 40.7158 37.5312 40.6411 37.0009 40.983C35.6649 41.8444 34.1966 42.4519 32.6368 42.7888C32.0196 42.9222 31.5717 43.4755 31.5717 44.1045V46.5942H28.072V44.1045C28.072 43.4756 27.6241 42.9223 27.0068 42.7888C25.4471 42.4519 23.9789 41.8444 22.6429 40.983C22.1127 40.6412 21.4048 40.7157 20.9599 41.1604L19.2008 42.9196L16.7262 40.445L18.4852 38.6857C18.9301 38.2409 19.0047 37.5331 18.6627 37.0028C17.8014 35.6669 17.1938 34.1987 16.8569 32.6388C16.7234 
                            32.0216 16.1702 31.5736 15.5412 31.5736H13.0515V28.0739H15.5412C16.1702 28.0739 16.7234 27.626 16.8569 27.0087C17.1938 25.4489 17.8013 23.9806 18.6626 22.6448C19.0047 22.1144 18.9301 21.4066 18.4853 20.9619L16.7262 19.2026L19.2008 16.7279L20.9599 18.4872C21.4046 18.9319 22.1124 19.0065 22.6429 18.6647C23.9789 17.8033 25.4472 17.1957 27.0068 16.8588C27.6241 16.7255 28.072 16.1722 28.072 15.5431V13.0534H31.5717V15.543C31.5717 16.1721 32.0196 16.7254 32.6368 16.8588C34.1966 17.1956 35.6648 
                            17.8032 37.0009 18.6646C37.5312 19.0064 38.2389 18.932 38.6838 18.4871L40.4429 16.7278L42.9176 19.2025L41.1584 20.962C40.7135 21.4069 40.6389 22.1146 40.9809 22.6449C41.8422 23.9808 42.4498 25.4491 42.7868 27.009C42.9202 27.6261 43.4734 28.0742 44.1025 28.0742H46.5922V31.5738H46.5923Z"
                          fill="black"
                        ></path>
                      </svg>
                      {isLoading ? (
                        <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                      ) : (
                        <>
                          <p
                            className="text-base font-bold cursor-pointer text-gray-900 pl-6 hover:text-primaryColor"
                            id={`Service-content-tooltip-${Service.id}`}
                            onClick={() => handleClick(`${Service.id}`)}

                          >
                            {Service.title}
                          </p>
                         
                        </>
                      )}
                      {servicesIndex !== null && (
                        <div
                          ref={servicesRef}
                          className="fixed top-0 left-0 right-0 bottom-0 z-[50] bg-[#333333]/[.7] bg-opacity-75 flex justify-center items-center"
                          onClick={handleClose}
                        >
                          <div
                            className="relative bg-white w-[1200px] h-auto transition duration-300 ease-in-out "
                            onClick={(e) => e.stopPropagation()}
                          >
                              <TitleContent
                                key={Service.id}
                                image={Service.image}
                                title={Service.title}
                                content={Service.content}
                              />
                          </div>
                        </div>
                      )}
                    </td>
                    <div className="absolute w-[1200px] h-[1px] bg-black right-36"></div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center mt-5 justify-center">
          <Paginator
            currentPage={currentPage}
            totalPages={calculateTotalPages(
              filteredServices,
              ServicesPerPage,
              Services
            )}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default Summon;
