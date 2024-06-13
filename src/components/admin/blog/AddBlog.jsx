import React, { useState } from 'react';

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    image: '',
    blogCategory: '',
  });

  return (
    <section className="">
      <p className="text-mainTitleColor text-mainTitle uppercase">
        thêm bài viết
      </p>

      <div className="bg-white mt-5 p-5 grid grid-cols-12 gap-5 rounded-2xl">
        <div className="col-span-3">
          <div className="mb-4">
            <label className="text-base block font-medium" htmlFor="title">
              Tiêu đề bài viết:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="block outline-0 px-5 py-2 w-full mt-3 rounded-3xl border border-[1px] border-[#3A3A3A]/[.4]"
              placeholder="Tiêu đề"
            />
          </div>

          <div className="mb-4">
            <label className="text-base block font-medium">Phân loại:</label>
            <input
              id="title"
              className="block outline-0 px-5 py-2 w-full mt-3 rounded-3xl border border-[1px] border-[#3A3A3A]/[.4]"
              placeholder="Tiêu đề"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBlog;
