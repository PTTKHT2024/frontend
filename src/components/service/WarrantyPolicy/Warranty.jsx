import React from 'react';
import Header from '../../common/Header';

const Warranty = () => (
  <>
    <Header />
    <div className="max-w-full m-auto p-0 mt-24 w-full relative">
      <div className="relative">
        <div className="w-full h-full object-center">
          <img
            className="align-middle border-none"
            src="public/imgs/banner.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="px-20 py-40 truncate">
        <div className="flex w-full m-auto items-center justify-center">
          <div className="transition-all mr-10 ease-in-out text-red-600 border-b-4 border-red-600">
            <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-semibold">
              Những gì được bảo hành
            </h2>
          </div>
          <div className="transition-all mr-10 ease-in-out text-red-600 border-b-4 border-red-600">
            <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-semibold">
              Những gì không được bảo hành
            </h2>
          </div>
          <div className="transition-all mr-10 ease-in-out text-red-600 border-b-4 border-red-600">
            <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-semibold">
              Trách nhiệm của chủ xe
            </h2>
          </div>
          <div className="transition-all mr-10 ease-in-out text-red-600 border-b-4 border-red-600">
            <h2 className="m-0 text-base leading-5 text-center whitespace-nowrap font-semibold">
              Những thông tin cần thiết
            </h2>
          </div>
        </div>
        <section className="text-base text-black my-20 leading-5">
            <p className="mb-10">
              <strong >1.Thời hạn bảo hành </strong>
            </p>
            <p className="mb-10">
              <span>
                Chế độ bảo hành bắt đầu được tính ngay kể từ thời điểm xe được
                giao cho chủ xe đầu tiên. Trong vòng 36 tháng hoặc 100.000 km,
                tùy thuộc điều kiện nào đến trước, Toyota đảm bảo sẽ sửa chữa
                hoặc thay thế bất kỳ phụ tùng nào của xe Toyota mới bị hỏng hóc.{' '}
              </span>
            </p>
            <p className="mb-10">
              <span>
                - Bảo hành ắc quy: Thời hạn bảo hành cho ắc quy là 12 tháng hoặc
                20.000 km tùy điều kiện nào đến trước.
              </span>
            </p>
            <p className="mb-10">
              <span>
                - Bảo hành ắc quy hybrid: Thời hạn bảo hành ắc quy hybrid là 36
                - 60 tháng hoặc 100.000 - 150.000 km (tuỳ loại xe), tùy điều
                kiện nào đến trước.
              </span>
            </p>
            <p className="mb-10">
              <span>
                - Bảo hành lốp: Bảo hành lốp: Ðược bảo hành theo chế độ riêng
                của nhà sản xuất lốp. Để biết thêm chi tiết, xin quý khách vui
                lòng tham khảo những trang web sau: Bridgestone, Dunlop,
                Michelin.{' '}
              </span>
            </p>
            <p className="mb-10">
              <strong >2. Điều kiện bảo hành </strong>
            </p>
            <p className="mb-10">
              <span>
                Toyota chỉ đảm bảo sửa chữa, thay thế các phụ tùng của xe Toyota
                mới bị hỏng hóc trong điều kiện:{' '}
              </span>
            </p>
            <p className="mb-10">
              <span>
                - Xe hoạt động trong điều kiện bình thường{' '}
              </span>
            </p>
            <p className="mb-10">
              <span>
                - Nguyên liệu phụ tùng không tốt{' '}
              </span>
            </p>
            <p className="mb-10">
              <span>- Lỗi lắp ráp </span>
            </p>
            <p className="mb-10">
              <span>
                - Trừ những điều kiện ghi trong mục NHỮNG GÌ KHÔNG ĐƯỢC BẢO HÀNH{' '}
              </span>
            </p>
            <p className="mb-10">
              <span>
                Chú ý: Bảo hành vẫn áp dụng khi xe được chuyển nhượng cho những
                chủ xe khác.{' '}
              </span>
            </p>
            <p className="mb-10">
              <strong >
                3. Phạm vi áp dụng bảo hành{' '}
              </strong>
            </p>
            <p className="mb-10">
              <span>
                Bảo hành chỉ áp dụng trong phạm vi nước Cộng hòa Xã hội chủ
                nghĩa Việt Nam.{' '}
              </span>
            </p>
            <p className="mb-10">
              <strong >4. Bảo hành miễn phí </strong>
            </p>
            <p className="mb-10">
              <span>
                Mọi sửa chữa thuộc chế độ bảo hành (phụ tùng, công lao động) là
                miễn phí.
              </span>
            </p>
            <p className="mb-10">
              <strong>Xin quý khách hàng lưu ý:</strong>
            </p>
            <ul className='font-light mb-7'>
                    <li>
                        Chính sách bảo hành tại Website này là những thông tin cơ bản
                        nhất về việc bảo hành xe nói chung.
                    </li>
                    <li>
                        Chính sách bảo hành có thể có sự khác nhau giữa các dòng xe
                    </li>
            </ul>
            <p className="mb-7 font-light" >
              Vì vậy, mời quý khách hàng tham khảo tại Sổ bảo hành đi kèm sản
              phẩm để biết thêm các thông tin bảo hành chi tiết và chính sách
              bảo hành đặc biệt hơn cho từng dòng xe.
            </p>
        </section>
      </div>
    </div>
  </>
);

export default Warranty;
