import React from 'react';
import { Link } from 'react-router-dom';

const relatedPosts = [
  {
    title: 'TRAO TẶNG TRUYỆN TRANH NHẬT BẢN EHON CHO TRẺ EM VIỆT',
    date: '28/11/2021',
    image: '/imgs/information/community/related_post_1.png',
  },
  {
    title: 'Chiến dịch tuyên truyền An toàn giao thông',
    date: '20/08/2021',
    image: '/imgs/information/community/related_post_2.png',
  },
  {
    title: 'Toyota cùng em học an toàn giao thông',
    date: '24/08/2021',
    image: '/imgs/information/community/related_post_3.png',
  },
  {
    title:
      'TRẠI HÈ BÓNG ĐÁ THIẾU NIÊN TOYOTA – LAN TỎA NIỀM ĐAM MÊ VÀ CHẮP CÁNH ƯỚC MƠ BÓNG ĐÁ CHO TRẺ EM VIỆT',
    date: '30/11/2021',
    image: '/imgs/information/community/related_post_4.png',
  },
];

const RelatedPosts = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl text-mainTitleColor font-medium mb-6 pl-4 border-l-4 border-red-500">
        BÀI VIẾT LIÊN QUAN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedPosts.map((post, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <Link to="">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
