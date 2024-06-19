import React, { useEffect, useState } from 'react';
import { getAllBlogs } from '../utils/BlogApi';
import { fileURL } from '../utils/UtilsFunction';
import { Link } from 'react-router-dom';
import Paginator from '../common/Paginator';

function News({ categoryToShow }) {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getAllBlogs(1, 1000);
        setBlogs(res.data.data.result);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu blog:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Sắp xếp các blog theo ngày mới nhất trước
  const filteredBlogs = blogs
    .filter((blog) => blog.blogCategory.name === categoryToShow)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
      <div className="bg-electrification_1 pb-10">
        <div>
          <img
            className="mb-sectionMargin_1 h-full w-full mt-[96px] object-cover"
            src="https://www.toyota.com.vn/media/bkzkt2op/newsbanner-1.png"
            alt=""
          />
        </div>
        {filteredBlogs.length > 0 && (
          <div className="flex items-center justify-center px-28 py-12">
            <h1 className="inline-block text-mainTitleColor text-mainTitle font-bold pb-12">
              {filteredBlogs[0].blogCategory.name}
            </h1>
          </div>
        )}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold pl-4 border-l-4 border-primaryColor">
              TIN NỔI BẬT
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredBlogs.length > 0 && (
              <>
                <div className="col-span-1 lg:col-span-2 bg-white shadow-md relative">
                  <Link to={`/blog/${filteredBlogs[0].id}`}>
                    <div className="relative">
                      <img
                        src={`${fileURL}/${filteredBlogs[0].image}`}
                        alt="News Image 1"
                        className="w-full h-full max-h-[500px] min-h-[500px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                        <div className="flex flex-col h-full justify-end">
                          <h3 className="text-xl font-semibold mb-2">
                            {filteredBlogs[0].title}
                          </h3>
                          <div className="flex">
                            <div className="text-white mr-2 text-xs flex items-center mt-0.5">
                              {new Date(
                                filteredBlogs[0].createdAt
                              ).toLocaleDateString('vi-VN')}
                            </div>
                            <div className="font-semibold text-white">
                              {filteredBlogs[0].blogCategory.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="grid grid-rows-2 gap-4">
                  {filteredBlogs.slice(1, 3).map((blog, index) => (
                    <Link to={`/blog/${blog.id}`} key={blog.id}>
                      <div className="bg-white shadow-md relative">
                        <div className="relative">
                          <img
                            src={`${fileURL}/${blog.image}`}
                            alt={`News Image ${index + 2}`}
                            className="w-full h-full max-h-[230px] min-h-[230px] object-cover object-center"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                            <div className="flex flex-col h-full justify-end">
                              <h3 className="text-xl font-semibold mb-2">
                                {blog.title}
                              </h3>
                              <div className="flex">
                                <div className="text-white mr-2 text-xs flex items-center mt-0.5">
                                  {new Date(blog.createdAt).toLocaleDateString(
                                    'vi-VN'
                                  )}
                                </div>
                                <div className="font-semibold text-white">
                                  {blog.blogCategory.name}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
        <section className="container mx-auto pt-48 pb-4 py-8">
          <h2 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-primaryColor">
            TIN TỨC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentBlogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className="bg-white shadow-md overflow-hidden h-[350px] group">
                  <div className="overflow-hidden">
                    <img
                      src={`${fileURL}/${blog.image}`}
                      alt={blog.title}
                      className="w-full h-[168px] max-h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110 "
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between ">
                    <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-red-500 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <div className="flex text-gray-500 mt-16">
                      <span className="flex items-center mt-0.5 mr-2 text-xs">
                        {new Date(blog.createdAt).toLocaleDateString('en-GB')}
                      </span>
                      <span className="text-primaryColor font-semibold">
                        {blog.blogCategory.name}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {totalPages > 1 && (
          <div className="flex justify-center my-8">
            <Paginator
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default News;
