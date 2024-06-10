import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';

const ContactUs = () => {
  return (
    <>
      <section className="bg-gray-200 p-0 pt-7 pb-14 block">
        <div className="max-w-[1200px] my-0 mx-auto">
          <p className="font-semibold text-3xl leading-[120%] text-black mb-4 text-center mt-0">
            Liên hệ với chúng tôi
          </p>
          <p className="text-base leading-[150%] text-black max-w-full text-center">
            Hãy liên hệ với chúng tôi, đội ngũ chuyên gia của chúng tôi luôn sẵn
            sàng trợ giúp.
          </p>
        </div>
        <div className="max-w-[1200px] my-0 mx-auto flex items-stretch justify-between">
          <div className="mt-9">
            <ul className="p-0 m-0 list-none">
              <li className="mb-4">
                <div className="flex items-center">
                  <i className="text-black text-xl mr-4">
                    <FaPhoneAlt />
                  </i>
                  <a
                    href=""
                    className="no-underline font-semibold text-base leading-6 tracking-wide text-black"
                  >
                    <span className="text-base leading-[120%] text-black">
                      1800 1524{' '}
                    </span>
                  </a>
                  <span className="my-0 mx-4 text-base leading-[120%] text-black">
                    |
                  </span>
                  <a
                    href=""
                    className="no-underline font-semibold text-base leading-6 tracking-wide text-black"
                  >
                    <span className="text-base leading-[120%] text-black">
                      0916 001 524{' '}
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center">
                  <i className="text-black text-xl mr-4">
                    <TbMailFilled />
                  </i>
                  <a
                    href=""
                    className="no-underline font-semibold text-base leading-6 tracking-wide text-black"
                  >
                    <span className="text-base leading-[120%] text-black">
                      Tmv_cs@toyotavn.com.vn
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-0">
                <span className="text-base leading-[120%] text-black">
                  Hotline chăm sóc khách hàng{' '}
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-9">
            <ul className="p-0 m-0 list-none">
              <li className="mb-4">
                <div className="flex items-center">
                  <i className="text-black text-xl mr-4">
                    <FaPhoneAlt />
                  </i>
                  <a
                    href=""
                    className="no-underline font-semibold text-base leading-6 tracking-wide text-black"
                  >
                    <span className="text-base leading-[120%] text-black">
                      (84-28) 7309 0998{' '}
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center">
                  <i className="text-black text-xl mr-4">
                    <TbMailFilled />
                  </i>
                  <a
                    href=""
                    className="no-underline font-semibold text-base leading-6 tracking-wide text-black"
                  >
                    <span className="text-base leading-[120%] text-black">
                      cs@toyotafinancial.com.vn
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-0">
                <span className="text-base leading-[120%] text-black">
                  Hotline hỗ trợ tài chính{' '}
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-9">
            <ul className="p-0 m-0 list-none">
              <li className="mb-4">
                <div className="flex items-center">
                  <i className="text-black text-xl mr-4">
                    <FaPhoneAlt />
                  </i>
                  <a
                    href=""
                    className="no-underline font-semibold text-base leading-6 tracking-wide text-black"
                  >
                    <span className="text-base leading-[120%] text-black">
                      1900 633 384{' '}
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-0">
                <span className="text-base leading-[120%] text-black">
                  Hotline bảo hiểm Toyota{' '}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
