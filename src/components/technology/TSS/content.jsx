import React from "react";

const Content = () => {
    return (
      <>
        <div className="mb-20">
          <p
            className="border-l-4 border-solid border-primaryColor h-10 flex items-center pl-3 text-2xl 
            leading-8 text-black mb-4 mt-0"
          >
            VỀ TSS
          </p>
          <p className="text-base leading-6 text-justify text-black mb-8">
            Hệ thống an toàn Toyota (Toyota Safety Sense – TSS) là gói an toàn
            chủ động, tiên tiến, mới nhất của Toyota. TSS được thiết kế giúp bảo
            vệ người lái, hành khách, người tham gia giao thông khỏi tai nạn.
            Toyota luôn tạo ra những tiến bộ và đổi mới về an toàn giúp ngăn
            ngừa sự cố và bảo vệ con người
          </p>
          <div>
            <p className="mt-0 mb-4">
              <img
                src="/imgs/technology/tss_2.jpg"
                alt=""
                className="block max-w-full h-auto my-[60px] mx-auto align-middle border-none"
              />
            </p>
            <p className="font-bold text-2xl leading-[150%] uppercase text-black mb-8 mt-[60px]">
              TẬP TRUNG VÀO 3 LOẠI TAI NẠN PHỔ BIẾN NHẤT
            </p>
            <p className="mt-0 mb-4">
              <img
                src="/imgs/technology/tss_5.jpg"
                alt=""
                className="block max-w-full h-auto my-[60px] mx-auto align-middle border-none"
              />
            </p>
            <p className="text-base leading-6 text-justify text-black mb-8 mt-0">
              Trong một số điều kiện nhất định, Hệ thống an toàn Toyota TSS được
              thiết kế để hỗ trợ nhận thức của lái xe, khi ra quyết định và điều
              khiển phương tiện với tốc độ cao. Gói an toàn tích hợp các tính
              năng tối tân nhất, tập trung vào 3 mục đích chính: giảm thiếu hoặc
              phòng tránh va chạm trước, hỗ trợ giữ làn đường và tăng cường an
              toàn trong hành trình lái xe ban đêm.
              <br />
              Tuy nhiên, lái xe chịu trách nhiệm cho sự an toàn của chính họ và
              phải luôn lái xe an toàn, tuân thủ các giới hạn và luật lệ về tốc
              độ giao thông và tập trung vào đường khi lái xe.
            </p>
            <p className="font-bold text-2xl leading-[150%] uppercase text-black mb-8 mt-[60px]">
              7 TÍNH NĂNG AN TOÀN CHỦ ĐỘNG VÀ HỖ TRỢ NGƯỜI LÁI
            </p>
            <div className="flex flex-wrap items-stretch">
              <div className="mt-5 w-full">
                <p className="font-bold text-lg leading-[150%] text-black mb-8 text-center">
                  HỆ THỐNG ĐÈN PHA TỰ ĐỘNG THÍCH ỨNG (AHB)
                </p>
                <img
                  src="/imgs/technology/tss_6.jpg"
                  alt=""
                  className="w-full h-80 object-cover object-center block mb-8 align-middle border-none"
                />
                <br />
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Hệ thống đèn pha tự động thích ứng (AHB) là hệ thống an toàn
                  được thiết kế để giúp lái xe cải thiện tầm nhìn vào ban đêm -
                  đồng thời giảm độ chói cho những xe khác. Thông qua việc tăng
                  cường chiếu sáng khoảng rộng, hệ thống có thể cho phép phát
                  hiện sớm hơn người đi bộ và chướng ngại vật.
                  <br />
                  <br />
                  Khi được kích hoạt, AHB sử dụng camera trong xe để giúp phát
                  hiện đèn pha của xe đối diện và đèn hậu của xe trước, sau đó
                  tự động điều chỉnh độ sáng phù hợp.
                </p>
              </div>
              <div className="mt-5 w-full">
                <p className="font-bold text-lg leading-[150%] text-black mb-8 text-center">
                  HỆ THỐNG HỖ TRỢ GIỮ LÀN ĐƯỜNG (LTA)
                </p>
                <p className="font-bold text-lg leading-[150%] text-black mb-8 text-center">
                  <img
                    src="/imgs/technology/tss_7.jpg"
                    alt=""
                    className="w-full h-80 object-cover object-center block mb-8 align-middle border-none"
                  />
                </p>
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Khi được kích hoạt, hệ thống sẽ cảnh báo người lái về khả năng
                  di chuyển lệch khỏi làn đường hiện tại bằng tín hiệu phát sáng
                  hoặc cảnh cáo âm thanh hay rung vô lăng (Hệ thống cũng có thể
                  tự điều chỉnh vô lăng), đồng thời hỗ trợ đánh lái để duy trì
                  làn đường. <br />
                  <br />
                  Thêm vào đó, khi di chuyển trên đường cao tốc, kết hợp cùng hệ
                  thống điều khiển hành trình loại thích ứng DRCC, xe sẽ tự động
                  duy trì làn đường và duy trì khoảng cách với xe phía trước,
                  tối đa tính tiện nghi và an toàn.
                </p>
              </div>
              <div className="mt-5 w-full">
                <p className="font-bold text-lg leading-[150%] text-black mb-8 text-center">
                  HỆ THỐNG CẢNH BÁO CHỆCH LÀN ĐƯỜNG (LDA)
                </p>
                <img
                  src="/imgs/technology/tss_8.jpg"
                  alt=""
                  className="w-full h-80 object-cover object-center block mb-8 align-middle border-none"
                />
                <br />
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Hệ thống cảnh báo chệch làn đường (LDA) sử dụng camera trước
                  của xe để phát hiện làn đường khởi hành khi đi trên những con
                  đường thẳng với vạch kẻ rõ ràng, mép đường và lề đường. Trạng
                  thái hoạt động của hệ thống được biểu thị thông qua hình minh
                  họa đánh dấu làn đường màu trên Màn hình đa thông tin (MID)
                  của xe. <br />
                  <br />
                  Nếu LDA xác định rằng chiếc xe đang bắt đầu đi chệch khỏi làn
                  đường đã được đánh dấu, hệ thống sẽ cảnh báo người lái bằng
                  một cảnh báo âm thanh và hình ảnh. Khi cảnh báo này xảy ra,
                  lái xe phải kiểm tra cẩn thận làn đường xung quanh trước khi
                  đưa xe an toàn trở lại làn đường ban đầu.
                </p>
              </div>
              <div className="mt-5 w-full">
                <p className="font-bold text-lg leading-[150%] text-black mb-8 text-center">
                  HỆ THỐNG CẢNH BÁO TIỀN VA CHẠM (PCS)
                </p>
                <img
                  src="/imgs/technology/tss_9.jpg"
                  alt=""
                  className="w-full h-80 object-cover object-center block mb-8 align-middle border-none"
                />
                <br />
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Hệ thống cảnh báo tiền chạm PCS sử dụng một camera và radar có
                  bước sóng milimet gắn vào lưới tản nhiệt giúp giảm thiểu hoặc
                  phòng tránh va chạm trước. Khi ra-đa bước sóng ngắn và camera
                  đơn của hệ thống an toàn tiền va chạm phát hiện va chạm có thể
                  xảy ra với phương tiện phía trước, hệ thống sẽ cảnh báo người
                  lái đồng thời kích hoạt phanh hỗ trợ khi người lái đạp phanh.
                </p>
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Nếu người lái không thể đạp phanh, hệ thống sẽ chủ động kích
                  hoạt chế độ phanh tiền va chạm (AEB), để tránh va chạm hoặc
                  hạn chế tối đa tốc độ va chạm.
                </p>
              </div>
              <div className="mt-5 w-full">
                <p className="font-bold text-lg leading-[150%] text-black mb-8 text-center">
                  HỆ THỐNG KIỂM SOÁT HÀNH TRÌNH CHỦ ĐỘNG (DRCC)
                </p>
                <img
                  src="/imgs/technology/tss_10.jpg"
                  alt=""
                  className="w-full h-80 object-cover object-center block mb-8 align-middle border-none"
                />
                <br />
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Hệ thống kiểm soát hành trình chủ động DRCC là hệ thống điều
                  khiển hành trình tự động thích ứng công nghệ cao sử dụng ra-đa
                  và camera để phát hiện phương tiện đang di chuyển ở phía trước
                  và chủ động duy trì khoảng cách thích hợp.
                </p>
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Trên đường cao tốc, ngoài việc duy trì tốc độ không đổi, Hệ
                  thống điều khiển hành trình chủ động cho phép người lái duy
                  trì tốc độ đã cài đặt mà không cần tăng ga. Hệ thống kiểm soát
                  hành trình chủ động cũng hỗ trợ duy trì khoảng cách giữa các
                  phương tiện, điều chỉnh tốc độ để giữ khoảng cách nhất định.
                </p>
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Điều này có nghĩa là, nếu phương tiện phía trước được phát
                  hiện di chuyển với tốc độ thấp hơn tốc độ đã cài đặt, Hệ thống
                  kiếm soát hành trình chủ động sẽ tự động giảm tốc độ phương
                  tiện. Nếu trong trường hợp cần giảm tốc ngay lập tức, hệ thống
                  sẽ cảnh báo hiển thị trên màn hình đa thông tin đồng thời giảm
                  công suất động cơ để hạn chế tăng tốc, giúp tránh va chạm. Sau
                  đó hệ thống sẽ tự động trở lại tốc độ đã cài đặt.
                </p>
              </div>
              <div className="mt-5 w-full">
                <p className="font-bold text-lg leading-[150%] text-black mb-8 text-center">
                  CẢNH BÁO PHƯƠNG TIỆN PHÍA TRƯỚC KHỞI HÀNH (FDA)
                </p>
                <img
                  src="/imgs/technology/tss_10.jpg"
                  alt=""
                  className="w-full h-80 object-cover object-center block mb-8 align-middle border-none"
                />
                <br />
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Cảnh báo phương tiện phía trước khởi hành (FDA) là hệ thống sử
                  dụng camera stereo phía trước để xác định khi xe phía trước
                  bắt đầu khởi hành và cảnh báo cho người lái bằng âm thanh và
                  đèn chỉ báo.
                </p>
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  FDA hỗ trợ trong trường hợp Khách hàng không để ý khi xe phía
                  trước di chuyển trong lúc dừng đèn đỏ hoặc tắc đường.
                </p>
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Nếu FDA phát hiện xe phía trước bắt đầu di chuyển, hệ thống
                  cảnh báo người lái bằng âm thanh và đèn chỉ báo.
                </p>
              </div>
              <div className="mt-5 w-full">
                <p className="font-bold text-lg leading-[150%] text-black mb-8 text-center">
                  KIỂM SOÁT VẬN HÀNH CHÂN GA (PMC)
                </p>
                <img
                  src="/imgs/technology/tss_11.jpg"
                  alt=""
                  className="w-full h-80 object-cover object-center block mb-8 align-middle border-none"
                />
                <br />
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Kiểm soát vận hành chân ga (PMC) là hệ thống sử dụng camera
                  stereo phía trước để xác định khi phía trước xe có vật cản và
                  người lái nhấn ga nhiều hơn mức cần thiết. Hệ thống sẽ tự động
                  giảm công suất động cơ và tự động phanh nhằm hạn chế va chạm.
                </p>
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  PMC hỗ trợ trong trường hợp Khách hàng nhấn nhầm chân ga hoặc
                  khi muốn lùi xe nhưng vào nhầm số “D” và nhấn nhầm chân ga.
                </p>
                <p className="text-base leading-[150%] text-justify text-black mb-0 mt-0">
                  Nếu PMC phát hiện có vật cản phía trước đồng thời người lái
                  nhấn nhầm chân ga (nhấn nhiều hơn mức cần thiết) khi đó hệ
                  thống sẽ cảnh báo người lái bằng âm thanh và chỉ báo trên đồng
                  hồ táp lô đồng thời giảm công suất động cơ và tác động phanh
                  khi cần thiết nhằm hạn chế va chạm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Content;