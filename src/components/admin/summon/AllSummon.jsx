import React, { useEffect, useState } from 'react';
import { createMarkup, fileURL } from '../../utils/UtilsFunction';
import { BsPencilSquare } from 'react-icons/bs';
import { FaRegEye, FaTrashAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import Paginator from '../../common/Paginator';
import { Link } from 'react-router-dom';
import { getAllSummons } from '../../utils/SummonApi';

const AllSummon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [summons, setSummons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [summonsPerPage, setSummonsPerPage] = useState(10);

  const fetchSummons = async () => {
    setIsLoading(true);
    try {
      const res = await getAllSummons(1, 1000);
      const reversedSummon = [...res.data.data.result].reverse();
      setSummons(reversedSummon);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSummons();
  }, []);

  const calculateTotalPages = (filteredBlogs, blogsPerPage, blogs) => {
    const totalBlogs =
      filteredBlogs.length > 0 ? filteredBlogs.length : blogs.length;
    return Math.ceil(totalBlogs / blogsPerPage);
  };

  const indexOfLastBlog = currentPage * summonsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - summonsPerPage;
  const currentSummons = summons.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <section>
      <div className="flex items-center">
        <p className="text-mainTitleColor font-semibold text-[18px] mr-8">
          Chi tiết dịch vụ kiểm tra & triệu hồi
        </p>
        <Paginator
          currentPage={currentPage}
          totalPages={calculateTotalPages(summons, summonsPerPage, summons)}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="divide-y divide-gray-200 mt-5 w-full">
          <thead className="bg-[#f5f5f5]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Tiêu đề
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nội dung
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Ngày tạo
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentSummons.map((blog) => (
              <tr key={blog.id}>
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
                    <p className="text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString('en-GB')}
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
      </div>
    </section>
  );
};

export default AllSummon;
