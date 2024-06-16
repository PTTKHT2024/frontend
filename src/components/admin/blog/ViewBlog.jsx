import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBlogById } from '../../utils/BlogApi';
import { createMarkup, fileURL } from '../../utils/UtilsFunction';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ViewBlog = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(params.id);
        if (res.status === 200) {
          setBlog(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, []);

  console.log(blog);
  return (
    <section className="container">
      <Link
        className="fixed top-[100px] left-[90px] block h-max p-2 bg-[#f5f5f5] shadow hover:bg-slate-600 hover:text-white rounded-lg"
        to="/admin/blog"
      >
        <FaLongArrowAltLeft className="h-5 w-5" />
      </Link>

      <div className="grid grid-cols-12 bg-white rounded-xl p-5 gap-6 shadow-md">
        <div className="col-span-3 flex items-center">
          {isLoading ? (
            <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
          ) : (
            <img
              src={`${fileURL}/${blog.image}`}
              alt="image-blog"
              className="rounded-md border-tabNavigate object-cover object-center"
            />
          )}
        </div>

        <div className="col-span-9 flex justify-center flex-col">
          <p className="text-mainTitleColor text-mainTitle">
            {isLoading ? (
              <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
            ) : (
              blog.title
            )}
          </p>
          <p className="text-primaryColor text-lg font-medium mt-2">
            {isLoading ? (
              <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
            ) : (
              blog.blogCategory.name
            )}
          </p>

          <Link
            type="submit"
            className="uppercase px-5 py-2 rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow mt-4 inline-block w-max"
          >
            Cập nhập
          </Link>
        </div>
      </div>

      <div
        className="mt-5 rounded-xl bg-white p-5 shadow-md"
        dangerouslySetInnerHTML={createMarkup(blog.content)}
      ></div>
    </section>
  );
};

export default ViewBlog;
