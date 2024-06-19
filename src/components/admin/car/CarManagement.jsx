import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CarManagement = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="">
      <div className="container">
        <div className="flex justify-between">
          <p className="text-mainTitleColor text-mainTitle uppercase">
            Quản lý xe
          </p>

          <Link
            to={'/admin/car/add'}
            type="submit"
            className="uppercase px-5 py-2 flex items-center rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            thêm xe
          </Link>
        </div>
      </div>

      {/* <div className="mt-5 bg-white rounded-2xl h-max py-5 shadow-md ml-[64px] mr-[8px]">
        <div className="flex items-center">
          <p className="text-mainTitleColor font-semibold text-[18px] px-5 mr-8">
            Chi tiết bài viết
          </p>
          <Paginator
            currentPage={currentPage}
            totalPages={calculateTotalPages(filteredBlogs, blogsPerPage, blogs)}
            onPageChange={setCurrentPage}
          />
        </div> */}

      {/* <div className="overflow-x-auto">
          <table className="divide-y divide-gray-200 mt-5 w-full">
            <thead className="bg-[#f5f5f5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold whitespace-nowrap text-gray-500 uppercase tracking-wider">
                  Ảnh bìa
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tiêu đề
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Nội dung
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Phân loại
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ngày tạo
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Cập nhập
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentBlogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="block h-5 w-5 animate-spin border-[3px] border-t-[#000]/[.7] rounded-full"></span>
                    ) : (
                      <>
                        <img
                          src={`${fileURL}/${blog.image}`}
                          alt=""
                          className="h-15 w-full object-cover"
                          data-tooltip-id={`blog-image-tooltip-${blog.id}`}
                        />
                        <Tooltip
                          id={`blog-image-tooltip-${blog.id}`}
                          place="top"
                        >
                          <img
                            src={`${fileURL}/${blog.image}`}
                            alt=""
                            className="w-[400px] object-cover object-center"
                          />
                        </Tooltip>
                      </>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-900">{blog.title}</p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <>
                        <p
                          className="text-sm w-full italic text-[#007bff] underline underline-offset-2"
                          data-tooltip-id={`blog-content-tooltip-${blog.id}`}
                        >
                          xem trước...
                        </p>
                        <Tooltip
                          id={`blog-content-tooltip-${blog.id}`}
                          style={{
                            maxHeight: '70vh',
                            maxWidth: '50vw',
                            overflow: 'hidden',
                          }}
                        >
                          <p
                            className="text-sm text-white h-full w-full"
                            dangerouslySetInnerHTML={createMarkup(blog.content)}
                          ></p>
                        </Tooltip>
                      </>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm font-semibold text-primaryColor">
                        {blog.blogCategory.name}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {new Date(blog.createdAt).toLocaleDateString('en-GB')}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLoading ? (
                      <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {new Date(blog.updatedAt).toLocaleDateString('en-GB')}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      className="text-indigo-600 hover:text-indigo-900 p-2 rounded-lg bg-indigo-200 inline-block"
                      to={`/admin/blog/view/${blog.id}`}
                    >
                      <FaRegEye className="h-5 w-5" />
                    </Link>
                    <Link
                      className="text-orange-600 hover:text-orange-900 p-2 rounded-lg bg-orange-200 inline-block"
                      to={`/admin/blog/edit/${blog.id}`}
                    >
                      <BsPencilSquare className="h-5 w-5" />
                    </Link>
                    <span
                      className="text-red-600 hover:text-red-900 p-2 rounded-lg bg-red-200 inline-block"
                      onClick={() => handleDeleteBlog(blog.id)}
                    >
                      <FaTrashAlt className="h-5 w-5" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default CarManagement;
