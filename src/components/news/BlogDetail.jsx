import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fileURL } from '../utils/UtilsFunction';
import { getAllBlogs, getBlogById } from '../utils/BlogApi';
import { createMarkup } from '../utils/UtilsFunction';
import { Link } from 'react-router-dom';
import { datas as categories } from '../data/NewsNavbarData';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [similarBlogs, setSimilarBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(id);
        setBlog(res.data.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    const fetchRelatedAndSimilarBlogs = async () => {
      try {
        const res = await getAllBlogs(1, 100);
        const allBlogs = res.data.data.result;
        if (!blog) return;

        const currentCategoryId = blog.blogCategory.id;
        const uniqueCategoryIds = new Set();
        const similarBlogsFiltered = [];

        allBlogs.forEach((b) => {
          if (b.blogCategory.id !== currentCategoryId) {
            uniqueCategoryIds.add(b.blogCategory.id);
          } else if (b.id !== blog.id) {
            similarBlogsFiltered.push(b);
          }
        });

        const filteredIds = [...uniqueCategoryIds];
        const relatedBlogsFiltered = filteredIds.map((catId) => {
          return allBlogs.find((b) => b.blogCategory.id === catId);
        });

        const filteredRelatedBlogs = relatedBlogsFiltered.filter(
          (b) => b.id !== blog.id
        );

        setRelatedBlogs(filteredRelatedBlogs.slice(0, 4));
        setSimilarBlogs(similarBlogsFiltered.slice(0, 3));
      } catch (error) {
        console.error('Error fetching related blogs:', error);
      }
    };

    if (blog) {
      fetchRelatedAndSimilarBlogs();
    }
  }, [blog]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-electrification_1 pb-12">
        <div className="container mx-auto px-[20px] pt-[150px]">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 h-min bg-white py-8 px-4">
              <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
              <div className="flex items-center text-gray-500 my-4">
                <span className="flex items-center mr-2 text-base">
                  {new Date(blog.createdAt).toLocaleDateString('en-GB')}
                </span>
                <span className="flex items-center mx-8">
                  {categories.map(
                    (category) =>
                      category.id === blog.blogCategory.id && (
                        <Link key={category.id} to={category.route}>
                          <span className="text-primaryColor text-lg font-bold uppercase">
                            {category.name}
                          </span>
                        </Link>
                      )
                  )}
                </span>
                <span className="flex items-center ml-auto">
                  <a href="">
                    <img
                      src="/imgs/information/philosophy/icon-facebook.png"
                      alt=""
                      className="ml-[10px]"
                    />
                  </a>
                  {/* Zalo Icon */}
                  <a href="#!">
                    <div className="flex items-center justify-center w-[70px] h-[20px] bg-blue-700 rounded-[3px] ml-[10px]">
                      <img
                        className="w-[18px] h-[18px] b-radius-[4px] mr-[4px]"
                        src="/imgs/information/philosophy/Logo-Zalo-Arc.webp"
                        alt=""
                      />
                      <div className="text-[11px] text-center text-white">
                        Chia sẻ
                      </div>
                    </div>
                  </a>
                  {/* FB Icon */}
                </span>
              </div>

              <hr className="mb-4" />
              <hr className="mb-4" />
              <div
                className="prose"
                dangerouslySetInnerHTML={createMarkup(blog.content)}
              />
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-1 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    to={`/news/blog/${relatedBlog.id}`}
                    key={relatedBlog.id}
                  >
                    <div className="bg-white shadow-md overflow-hidden group">
                      <div className="flex items-center justify-center h-[30px] w-[145px] bg-primaryColor text-xs font-semibold mb-3 text-white px-[10px] py-[5px]">
                        {relatedBlog.blogCategory.name}
                      </div>
                      <div className="p-4 flex flex-col justify-between">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primaryColor transition-colors duration-300">
                          {relatedBlog.title}
                        </h3>
                        <div className="text-gray-500 text-xs">
                          {new Date(relatedBlog.createdAt).toLocaleDateString(
                            'en-GB'
                          )}
                        </div>
                      </div>
                      <hr className="mx-4 " />
                      <div className="overflow-hidden mx-4 mt-4 mb-8">
                        <img
                          src={`${fileURL}/${relatedBlog.image}`}
                          alt={relatedBlog.title}
                          className="w-full h-48  object-cover"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-4">Tin liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarBlogs.map((similarBlog) => (
                <Link to={`/news/blog/${similarBlog.id}`} key={similarBlog.id}>
                  <div className="bg-white shadow-md overflow-hidded group">
                    <div className="overflow-hidden">
                      <img
                        src={`${fileURL}/${similarBlog.image}`}
                        alt={similarBlog.title}
                        className="w-full h-[168px] max-h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110 "
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between ">
                      <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-primaryColor transition-colors duration-300">
                        {similarBlog.title}
                      </h3>
                      <div className="flex text-gray-500 mt-4">
                        <span className="flex items-center mt-0.5 mr-2 text-xs">
                          {new Date(similarBlog.createdAt).toLocaleDateString(
                            'en-GB'
                          )}
                        </span>
                        <span className="text-primaryColor font-semibold text-base">
                          {similarBlog.blogCategory.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
