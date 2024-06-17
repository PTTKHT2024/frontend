import React, { useEffect, useState } from 'react';
import DiscoverTabSelect from '../../common/DiscoverTabSelect';
import { getAllBlogs } from '../../utils/BlogApi';
import { fileURL } from '../../utils/UtilsFunction';
import { Link } from 'react-router-dom';

const newsTabs = [
  'SẢN PHẨM',
  'KHUYẾN MÃI',
  'XÃ HỘI',
  'THÔNG TIN KHÁC',
  'THÔNG TIN BỔ TRỢ',
];

const HomeNews = () => {
  const [currentTab, setCurrentTab] = useState('SẢN PHẨM');
  const [blogs, setBlogs] = useState([
    {
      id: '',
      image: '',
      title: '',
      createdAt: '',
      content: '',
      updatedAt: '',
      blogCategory: {
        name: '',
      },
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const res = await getAllBlogs(1, 1000);
        const reversedBlogs = [...res.data.data.result].reverse();
        setBlogs(reversedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
      setIsLoading(false);
    };

    fetchBlogs();
  }, []);

  const currentBlogs = () => {
    const tmp = [];
    for (let i = 0; i < blogs.length; i++) {
      if (blogs[i].blogCategory.name === currentTab) {
        tmp.push(blogs[i]);
      }
      if (tmp.length === 3) {
        break; // Exit the loop once we have 3 items
      }
    }
    return tmp;
  };

  const current = currentBlogs();

  console.log(current);

  return (
    <section className="container mb-sectionMargin_1">
      <DiscoverTabSelect
        tabs={newsTabs}
        currentTab={currentTab}
        handleChangeTab={setCurrentTab}
        width={100}
      />

      <div className="mt-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            {isLoading ? (
              ''
            ) : (
              <Link>
                <img
                  src={`${fileURL}/${current[0].image}`}
                  alt=""
                  className="object-cover object-center h-[470px]"
                />
                <p className="text-base font-semibold text-subTitleColor mt-3">
                  {current[0].title}
                </p>
              </Link>
            )}
          </div>

          <div className="col-span-4 ">
            {current.slice(1).map((blog, index) => (
              <Link key={blog.id} className="row-span-1 mb-3 block">
                <img
                  src={`${fileURL}/${blog.image}`}
                  alt=""
                  className="object-cover object-center w-full h-[180px]"
                />
                <p className="text-base font-semibold text-subTitleColor mt-3">
                  {blog.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
