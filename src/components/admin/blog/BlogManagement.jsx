import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../../utils/BlogApi';
import { createMarkup, fileURL } from '../../utils/UtilsFunction';
import { BsPencilSquare } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const BlogManagement = () => {
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
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [blogCategory, setBlogCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(10);
  const [blogGroup, setBlogGroup] = useState({
    'SẢN PHẨM': 0,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getAllBlogs(1, 100);
        const reversedBlogs = [...res.data.data.result].reverse();
        setBlogs(reversedBlogs);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!blogCategory) {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(
        (blog) => blog.blogCategory.name === blogCategory
      );
      setFilteredBlogs(filtered);
    }
    setCurrentPage(1);
  });

  const calculateTotalPages = (filteredBlogs, blogsPerPage, blogs) => {
    const totalBlogs =
      filteredBlogs.length > 0 ? filteredBlogs.length : blogs.length;
    return Math.ceil(totalBlogs / blogsPerPage);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  console.log(blogs);
  return (
    <section>
      <div className="container">
        <div className="flex justify-between">
          <p className="text-mainTitleColor text-mainTitle uppercase">
            Quản lý bài viết
          </p>

          <Link
            to={'/admin/blog/add'}
            type="submit"
            className="uppercase px-5 py-2 flex items-center rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            thêm bài viết
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-10 gap-5">
          <div className="col-span-2 p-5 h-max bg-white h-10 w-full shadow-md rounded-2xl">
            <p className="text-xs">
              <span className="uppercase ml-1 text-sm">sản phẩm</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-white rounded-2xl h-max py-5 shadow-md ml-[64px] mr-[8px] shadow-md overflow-x-auto">
        <p className="text-mainTitleColor font-semibold text-[18px] px-5">
          Chi tiết bài viết
        </p>

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
                      <Tooltip id={`blog-image-tooltip-${blog.id}`} place="top">
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
                        className="text-sm text-gray-900 w-full italic"
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
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <BsPencilSquare className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FaTrashAlt className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BlogManagement;
