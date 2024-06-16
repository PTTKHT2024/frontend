import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteBlogById, getAllBlogs } from '../../utils/BlogApi';
import { createMarkup, fileURL } from '../../utils/UtilsFunction';
import { BsPencilSquare } from 'react-icons/bs';
import { FaRegEye, FaTrashAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import Paginator from '../../common/Paginator';
import Toast from '../../common/Toast';

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
  const [blogGroup, setBlogGroup] = useState([
    {
      id: 1,
      name: 'SẢN PHẨM',
      count: 0,
    },
    {
      id: 2,
      name: 'KHUYẾN MÃI',
      count: 0,
    },
    {
      id: 3,
      name: 'XÃ HỘI',
      count: 0,
    },
    {
      id: 4,
      name: 'THÔNG TIN KHÁC',
      count: 0,
    },
    {
      id: 5,
      name: 'THÔNG TIN BỔ TRỢ',
      count: 0,
    },
  ]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

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

  useEffect(() => {
    fetchBlogs();
  }, []);

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
  }, [blogCategory, blogs]);

  useEffect(() => {
    const newBlogGroup = blogGroup.map((group) => ({
      ...group,
      count: blogs.filter((blog) => blog.blogCategory.name === group.name)
        .length,
    }));
    setBlogGroup(newBlogGroup);
  }, [blogs]);

  const handleChangeCategory = (e) => {
    const category = e.currentTarget.dataset.category;
    if (category == blogCategory) {
      setBlogCategory('');
    } else {
      setBlogCategory(category);
    }
    console.log('blog category', blogCategory);
  };

  const handleDeleteBlog = async (id) => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    try {
      const res = await deleteBlogById(id, accessToken);
      if (res.status == 200) {
        fetchBlogs();
        setMessage('Xóa bài thành công');
        setStatus('success');
      }
    } catch (err) {
      setMessage('Xóa bài thất bại');
      setStatus('danger');
    }

    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, 5000);
  };

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  const calculateTotalPages = (filteredBlogs, blogsPerPage, blogs) => {
    const totalBlogs =
      filteredBlogs.length > 0 ? filteredBlogs.length : blogs.length;
    return Math.ceil(totalBlogs / blogsPerPage);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <section>
      <Toast
        handleCloseToast={handleCloseToast}
        message={message}
        status={status}
      />

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
          {blogGroup.map((blog, index) => (
            <div
              className={`col-span-2 p-5 h-max w-full shadow-md rounded-2xl hover:bg-[#17A2B8]/[.7] group cursor-pointer ${
                blogCategory == blog.name ? 'bg-[#17A2B8]/[.7]' : 'bg-white'
              }`}
              key={blog.id}
              data-category={blog.name}
              onClick={handleChangeCategory}
            >
              <div className="flex items-center justify-evenly">
                <p
                  className={`text-sm uppercase font-medium group-hover:text-white ${
                    blogCategory == blog.name
                      ? 'text-white'
                      : 'text-mainTitleColor'
                  }`}
                >
                  {blog.name}
                </p>
                {isLoading ? (
                  <span className="block h-5 w-5 animate-spin border-[3px] border-t-[#000]/[.7] rounded-full"></span>
                ) : (
                  <p className="text-3xl text-primaryColor font-medium">
                    {blog.count}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 bg-white rounded-2xl h-max py-5 shadow-md ml-[64px] mr-[8px]">
        <div className="flex items-center">
          <p className="text-mainTitleColor font-semibold text-[18px] px-5 mr-8">
            Chi tiết bài viết
          </p>
          <Paginator
            currentPage={currentPage}
            totalPages={calculateTotalPages(filteredBlogs, blogsPerPage, blogs)}
            onPageChange={setCurrentPage}
          />
        </div>

        <div className="overflow-x-auto">
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
        </div>
      </div>
    </section>
  );
};

export default BlogManagement;
