import React, { useState, useEffect, useRef } from 'react';
import { blogCategoryDatas as options } from '../../data/admin/blogCategoryData';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  createMarkup,
  fileUploadRegex,
  uploadFile,
} from '../../utils/UtilsFunction';
import { createANewBlog, getBlogById } from '../../utils/BlogApi';
import Toast from '../../common/Toast';
import { convertFromHTML, convertToHTML } from 'draft-convert';

const EditBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    content: null,
    image: null,
    blogCategory: {
      name: 'Chọn',
    },
  });
  const [isSelected, setIsSelected] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const dropdownRef = useRef(null);
  const [review, setReview] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const params = useParams();

  useEffect(() => {
    let html = convertToHTML({
      entityToHTML: (entity) => {
        if (entity.type === 'IMAGE') {
          const { src } = entity.data;
          return `<div style="text-align: center;"><img src="${src}" alt="Image" style="display: inline-block; max-width: 100%; margin: 10px 0;" /></div>`;
        }
      },
    })(editorState.getCurrentContent());
    setBlog({ ...blog, content: html });
  }, [editorState]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(params.id);
        if (res.status === 200) {
          setBlog(res.data.data);
          const contentState = convertFromHTML({
            htmlToEntity: (nodeName, node, createEntity) => {
              if (nodeName === 'img') {
                return createEntity('IMAGE', 'IMMUTABLE', { src: node.src });
              }
            },
          })(blog.content);
          setEditorState(EditorState.createWithContent(contentState));
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
      }
    };

    fetchBlog();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSelected(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleInput = () => {
    setIsSelected(!isSelected);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBlog((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleChangeBlogCategory = (e) => {
    const selectedCategory = e.target.innerText;
    setBlog((prevInput) => ({
      ...prevInput,
      blogCategory: {
        name: selectedCategory,
      },
    }));
    setIsSelected(false);
  };

  const handleChangeImage = (e) => {
    const selectedImage = e.target.files[0];
    setBlog({ ...blog, image: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);

    if (!blog.blogCategory.name || !blog.content) {
      setMessage('Chưa nhập đầy đủ thông tin.');
      setStatus('danger');

      setTimeout(() => {
        handleCloseToast();
      }, 3000);
      return;
    }

    try {
      const saveImage = await uploadFile(blog.image, data.access_token);
      const saveFileName = saveImage.data.match(fileUploadRegex);
      const tmpBlog = {
        ...blog,
        image: saveFileName[0],
      };

      const res = await createANewBlog(tmpBlog, data.access_token);
      if (res.status == 201) {
        setMessage('Đăng bài thành công.');
        setStatus('success');
        setBlog({
          title: '',
          content: null,
          image: null,
          blogCategory: {
            name: '',
          },
        });
      }

      console.log(res);
    } catch (err) {
      setMessage('Đăng bài thất bại.');
      setStatus('danger');
      console.log(err);
    }

    setTimeout(() => {
      handleCloseToast();
    }, 5000);
  };

  return (
    <section className="container">
      <Link
        className="fixed top-[100px] left-[90px] block h-max p-2 bg-[#f5f5f5] shadow hover:bg-slate-600 hover:text-white rounded-lg"
        to="/admin/blog"
      >
        <FaLongArrowAltLeft className="h-5 w-5" />
      </Link>

      <Toast
        message={message}
        status={status}
        handleCloseToast={handleCloseToast}
      />

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <p className="text-mainTitleColor text-mainTitle uppercase">
            Cập nhập
          </p>

          <button
            type="submit"
            className="uppercase px-5 py-2 rounded-md bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider shadow-slate-400 shadow"
          >
            lưu
          </button>
        </div>

        <div className="bg-white mt-5 p-5 grid grid-cols-12 gap-10 rounded-2xl shadow-md">
          <div className="col-span-4">
            <div className="">
              <label className="text-base block font-medium" htmlFor="title">
                Tiêu đề bài viết <span className="text-primaryColor">*</span>
              </label>
              <input
                type="text"
                name="title"
                required
                id="title"
                className="block outline-0 px-5 py-2 text-mainTitleColor w-full mt-3 rounded-3xl border border-[1px] border-[#3A3A3A]/[.4]"
                placeholder="Tiêu đề"
                value={blog.title}
                onChange={handleInput}
              />
            </div>

            <div className="mt-8 ">
              <label className="text-base block font-medium" htmlFor="category">
                Phân loại <span className="text-primaryColor">*</span>
              </label>

              <div className="relative border-[1px] border-[#3A3A3A]/[.4] px-5 py-2 mt-3 z-20 rounded-3xl">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={handleToggleInput}
                >
                  <p
                    className={
                      blog.blogCategory.name === 'Chọn' ? 'text-gray-400' : ''
                    }
                  >
                    {blog.blogCategory.name}
                  </p>
                  <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black/[.4]" />
                </div>

                {isSelected && (
                  <ul
                    ref={dropdownRef}
                    className="py-1.5 border border-[#3A3A3A]/[.4] absolute right-0 left-0 top-[0] bg-white rounded-3xl overflow-hidden"
                  >
                    {options.map((option, index) => (
                      <li
                        key={index}
                        className={`text-base text-mainTitleColor p-1.5 hover:bg-[#5897FB] hover:text-white uppercase ${
                          option === blog.blogCategory.name
                            ? 'bg-[#5897FB] text-white'
                            : ''
                        }`}
                        onClick={(e) => {
                          handleChangeBlogCategory(e);
                          handleToggleInput();
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="">
              <label className="text-base block font-medium" htmlFor="image">
                Tiêu đề bài viết <span className="text-primaryColor">*</span>
              </label>
              <input
                type="file"
                required
                name="image"
                id="image"
                className="block outline-0 px-5 py-2 text-mainTitleColor w-full mt-3 rounded-3xl border border-[1px] border-[#3A3A3A]/[.4]"
                placeholder="Tiêu đề"
                onChange={handleChangeImage}
              />
            </div>

            <div className="mt-8">
              <div className="flex h-full items-end">
                <p
                  className={`px-6 py-3 text-white text-sm font-medium rounded-md text-center cursor-pointer transition-all duration-75 mr-5 shadow-slate-400 shadow ${
                    !review
                      ? 'bg-[#17A2B8] hover:bg-[#17A2B8]/[.8]'
                      : 'bg-[#6C757D] hover:bg-[#6C757D]/[.8]'
                  }`}
                  onClick={() => setReview(false)}
                >
                  Nội dung
                </p>
                <p
                  className={`px-6 py-3 text-white text-sm font-medium rounded-md text-center cursor-pointer transition-all duration-75 shadow-slate-400 shadow ${
                    review
                      ? 'bg-[#17A2B8] hover:bg-[#17A2B8]/[.8]'
                      : 'bg-[#6C757D] hover:bg-[#6C757D]/[.8]'
                  }`}
                  onClick={() => setReview(true)}
                >
                  Xem trước
                </p>
              </div>
            </div>
          </div>

          {imagePreview && (
            <div className="col-span-4">
              <img
                src={imagePreview}
                alt="image-preview"
                className="w-full object-cover object-center rounded-md border-tabNavigate"
              />
            </div>
          )}
        </div>

        {/* edit nội dung */}
        <div className="bg-white w-full mt-5 p-5 rounded-2xl relative shadow-md">
          {review ? (
            <div
              className="text-base text-[15px]"
              dangerouslySetInnerHTML={createMarkup(blog.content)}
            ></div>
          ) : (
            <div className="h-max w-full border py-3 px-4 rounded-xl">
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                placeholder="Nội dung"
                toolbarClassName="border-tabNavigate/[.4] rounded-sm sticky top-[10px] bg-[#f5f5f5] z-10"
                editorClassName=""
              />
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default EditBlog;
